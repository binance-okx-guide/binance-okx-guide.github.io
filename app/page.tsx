import Link from "next/link";
import { articles, topics } from "@/data/content";

export default function Home() {
  const featured = articles.slice(0, 6);

  return (
    <main>
      <header className="site-header">
        <Link className="brand" href="/" aria-label="明链指南首页">
          <span className="brand-mark">明</span>
          <span>明链指南</span>
        </Link>
        <nav aria-label="主导航">
          <a href="#topics">主题指南</a>
          <a href="#latest">最新内容</a>
          <a href="#method">编辑标准</a>
        </nav>
        <Link className="header-cta" href="/topics/security">先看安全指南</Link>
      </header>

      <section className="hero">
        <div className="eyebrow"><span /> 面向中文用户的数字资产基础教育</div>
        <h1>每一步都讲清楚，<br /><em>每个风险都标出来。</em></h1>
        <p className="hero-copy">
          从账户准备、身份核验到资金安全，我们用可复核的步骤、清晰的截图规范和持续更新记录，帮你先理解，再决定。
        </p>
        <div className="hero-actions">
          <a className="primary-button" href="#topics">浏览六大主题 <span>↘</span></a>
          <a className="text-link" href="#method">我们的内容如何审核 <span>→</span></a>
        </div>
        <div className="hero-metrics" aria-label="内容规模">
          <div><strong>36</strong><span>首发核心指南</span></div>
          <div><strong>6</strong><span>完整主题集群</span></div>
          <div><strong>100%</strong><span>标注核验日期</span></div>
        </div>
        <div className="orbit" aria-hidden="true">
          <div className="orbit-ring ring-one" />
          <div className="orbit-ring ring-two" />
          <span className="orbit-core">明</span>
          <span className="orbit-label label-one">身份核验</span>
          <span className="orbit-label label-two">资金安全</span>
          <span className="orbit-label label-three">费用透明</span>
        </div>
      </section>

      <section className="trust-strip" aria-label="内容原则">
        <span>不承诺收益</span><i />
        <span>不隐藏风险</span><i />
        <span>不使用模糊链接</span><i />
        <span>不替代专业意见</span>
      </section>

      <section className="section" id="topics">
        <div className="section-heading">
          <div><span className="section-index">01</span><p>主题地图</p></div>
          <h2>从第一次了解，<br />到建立自己的安全流程。</h2>
        </div>
        <div className="topic-grid">
          {topics.map((topic, index) => (
            <Link className="topic-card" href={`/topics/${topic.slug}`} key={topic.slug}>
              <span className="topic-number">0{index + 1}</span>
              <div className={`topic-icon tone-${index + 1}`} aria-hidden="true">{topic.icon}</div>
              <h3>{topic.name}</h3>
              <p>{topic.description}</p>
              <footer><span>{topic.articleCount} 篇指南</span><b>↗</b></footer>
            </Link>
          ))}
        </div>
      </section>

      <section className="section latest-section" id="latest">
        <div className="section-heading compact">
          <div><span className="section-index">02</span><p>编辑精选</p></div>
          <h2>先读这六篇。</h2>
        </div>
        <div className="article-list">
          {featured.map((article, index) => (
            <Link className="article-row" href={`/articles/${article.slug}`} key={article.slug}>
              <span className="article-index">{String(index + 1).padStart(2, "0")}</span>
              <div>
                <span className="article-topic">{article.topicName}</span>
                <h3>{article.title}</h3>
              </div>
              <p>{article.description}</p>
              <span className="article-arrow">→</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="method" id="method">
        <div className="method-copy">
          <span className="section-index light">03</span>
          <p className="method-kicker">编辑方法</p>
          <h2>数量可以扩大，<br />标准不能稀释。</h2>
          <p>自动化负责发现问题、建立提纲和安排更新；编辑负责验证事实、补充截图、检查链接和决定是否发布。</p>
        </div>
        <ol className="method-steps">
          <li><span>01</span><div><strong>问题入库</strong><p>从真实搜索需求生成内容简报，不直接生成上线文章。</p></div></li>
          <li><span>02</span><div><strong>事实核验</strong><p>逐项检查适用地区、更新时间、费用与风险提示。</p></div></li>
          <li><span>03</span><div><strong>人工发布</strong><p>通过质量门槛后排期发布，并进入定期复审队列。</p></div></li>
        </ol>
      </section>

      <footer className="footer">
        <div className="brand footer-brand"><span className="brand-mark">明</span><span>明链指南</span></div>
        <p>清楚地理解，谨慎地行动。</p>
        <div><Link href="/topics/security">安全指南</Link><a href="#method">编辑标准</a></div>
        <small>© 2026 明链指南 · 教育内容，不构成投资建议</small>
      </footer>
    </main>
  );
}
