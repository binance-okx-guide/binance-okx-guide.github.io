import type { Metadata } from "next";
import Link from "next/link";
import { articles, getTopic, topics } from "@/data/content";

export function generateStaticParams(){ return topics.map(topic=>({slug:topic.slug})); }
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{
  const {slug}=await params; const topic=getTopic(slug); return { title:topic?.name ?? "主题指南", description:topic?.description };
}
export default async function TopicPage({params}:{params:Promise<{slug:string}>}){
  const {slug}=await params; const topic=getTopic(slug) ?? topics[0]; const list=articles.filter(a=>a.topic===topic.slug);
  return <main>
    <header className="sub-header"><Link className="brand" href="/"><span className="brand-mark">明</span><span>明链指南</span></Link><span className="breadcrumb"><Link href="/">首页</Link> / {topic.name}</span></header>
    <section className="topic-hero"><span className="section-index">主题指南 · {topic.icon}</span><h1>{topic.name}</h1><p>{topic.description}本专题按照“先理解、再核验、后行动”的顺序编排。</p>
      <div className="topic-list">{list.map((article,index)=><Link className="article-row" href={`/articles/${article.slug}`} key={article.slug}><span className="article-index">{String(index+1).padStart(2,"0")}</span><div><h3>{article.title}</h3></div><span className="article-arrow">→</span><p>{article.description}</p></Link>)}</div>
    </section>
  </main>;
}
