import { writeFile } from "node:fs/promises";
import { mkdir } from "node:fs/promises";

const count = Math.min(Number(process.argv.find(v=>v.startsWith("--count="))?.split("=")[1] ?? 1000), 5000);
const clusters = ["账户与身份","充值与转账","交易基础","提现与记录","账户安全","费用与规则"];
const intents = ["是什么","为什么失败","完整检查清单","常见误区","更新后有什么变化","出现异常怎么办","新手第一步","操作前必须确认什么"];
const plan = Array.from({length:count},(_,index)=>({
  id:`brief-${String(index+1).padStart(4,"0")}`,
  status:"draft",
  cluster:clusters[index%clusters.length],
  searchIntent:intents[Math.floor(index/clusters.length)%intents.length],
  workingTitle:`${clusters[index%clusters.length]}：${intents[Math.floor(index/clusters.length)%intents.length]}（选题 ${index+1}）`,
  requiredChecks:["适用地区","官方来源","核验日期","风险提示","原创截图","利益披露"],
  publishGate:"human-review-required"
}));
await mkdir("work",{recursive:true});
await writeFile("work/generated-content-plan.json",JSON.stringify({generatedAt:new Date().toISOString(),count,plan},null,2));
console.log(`Created ${count} review-required content briefs in work/generated-content-plan.json`);
