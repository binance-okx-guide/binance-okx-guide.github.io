import {readFile,writeFile,mkdir,access} from "node:fs/promises";
import {constants} from "node:fs";

const count=Math.max(1,Math.min(10,Number(process.argv.find(v=>v.startsWith("--count="))?.split("=")[1]??3)));
const queue=JSON.parse(await readFile("automation/keyword-queue.json","utf8"));
const exists=async path=>{try{await access(path,constants.F_OK);return true}catch{return false}};
const selected=[];
for(const item of queue){if(!await exists(`content/articles/${item.slug}.md`)){selected.push(item);if(selected.length===count)break}}
if(!selected.length){console.log("No unpublished keyword briefs remain.");process.exit(0)}

const steps={
 register:["先确认所在地规则和官方入口","准备长期使用的邮箱或手机号","完成验证码与密码设置","核对推荐码显示状态","按真实资料完成身份认证","开启验证器和防钓鱼码"],
 download:["从平台官网找到下载入口","核对应用名称、开发者和完整域名","按手机系统选择安装方式","处理地区、签名或安全提示","登录前再次确认版本与入口"],
 invite:["在注册页寻找推荐码入口","填写前核对优惠显示","注册完成后检查推荐关系","区分手续费折扣与活动奖励","对老账号补填说法保持谨慎"],
 kyc:["核对姓名、证件和账号地区","使用清晰原始证件照片","在光线稳定环境完成人脸识别","保存失败提示和提交时间","避免短时间内重复提交"],
 buy:["进入C2C或快捷买币区域","筛选成交量和完成率稳定的商家","核对商家实名与平台订单","使用本人实名账户付款","付款后只在平台订单内确认","等待资产实际到账再继续"],
 cashout:["设置本人实名收款方式","筛选经营时间和订单记录稳定的商家","拒绝第三方代付与异常备注","亲自打开银行或支付APP核对到账","确认款项真实可用后再放币","保存订单、聊天和收款凭证"],
 fee:["打开平台当前费率页面","确认产品和账户等级","区分Maker与Taker","加入点差和网络费","用成交记录复算真实成本"],
 security:["独立打开官方入口","逐字核对完整域名","检查异常跳转和浏览器警告","不要在陌生页面填写验证码","开启2FA与防钓鱼设置"],
 recovery:["先保护邮箱和手机号","从官方帮助中心进入恢复流程","准备身份资料与历史账号信息","移除异常设备和API权限","恢复后立即重设全部安全项"]
};
const errors={register:[["收不到验证码","检查垃圾邮件、号码区号、拦截规则和发送频率"],["页面提示地区受限","停止操作，核对平台当前服务范围，不要虚构所在地"],["注册后无法继续","保存完整报错和时间，通过官方客服入口提交"]],download:[["搜索不到APP","不要下载群聊安装包，回到平台官网核对入口"],["安装包被系统拦截","检查来源和签名；无法确认时不要强行安装"],["登录后界面不同","核对是否下载了地区版、仿冒版或旧版本"]],buy:[["付款后未放币","不要取消已付款订单，保留凭证并在平台内申诉"],["商家要求第三方付款","停止订单，不使用他人账户代付"],["到账数量不符","核对报价、限额、订单金额和平台显示"]],cashout:[["来款人姓名不一致","不要放币，立即在订单内沟通并申请平台介入"],["只收到短信通知","亲自登录收款APP确认余额和交易明细"],["对方催促提前放币","拒绝操作；平台外承诺不能替代真实到账"]],fee:[["宣传费率和扣费不同","检查账户等级、订单角色、交易对与活动期限"],["小额交易成本过高","把点差、最低限额和链上费一起计算"],["返佣没有显示","以注册页和账户当前显示为准，不依据截图承诺"]]};
const fallbackErrors=[["页面名称和教程不同","平台会改版，可按功能名称寻找，不要只认按钮位置"],["操作被风控限制","保存提示并从官方入口申诉，不找陌生人代解"],["客服私聊索要验证码","立即停止；真正客服不会索要密码、验证码或私钥"]];
const y=v=>`"${String(v).replaceAll("\\","\\\\").replaceAll('"','\\"')}"`;
const today=new Date().toISOString().slice(0,10);

function article(item){const actionSteps=steps[item.intent]??steps.security;const issueRows=errors[item.intent]??fallbackErrors;return `---
title: ${y(item.title)}
description: ${y(item.description)}
date: ${today}T09:00:00+08:00
lastmod: ${today}T09:00:00+08:00
slug: ${y(item.slug)}
topic: ${y(item.topic)}
topicName: ${y(item.topicName)}
readingMinutes: 9
reviewRequired: true
generatedDraft: true
keywords:
${item.keywords.map(k=>`  - ${y(k)}`).join("\n")}
---

<div class="quick" id="结论"><strong>老陈先说结论</strong><p>${item.description} 最重要的不是追求一步完成，而是确认入口、账号实名和每一次资金操作都能自己复核。平台页面和地区规则会变化，本文发布前必须再对照官方当前页面。</p></div>

很多新手搜索“${item.primaryKeyword}”，真正卡住的通常不是概念，而是不知道该点哪里、看到的页面为什么不同、失败后还能不能继续。这篇按实际操作顺序拆开讲，先给准备清单，再说步骤、报错和容易踩的坑。

## ${item.primaryKeyword}适合谁看？ {#适合谁}

- 第一次使用${item.platform}，担心进错网站或下错APP的人；
- 已经开始操作，但卡在验证码、认证、付款或到账环节的人；
- 想先知道完整流程和风险，再决定是否继续的人；
- 需要复核手续费、推荐关系或资金记录的人。

## 操作前准备清单 {#准备}

1. 本人长期使用、可以正常收验证码的邮箱和手机号；
2. 与账户资料一致的本人证件、付款或收款账户；
3. 可以独立访问的官方帮助中心和官方客服入口；
4. 截图保存报错、订单号、时间和交易记录的习惯；
5. 第一次涉及转账时用于测试的小额资金。

## ${item.primaryKeyword}具体步骤 {#步骤}

${actionSteps.map((s,i)=>`### 第${i+1}步：${s}\n\n先看清页面当前显示的账号、地区、金额或网络，再点击下一步。若页面提示与本文不同，优先相信官方当前页面，并把完整提示截图保存。`).join("\n\n")}

## 常见报错与处理方法 {#报错}

| 遇到的问题 | 老陈建议先做什么 |
|---|---|
${issueRows.map(([a,b])=>`| ${a} | ${b} |`).join("\n")}

不要为了赶时间连续点击、反复提交或更换虚假资料。很多临时限制正是由频繁操作触发，先记录现状通常比继续尝试更有效。

## 老陈踩坑提醒 {#避坑}

1. **搜索排名靠前不等于官网。** 广告和仿冒站可能使用非常相似的标题，必须看完整域名。
2. **不要把验证码交给“客服”。** 密码、验证码、助记词和私钥都不应通过聊天工具发送。
3. **实名关系要一致。** 账号、证件、付款人与收款人的不一致会增加审核和资金风险。
4. **转账先小额测试。** 地址正确但网络错误，同样可能导致资金难以找回。
5. **不要相信永久不变的优惠。** 邀请返佣、费率和活动期限以账户当前显示为准。

## 发布前核验表 {#核验}

- [ ] 已核对${item.platform}当前官方入口与服务范围；
- [ ] 已核对APP或网页按钮名称和操作顺序；
- [ ] 已核对费率、奖励、邀请码等数字，没有使用过期宣传；
- [ ] 已补充原创截图，并遮挡姓名、账号、订单号等隐私；
- [ ] 已检查相关文章内链和所有外部链接；
- [ ] 已披露推荐链接或邀请码带来的利益关系。

## ${item.primaryKeyword}常见问题 {#常见问题}

### 页面和教程截图不一样怎么办？

平台会持续调整界面。先按功能名称寻找，不要只依赖按钮颜色和位置；找不到时从官方帮助中心核对最新版说明。

### 操作失败后可以反复提交吗？

不建议。先保存完整报错、账号状态和操作时间，核对资料后再处理。连续提交可能延长审核或触发额外限制。

### 可以让群里的“老师”代操作吗？

不可以。任何代登录、代认证或索要验证码的行为都会扩大账户被盗和身份信息泄露风险。

### 本文中的规则会一直有效吗？

不会保证。地区政策、平台规则、费率和APP界面都可能变化，实际操作必须以当天官方页面为准。

<div class="notice"><strong>编辑提醒：</strong>这是自动生成的待审核草稿。未完成官方来源核对、原创截图和利益披露前，不应合并发布。</div>
`}

await mkdir("content/articles",{recursive:true});
for(const item of selected){await writeFile(`content/articles/${item.slug}.md`,article(item));console.log(`Drafted ${item.slug}`)}
