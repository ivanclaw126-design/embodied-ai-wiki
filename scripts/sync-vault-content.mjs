#!/usr/bin/env node
import fs from "node:fs/promises"
import path from "node:path"
import process from "node:process"

const quartzRoot = path.resolve(import.meta.dirname, "..")
const vaultRoot = path.resolve(quartzRoot, "..")
const contentRoot = path.join(quartzRoot, "content")
const includeRaw = !process.argv.includes("--wiki-only") && process.env.QUARTZ_INCLUDE_RAW !== "0"

const excludedNames = new Set([
  ".DS_Store",
  ".git",
  ".obsidian",
  ".trash",
  "node_modules",
  "public",
  ".quartz-cache",
])

async function exists(target) {
  try {
    await fs.access(target)
    return true
  } catch {
    return false
  }
}

async function resetContentDir() {
  await fs.rm(contentRoot, { recursive: true, force: true })
  await fs.mkdir(contentRoot, { recursive: true })
}

async function copyDir(source, destination) {
  if (!(await exists(source))) {
    throw new Error(`Missing source directory: ${source}`)
  }

  await fs.mkdir(destination, { recursive: true })
  for (const entry of await fs.readdir(source, { withFileTypes: true })) {
    if (excludedNames.has(entry.name)) continue

    const sourcePath = path.join(source, entry.name)
    const destinationPath = path.join(destination, entry.name)

    if (entry.isDirectory()) {
      await copyDir(sourcePath, destinationPath)
      continue
    }

    if (entry.isFile()) {
      await fs.copyFile(sourcePath, destinationPath)
    }
  }
}

async function writeHomePage() {
  const rawNote = includeRaw
    ? "本次发布包含 `raw/` 原始资料，站内 `Raw:` 证据链接可直接打开。"
    : "本次发布默认只包含 `wiki/` 编译知识层；`Raw:` 证据链接仍保留为研究线索，但不会在公开站点中展开原始资料。"
  const rawEntry = includeRaw ? "- [原始资料](raw/)\n" : ""

  const body = `---
title: 具身智能研究知识库
---

# 具身智能研究知识库

这是从 Obsidian vault 自动同步到 Quartz 的公开阅读层，核心入口是 [研究索引](wiki/index.md) 和 [总览](wiki/overview.md)。

${rawNote}

## 主要入口

- [研究索引](wiki/index.md)
- [关系图谱](wiki/relationships/)
- [公司档案](wiki/companies/)
- [人物与机构](wiki/people/)
- [谱系分析](wiki/lineages/)
- [开放问题](wiki/questions/)
${rawEntry}
`

  await fs.writeFile(path.join(contentRoot, "index.md"), body)
}

async function main() {
  await resetContentDir()
  await copyDir(path.join(vaultRoot, "wiki"), path.join(contentRoot, "wiki"))

  if (includeRaw) {
    await copyDir(path.join(vaultRoot, "raw"), path.join(contentRoot, "raw"))
  }

  await writeHomePage()

  const mode = includeRaw ? "wiki + raw" : "wiki only"
  console.log(`Synced Quartz content from vault: ${mode}`)
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
