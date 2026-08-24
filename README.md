# 币圈老陈

面向中文新手的币安、欧易、买 USDT、USDT 出金和手续费长尾教程站。

**在线访问：[https://binance-okx-guide.github.io/](https://binance-okx-guide.github.io/)**

## 本地预览

```bash
npm run hugo:content
hugo server
```

## 构建

```bash
npm run hugo:build
```

推送到 `main` 分支后，GitHub Actions 会自动构建 Hugo 并发布到 GitHub Pages。工作流使用 GitHub 返回的 Pages 基础地址，因此用户站点和项目二级路径均可正常部署。

## 内容规模化

- `data/content.ts`：首批核心关键词和文章定义。
- `scripts/export-hugo-content.mjs`：把核心内容导出为 Hugo Markdown。
- `scripts/generate-content-plan.mjs`：生成 1,000 个待人工审核的长尾选题。
- `content/articles/`：实际参与搜索引擎收录的文章源文件。

工作日北京时间 09:23 自动生成 3 篇长尾文章。只有内容审计和 Hugo 构建全部通过，文章才会提交到 `main` 并由 GitHub Pages 自动发布；任一检查失败都会终止上线。
