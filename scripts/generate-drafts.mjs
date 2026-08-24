import {readFile,writeFile,mkdir,access} from "node:fs/promises";
import {constants} from "node:fs";
import {renderArticle} from "./lib/article-template.mjs";

const count=Math.max(1,Math.min(10,Number(process.argv.find(v=>v.startsWith("--count="))?.split("=")[1]??3)));
const force=process.argv.includes("--force");
const publish=process.argv.includes("--publish");
const seed=JSON.parse(await readFile("automation/keyword-queue.json","utf8"));
let matrix=[];try{matrix=JSON.parse(await readFile("work/keyword-matrix.json","utf8"))}catch{}
const queue=[...seed,...matrix];
const exists=async path=>{try{await access(path,constants.F_OK);return true}catch{return false}};
const selected=[];
for(const item of queue){if(force||!await exists(`content/articles/${item.slug}.md`)){selected.push(item);if(selected.length===count)break}}
if(!selected.length){console.log("No unpublished keyword briefs remain.");process.exit(0)}
await mkdir("content/articles",{recursive:true});
for(const item of selected){
  await writeFile(`content/articles/${item.slug}.md`,renderArticle(item,{generatedDraft:!publish}));
  console.log(`${publish?"Prepared":"Drafted"} ${item.slug}`);
}
