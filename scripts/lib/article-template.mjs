export const referrals={
  binance:{name:"币安",code:"BTCETH178",url:"https://www.bsmkweb.cc/join?ref=BTCETH178"},
  okx:{name:"欧易 OKX",code:"BTCETH8",url:"https://www.hnrvqbxkptm.org/join/BTCETH8"},
  gate:{name:"Gate",code:"BTCETHBI",url:"https://www.gatewebsite.net/share/BTCETHBI"},
};

const stepSets={
  register:["确认所在地规则并准备长期使用的邮箱、手机号","从推广入口进入注册页，逐字核对跳转后的域名和页面信息","填写邮箱或手机号并完成验证码验证","设置独立强密码，核对推荐码是否显示","使用本人真实资料完成身份认证","开启验证器、防钓鱼码和提币安全设置"],
  download:["先从平台当前网页寻找下载入口","核对应用名称、开发者、安装来源和跳转域名","按 iPhone 或安卓系统选择对应安装方式","处理地区、系统签名或安全提醒，不强行安装来源不明的包","安装后先核对版本和登录页面","登录后立即完成基础安全设置"],
  invite:["在注册页面找到推荐码或邀请码位置","填写代码前核对页面当前展示的权益","完成注册后在账户或推荐页面确认绑定状态","区分交易手续费优惠、返佣和限时活动","老账号不要相信付费补绑或内部修改说法","保存注册页显示，后续以账户实际状态为准"],
  kyc:["核对账号地区、姓名顺序和证件类型","使用清晰、完整、未经编辑的证件照片","在光线稳定且网络正常的环境完成人脸识别","提交后记录时间，不要短时间重复操作","失败时按错误提示逐项修改","只从平台内客服入口提交补充资料"],
  buy:["进入 C2C 或平台当前买币区域","按金额和付款方式筛选广告","检查商家成交量、完成率、经营时间和付款要求","确认订单后使用本人实名账户付款","付款完成只在平台订单内点击已付款","等待 USDT 实际进入资金账户后再进行下一步"],
  cashout:["设置本人实名的银行卡或支付账户","按金额、限额和成交记录筛选商家","下单后核对来款人姓名，拒绝第三方代付","亲自登录银行或支付 APP 查看真实余额和明细","确认款项可用后才在平台内放币","保存订单、聊天、到账记录和必要凭证"],
  fee:["打开账户当前费率或订单页面","确认交易产品、币对和账户等级","区分 Maker、Taker、C2C 点差和链上费用","把平台币抵扣或推荐优惠单独计算","用一笔已成交订单复算实际扣费","比较总成本，不只看宣传中的单一费率"],
  security:["停止在可疑页面继续输入","独立打开平台入口并核对完整域名","检查邮箱、登录设备、API 和提币地址","修改密码并移除陌生设备","联系平台内官方客服提交记录","保存报错、邮件、订单号和时间线"],
  recovery:["先保护绑定邮箱、手机号和常用设备","从平台帮助中心进入账户恢复","准备实名资料、历史设备和账户信息","移除异常登录、API 与提币地址","完成验证后重设密码和 2FA","恢复后检查资产、订单和安全日志"],
};

const issueSets={
  register:[["收不到验证码","检查垃圾邮件、区号、拦截规则和发送频率，稍后再试。"],["提示所在地区不可用","停止注册并核对平台当天服务范围，不要虚构所在地。"],["推荐码没有显示","提交前返回上一步核对；注册完成后通常不能承诺一定补绑。"],["认证入口找不到","平台可能改版，按“身份认证/Verification”功能名查找。"]],
  download:[["应用商店搜不到 APP","不要转向群聊安装包，回到平台网页核对当前下载方式。"],["安卓提示风险","先检查来源、签名和跳转域名，无法确认就不要强行安装。"],["安装后页面不一样","核对是否为旧版、地区版或仿冒应用。"],["更新后无法登录","保存版本号和报错，通过平台内帮助入口处理。"]],
  invite:[["忘记填写邀请码","不要向陌生人付费补绑，以账户当前可操作项为准。"],["代码填了但没有优惠","检查代码、适用产品、活动期限和账户地区。"],["宣传比例不一致","不依据截图承诺，以注册页和账户实际展示为准。"],["对方索要账号密码","立即停止，邀请码不需要交出登录凭据。"]],
  buy:[["付款后商家未放币","不要取消已付款订单，保留凭证并在订单内申诉。"],["商家要求第三方付款","停止订单，不使用他人账户代付。"],["对方要求平台外聊天","拒绝转移，重要沟通保留在订单内。"],["到账数量不符","核对广告报价、限额、订单金额和实际到账。"]],
  cashout:[["来款人姓名不一致","不要放币，立即在订单中说明并申请平台介入。"],["只有短信到账提醒","亲自登录收款 APP 查看余额和交易明细。"],["对方催促提前放币","拒绝；平台外承诺不能替代真实到账。"],["银行卡出现异常","暂停继续交易，整理订单和资金证明，按银行要求处理。"]],
  fee:[["实际扣费高于预期","复核账户等级、Maker/Taker、币对、点差和活动期限。"],["小额交易成本很高","把最低限额、点差和链上固定费用一起计算。"],["返佣没有显示","以账户当前记录为准，不把推广文案当到账凭证。"],["提现费突然变化","网络拥堵和平台政策会变，提交前重新核对。"]],
};

function esc(value){return String(value).replaceAll("&","&amp;").replaceAll('"',"&quot;").replaceAll("<","&lt;").replaceAll(">","&gt;")}
export function yaml(value){return `"${String(value).replaceAll("\\","\\\\").replaceAll('"','\\"')}"`}

function referralKeys(item){
  const text=`${item.platform??""} ${item.title??""} ${item.primaryKeyword??""}`.toLowerCase();
  if(text.includes("gate"))return ["gate"];
  if(text.includes("欧易")||text.includes("okx"))return ["okx"];
  if(text.includes("币安")||text.includes("binance"))return ["binance"];
  if(["buy","cashout","fee"].includes(item.intent))return ["binance","okx"];
  return [];
}

export function referralBox(item,position="top"){
  const keys=referralKeys(item);if(!keys.length)return "";
  const buttons=keys.map(key=>{const r=referrals[key];return `<a class="referral-button" href="${esc(r.url)}" target="_blank" rel="sponsored nofollow noopener">${r.name}推广入口（码：${r.code}）</a>`}).join("\n");
  return `<aside class="referral-box referral-${position}"><strong>老陈使用的推广入口</strong><div class="referral-buttons">${buttons}</div><small>利益披露：通过上面的链接注册，我可能获得平台提供的推广奖励，你的实际权益以注册页显示为准。这些是推广落地页，不等于官网域名；打开后请再次核对最终跳转地址、地区规则和页面信息。</small></aside>`;
}

function inferIntent(item){
  if(item.intent)return item.intent;
  const text=`${item.title} ${item.keywords?.join(" ")??""}`;
  if(/注册/.test(text))return "register";if(/下载|APP/.test(text))return "download";if(/邀请码|推荐码|返佣/.test(text))return "invite";if(/KYC|认证/.test(text))return "kyc";if(/买|充值/.test(text))return "buy";if(/提现|出金|卖USDT|冻卡/.test(text))return "cashout";if(/手续费|费率|价差|Maker|Taker/.test(text))return "fee";if(/找回|换手机/.test(text))return "recovery";return "security";
}

function inferPlatform(item){
  if(item.platform)return item.platform;
  const text=`${item.title} ${item.keywords?.join(" ")??""}`;
  if(/币安|Binance/i.test(text))return "币安";if(/欧易|OKX/i.test(text))return "欧易 OKX";if(/Gate/i.test(text))return "Gate";return "交易平台";
}

function detailedSteps(steps,keyword){return steps.map((step,index)=>`### 第 ${index+1} 步：${step}\n\n操作时先看清页面里的账号、地区、金额、网络或收款人，再点下一步。搜索“${keyword}”的人最容易在这里照着旧截图硬找按钮，但平台经常改版，应该认功能名称和完整提示。遇到不同页面先截图，不要连续提交，也不要让群里的陌生人远程代操作。`).join("\n\n")}

export function renderArticle(raw,{generatedDraft=false}={}){
  const item={...raw,intent:inferIntent(raw),platform:inferPlatform(raw)};
  const keyword=item.primaryKeyword??item.keywords?.[0]??item.title;
  const steps=stepSets[item.intent]??stepSets.security;
  const issues=issueSets[item.intent]??[["页面和教程不同","平台可能改版，按功能名称寻找并核对当前说明。"],["操作被风控限制","保存完整提示，从平台内客服入口申诉。"],["有人私聊代处理","不要提供密码、验证码、私钥或远程控制权限。"],["规则说法互相矛盾","以账户当天展示和平台当前帮助页为准。"]];
  const today=item.updated??new Date().toISOString().slice(0,10);
  const draftFront=generatedDraft?"reviewRequired: true\ngeneratedDraft: true\n":"";
  return `---
title: ${yaml(item.title)}
description: ${yaml(item.description)}
date: ${today}T09:00:00+08:00
lastmod: ${today}T09:00:00+08:00
slug: ${yaml(item.slug)}
topic: ${yaml(item.topic)}
topicName: ${yaml(item.topicName)}
readingMinutes: ${item.readingMinutes??12}
${draftFront}keywords:
${item.keywords.map(k=>`  - ${yaml(k)}`).join("\n")}
---

<div class="quick" id="结论"><strong>老陈先说结论</strong><p>${item.description} 真正要紧的是入口、实名、页面提示和资金记录都由自己复核。界面、地区服务和活动规则随时可能变，动手前再看一遍平台当天页面。</p></div>

${referralBox(item,"top")}

很多人搜“${keyword}”，不是想听一堆币圈概念，而是现在就卡在某个按钮、验证码或订单上。下面我按自己带新手时最常用的顺序讲：先准备什么、每一步看什么、失败怎么排查，最后再把容易损失资金的坑集中列出来。

> 本文是个人经验整理，不代表${item.platform}，也不构成投资建议。平台是否向你的所在地提供服务、需要什么资料、费率和活动权益，均以操作当天的页面为准。

## ${keyword}适合谁看？ {#适合谁}

- 第一次接触${item.platform}，担心进错页面、填错资料的人；
- 已经开始操作，但卡在验证码、认证、付款、收款或到账环节的人；
- 想先看完整流程和风险，再决定是否继续的人；
- 需要核对邀请码、手续费、网络或账户安全设置的人。

如果你只是看到别人发来一个链接，先不要急着输入手机号和验证码。先判断链接是什么性质，再看最终跳转页面；推广入口可以用，但它不应该被包装成“官网域名”。

## 操作前准备：先把这 7 项放在手边 {#准备}

1. 本人长期使用、能正常接收验证码的邮箱和手机号；
2. 与账户姓名一致的本人证件、付款账户或收款账户；
3. 独立保存的强密码，不和邮箱、其他交易平台共用；
4. 可以随时查看的订单号、交易记录和银行流水；
5. 用于首次测试的小额资金，别一上来就操作大额；
6. 能自己访问的平台帮助中心和平台内客服入口；
7. 截图保存完整报错的习惯，同时遮住姓名、证件号和订单隐私。

## ${keyword}完整步骤 {#步骤}

${detailedSteps(steps,keyword)}

${referralBox(item,"middle")}

## 页面怎么核对，才不容易进错站？ {#入口核对}

搜索结果里的标题、图标甚至页面样式都可以仿造，排名靠前也不等于真实。老陈通常看四件事：完整地址有没有异常拼写、页面是否发生多次跳转、浏览器有没有安全警告、平台内帮助页能不能找到同一功能。

推广链接本身只是一个带推荐参数的入口。打开后先检查最终落地页，再决定是否继续；如果页面要求下载陌生描述文件、关闭系统安全设置、提供短信验证码给“客服”，立即退出。验证码只填在自己确认过的页面里。

## 常见问题和报错怎么处理 {#报错}

| 你看到的情况 | 老陈建议先做什么 |
|---|---|
${issues.map(([a,b])=>`| ${a} | ${b} |`).join("\n")}

处理报错的原则是“保留现场，减少变量”。记录时间、设备、网络、版本和完整提示，一次只改一项。反复换网络、换资料、换设备并连续提交，往往会让后续申诉更难解释。

## 费用、邀请码和到账数字怎么核对？ {#费用}

不要只看一句“最高返佣”或一张旧截图。实际成本至少包括交易费、买卖价差、链上网络费，以及某些支付方式产生的额外成本。邀请码权益还会受账户地区、产品、等级和活动时间影响。

最稳妥的办法，是在提交订单前记录页面显示，交易后再用成交明细复算。假设买入价比市场价高 0.6%，交易费又是 0.1%，那么真实成本就不只是宣传中的 0.1%。同样，推荐码填写成功也不等于所有产品永久享受同一比例。

## 老陈踩过和见过的坑 {#避坑}

1. **把推广域名当官网记住。** 推广页可能更换域名，判断依据应该是最终页面和平台内核验，不是背一个入口。
2. **注册后才想起邀请码。** 提交前就检查推荐码和权益展示，不要事后花钱找人“补绑”。
3. **页面一报错就连续重试。** 频繁提交可能触发更多限制，先保留完整提示再排查。
4. **付款人与实名不一致。** C2C 买卖都应重视实名一致，第三方代付会显著增加争议风险。
5. **只看短信就提前放币。** 收款必须亲自进入银行或支付 APP 核对余额和明细。
6. **转账不核对网络。** 地址格式相似不代表网络相同，第一次一定小额测试。
7. **把密码、验证码交给“老师”。** 真正的客服不会索要密码、私钥、助记词，也不需要远程控制手机。

## 做完以后，用这张清单复查 {#核验}

- [ ] 最终页面、账号和所在地规则已经核对；
- [ ] 邮箱、手机号、证件和资金账户均为本人长期使用；
- [ ] 推荐码和权益以页面实际显示为准，没有依赖口头承诺；
- [ ] 涉及资金时已核对金额、网络、地址、姓名和到账状态；
- [ ] 已开启独立密码、2FA 和必要的防钓鱼设置；
- [ ] 报错、订单和资金记录已保存，隐私信息未发送给陌生人；
- [ ] 知道遇到争议时应留在平台订单和平台内客服渠道处理。

## ${keyword}常见问题 {#常见问题}

### 2026 年还能照这个流程操作吗？

核对逻辑可以沿用，但按钮位置、地区服务、证件要求、费率和活动会变化。本文会持续更新，真正提交前仍以当天页面为准。

### 为什么我看到的页面和教程截图不一样？

常见原因是 APP 版本、手机系统、账号地区或平台灰度更新不同。按功能名称寻找，不要只认颜色和按钮位置；涉及资金或身份资料时，看不懂就先停。

### 邀请码填了以后一定有返佣吗？

不能这样保证。要看注册页面是否接受、账户是否成功绑定、活动期限和适用产品。本文列出的代码是老陈的推广代码，可能给我带来推广收益。

### 能让别人代注册、代认证或代提现吗？

不建议。代操作会暴露身份资料、验证码和资金权限，也可能造成实名不一致。任何人索要密码、验证码、私钥或助记词，都应该拒绝。

### 操作失败后应该马上重复提交吗？

先不要。把完整报错、提交时间、设备和账号状态保存下来，逐项核对后再处理。涉及账户限制时，从平台内帮助中心进入申诉流程。

${referralBox(item,"bottom")}

<div class="notice"><strong>最后提醒：</strong>${generatedDraft?"这是自动生成的待审核草稿，合并前必须人工核对官方当前规则、补充原创截图并检查全部链接。":"这篇内容按新手真实搜索问题整理。平台规则与页面会变化；发现内容过期时，以平台当天页面为准。"}</div>
`;
}
