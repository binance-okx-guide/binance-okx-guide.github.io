import {mkdir,writeFile} from "node:fs/promises";

const platforms=[
  {id:"binance",name:"币安",topic:"binance",topicName:"币安注册与下载"},
  {id:"okx",name:"欧易OKX",topic:"okx",topicName:"欧易OKX注册与下载"},
  {id:"gate",name:"Gate",topic:"security",topicName:"账户安全与避坑"},
];
const intents=[
  {id:"register",word:"注册",desc:"从入口、验证码、推荐码、身份认证到安全设置的完整步骤"},
  {id:"download",word:"APP下载",desc:"从安装入口、应用核对、系统提示到登录安全的完整步骤"},
  {id:"invite",word:"邀请码",desc:"邀请码填写、绑定状态、实际权益和常见误区"},
  {id:"kyc",word:"KYC认证",desc:"证件、姓名、人脸识别、审核时间和失败排查"},
  {id:"buy",word:"买USDT",desc:"商家筛选、实名付款、订单申诉和到账核对"},
  {id:"cashout",word:"USDT出金",desc:"收款设置、商家筛选、第三方代付和确认放币"},
  {id:"fee",word:"手续费",desc:"现货费率、Maker/Taker、点差和真实成本计算"},
  {id:"security",word:"账号安全",desc:"真假入口、2FA、异常设备、风控和申诉处理"},
];
const modifiers=[
  {id:"2026-guide",label:"2026最新教程"},{id:"mainland-user",label:"大陆用户怎么操作"},{id:"iphone",label:"苹果手机教程"},{id:"android",label:"安卓手机教程"},{id:"failed",label:"失败怎么办"},{id:"beginner",label:"新手完整流程"},{id:"verification-code",label:"收不到验证码"},{id:"how-long",label:"审核多久到账"},{id:"safe",label:"安全吗"},{id:"common-errors",label:"常见报错"},
];
const audiences=[
  {id:"new-user",label:"新用户"},{id:"mainland",label:"大陆用户"},{id:"iphone-user",label:"iPhone用户"},{id:"android-user",label:"安卓用户"},{id:"error-user",label:"遇到报错的人"},
];
const briefs=[];
for(const platform of platforms)for(const intent of intents)for(const mod of modifiers)for(const audience of audiences){
  const keyword=`${platform.name}${intent.word}${mod.label}`;
  const longTail=`${audience.label}${keyword}`;
  briefs.push({slug:`${platform.id}-${intent.id}-${mod.id}-${audience.id}`,title:`${longTail}：步骤、报错和避坑`,description:`${audience.label}处理${platform.name}${intent.word}${mod.label}，讲清${intent.desc}。`,topic:platform.topic,topicName:platform.topicName,primaryKeyword:longTail,keywords:[longTail,keyword,`${platform.name}${intent.word}`],intent:intent.id,platform:platform.name,readingMinutes:12});
}
await mkdir("work",{recursive:true});await writeFile("work/keyword-matrix.json",JSON.stringify(briefs,null,2));
console.log(`Created ${briefs.length} long-tail briefs in work/keyword-matrix.json`);
