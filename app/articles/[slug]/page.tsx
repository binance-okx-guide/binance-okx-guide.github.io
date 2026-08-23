import type { Metadata } from "next";
import Link from "next/link";
import { articles, getArticle, getTopic } from "@/data/content";

export function generateStaticParams(){ return articles.map(article=>({slug:article.slug})); }
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{
  const {slug}=await params; const article=getArticle(slug); if(!article) return {};
  return { title:article.title, description:article.description, alternates:{canonical:`/articles/${article.slug}`}, openGraph:{type:"article",title:article.title,description:article.description,modifiedTime:article.updated} };
}
export default async function ArticlePage({params}:{params:Promise<{slug:string}>}){
  const {slug}=await params; const article=getArticle(slug) ?? articles[0]; const topic=getTopic(article.topic)!; const related=articles.filter(a=>a.topic===article.topic&&a.slug!==article.slug).slice(0,3);
  const jsonLd={"@context":"https://schema.org","@type":"Article",headline:article.title,description:article.description,dateModified:article.updated,inLanguage:"zh-CN",author:{"@type":"Organization",name:"明链指南编辑部"},publisher:{"@type":"Organization",name:"明链指南"}};
  return <main>
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(jsonLd)}} />
    <header className="sub-header"><Link className="brand" href="/"><span className="brand-mark">明</span><span>明链指南</span></Link><span className="breadcrumb"><Link href="/">首页</Link> / <Link href={`/topics/${topic.slug}`}>{topic.name}</Link></span></header>
    <article className="article-shell"><header className="article-header"><span className="section-index">{article.topicName}</span><h1>{article.title}</h1><p className="article-lead">{article.description}</p><div className="article-meta"><span>更新于 {article.updated}</span><span>阅读约 {article.readingMinutes} 分钟</span><span>编辑部核验</span></div></header>
      <div className="article-body"><aside className="toc" aria-label="文章目录"><strong>本文目录</strong><br/><a href="#understand">先理解</a><br/><a href="#check">操作前核对</a><br/><a href="#risk">风险提示</a></aside>
        <div className="article-content"><p>这篇指南的目标不是催促你完成操作，而是把关键概念、核对步骤和可能出错的位置放在同一页。不同地区、平台与时间的规则可能不同，实际操作前应以适用于你的官方信息为准。</p>
          <h2 id="understand">先理解问题的边界</h2><p>{article.description}任何涉及资金、账户和身份信息的操作都具有不可逆或恢复成本较高的特点。先确认自己理解每一个字段和结果，再进入下一步。</p>
          <h2 id="check">操作前核对清单</h2><ul>{topic.checks.map(item=><li key={item}>{item}</li>)}</ul><div className="notice"><strong>核验提醒：</strong>不要根据陌生人的私信、群聊截图或搜索广告中的承诺作决定。请从独立入口核对完整域名、适用地区和最新规则。</div>
          <h2 id="risk">风险与更新说明</h2><p>数字资产价格与规则变化较快，网络转账通常不可撤销。本文仅用于基础教育，不构成投资、法律或税务建议。若页面信息与官方规则冲突，应停止操作并以官方规则为准。</p>
        </div>
      </div>
      <section className="related"><h2>同主题继续阅读</h2><div className="related-grid">{related.map(item=><Link href={`/articles/${item.slug}`} key={item.slug}>{item.title} →</Link>)}</div></section>
    </article>
  </main>;
}
