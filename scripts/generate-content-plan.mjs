import {writeFile,mkdir} from "node:fs/promises";
const count=Math.min(Number(process.argv.find(v=>v.startsWith("--count="))?.split("=")[1]??1000),5000);
const platforms=["币安","欧易OKX","Bybit","Gate.io"];
const actions=["注册","APP下载","邀请码","KYC认证","买USDT","充值","提现","出金","手续费","账号找回"];
const modifiers=["2026最新教程","中国用户怎么操作","苹果手机教程","安卓手机教程","失败怎么办","收不到验证码","需要准备什么","多久到账","安全吗","常见问题"];
const audiences=["新手","iPhone用户","安卓用户","第一次买币的人","遇到报错的人"];
const plan=Array.from({length:count},(_,i)=>{const platform=platforms[i%platforms.length],action=actions[Math.floor(i/platforms.length)%actions.length],modifier=modifiers[Math.floor(i/(platforms.length*actions.length))%modifiers.length],audience=audiences[Math.floor(i/(platforms.length*actions.length*modifiers.length))%audiences.length];return{id:`brief-${String(i+1).padStart(4,"0")}`,status:"draft",primaryKeyword:`${platform}${action}`,longTailKeyword:`${platform}${action}${modifier}`,audience,searchIntent:"解决具体操作问题",workingTitle:`${modifier}：${platform}${action}完整步骤`,slugSuggestion:`${platform}-${action}-${modifier}`.toLowerCase(),requiredSections:["先说结论","具体步骤","老陈踩坑提醒","常见问题","相关文章"],requiredChecks:["官方当前规则","适用地区","界面更新时间","原创截图","利益披露"],publishGate:"human-review-required"}});
await mkdir("work",{recursive:true});await writeFile("work/generated-content-plan.json",JSON.stringify({generatedAt:new Date().toISOString(),count,plan},null,2));console.log(`Created ${count} long-tail content briefs in work/generated-content-plan.json`);
