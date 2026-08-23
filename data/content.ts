export type Topic = { slug:string; name:string; shortName:string; icon:string; description:string; articleCount:number; checks:string[] };
export type Article = { slug:string; title:string; description:string; topic:string; topicName:string; updated:string; readingMinutes:number; keywords:string[] };

export const topics: Topic[] = [
  { slug:"binance", name:"币安注册与下载", shortName:"币安教程", icon:"币", description:"币安注册、APP下载、邀请码、KYC认证和常见报错。", articleCount:6, checks:["先确认币安当前是否向你的所在地提供服务","注册、下载和登录只走币安官方入口","身份资料必须真实且属于本人"] },
  { slug:"okx", name:"欧易OKX注册与下载", shortName:"欧易教程", icon:"欧", description:"欧易注册、OKX下载、身份认证、邀请码与新手使用问题。", articleCount:6, checks:["先核对欧易当前地区规则和官方域名","不要购买来路不明的成品账户","验证码、密码和助记词不要交给任何人"] },
  { slug:"buy-usdt", name:"买USDT与充值", shortName:"买币充值", icon:"买", description:"支付宝、银行卡买USDT，C2C下单、链上充值与不到账排查。", articleCount:6, checks:["付款前核对商家订单量、完成率和实名信息","不要在订单备注里写币、USDT等敏感词","第一次链上充值先小额测试网络和地址"] },
  { slug:"cash-out", name:"USDT出金与提现", shortName:"USDT出金", icon:"出", description:"C2C卖USDT、银行卡收款、防冻卡、提现不到账等实操问题。", articleCount:6, checks:["只收与平台实名一致账户打来的款项","不要接受第三方代付或诱导提前放币","大额或来源复杂的资金先咨询专业人士"] },
  { slug:"fees", name:"手续费与邀请码", shortName:"费率返佣", icon:"省", description:"币安和欧易手续费、邀请码返佣、挂单吃单与真实成本。", articleCount:6, checks:["邀请码能省多少以注册页实时显示为准","返佣不是投资收益，也不保证长期有效","比较交易费、点差和链上费的总成本"] },
  { slug:"security", name:"账户安全与避坑", shortName:"安全避坑", icon:"防", description:"钓鱼网站、谷歌验证器、风控冻结、转错网络和账户找回。", articleCount:6, checks:["开启验证器和防钓鱼码","每次登录前逐字核对完整域名","助记词、私钥和验证码绝不发给别人"] },
];

const blueprints: Record<string, Array<[string,string,string[]]>> = {
  binance:[
    ["2026币安注册教程：中国用户怎么注册Binance账号","从官网入口、邮箱验证到安全设置，讲清币安账号注册时最容易卡住的地方。",["币安注册","Binance注册","币安中国注册"]],
    ["币安APP怎么下载？iPhone和安卓下载方法","找不到币安App时怎么核对官方安装入口，分别说明苹果和安卓手机的注意事项。",["币安下载","币安APP下载","苹果怎么下载币安"]],
    ["币安邀请码怎么填？注册后还能补填吗","邀请码填写位置、什么时候生效，以及注册完成后没有邀请码怎么办。",["币安邀请码","币安推荐码","币安返佣"]],
    ["币安KYC认证失败怎么办？常见原因和解决方法","姓名、证件照片、人脸识别和地区信息出错时，按顺序排查。",["币安KYC","币安认证失败","币安身份认证"]],
    ["币安收不到验证码怎么办？邮箱和短信排查","注册或登录时验证码迟迟不来，先检查垃圾箱、号码格式、频率限制和网络。",["币安收不到验证码","币安短信验证码","币安邮箱验证码"]],
    ["币安登录不了怎么办？账号、网络和风控问题","密码正确仍无法登录时，区分登录入口、设备验证、账户锁定和地区提示。",["币安登录不了","币安无法登录","Binance登录"]],
  ],
  okx:[
    ["2026欧易注册教程：中国用户怎么注册OKX账号","从欧易官网入口到邮箱验证、安全设置，按新手实际操作顺序说明。",["欧易注册","OKX注册","欧易中国注册"]],
    ["欧易APP怎么下载？OKX苹果和安卓安装教程","iPhone搜不到欧易、安卓安装包怎么核对，避免下载到仿冒App。",["欧易下载","OKX下载","欧易APP下载"]],
    ["欧易邀请码在哪里填？推荐码和返佣说明","注册页面的邀请码入口、优惠展示和注册后能否补填，一次讲明白。",["欧易邀请码","OKX邀请码","欧易推荐码"]],
    ["欧易KYC认证要多久？失败原因怎么排查","证件、人脸、姓名和审核状态的常见问题，以及不要反复提交的情况。",["欧易KYC","OKX认证","欧易身份认证"]],
    ["欧易收不到验证码怎么办？邮箱短信解决办法","验证码延迟、被拦截、次数过多和设备异常的实用排查顺序。",["欧易收不到验证码","OKX验证码","欧易短信验证"]],
    ["欧易和OKX是什么关系？新手别下错APP","讲清中文名、英文名、官方入口和识别假网站的简单方法。",["欧易和OKX","OKX是什么","欧易官网"]],
  ],
  "buy-usdt":[
    ["支付宝怎么买USDT？C2C买币完整流程","从筛选商家、下单付款到确认到账，说明支付宝买USDT的关键步骤。",["支付宝买USDT","C2C买币","怎么买USDT"]],
    ["银行卡怎么买USDT？新手下单注意事项","银行卡买币怎么选商家、核对实名和保留凭证，哪些付款方式不要接受。",["银行卡买USDT","买USDT教程","C2C买U"]],
    ["币安怎么买USDT？C2C买币新手教程","币安C2C入口、商家筛选、付款和放币确认的实际操作顺序。",["币安买USDT","币安C2C","币安怎么买币"]],
    ["欧易怎么买USDT？OKX快捷买币教程","欧易C2C买USDT的下单流程、付款提醒和到账检查。",["欧易买USDT","OKX买币","欧易C2C"]],
    ["USDT充值选哪个网络？TRC20和ERC20区别","地址一样不代表网络一样，讲清TRC20、ERC20和其他网络怎么选。",["USDT充值网络","TRC20和ERC20","USDT充错网络"]],
    ["USDT充值不到账怎么办？交易哈希排查教程","从链上确认、充值网络、地址和Memo逐项找原因。",["USDT充值不到账","USDT未到账","充值交易哈希"]],
  ],
  "cash-out":[
    ["USDT怎么出金到银行卡？C2C卖币流程","从选择收款方式、筛选商家到确认到账放币，讲清基础出金步骤。",["USDT出金","USDT提现银行卡","C2C卖币"]],
    ["USDT出金怎么防冻卡？银行卡收款注意事项","第三方代付、异常备注、频繁流水等高风险信号，以及收款前的检查。",["USDT出金防冻卡","卖USDT冻卡","C2C防冻卡"]],
    ["支付宝可以卖USDT提现吗？出金风险说明","支付宝收款出金的常见做法、限制和为什么不能只图方便。",["支付宝卖USDT","USDT提现支付宝","支付宝出金"]],
    ["币安怎么提现人民币？C2C卖币新手教程","币安C2C卖USDT、设置收款方式和确认款项的操作重点。",["币安提现人民币","币安出金","币安卖USDT"]],
    ["欧易怎么提现到银行卡？OKX卖币流程","欧易C2C出金到银行卡时如何选单、收款和避免提前放币。",["欧易提现银行卡","OKX出金","欧易卖USDT"]],
    ["卖USDT银行卡被冻结怎么办？先做这几件事","发现只收不付、银行来电或账户冻结后，先整理哪些订单和资金证明。",["卖USDT银行卡冻结","出金冻卡怎么办","银行卡冻卡"]],
  ],
  fees:[
    ["币安手续费怎么算？现货费率和折扣说明","挂单、吃单、平台币抵扣和邀请返佣分别会怎样影响手续费。",["币安手续费","Binance手续费","币安费率"]],
    ["欧易手续费怎么算？OKX现货费率说明","用简单例子说明欧易挂单、吃单费率和等级变化。",["欧易手续费","OKX手续费","欧易费率"]],
    ["币安邀请码能省多少手续费？返佣规则说明","别只看宣传数字，注册前重点核对返佣比例、适用产品和显示状态。",["币安邀请码返佣","币安手续费优惠","币安推荐码"]],
    ["欧易邀请码有返佣吗？注册优惠怎么确认","欧易推荐码是否生效、优惠在哪里看，以及规则变化时怎么核对。",["欧易邀请码返佣","OKX手续费优惠","欧易推荐码"]],
    ["挂单和吃单是什么意思？Maker和Taker手续费区别","新手用得上的解释：为什么同一平台两种订单费率不同。",["挂单吃单","Maker Taker","现货手续费"]],
    ["买USDT为什么有价差？C2C真实成本怎么算","广告价格、付款方式、商家报价和交易手续费怎样组成实际成本。",["USDT价差","C2C手续费","买USDT成本"]],
  ],
  security:[
    ["币安官网哪个是真的？识别钓鱼网站的方法","从域名拼写、搜索广告、跳转页面和登录提示判断真假币安网站。",["币安官网真假","币安钓鱼网站","Binance官网"]],
    ["欧易官网怎么辨别真假？OKX防钓鱼指南","不要只看页面长得像不像，用域名、证书和官方渠道交叉核对。",["欧易官网真假","OKX钓鱼网站","欧易防骗"]],
    ["谷歌验证器换手机怎么办？2FA迁移教程","旧手机还在和已经丢失两种情况，分别说明验证器恢复思路。",["谷歌验证器换手机","2FA迁移","验证器丢失"]],
    ["币安风控冻结多久？账号被限制怎么处理","先区分登录限制、交易限制和提币限制，再准备官方申诉材料。",["币安风控冻结","币安账号限制","币安提币冻结"]],
    ["USDT转错网络能找回吗？先停止重复转账","转错链、转错地址和平台未支持网络是三类不同问题，处理方式也不同。",["USDT转错网络","USDT转错地址","USDT找回"]],
    ["交易所账号被盗怎么办？第一时间处理清单","按邮箱、登录设备、API、提币权限和客服工单的优先级止损。",["交易所账号被盗","币安账号被盗","欧易账号被盗"]],
  ],
};

export const articles: Article[] = topics.flatMap((topic, topicIndex) => blueprints[topic.slug].map(([title,description,keywords], index) => ({
  slug:keywords[0].toLowerCase().replaceAll(" ","-").replaceAll("/","-").replaceAll("币安","binance-").replaceAll("欧易","okx-").replaceAll("怎么","how-").replaceAll("教程","guide").replaceAll("邀请码","invite-code").replaceAll("手续费","fees").replaceAll("注册","register").replaceAll("下载","download").replaceAll("提现","withdraw").replaceAll("出金","cash-out").replaceAll("买","buy-").replaceAll("卖","sell-").replaceAll("银行卡","bank-card").replaceAll("支付宝","alipay").replaceAll("防冻卡","bank-freeze").replaceAll("真假","real-or-fake").replaceAll("官网","official-site").replaceAll("验证器","authenticator").replaceAll("换手机","new-phone").replaceAll("风控冻结","risk-control").replaceAll("转错网络","wrong-network").replaceAll("账号被盗","account-hacked").replaceAll("价差","spread").replaceAll("挂单吃单","maker-taker").replaceAll("返佣","rebate").replaceAll("费率","fee-rate").replaceAll("充值不到账","deposit-missing").replaceAll("充值网络","deposit-network").replaceAll("KYC","kyc").replaceAll("收不到验证码","verification-code-missing").replaceAll("登录不了","login-problem").replaceAll("和OKX","-and-okx").replaceAll("是什么","what-is").replaceAll("中国","china").replaceAll("C2C","c2c").replaceAll("USDT","usdt").replace(/-+/g,"-").replace(/^-|-$/g,"") || `${topic.slug}-${index+1}`,
  title, description, keywords, topic:topic.slug, topicName:topic.name,
  updated:`2026-08-${String(23 - ((topicIndex + index) % 12)).padStart(2,"0")}`,
  readingMinutes:5 + (index % 3),
})));

export function getArticle(slug:string){ return articles.find(a=>a.slug===slug); }
export function getTopic(slug:string){ return topics.find(t=>t.slug===slug); }
