import type { Metadata } from "next";
import Link from "next/link";
import { articles,getArticle,getTopic } from "@/data/content";
export function generateStaticParams(){return articles.map(a=>({slug:a.slug}))}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{const {slug}=await params;const a=getArticle(slug);if(!a)return{};return{title:a.title,description:a.description,keywords:a.keywords,alternates:{canonical:`/articles/${a.slug}`},openGraph:{type:"article",title:a.title,description:a.description,modifiedTime:a.updated}}}
export default async function ArticlePage({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const a=getArticle(slug)??articles[0];const topic=getTopic(a.topic)!;const related=articles.filter(x=>x.topic===a.topic&&x.slug!==a.slug).slice(0,5);const faq=[{q:`${a.keywords[0]}现在还能用吗？`,a:"平台规则和地区服务范围会变化，请以你操作当日的官方页面提示为准。本文会持续检查界面和常见问题。"},{q:"操作失败应该反复提交吗？",a:"先别反复点。保存报错截图，核对账号、网络、证件或收款信息，再通过官方客服入口处理。"},{q:"可以让别人代操作吗？",a:"不建议。账号、验证码、身份资料、助记词和私钥都不应该交给陌生人。"}];const jsonLd={"@context":"https://schema.org","@graph":[{"@type":"Article",headline:a.title,description:a.description,dateModified:a.updated,inLanguage:"zh-CN",author:{"@type":"Person",name:"老陈"},publisher:{"@type":"Person",name:"老陈"}},{"@type":"FAQPage",mainEntity:faq.map(x=>({"@type":"Question",name:x.q,acceptedAnswer:{"@type":"Answer",text:x.a}}))},{"@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,name:"首页",item:"/"},{"@type":"ListItem",position:2,name:topic.name,item:`/topics/${topic.slug}`},{"@type":"ListItem",position:3,name:a.title}]}]};return <main>
  <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(jsonLd)}}/>
  <header className="sub-header"><Link className="brand" href="/"><span className="brand-mark">陈</span><span>币圈老陈</span></Link><span className="breadcrumb"><Link href="/">首页</Link> › <Link href={`/topics/${topic.slug}`}>{topic.name}</Link></span></header>
  <article className="article-shell"><header className="article-header"><span className="article-label">{a.topicName}</span><h1>{a.title}</h1><p className="article-lead">{a.description}</p><div className="article-meta"><span>老陈</span><span>更新：{a.updated}</span><span>约 {a.readingMinutes} 分钟</span></div></header>
  <div className="article-layout"><aside className="toc"><strong>本文目录</strong><a href="#answer">先说结论</a><a href="#steps">操作步骤</a><a href="#pitfalls">老陈踩坑提醒</a><a href="#faq">常见问题</a></aside><div className="article-content">
    <div className="quick-answer" id="answer"><strong>先说结论</strong><p>{a.description} 别急着点下一步，先确认你访问的是官方入口，而且当前规则适用于你的所在地。</p></div>
    <p>这篇是我按新手真实操作顺序整理的。平台界面经常改，但核心核对逻辑没怎么变：入口要对、实名要一致、涉及资金先小额测试，遇到报错别盲目重复提交。</p>
    <h2 id="steps">{a.keywords[0]}：具体怎么操作</h2><ol className="steps">{topic.checks.map((item,i)=><li key={item}><span>{i+1}</span><div><strong>{item}</strong><p>做到这一步后先停一下，检查页面显示、账号信息和下一步会产生的结果，再继续。</p></div></li>)}</ol>
    <h2 id="pitfalls">老陈踩坑提醒</h2><ul><li>从搜索结果进入时，先看完整域名。排在第一位的不一定就是官网。</li><li>不要相信私聊里的“客服”“内部通道”和代认证服务。</li><li>验证码只填在官方页面，任何人索要都不给。</li><li>涉及转账，第一次一定小额测试；链上转账通常不能撤销。</li></ul>
    <div className="notice"><strong>规则提醒：</strong>不同地区、账户状态和日期看到的页面可能不同。如果本文截图或文字与官方当前页面冲突，立即停止，以官方提示为准。</div>
    <h2 id="faq">{a.keywords[0]}常见问题</h2>{faq.map(x=><section className="faq" key={x.q}><h3>{x.q}</h3><p>{x.a}</p></section>)}
  </div></div>
  <section className="related"><h2>你可能还在找</h2><div className="related-grid">{related.map(x=><Link href={`/articles/${x.slug}`} key={x.slug}>{x.title} →</Link>)}</div></section></article>
  <footer className="footer compact-footer"><p>个人经验分享，不代表任何平台，不构成投资、法律或税务建议。</p></footer>
 </main>}
