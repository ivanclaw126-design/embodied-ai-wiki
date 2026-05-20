---
type: relationship
title: 国内具身智能公司 NVIDIA 合作关系
aliases: [国内具身智能公司与NVIDIA合作, 英伟达具身智能生态]
tags: [relationship, embodied-ai, nvidia, platform-ecosystem]
created: 2026-05-20
updated: 2026-05-20
status: tracking
---

# 国内具身智能公司 NVIDIA 合作关系

> Sources: 国内具身智能公司与 NVIDIA 深度合作公开证据整理, 2026-05-20
> Raw: [国内具身智能公司与 NVIDIA 深度合作公开证据整理](../../raw/sources/2026-05-20-国内具身智能公司与nvidia深度合作公开证据整理.md)

## Overview

本页把“国内具身智能公司与 [英伟达](../institutions/英伟达.md) 的公开关系”编译成可持续跟踪的证据表。当前结论是：最强公开证据集中在 **光轮智能 Lightwheel** 的 Isaac Lab-Arena / GR00T-Dreams / 合成数据链路，其次是智元、银河通用、傅利叶、宇树、优必选、加速进化、北京人形机器人创新中心等本体或平台节点对 Isaac、Jetson、GR00T 等核心机器人技术栈的采用。本文中的“深度合作”仅表示公开证据意义上的技术栈绑定或生态进入，**不等同于股权投资、排他协议、采购合同或已确认商业收入**。

## 判定口径

| 口径 | 本库采用方式 |
|---|---|
| S 级来源 | NVIDIA 官方博客、Developer、Newsroom、产品页，可作为主证据。 |
| A+ | 共同开发、数据/仿真/评测基础设施或模型训练工作流级关系。 |
| A | 官方明确披露 Isaac Sim / Isaac Lab / GR00T / Cosmos / Jetson Thor 等核心机器人技术栈使用。 |
| A- | 产品级集成 NVIDIA 核心技术，但公开工程细节有限。 |
| B | 进入 NVIDIA 生态、开发者计划或平台采用名单，缺少产品级工程细节。 |
| 观察 | 有市场声量或弱线索，但缺 NVIDIA 官方一手证据。 |

## 高置信关系表

| 公司/机构 | 层级 | 公开关系 | 涉及技术 | evidence_level | 边界说明 |
|---|---|---|---|---|---|
| [光轮智能（Lightwheel）](../companies/光轮智能（Lightwheel）.md) | A+ | NVIDIA Developer 称 Isaac Lab-Arena 与 Lightwheel co-developed；NVIDIA 官方博客披露光轮使用 GR00T-Dreams 和合成数据产线微调 GR00T N1.5。 | Isaac Lab-Arena、GR00T-Dreams、GR00T N1.5、合成轨迹数据、RoboFinals benchmark | S 级 | 属于具身数据/仿真/评测基础设施层，不按传统人形本体公司处理。 |
| [智元机器人（AgiBot）](../companies/智元机器人（AgiBot）.md) | A | NVIDIA 官方世界机器人大会材料称 G2 通过 Isaac Sim / Isaac Lab 训练，并搭载 Jetson AGX Thor。 | Isaac Sim、Isaac Lab、Jetson AGX Thor | S 级 | 写为训练/仿真/端侧计算栈绑定，不外推英伟达投资或采购。 |
| [银河通用（Galbot）](../companies/银河通用（Galbot）.md) | A | NVIDIA 官方材料称 G1 Premium 是首批搭载 Jetson Thor 的人形机器人之一；NVIDIA Developer 披露 Galbot 用 Isaac Sim 构建 DexGraspNet。 | Jetson Thor、Isaac Sim、OpenWBT_Isaac、DexGraspNet | S 级 | 覆盖端侧算力、遥操作仿真和灵巧手数据集，但商业部署规模仍需客户侧核验。 |
| [傅利叶智能（Fourier Intelligence）](../companies/傅利叶智能（FourierIntelligence）.md) | A | NVIDIA 官方材料披露 GR-3 使用 Isaac Lab 和 Jetson AGX；Developer 案例披露 Fourier 使用 Isaac Gym 开发/测试 GR-2 并迁移到 Isaac Lab。 | Isaac Gym、Isaac Lab、Jetson AGX | S 级 | Isaac Gym 已弃用，后续应跟踪 Isaac Lab 迁移和真实机器人训练效果。 |
| [宇树科技（Unitree Robotics）](../companies/宇树科技（UnitreeRobotics）.md) | A- | NVIDIA 官方材料称 Unitree R1 部署 NVIDIA 全栈机器人技术，通过 Isaac Sim / Isaac Lab 优化运动与操控策略。 | Isaac Sim、Isaac Lab、NVIDIA 全栈机器人技术 | S 级 | 产品影响力强，但公开联合工程细节少于光轮、银河和傅利叶。 |
| [优必选科技（UBTECH Robotics）](../companies/优必选科技（UBTECHRobotics）.md) | A- | NVIDIA 官方材料称 Walker S2 部署 Isaac Sim 与 Jetson AGX Thor，面向自主换电、制造和物流场景。 | Isaac Sim、Jetson AGX Thor | S 级 | 写产品级集成与应用展示，订单和收入仍按客户/年报材料核验。 |
| [加速进化（Booster Robotics）](../companies/加速进化（BoosterRobotics）.md) | A- | NVIDIA 官方材料称 Booster T1/K1 使用 NVIDIA 机器人技术栈，搭载 Jetson AGX，基于 Isaac Lab / Isaac Sim 训练运动 AI。 | Jetson AGX、Isaac Lab、Isaac Sim | S 级 | 适合跟踪运动智能、教育科研和赛事开发者平台，但不外推工业 PMF。 |
| [北京人形机器人创新中心（天工机器人）](../companies/北京人形机器人创新中心（天工机器人）.md) | A- | NVIDIA 官方材料称天工 2.0 基于 NVIDIA 加速库与 AI 模型，通过 Jetson AGX Thor 与 Isaac Sim 合成数据驱动。 | Jetson AGX Thor、Isaac Sim、NVIDIA 加速库/AI 模型 | S 级 | 创新中心/平台属性强，不等同普通创业公司商业化订单。 |
| [小鹏 / 鹏行智能](../companies/小鹏-鹏行智能.md) | B+ | NVIDIA 官方 COMPUTEX/三台计算机文章点名 XPeng Robotics 采用 Isaac 平台并推进人形机器人仿真训练。 | Isaac 平台、Isaac Sim、Isaac Lab | S 级 | 官方点名强，但缺具体产品型号、端侧平台和工程链路细节。 |
| [逐际动力（LimX Dynamics）](../companies/逐际动力（LimXDynamics）.md) | B | NVIDIA Developer 中文技术博客和 Newsroom 早期接入名单包含 LimX Dynamics。 | Isaac Lab、Humanoid Robot Developer Program | S 级 | 生态进入证据强，产品级部署细节待补。 |
| [星动纪元（RobotEra）](../companies/星动纪元（RobotEra）.md) | B | NVIDIA Developer 中文技术博客和 Newsroom 早期接入名单包含 RobotEra。 | Isaac Lab、Humanoid Robot Developer Program | S 级 | 生态进入证据强，具体机器人产品如何使用 Isaac / GR00T / Jetson Thor 待补。 |
| [阿里巴巴](../institutions/阿里巴巴.md) / 阿里云 | 基础设施观察 | NVIDIA 官方世界机器人大会材料称阿里云 PAI 开放 NVIDIA 全栈机器人及物理 AI 组件，开发者可一键启动 Isaac Sim / Isaac Lab 或部署 Cosmos-Reason1。 | PAI、Isaac Sim、Isaac Lab、Cosmos-Reason1 | S 级 | 阿里云是云端机器人开发环境入口，不是机器人本体公司。 |

## 冲突与不确定性

- NVIDIA 官方来源可信度高，但存在生态推广和品牌宣传属性；不能据此推断采购规模、股权投资、商业收入或排他性合作。
- 部分公司只被列入早期接入或生态协作者名单，缺少具体产品型号、部署链路、训练数据和客户场景披露。
- “深度合作”是本页定义的公开证据评级，不是法律合同或商业合作等级。
