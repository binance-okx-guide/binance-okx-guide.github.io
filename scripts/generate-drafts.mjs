import {readFile,writeFile,mkdir,access,readdir} from "node:fs/promises";
import {constants} from "node:fs";
import {renderArticle} from "./lib/article-template.mjs";

const count=Math.max(1,Math.min(10,Number(process.argv.find(v=>v.startsWith("--count="))?.split("=")[1]??3)));
const force=process.argv.includes("--force");
const publish=process.argv.includes("--publish");
const seed=JSON.parse(await readFile("automation/keyword-queue.json","utf8"));
let matrix=[];try{matrix=JSON.parse(await readFile("work/keyword-matrix.json","utf8"))}catch{}
const queue=[...seed,...matrix];
const exists=async path=>{try{await access(path,constants.F_OK);return true}catch{return false}};
const normalizedLines=text=>new Set(text.split("---").slice(2).join("---").trim().split(/\n+/).map(line=>line.replace(/<[^>]+>/g,"").replace(/[A-Za-z0-9_-]+/g,"#").trim()).filter(line=>line.length>28));
const similarity=(linesA,linesB)=>[...linesA].filter(line=>linesB.has(line)).length/new Set([...linesA,...linesB]).size;
const existingFiles=(await readdir("content/articles")).filter(file=>file.endsWith(".md"));
const acceptedLines=[];
for(const file of existingFiles)acceptedLines.push([file,normalizedLines(await readFile(`content/articles/${file}`,"utf8"))]);
const selected=[];
for(const item of queue){
  if(!force&&await exists(`content/articles/${item.slug}.md`))continue;
  const article=renderArticle(item,{generatedDraft:!publish});
  const lines=normalizedLines(article);
  const conflict=acceptedLines.map(([file,otherLines])=>[file,similarity(lines,otherLines)]).find(([,score])=>score>0.85);
  if(conflict){console.log(`Skipped ${item.slug}: too similar to ${conflict[0]} (${conflict[1].toFixed(2)})`);continue}
  selected.push([item,article]);
  acceptedLines.push([`${item.slug}.md`,lines]);
  if(selected.length===count)break;
}
if(!selected.length){console.log("No unpublished keyword briefs remain.");process.exit(0)}
await mkdir("content/articles",{recursive:true});
for(const [item,article] of selected){
  await writeFile(`content/articles/${item.slug}.md`,article);
  console.log(`${publish?"Prepared":"Drafted"} ${item.slug}`);
}
