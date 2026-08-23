import {readdir,readFile} from "node:fs/promises";
const files=(await readdir("content/articles")).filter(x=>x.endsWith(".md"));
const errors=[];const titles=new Map();
for(const file of files){const text=await readFile(`content/articles/${file}`,"utf8");const title=text.match(/^title:\s*"([^"]+)"/m)?.[1];const description=text.match(/^description:\s*"([^"]+)"/m)?.[1];const slug=text.match(/^slug:\s*"([^"]+)"/m)?.[1];const body=text.split("---").slice(2).join("---").trim();
 if(!title||title.length<12||title.length>64)errors.push(`${file}: title length/format`);
 if(!description||description.length<20||description.length>120)errors.push(`${file}: description length/format`);
 if(!slug||!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug))errors.push(`${file}: slug must be stable ASCII kebab-case`);
 if((body.match(/^## /gm)??[]).length<3)errors.push(`${file}: fewer than 3 H2 sections`);
 if(body.length<650)errors.push(`${file}: body is too short (${body.length})`);
 if(/保证收益|稳赚|无风险赚钱/.test(body))errors.push(`${file}: prohibited promise language`);
 if(title){if(titles.has(title))errors.push(`${file}: duplicate title with ${titles.get(title)}`);titles.set(title,file)}
}
if(errors.length){console.error(errors.join("\n"));process.exit(1)}
console.log(`Audited ${files.length} articles: all checks passed.`);
