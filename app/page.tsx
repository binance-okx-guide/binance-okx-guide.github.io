import Link from "next/link";
import { articles, topics } from "@/data/content";

export default function Home() {
  const hot = articles.slice(0, 12);
  const searches = articles.filter((_,i)=>[0,1,2,6,7,12,18,19,24,30].includes(i));
  const websiteLd={"@context":"https://schema.org","@type":"WebSite",name:"币圈老陈",url:"/",description:"2026币安、欧易注册下载、买USDT和出金教程",author:{"@type":"Person",name:"老陈"}};
  return <main>
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(websiteLd)}} />
    <header className="site-header">
      <Link className="brand" href="/"><span className="brand-mark">陈</span><span>币圈老陈</span></Link>
      <nav aria-label="主导航"><a href="#binance">币安教程</a><a href="#okx">欧易教程</a><a href="#buy-usdt">买USDT</a><a href="#cash-out">USDT出金</a></nav>
    </header>
    <div className="keyword-bar">2026最新教程：币安注册 · 币安下载 · 欧易注册 · 欧易下载 · 买USDT · USDT出金</div>

    <section className="hero">
      <div className="hero-main">
        <span className="eyebrow">老陈的币圈新手实操笔记</span>
        <h1>2026币安、欧易<br/>注册下载与买币教程</h1>
        <p>我是在币圈折腾多年的老陈。这里不讲高深概念，只写新手最常卡住的币安注册、APP下载、欧易KYC、买USDT、手续费和出金问题。</p>
        <div className="hero-actions"><Link className="primary-button" href="/articles/binance-register">看币安注册教程 →</Link><Link className="plain-button" href="/articles/okx-register">看欧易注册教程 →</Link></div>
      </div>
      <aside className="oldhand-card"><strong>老陈先说三句</strong><p>① 不懂的功能先别点</p><p>② 第一次转账先小额测试</p><p>③ 规则变得快，以官方当前页面为准</p><small>本站是个人经验分享，不代表任何交易所。</small></aside>
    </section>

    <section className="search-box"><h2>大家都在搜</h2><div>{searches.map(a=><Link key={a.slug} href={`/articles/${a.slug}`}>{a.keywords[0]}</Link>)}</div></section>

    <section className="section" id="topics"><header className="section-title"><h2>币安、欧易、买币出金完整教程</h2><p>按你现在遇到的问题直接找，不用从头学。</p></header><div className="topic-grid">{topics.map(topic=><section className="topic-card" id={topic.slug} key={topic.slug}><div className="topic-card-head"><span>{topic.icon}</span><div><h2>{topic.name}</h2><p>{topic.description}</p></div></div><ul>{articles.filter(a=>a.topic===topic.slug).map(a=><li key={a.slug}><Link href={`/articles/${a.slug}`}>{a.title}</Link></li>)}</ul><Link className="more-link" href={`/topics/${topic.slug}`}>查看全部{topic.shortName} →</Link></section>)}</div></section>

    <section className="section hot-section"><header className="section-title"><h2>新手最近常看的12篇</h2><p>都是直接解决注册、下载、买币和出金问题的文章。</p></header><div className="hot-list">{hot.map((a,i)=><Link href={`/articles/${a.slug}`} key={a.slug}><span>{String(i+1).padStart(2,"0")}</span><div><b>{a.title}</b><p>{a.description}</p></div></Link>)}</div></section>

    <section className="about-oldchen"><div><span className="portrait">陈</span><h2>我是老陈，一个普通币圈老鸟</h2></div><p>踩过坑，也帮身边不少新手处理过注册、验证、转账不到账这些问题。我把搜索时最难找、客服话术里最绕的地方，尽量用人话写出来。页面会按平台界面和规则变化持续更新。</p></section>
    <footer className="footer"><div className="brand"><span className="brand-mark">陈</span><span>币圈老陈</span></div><p>个人经验分享，不是机构，不代客操作，不承诺收益。数字资产存在风险，平台服务范围和规则可能变化，请以官方当前页面为准。</p><small>© 2026 币圈老陈</small></footer>
  </main>;
}
