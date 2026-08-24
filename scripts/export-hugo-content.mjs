import {mkdir,writeFile,rm} from "node:fs/promises";
import {articles,topics} from "../data/content.ts";
import {renderArticle,yaml} from "./lib/article-template.mjs";

const slugs=["binance-register","binance-app-download","binance-invite-code","binance-kyc-failed","binance-verification-code","binance-login-problem","okx-register","okx-app-download","okx-invite-code","okx-kyc-review","okx-verification-code","okx-name-guide","alipay-buy-usdt","bank-card-buy-usdt","binance-buy-usdt","okx-buy-usdt","usdt-deposit-network","usdt-deposit-not-arrived","usdt-cash-out-bank-card","usdt-cash-out-avoid-bank-freeze","alipay-usdt-cash-out","binance-cash-out","okx-cash-out-bank-card","usdt-bank-account-frozen","binance-fees","okx-fees","binance-invite-rebate","okx-invite-rebate","maker-taker-fees","usdt-c2c-spread","binance-official-site","okx-official-site","google-authenticator-new-phone","binance-risk-control","usdt-wrong-network","exchange-account-hacked"];

await rm("content/articles",{recursive:true,force:true});
await mkdir("content/articles",{recursive:true});await mkdir("content/topics",{recursive:true});await mkdir("hugo-data",{recursive:true});
for(const [index,article] of articles.entries()){
  const item={...article,slug:slugs[index],primaryKeyword:article.keywords[0],readingMinutes:12,updated:"2026-08-24"};
  await writeFile(`content/articles/${item.slug}.md`,renderArticle(item));
}
await writeFile("content/topics/_index.md",`---\ntitle: "全部新手教程"\ndescription: "币安、欧易、买USDT、USDT出金、手续费和账户安全教程。"\nslug: "topics"\n---\n`);
for(const topic of topics){await mkdir(`content/topics/${topic.slug}`,{recursive:true});await writeFile(`content/topics/${topic.slug}/_index.md`,`---\ntitle: ${yaml(topic.name)}\ndescription: ${yaml(topic.description)}\nslug: ${yaml(topic.slug)}\n---\n`)}
await writeFile("hugo-data/topics.json",JSON.stringify(topics,null,2));
console.log(`Exported ${articles.length} heavy articles and ${topics.length} topic pages for Hugo`);
