# 具身智能 Quartz 发布层

这个目录是当前 Obsidian vault 的 Quartz 发布工程。

## 本地同步与预览

```bash
cd quartz
npm run sync-content
npx quartz build --serve
```

默认只把上级 vault 的 `wiki/` 编译知识层复制到 `quartz/content/`，不发布 `raw/` 原始资料。

如果明确需要把 `Raw:` 证据链接也发布出来：

```bash
cd quartz
npm run sync-content:raw
```

## GitHub Pages 发布

1. 在 GitHub 创建一个仓库，例如 `embodied-ai-wiki`。
2. 本地添加远端：

```bash
cd quartz
git remote add origin git@github.com:ivanclaw126-design/embodied-ai-wiki.git
```

3. 仓库 Settings → Pages → Source 选择 `GitHub Actions`。
4. 如果仓库名不是 `embodied-ai-wiki`，在仓库 Variables 中设置：
   - `QUARTZ_BASE_URL=ivanclaw126-design.github.io/<repo-name>`
5. 在本目录提交并推送 `v4` 分支。

GitHub Actions 会运行 `.github/workflows/deploy.yml`，构建 `public/` 并发布到 GitHub Pages。

## 更新流程

每次 Obsidian vault 更新后，在本目录执行：

```bash
npm run sync-content
git add content
git commit -m "Update published wiki content"
git push
```
