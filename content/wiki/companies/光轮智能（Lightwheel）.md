---
type: company
title: 光轮智能（Lightwheel）
aliases: [光轮智能, Lightwheel]
tags: [company, embodied-ai, simulation, data-infrastructure, nvidia]
created: 2026-05-20
updated: 2026-05-20
status: tracking
---

# 光轮智能（Lightwheel）

> Sources: 国内具身智能公司与 NVIDIA 深度合作公开证据整理, 2026-05-20; EqualOcean, 2026-03-11
> Raw: [国内具身智能公司与 NVIDIA 深度合作公开证据整理](../../raw/sources/2026-05-20-国内具身智能公司与nvidia深度合作公开证据整理.md); [光轮智能融资补充检索](../../raw/sources/2026-05-20-光轮智能-融资补充检索.md)

## Overview

光轮智能（Lightwheel）是本库按“具身数据与仿真基础设施层”跟踪的公司。当前公开证据显示，它不是传统意义上的人形机器人本体公司，而是通过 Isaac Lab-Arena、GR00T-Dreams、合成数据产线和机器人策略评测框架进入 [英伟达](../institutions/英伟达.md) 具身智能技术栈的关键基础设施节点。

## 关键判断

| 判断 | source | date | entity | evidence_level |
|---|---|---:|---|---|
| NVIDIA Developer 明确称 Isaac Lab-Arena 与 Lightwheel 共同开发，用于大规模机器人策略评估；这是当前国内样本中公开证据最强的 NVIDIA 共同开发级关系。 | 国内具身智能公司与 NVIDIA 深度合作公开证据整理 | 2026-05-20 | 光轮智能 / NVIDIA | S 级来源整理 |
| NVIDIA 官方博客披露光轮使用 GR00T-Dreams、合成数据产线和 GR00T N1.5 微调能力。 | 国内具身智能公司与 NVIDIA 深度合作公开证据整理 | 2026-05-20 | 光轮智能 / GR00T-Dreams | S 级来源整理 |
| 光轮应放入“具身数据与仿真基础设施层”，不应和人形机器人本体公司按同一融资/交付口径直接比较。 | 国内具身智能公司与 NVIDIA 深度合作公开证据整理 | 2026-05-20 | 光轮智能分类 | 本库口径 |

## 融资与资本

| 时间 | 事件/口径 | 金额 | 投资方/相关方 | evidence_level | 当前处理 |
|---|---|---:|---|---:|---|
| 2026-03-11 报道 | A++ 与 A+++ 合并轮融资 | 10 亿元人民币 | 新希望集团、鼎邦投资、奥克斯集团、鼎石资管、建投华科、国方创新、道禾长期投资、清新资本 | L2 | EqualOcean 报道口径；可作为总表保守估算锚点。 |
| 早期轮次 | 种子轮、天使轮、天使+、Pre-A 等线索 | 上亿元口径，逐轮未闭合 | 未在本页逐轮核验 | L3 | 不与 10 亿元机械精确相加；总表采用“至少 10 亿元，累计可能高于 10 亿元”。 |

融资表口径：当前可采用的最强金额锚点是 2026 年 A++/A+++ 合并轮 **10 亿元人民币**；因早期轮次金额未逐轮闭合，本库不写确定累计总额，只在融资合并表中采用“至少 10 亿元”保守口径。

## 技术与生态位置

| 模块 | 公开线索 | 投资研究意义 |
|---|---|---|
| Isaac Lab-Arena | NVIDIA Developer 称与 Lightwheel co-developed。 | 进入机器人策略评估、benchmark 和大规模仿真基础设施层。 |
| GR00T-Dreams / GR00T N1.5 | NVIDIA 官方博客披露其使用合成数据产线微调 GR00T N1.5。 | 代表合成数据和机器人基础模型训练结合的路径。 |
| RoboCasa / LIBERO / RoboFinals | 来源材料列为任务套件和 benchmark 相关线索。 | 可作为评估 sim-to-real、数据生成和策略泛化的后续跟踪入口。 |

## 关系图谱线索

- [英伟达](../institutions/英伟达.md)：共同开发 Isaac Lab-Arena，并围绕 GR00T-Dreams / GR00T N1.5 / 合成数据形成技术栈关系；当前不写成股权投资、采购合同或排他合作。
- [NVIDIA 机器人技术栈](../technologies/NVIDIA机器人技术栈.md)：光轮是本库观察 NVIDIA 具身仿真、数据和评测基础设施的核心样本。

## 冲突与不确定性

- 公开证据强在 NVIDIA 官方技术案例，但仍需跟踪开源框架活跃度、客户采用、真实机器人训练效果和商业收费模式。
- 光轮不是传统本体公司，若未来进入融资/商业化对比，应单列为数据/仿真/评测基础设施公司。
