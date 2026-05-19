# 流形空间（Manifold AI）横纵分析报告

> Source: local folder `一级市场-具身智能本体Top5/Manifold_AI_北京流形空间_横纵分析报告.md`
> Collected: 2026-05-17
> Published: 2026-05-17

# Manifold AI / 北京流形空间横纵分析报告

生成日期：2026-05-17  
研究对象：北京流形空间科技有限公司 / Manifold AI / 流形空间  
方向：世界模型 / 具身大脑  
研究目标：一级市场信息搜集，聚焦成立背景、团队来源、产品与技术演进、融资、关键合作、商业化节点和横向竞争位置。  
方法：按横纵分析法组织。纵向还原公司从成立到当前的演进，横向对比世界模型、具身大脑和 VLA/世界模型相邻玩家，最后给出交汇判断。  

> 一句话结论：流形空间不是一家“做机器人本体”的公司，而是一家试图把世界模型做成机器人和无人机基础大脑的模型公司。它的核心押注是 WMA（World Model Action）：让模型先在视觉世界里预测、想象和推演，再把推演结果转成动作。这个方向有很强的技术弹性，也有明显商业空白：截至 2026-05-17，公开材料能证明融资、论文和技术发布节奏，但暂未看到可核验的客户订单、收入或规模交付数据。

## 口径说明

1. **公司名称口径**：本文统一称“流形空间”或“Manifold AI”。法律主体采用“北京流形空间科技有限公司”。英诺嘿呀页面披露该主体成立时间为 2025-05-22，法定代表人为武伟，地址为北京市朝阳区东坝乡东晓景产业园205号A区一层3596；每日经济新闻工商快讯也确认其 2025 年 5 月成立、法定代表人为武伟。访问日期均为 2026-05-17。来源：[英诺嘿呀](https://www.innohere.com/ir/161952/finance.html)、[每日经济新闻](https://www.nbd.com.cn/articles/2026-01-19/4225630.html)。
2. **融资口径**：融资金额严格保留来源原文，例如“未披露”“近亿元”“超亿元”“近2亿元”“四轮近5亿元”。不把“累计近5亿元”拆成逐轮精确数字，也不把估算写成公司官方事实。
3. **业务口径**：公司官网自述为探索下一代世界模型，并应用于 robotics、XR equipment 等 AI hardware applications；本文把它归为“具身大脑/世界模型公司”，而不是本体公司。来源：[Manifold AI 官网](https://manifoldai.cn/)。
4. **合作口径**：投资方/股东、客户/订单、产业合作、技术/联合研发、高校/科研渊源分开处理。华为哈勃、君联、英诺等被列为投资方/股东，不直接等同于客户或产业落地；论文共同署名、团队过往任职或毕业背景，也不直接等同于正式商业合作。
5. **证据等级**：A级为公司官网、技术报告、arXiv、工商/投资平台等一手或准一手来源；B级为投资方页面、权威媒体原创或深度访谈；C级为转载、聚合、行业解读；D级为模型推断或未确认线索。报告正文只在必要处使用C级来源，并明确标注。

## 摘要

流形空间的纵向故事很短，但密度很高。

公司 2025 年 5 月成立。官网把 2025-05-22 标为“Manifold AI online”，随后在 2025-07-03 发布 RoboScape，2025-11-06 发布 AirScape，2026-02-25 发布 WorldScape，2026-02-28 发布 WorldScape Policy，并在 2026-04-30 宣称在 WorldScore、WorldArena、RoboTwin 上排名第一。来源：[Manifold AI 官网](https://manifoldai.cn/)。

创始人武伟是这家公司最重要的解释变量。公开材料显示，他曾是商汤科技早期成员，2015 年加入商汤初创团队，曾任商汤绝影智能云研发总经理，并主导过商汤“开悟”世界模型研发和落地。甲子光年访谈还写到，武伟在 2022 年 CVPR 与特斯拉团队交流后强化了“世界模型是 AGI 新基建”的判断，2025 年 5 月离开商汤创办流形空间。来源：[甲子光年/新浪财经](https://finance.sina.com.cn/roll/2025-11-11/doc-infwzmka7326406.shtml)、[英诺创新空间](https://www.innospace.cn/news/detail/c28b732bf4895d1e87368ecf5ec325d4/2)。

融资节奏是第二个解释变量。公司成立当天附近即有种子轮记录；2025 年 10 月宣布“近亿元天使轮”；2026 年 1 月宣布“超亿元天使+轮”；2026 年 3 月宣布“近2亿元Pre-A轮”。投中网在 Pre-A 报道中写到，公司成立不到十个月，已累计获得四轮近5亿元融资。来源：[投中网天使轮](https://www.chinaventure.com.cn/news/80-20251020-388472.html)、[投中网天使+轮](https://www.chinaventure.com.cn/news/114-20260113-389742.html)、[投中网Pre-A轮](https://www.chinaventure.com.cn/news/114-20260304-390332.html)。

技术路线是第三个解释变量。流形空间把自己放在 VLA 的对面：不是先把视觉降维成语言，再从语言映射动作；而是先用世界模型在视觉和空间域里做预训练，让模型拥有 Reasoning、Dreaming、Acting 三类能力，再用少量本体数据把动作映射绑定到具体机器人或无人机。这个路线在理论上对“本体多、数据少、应用碎”的具身智能行业很有吸引力。问题也在这里：路线早、行业未收敛、公开客户缺失。它现在更像一个世界模型范式的高能样本，还不是一个已被商业收入充分验证的平台。

## 纵向发展史

### 1. 成立背景：从商汤绝影到世界模型创业

流形空间不是从“造一个机器人”开始，而是从“机器人为什么缺一个能推演世界的大脑”开始。

武伟的上一段经历决定了这种问题意识。他在商汤的十年正好横跨计算机视觉产业化、自动驾驶感知、云端数据闭环、世界模型兴起。甲子光年写到，武伟曾是商汤智能汽车事业群的关键人物，任商汤绝影智能云研发总经理；2022 年 CVPR 上与特斯拉团队交流后，他和对方都意识到世界模型可能成为 AGI 新基建。这个细节很重要，因为它解释了为什么一个自动驾驶出身的人，创业时没有继续做自动驾驶。

自动驾驶看起来是世界模型最直接的落点。道路、车、行人、交通灯，都可以被建模，也有巨大的商业市场。但武伟在访谈里给出的判断是：自动驾驶已经进入巨头收敛和产能出清阶段，差异化不只是算法，还包括多年的工程部署、车厂协同和供应链位置。相比之下，机器人和无人机市场更碎片化，工种多、本体多、场景多，大公司未必更有优势。来源：[甲子光年/新浪财经](https://finance.sina.com.cn/roll/2025-11-11/doc-infwzmka7326406.shtml)。

这就把流形空间的创业逻辑压缩成一句话：从自动驾驶世界模型经验出发，但不在自动驾驶里继续卷，而是把世界模型迁移到更早、更碎、更需要“通用大脑”的机器人和低空场景。

### 2. 团队来源：产业老兵、清华科研渊源与年轻研究团队

公开材料对团队姓名披露不多，但几个方向清楚。

英诺创新空间在天使轮报道中写到，Manifold AI 相关世界模型技术孵化自清华大学电子系未来智能实验室，是“全域布局室外、室内、空域具身世界模型”的团队；团队位于北京，具备 robotics 和大模型双重背景，主要成员毕业于清华、北大、上交、港中大、UCLA 等国内外高校，并在快手、Momenta、商汤等企业构建过千万级用户 AI 产品。来源：[英诺创新空间](https://www.innospace.cn/news/detail/c28b732bf4895d1e87368ecf5ec325d4/2)。

另一个值得谨慎记录的点是“联合发起人”。英诺披露称，其联合发起人包括一位清华大学教授、教育部长江学者，以及一位清华大学信息学院助理教授，但未披露姓名。投中网“又有11位科学家在北京创业”一文也提到两位联合发起人来自清华大学科学家，具体名字尚未公布。来源：[投中网](https://www.chinaventure.com.cn/news/80-20251107-388765.html)。因此本文只把它记为“清华科研渊源明确，但联合发起人姓名仍未公开确认”。

从一级市场角度看，这种团队结构有两个优点。第一，武伟提供产业化经验和融资信用。第二，清华体系提供世界模型论文、学生与研究网络。缺点也明显：如果联合发起人不在公司全职、姓名与股权角色不清晰，那么高校渊源不能直接等同于公司长期组织能力。

### 3. 技术起点：DriveScape、RoboScape、AirScape 先做领域模型

流形空间的技术叙事不是“我们已经有一个万能模型”，而是先在几个子域里做世界模型：自动驾驶、机器人、无人机。

**DriveScape** 更像是武伟团队早期经验的技术底稿。arXiv 页面显示，DriveScape 题为 “Towards High-Resolution Controllable Multi-View Driving Video Generation”，作者包括 Wei Wu，提交时间为 2024-09-09，目标是多视角、3D 条件驱动的高分辨率驾驶视频生成，能生成 1024 x 576、10Hz 视频，并在 nuScenes 上取得 FID 8.34、FVD 76.39。来源：[arXiv:2409.05463](https://arxiv.org/abs/2409.05463)。

**RoboScape** 则把世界模型迁到机器人操作。arXiv 页面显示，该论文题为 “RoboScape: Physics-informed Embodied World Model”，提交于 2025-06-29，作者包括 Tsinghua / Manifold AI 相关成员 Yu Shang、Xin Zhang、Chen Gao、Wei Wu、Yong Li 等。论文摘要称，RoboScape 是一个物理信息驱动的具身世界模型，联合学习 RGB 视频生成与物理知识，引入 temporal depth prediction 和 keypoint dynamics learning，用于提升 3D 几何一致性、物理合理性，并验证其在机器人策略训练和策略评估中的用途。来源：[arXiv:2506.23135](https://arxiv.org/abs/2506.23135)。

**AirScape** 则切入无人机。arXiv 页面显示，AirScape 题为 “An Aerial Generative World Model with Motion Controllability”，最早提交于 2025-07-10，2025-10-10 修订。论文称其为面向六自由度 aerial agents 的世界模型，构建了 11k video-intention pairs 数据集，其中包含第一人称无人机视频，并花费超过 1000 小时标注运动意图。来源：[arXiv:2507.08885](https://arxiv.org/abs/2507.08885)。

这个阶段的核心不是商业化，而是证明一个方向：世界模型不是只能生成好看的视频，还可以带着动作条件去预测未来观察，进而为机器人、无人机、自动驾驶提供训练、评估或规划能力。

### 4. WorldScape：从领域模型走向具身基座世界模型

2026 年 2 月，流形空间推出 WorldScape。官网技术页把它定义为 “A Unified Real-time World Model Integrating Locomotion And Manipulation”，即一个同时融合移动和操作交互的实时世界模型。来源：[WorldScape 官方技术页](https://manifoldai.cn/blogs/WorldScape.html)。

WorldScape 的重要性在于，它不再只是“机器人场景模型”或“无人机场景模型”，而是试图成为一个具身基座世界模型。官方技术页列出四个能力目标：

- 同时支持 spatial navigation 和 object manipulation，避免多个模块拼接造成的不一致；
- 引入 3D geometric-aware spatial representation 和训练约束，降低长时生成中的几何漂移和结构崩塌；
- 在单 GPU 上达到 near real-time，官方写到最高 24 FPS；
- 通过 geometrically-aware world state memory 维持长期一致性。

这四个点对应的是世界模型落地到具身智能的四道门槛：能交互、空间稳、速度够、记得住。单看视频生成质量没有意义。机器人真正需要的是“我推一下杯子，它会怎样；我绕到桌子另一侧，它还记不记得杯子在哪里；我连续做十步任务，它的世界会不会崩掉”。

### 5. WorldScape Policy：从“看见未来”到“生成动作”

2026 年 2 月 28 日，流形空间发布 WorldScape Policy。官方页面把问题说得很直接：传统 VLA 模型在实验室里看起来不错，但遇到光照变化、背景变化、杂乱环境时容易脆弱；WorldScape Policy 的方案是把 Foundation World Model 直接转成 generalist robotic planner。来源：[WorldScape Policy 官方页](https://www.manifoldai.cn/blogs/WorldScapePolicy.html)。

技术报告摘要写得更具体：WorldScape Policy 通过统一的 Mixture-of-Transformers 架构，把 pretrained diffusion foundation world model 与轻量 action expert 结合起来，联合建模 RGB、depth 和 continuous action chunks，并用自动化数据筛选与标注管线，将大规模第一人称人类视频转换为 instruction-action clips，再与跨本体机器人 demonstration 混合。来源：[WorldScape Policy PDF](https://manifoldai.cn/assets/file/WorldScapePolicy.pdf)。

这就是流形空间所谓 WMA 的关键落点。它不是只做一个“环境模拟器”，也不是只做一个“动作模仿模型”。它想把世界模型和动作生成合在一起：模型先预测未来世界状态，再在同一个模型结构里生成动作。官方技术报告中还披露了 PIPER 双臂平台的 7 个长程操作任务，包括取衣、铺平衣服、叠衣、接水、倒水、清理桌面垃圾、擦桌子等；并称 WorldScape Policy 在真实双臂平台上展示了更强的鲁棒性、few-shot 适应和更快训练收敛。来源：[WorldScape Policy PDF](https://manifoldai.cn/assets/file/WorldScapePolicy.pdf)。

这里必须加一个限制：这些结果目前主要来自公司自有技术报告和公开演示。它们足以作为技术披露，不足以替代第三方可复现实验、客户验收或收入证明。

### 6. 商业化节点：融资驱动强，客户披露弱

流形空间的商业化叙事集中在两个方向：机器人和无人机。

甲子光年访谈写到，公司在落地场景上优先考虑机器人和无人机，不考虑自动驾驶；其长期思路是“攀登高峰，沿途下蛋”：高峰是通用具身世界模型基座，沿途下蛋是 RoboScape、AirScape 等子域模型提前产品化和商业化，产生营收来支撑团队。来源：[甲子光年/新浪财经](https://finance.sina.com.cn/roll/2025-11-11/doc-infwzmka7326406.shtml)。

但截至 2026-05-17，公开资料还没有给出可核验的客户名称、订单金额、部署数量或收入确认。投资界文章提到 AirScape 在低空经济领域具有落地进展，并举“无人机复杂场景极度依赖飞手”作为痛点；但未披露具体客户和合同。来源：[投资界](https://news.pedaily.cn/202601/559834.shtml)。因此本文将客户/订单列为“暂缺”，不把融资新闻中的“场景落地”直接写成商业收入。

## 融资历史

| 时间 | 轮次/事件 | 金额原文口径 | 投资方/股东 | 证据等级 | 来源与访问日期 |
|---|---|---|---|---|---|
| 2025-05-22 | 种子轮 | 未披露 | 英诺天使基金、水木清华校友种子基金 | A/B | [英诺嘿呀融资历史](https://www.innohere.com/ir/161952/finance.html)，访问日期：2026-05-17；[英诺创新空间](https://www.innospace.cn/news/detail/c28b732bf4895d1e87368ecf5ec325d4/2)，访问日期：2026-05-17 |
| 2025-10-21 | 天使轮 | 近亿元 / CNY 亿级 | 锦秋基金领投，同创伟业、老股东英诺天使基金跟投 | B | [投中网](https://www.chinaventure.com.cn/news/80-20251020-388472.html)，访问日期：2026-05-17；[英诺创新空间](https://www.innospace.cn/news/detail/c28b732bf4895d1e87368ecf5ec325d4/2)，访问日期：2026-05-17 |
| 2026-01-08/09/13 | 天使+轮 | 超亿元 / CNY 亿级 | 君联资本、梅花创投、华为哈勃、英诺基金、锦秋基金、同创伟业等；不同来源对“领投/联合投资”表述不一致 | B | [英诺创新空间](https://www.innospace.cn/news/detail/044c3dd434675a7d4ba2fb0f22815428/2)，访问日期：2026-05-17；[投中网](https://www.chinaventure.com.cn/news/114-20260113-389742.html)，访问日期：2026-05-17；[泰伯网](https://www.taibo.cn/newsflashes/30961054)，访问日期：2026-05-17 |
| 2026-01-19 | 工商股东变更 | 非融资金额披露 | 新增华为旗下深圳哈勃、深圳君联君智、北京梅岭黑马数智人等为股东；注册资本由约219.9万元增至约252.4万元 | A/B | [每日经济新闻](https://www.nbd.com.cn/articles/2026-01-19/4225630.html)，访问日期：2026-05-17 |
| 2026-02-19 / 2026-03-03/04 | Pre-A轮 | 未披露 / 近2亿元 | 华控基金、锡创投联合领投，达泰资本跟投，君联资本、同创伟业、英诺基金等老股东全额或超额追加 | A/B | [英诺嘿呀融资历史](https://www.innohere.com/ir/161952/finance.html)，访问日期：2026-05-17；[投中网](https://www.chinaventure.com.cn/news/114-20260304-390332.html)，访问日期：2026-05-17；[泰伯网/新浪财经](https://t.cj.sina.com.cn/articles/view/1877503207/6fe86ce700101g27c?from=tech&subch=otech)，访问日期：2026-05-17 |
| 2026-03-04 | 累计融资口径 | 成立不到十个月，四轮近5亿元 | 包括君联资本、同创伟业、华为哈勃等 | B | [投中网](https://www.chinaventure.com.cn/news/114-20260304-390332.html)，访问日期：2026-05-17 |

### 融资判断

流形空间融资节奏快，但公开轮次不是完全透明的逐轮财务表。

可以确认的主线是：种子轮金额未披露；天使轮为“近亿元”；天使+为“超亿元”；Pre-A 为“近2亿元”；公开累计使用“近5亿元”。这组口径能彼此兼容，但不能反推出每轮精确金额。比如“近亿元”可能是 8000 万、9000 万，也可能因为多轮合并披露而包含前后追加；“近5亿元”也可能包含未披露小额、工商变更或老股东追加。

需要单独标注的是，投中网 2026-01-13 的天使+轮正文写到公司“曾于2025年7月、9月完成两轮约亿元天使轮融资”，这与英诺嘿呀融资历史、英诺创新空间、投资界等来源的“2025-05 种子轮、2025-10 近亿元天使轮”时间线不一致；本文不把“7月/9月两轮”新增为已确认融资事件，而是作为公告口径漂移保留在冲突表。

因此本文对融资采用保守表述：**截至 2026-05-17，公开报道口径为四轮近5亿元，逐轮精确金额暂缺；2025 年 7 月/9 月两轮约亿元的说法待核验。**

## 合作网络

### 上市公司、产业巨头、互联网巨头与高校科研覆盖检查

| 类别 | 已核验证据 | 当前采用口径 |
|---|---|---|
| 上市公司 | 商汤科技为武伟过往任职和技术来源背景；甲子光年写到 2021 年底商汤科技在港交所上市，武伟曾任商汤绝影智能云研发总经理。来源：[甲子光年/新浪财经](https://finance.sina.com.cn/roll/2025-11-11/doc-infwzmka7326406.shtml)，访问日期：2026-05-17 | 只写“创始人产业来源/上市公司履历背景”，不写成流形空间与商汤的当前合作 |
| 产业巨头 | 华为哈勃作为投资方/新增股东有工商变更和融资报道支撑；英诺页面称公司已接入 NVIDIA Jetson Thor 用于本体部署。来源：[每日经济新闻](https://www.nbd.com.cn/articles/2026-01-19/4225630.html)、[英诺创新空间](https://www.innospace.cn/news/detail/c28b732bf4895d1e87368ecf5ec325d4/2)，访问日期：2026-05-17 | 华为哈勃只作为产业投资方记录；NVIDIA Jetson Thor 只作为投资方页面披露的适配线索，暂不写成 NVIDIA 官方合作 |
| 互联网巨头 | 公开来源仅提到核心团队曾在快手等企业构建 AI 产品；本次未找到腾讯、阿里、字节、百度、美团等互联网巨头对流形空间的投资、客户、订单或联合研发公告。来源：[英诺创新空间](https://www.innospace.cn/news/detail/c28b732bf4895d1e87368ecf5ec325d4/2)，访问日期：2026-05-17；本次公开检索 | 正式合作暂缺/待核验；快手仅作为团队过往履历，不作为公司合作 |
| 国内高校/科研机构 | 清华大学电子系未来智能实验室孵化线索来自英诺；RoboScape 论文机构为 Tsinghua University / Manifold AI；AirScape 作者机构包括清华深圳国际研究生院、北京理工、鹏城实验室、东北大学、清华电子系、Manifold AI 等。来源：[英诺创新空间](https://www.innospace.cn/news/detail/c28b732bf4895d1e87368ecf5ec325d4/2)、[RoboScape arXiv](https://arxiv.org/abs/2506.23135)、[AirScape arXiv](https://arxiv.org/abs/2507.08885)，访问日期：2026-05-17 | 写“孵化/论文共同署名/科研渊源”，不等同于学校与公司签署正式合作协议 |
| 国外顶尖高校/科研机构 | WorldArena 项目页列出 Princeton、NUS、HKU 等机构，但页面机构列表未列 Manifold AI；Manifold 官网只链接 WorldArena 并声明榜单排名。来源：[WorldArena](https://world-arena.ai/)、[Manifold AI 官网](https://manifoldai.cn/)，访问日期：2026-05-17 | 暂不把 Princeton、NUS、HKU 等写成流形空间合作方；只作为评测生态/榜单背景 |

### 投资方/股东

| 主体 | 关系类型 | 时间 | 证据等级 | 说明与来源 |
|---|---|---|---|---|
| 英诺天使基金 | 种子轮领投、后续老股东加注 | 2025-05 起 | A/B | 英诺嘿呀记录种子轮；英诺创新空间披露后续天使、天使+加注。来源：[英诺嘿呀](https://www.innohere.com/ir/161952/finance.html)、[英诺创新空间](https://www.innospace.cn/news/detail/044c3dd434675a7d4ba2fb0f22815428/2)。访问日期：2026-05-17 |
| 水木清华校友种子基金 | 种子轮跟投 | 2025-05 | A/B | 来源：[英诺嘿呀](https://www.innohere.com/ir/161952/finance.html)、[投中网](https://www.chinaventure.com.cn/news/80-20251107-388765.html)。访问日期：2026-05-17 |
| 锦秋基金 | 天使轮领投、天使+老股东加注 | 2025-10 / 2026-01 | B | 来源：[投中网](https://www.chinaventure.com.cn/news/80-20251020-388472.html)、[英诺创新空间](https://www.innospace.cn/news/detail/044c3dd434675a7d4ba2fb0f22815428/2)。访问日期：2026-05-17 |
| 同创伟业 | 天使轮跟投、天使+/Pre-A 追加 | 2025-10 / 2026-01 / 2026-03 | B | 来源：[投中网天使轮](https://www.chinaventure.com.cn/news/80-20251020-388472.html)、[投中网Pre-A](https://www.chinaventure.com.cn/news/114-20260304-390332.html)。访问日期：2026-05-17 |
| 君联资本 | 天使+投资、Pre-A 追加；关联主体发生工商入股 | 2026-01 / 2026-03 | A/B | 来源：[英诺创新空间](https://www.innospace.cn/news/detail/044c3dd434675a7d4ba2fb0f22815428/2)、[每日经济新闻](https://www.nbd.com.cn/articles/2026-01-19/4225630.html)、[投中网Pre-A](https://www.chinaventure.com.cn/news/114-20260304-390332.html)。访问日期：2026-05-17 |
| 梅花创投 | 天使+投资 | 2026-01 | B | 来源：[投中网](https://www.chinaventure.com.cn/news/114-20260113-389742.html)、[英诺创新空间](https://www.innospace.cn/news/detail/044c3dd434675a7d4ba2fb0f22815428/2)。访问日期：2026-05-17 |
| 华为哈勃 | 天使+投资、工商新增股东 | 2026-01 | A/B | 来源：[每日经济新闻](https://www.nbd.com.cn/articles/2026-01-19/4225630.html)、[泰伯网](https://www.taibo.cn/newsflashes/30961054)。访问日期：2026-05-17 |
| 华控基金、锡创投、达泰资本 | Pre-A 投资方 | 2026-03 | B | 华控基金、锡创投联合领投，达泰资本跟投。来源：[投中网](https://www.chinaventure.com.cn/news/114-20260304-390332.html)。访问日期：2026-05-17 |

### 客户/订单

| 主体 | 关系类型 | 状态 | 证据等级 | 说明与来源 |
|---|---|---|---|---|
| 暂缺 | 客户/订单 | 未发现公开可核验客户、订单金额、部署数量或收入披露 | D | 多个融资报道提到“场景落地”“具身大脑应用落地”，但未披露客户名称或合同；本次围绕“客户、订单、部署、收入、合作”等关键词检索，也未找到可回溯合同或客户公告。本文不将其视为订单事实。 |

### 产业合作

| 主体 | 关系类型 | 时间 | 证据等级 | 说明与来源 |
|---|---|---|---|---|
| NVIDIA Jetson Thor | 本体部署/边缘计算适配线索 | 2025-10 / 2026-01 披露 | B | 英诺创新空间披露 Manifold AI 已率先接入 NVIDIA Jetson Thor 用于具身世界模型的本体部署。该信息来自投资方页面，暂未看到 NVIDIA 官方联合公告。来源：[英诺创新空间](https://www.innospace.cn/news/detail/c28b732bf4895d1e87368ecf5ec325d4/2)、[英诺创新空间天使+](https://www.innospace.cn/news/detail/044c3dd434675a7d4ba2fb0f22815428/2)。访问日期：2026-05-17 |
| 华为哈勃 | 产业投资方 | 2026-01 | A/B | 华为哈勃是股东/投资方，但尚未看到与华为芯片或机器人业务的正式合作公告。来源：[每日经济新闻](https://www.nbd.com.cn/articles/2026-01-19/4225630.html)。访问日期：2026-05-17 |

### 技术/联合研发

| 主体 | 关系类型 | 时间 | 证据等级 | 说明与来源 |
|---|---|---|---|---|
| 清华大学、Manifold AI 相关作者团队 | RoboScape 论文/模型 | 2025-06/07 | A | arXiv 显示 RoboScape 作者包括 Tsinghua / Manifold AI 相关人员，研究物理信息驱动具身世界模型。来源：[arXiv:2506.23135](https://arxiv.org/abs/2506.23135)。访问日期：2026-05-17 |
| 清华大学、北京理工、鹏城实验室、东北大学、Manifold AI 等 | AirScape 论文/模型 | 2025-07/10 | A | arXiv 显示 AirScape 作者和机构覆盖清华、Manifold AI 等，研究六自由度无人机世界模型。来源：[arXiv:2507.08885](https://arxiv.org/abs/2507.08885)。访问日期：2026-05-17 |
| Manifold AI | WorldScape / WorldScape Policy | 2026-02 | A | 公司官网和技术报告披露统一实时世界模型、世界模型策略。来源：[WorldScape](https://manifoldai.cn/blogs/WorldScape.html)、[WorldScape Policy](https://www.manifoldai.cn/blogs/WorldScapePolicy.html)。访问日期：2026-05-17 |
| WorldArena 评测基准/榜单 | 评测生态背景 | 2026 | A/D | WorldArena 项目页列出清华、上交、港大、Princeton、中科院、中国科大、北大、NUS 等作者机构，提供具身世界模型评测框架；Manifold 官网链接 WorldArena 并声明榜单排名，但 WorldArena 页面未列 Manifold AI 为机构，因此本文不把 Princeton、NUS、HKU 等写成流形空间合作方。来源：[WorldArena](https://world-arena.ai/)、[Manifold AI 官网](https://manifoldai.cn/)。访问日期：2026-05-17 |

### 高校/科研渊源

| 主体 | 关系类型 | 时间 | 证据等级 | 说明与来源 |
|---|---|---|---|---|
| 清华大学电子系未来智能实验室 | 技术孵化来源 | 2025 披露 | B | 英诺创新空间称 Manifold AI 相关世界模型技术孵化自清华大学电子系未来智能实验室。来源：[英诺创新空间](https://www.innospace.cn/news/detail/c28b732bf4895d1e87368ecf5ec325d4/2)。访问日期：2026-05-17 |
| 清华大学未具名教授/信息学院助理教授 | 联合发起人线索 | 2025 披露 | B/D | 投中网与英诺均提到联合发起人来自清华，但未公开姓名。本文记录为未确认事项，不写成已验证个人关系。来源：[投中网](https://www.chinaventure.com.cn/news/80-20251107-388765.html)、[英诺创新空间](https://www.innospace.cn/news/detail/c28b732bf4895d1e87368ecf5ec325d4/2)。访问日期：2026-05-17 |
| 商汤科技 / 绝影 / 开悟世界模型 | 创始人产业来源 | 2015-2025 | B | 多个来源称武伟 2015 年加入商汤，曾任绝影智能云研发总经理，主导开悟世界模型研发落地。来源：[甲子光年/新浪财经](https://finance.sina.com.cn/roll/2025-11-11/doc-infwzmka7326406.shtml)、[英诺创新空间](https://www.innospace.cn/news/detail/c28b732bf4895d1e87368ecf5ec325d4/2)。访问日期：2026-05-17 |

## 横向对比：世界模型、VLA 与具身大脑的几条路线

流形空间的横向对手不完全是宇树、银河通用这类本体公司。它的同赛道参照物更像四类：通用交互世界模型、物理 AI 世界基础模型平台、VLA 具身大脑公司、机器人世界模型平台。

| 玩家/路线 | 核心定位 | 与流形空间的相同点 | 与流形空间的差异 | 证据来源 |
|---|---|---|---|---|
| Google DeepMind Genie 3 | 通用实时交互世界模型 | 都强调世界模型、实时交互、世界一致性和 agent 训练 | Genie 3 更偏通用可交互世界与 agent sandbox；DeepMind 官方也说明当前 action space 和 interaction duration 有限制。流形空间更强调机器人/无人机动作生成与 WMA 落地 | [Google DeepMind Genie 3](https://deepmind.google/models/genie/)，访问日期：2026-05-17 |
| NVIDIA Cosmos | 物理 AI 世界基础模型平台 | 都面向 physical AI、机器人/自动驾驶、合成数据和评测 | Cosmos 是开放平台和基础设施，覆盖模型、数据处理、评测、post-training；流形空间是创业公司自研模型路线，生态能力和开源程度暂不等同 | [NVIDIA Cosmos](https://www.nvidia.com/en-us/ai/cosmos/)，访问日期：2026-05-17 |
| Physical Intelligence π0.5 | VLA / 端到端机器人控制 | 都关注跨任务、跨场景泛化和真实机器人操作 | π0.5 是 VLA 路线，通过多机器人、高层语义、web data 等 co-training 实现开放世界泛化；流形空间明确批评 VLA 依赖本体后训练，押注世界模型预训练 + action | [arXiv:2504.16054](https://arxiv.org/abs/2504.16054)，访问日期：2026-05-17 |
| 智元机器人 Genie Envisioner | 面向机器人操作的世界基础平台 | 都把视频生成世界模型用于 policy learning、evaluation、simulation/action planning | 智元是本体与平台型机器人公司，GE 把 policy learning、evaluation、simulation 集成在视频生成框架；流形空间不公开做本体，主线是世界模型公司 | [arXiv:2508.05635](https://arxiv.org/abs/2508.05635)，访问日期：2026-05-17 |
| 星海图 Galaxea G0 | 本体/数据集 + VLM/VLA 执行模型 | 都关注开放场景泛化和机器人任务执行 | G0 是 VLM 规划 + VLA 执行的双系统架构，并强调统一本体采集的 Galaxea Open-World Dataset；流形空间强调世界模型作为动作基座 | [arXiv:2509.00576](https://arxiv.org/abs/2509.00576)，访问日期：2026-05-17 |
| 千寻智能 Spirit AI | 机器人“通用大脑” + 人形本体 | 都是具身大脑叙事，都强调跨场景泛化 | 千寻同时做本体/通用大脑，官网称 2024 年 1 月成立、专注机器人通用大脑；流形空间公开定位更偏世界模型和 AI hardware 应用 | [千寻智能官网](https://www.spirit-ai.com/about)，访问日期：2026-05-17 |

### 横向判断

流形空间的位置不是“最会造硬件”，也不是“生态最开放”。它的差异化在于把世界模型和动作生成打通，并试图把通用视频/空间预训练迁移到机器人和无人机。

跟 Google DeepMind 比，它没有大厂算力与多产品生态，但更早把“操作交互”作为机器人落地约束来组织技术报告。跟 NVIDIA Cosmos 比，它没有平台化生态和开发者基础，但路线更聚焦具身动作。跟 Physical Intelligence 比，它不是纯 VLA，对 VLA 的本体数据绑定问题有明确反论。跟智元、星海图、千寻比，它缺本体和场景入口，但也因此可以站在“给多种本体提供大脑”的位置上。

这也是它投资价值和风险同源的地方。如果 WMA 路线成立，流形空间可以成为机器人、无人机甚至 XR 设备的大脑供应商，避开本体制造的重资产和低毛利。如果 WMA 路线慢于 VLA/本体一体化路线，或者客户更愿意购买整机而不是模型，流形空间就会面临“技术很强，但价值链位置不稳”的问题。

## 横纵交汇洞察

### 历史如何塑造当下位置

流形空间今天的位置，基本由两个历史选择塑造。

第一个选择是武伟没有继续做自动驾驶。自动驾驶是他最熟的场景，也是世界模型已有基础最充分的场景。但自动驾驶的产业窗口已经不再像 2016-2020 年那样给纯算法创业公司留下巨大空白。车厂、Tier 1、智驾公司、芯片公司都在抢闭环，创业公司想靠单点模型切进去并不容易。于是流形空间绕开自动驾驶正面战场，把自动驾驶世界模型经验变成机器人和无人机世界模型。

第二个选择是先做预训练，而不是只做后训练。甲子光年访谈里，武伟反复强调没有预训练就没有 Dreaming 能力，模型在没见过的样本上就不理解物理世界规律，只能靠大量后训练数据补。这个判断直接把流形空间放到 VLA 的对照面。VLA 更像“把语言指令翻译成动作”的后训练工程；WMA 则试图让机器人先获得关于空间和物理的通识，再少量适配具体本体。

### 优势的历史根源

**优势一：世界模型经验不是空中楼阁。** DriveScape、RoboScape、AirScape 形成了自动驾驶、机器人、无人机三条子域技术线。它们至少说明团队不是只拿“世界模型”做融资词，而是有持续论文和技术报告产出。

**优势二：资本网络跨越财务 VC 与产业方。** 英诺、水木清华、锦秋、同创、君联、梅花、华为哈勃、华控、锡创投、达泰等资金进入，使公司在成立十个月内拿到“近5亿元”公开累计口径。这个融资节奏对于大模型/机器人方向非常关键，因为世界模型训练、真机数据、边缘部署都需要钱。

**优势三：它不被某一个本体绑定。** 不做本体意味着少了硬件毛利、供应链和交付压力；也意味着理论上可以服务多个机器人、无人机或 XR 硬件厂商。对于“本体多、数据少、场景碎”的具身智能行业，这个位置很诱人。

### 劣势的历史根源

**劣势一：没有公开客户，就没有商业闭环证据。** 技术报告和融资新闻证明不了客户愿意为模型付费。机器人公司可能更想把大脑模型内化，尤其是智元、星海图、千寻这类本体+模型一体化玩家。

**劣势二：WMA 路线仍未成为行业共识。** DeepMind、NVIDIA、Physical Intelligence、智元、星海图都在靠近“世界模型 + 行动”的方向，但具体范式差异很大。是 VLA 通过更多数据继续赢，还是世界模型预训练先突破泛化，还没有定论。

**劣势三：高校与论文优势不等于产品优势。** 清华渊源、arXiv 论文、榜单排名都是早期科技公司必须拥有的信用资产，但客户采购看的是稳定性、成本、边缘延迟、接口、售后、数据安全和责任边界。流形空间还需要证明自己能把论文变成可部署产品。

### 三个未来剧本

**最可能剧本：成为具身大脑模型供应商和联合研发伙伴。**  
流形空间继续拿融资、发布模型、与机器人/无人机本体公司做联合部署。它未必直接卖标准化 API，而是以项目制、模型授权、联合训练、边缘部署适配等形式进入客户。收入早期可能不大，但能换来真实数据闭环。

**最危险剧本：被本体一体化公司挤压。**  
如果智元、星海图、千寻、银河通用等公司把本体数据、机器人控制和世界模型都锁在自有体系里，独立“具身大脑公司”会很难拿到足够多、足够干净、足够高价值的真实数据。那时流形空间可能变成技术展示强、商业议价弱的模型供应商。

**最乐观剧本：WMA 成为跨本体基础范式。**  
如果 WorldScape Policy 这类路线真的能显著减少后训练数据，并在不同机器人/无人机本体上低成本迁移，流形空间的价值会从“一个模型团队”变成“物理 AI 的通用大脑层”。那时它的可比对象就不是普通机器人公司，而是机器人时代的基础模型公司。

## 证据/来源表

| 编号 | 关键事实 | source/date/entity/evidence_level | 原始来源与访问日期 |
|---|---|---|---|
| S1 | 北京流形空间科技有限公司成立于 2025-05-22，法定代表人为武伟 | source=英诺嘿呀；date=2026页面访问；entity=北京流形空间科技有限公司；evidence_level=A | [英诺嘿呀](https://www.innohere.com/ir/161952/finance.html)，访问日期：2026-05-17 |
| S2 | 官网自述探索下一代世界模型并应用于 robotics、XR equipment 等 AI hardware applications | source=Manifold AI 官网；date=2026页面访问；entity=Manifold AI；evidence_level=A | [Manifold AI 官网](https://manifoldai.cn/)，访问日期：2026-05-17 |
| S3 | 官网发布时间线包含 RoboScape、AirScape、WorldScape、WorldScape Policy 与 2026-04-30 排名声明 | source=Manifold AI 官网；date=2026页面访问；entity=Manifold AI；evidence_level=A | [Manifold AI 官网](https://manifoldai.cn/)，访问日期：2026-05-17 |
| S4 | 武伟为前商汤高管/绝影智能云研发总经理，2015年加入商汤，主导开悟世界模型研发落地 | source=甲子光年、英诺创新空间；date=2025-11-11/2025-10-21；entity=武伟；evidence_level=B | [甲子光年/新浪财经](https://finance.sina.com.cn/roll/2025-11-11/doc-infwzmka7326406.shtml)、[英诺创新空间](https://www.innospace.cn/news/detail/c28b732bf4895d1e87368ecf5ec325d4/2)，访问日期：2026-05-17 |
| S5 | 种子轮为英诺天使基金、水木清华校友种子基金，金额未披露 | source=英诺嘿呀；date=2026页面访问；entity=Manifold AI；evidence_level=A | [英诺嘿呀](https://www.innohere.com/ir/161952/finance.html)，访问日期：2026-05-17 |
| S6 | 天使轮“近亿元”，锦秋基金领投，同创伟业、英诺跟投 | source=投中网/英诺创新空间；date=2025-10-21；entity=Manifold AI；evidence_level=B | [投中网](https://www.chinaventure.com.cn/news/80-20251020-388472.html)、[英诺创新空间](https://www.innospace.cn/news/detail/c28b732bf4895d1e87368ecf5ec325d4/2)，访问日期：2026-05-17 |
| S7 | 天使+轮“超亿元”，君联资本、梅花创投、华为哈勃、英诺等参与 | source=英诺创新空间/投中网/泰伯网；date=2026-01；entity=Manifold AI；evidence_level=B | [英诺创新空间](https://www.innospace.cn/news/detail/044c3dd434675a7d4ba2fb0f22815428/2)、[投中网](https://www.chinaventure.com.cn/news/114-20260113-389742.html)，访问日期：2026-05-17 |
| S8 | 2026-01 工商新增华为哈勃、君联君智、梅岭黑马数智人等股东 | source=每日经济新闻；date=2026-01-19；entity=北京流形空间科技有限公司；evidence_level=A/B | [每日经济新闻](https://www.nbd.com.cn/articles/2026-01-19/4225630.html)，访问日期：2026-05-17 |
| S9 | Pre-A “近2亿元”，华控基金、锡创投联合领投，达泰资本跟投，老股东追加 | source=投中网/泰伯网；date=2026-03-04/05；entity=Manifold AI；evidence_level=B | [投中网](https://www.chinaventure.com.cn/news/114-20260304-390332.html)、[新浪财经/泰伯网](https://t.cj.sina.com.cn/articles/view/1877503207/6fe86ce700101g27c?from=tech&subch=otech)，访问日期：2026-05-17 |
| S10 | 成立不到十个月累计四轮近5亿元 | source=投中网；date=2026-03-04；entity=Manifold AI；evidence_level=B | [投中网](https://www.chinaventure.com.cn/news/114-20260304-390332.html)，访问日期：2026-05-17 |
| S11 | RoboScape 是物理信息驱动具身世界模型，联合 RGB、depth、keypoint dynamics | source=arXiv；date=2025-06-29；entity=RoboScape；evidence_level=A | [arXiv:2506.23135](https://arxiv.org/abs/2506.23135)，访问日期：2026-05-17 |
| S12 | AirScape 是面向六自由度 aerial agents 的世界模型，含 11k video-intention pairs 和 1000+ 小时标注 | source=arXiv；date=2025-07-10/2025-10-10；entity=AirScape；evidence_level=A | [arXiv:2507.08885](https://arxiv.org/abs/2507.08885)，访问日期：2026-05-17 |
| S13 | WorldScape 同时支持移动和操作交互，官方称单 GPU 最高 24 FPS | source=Manifold AI 官方技术页；date=2026-02-25；entity=WorldScape；evidence_level=A | [WorldScape 官方页](https://manifoldai.cn/blogs/WorldScape.html)，访问日期：2026-05-17 |
| S14 | WorldScape Policy 将 foundation world model 转成 robotic planner，联合建模 video-depth-action | source=Manifold AI 官方页/PDF；date=2026-02-28；entity=WorldScape Policy；evidence_level=A | [WorldScape Policy 官方页](https://www.manifoldai.cn/blogs/WorldScapePolicy.html)、[PDF](https://manifoldai.cn/assets/file/WorldScapePolicy.pdf)，访问日期：2026-05-17 |
| S15 | 客户、订单、收入：公开可核验信息暂缺 | source=本次公开检索；date=2026-05-17；entity=Manifold AI；evidence_level=D | 多关键词检索未找到客户名称、订单金额、部署数量或收入公告。 |
| S16 | 投中网天使+轮正文另称公司曾于 2025 年 7 月、9 月完成两轮约亿元天使轮融资 | source=投中网；date=2026-01-13；entity=Manifold AI；evidence_level=B/D | [投中网](https://www.chinaventure.com.cn/news/114-20260113-389742.html)，访问日期：2026-05-17 |
| S17 | RoboScape 论文机构为 Tsinghua University / Manifold AI；AirScape 作者机构覆盖清华、北京理工、鹏城实验室、东北大学、Manifold AI 等 | source=arXiv/PDF；date=2025-06-29/2025-10-10；entity=RoboScape/AirScape；evidence_level=A | [RoboScape arXiv](https://arxiv.org/abs/2506.23135)、[AirScape arXiv](https://arxiv.org/abs/2507.08885)，访问日期：2026-05-17 |
| S18 | WorldArena 项目页列出 Princeton、NUS、HKU 等机构，但页面未列 Manifold AI 机构归属 | source=WorldArena；date=2026页面访问；entity=WorldArena；evidence_level=A/D | [WorldArena](https://world-arena.ai/)，访问日期：2026-05-17 |

## 冲突与未确认事项

| 事项 | 冲突/不确定性 | 当前采用口径 | 需人工复核的问题 |
|---|---|---|---|
| 2025 年 7 月/9 月两轮约亿元天使轮 | 投中网 2026-01-13 天使+轮正文写“曾于2025年7月、9月完成两轮约亿元天使轮融资”；但英诺嘿呀列 2025-05-22 种子轮、2025-10-21 天使轮，投资界也写成立初期种子轮、同年10月近亿元天使轮 | 不新增“7月/9月两轮”为已确认轮次；融资主线采用“种子轮未披露、2025-10 近亿元天使轮、2026-01 超亿元天使+、2026-03 近2亿元Pre-A、四轮近5亿元” | 是否需要采购工商/企查查/天眼查或公司确认材料，核对 2025 年 7 月、9 月是否是内部交割、分批到账或媒体误写？ |
| 天使+轮领投方 | 英诺页面写“君联资本领投，梅花创投、华为哈勃跟投”；投中标题写“君联资本、同创伟业领投”，正文又写“梅花创投、君联资本、华为哈勃联合投资” | 不裁决“领投”单一归属，写“君联、梅花、华为哈勃等参与/联合投资，老股东追加” | 是否需要以后以工商股权或官方新闻稿为准统一领投方？ |
| Pre-A 日期 | 英诺嘿呀融资历史列 2026-02-19，投中/泰伯/界面等新闻集中在 2026-03-03/04 披露 | 表格保留“2026-02-19 / 2026-03-03/04”，解释为工商/平台记录日期与公告日期可能不同 | 若未来可查工商变更详情，需确认真实交割时间 |
| 累计融资近5亿元 | 公开报道给“近5亿元”，但种子未披露、天使/天使+均为模糊口径 | 只写“四轮近5亿元”，不逐轮拆算 | 是否需要采购企查查/天眼查股权融资记录核验？ |
| 联合发起人姓名 | 英诺、投中均称联合发起人来自清华，但未披露姓名 | 写“清华科研渊源明确，联合发起人姓名未公开确认” | 是否允许使用非公开渠道确认姓名和全职状态？ |
| 互联网巨头/客户合作 | 公开材料只看到团队成员曾在快手、Momenta、商汤等企业工作，未看到腾讯、阿里、字节、百度、美团等互联网巨头投资、客户、订单或联合研发公告 | 写“互联网巨头合作暂缺/待核验”；不把过往任职写成合作 | 是否需要访谈公司或投资方，确认是否存在未公开客户/联合研发？ |
| WorldArena 机构关系 | WorldArena 项目页列出 Princeton、NUS、HKU 等机构，但页面未列 Manifold AI 机构归属；Manifold 官网链接 WorldArena 并声明排名 | 只作为评测基准/榜单背景，不把国外高校写成流形空间合作方 | 后续是否需要归档 leaderboard 截图，并确认 Manifold 是否参与 WorldArena 项目组织？ |
| WorldScape 榜单第一 | 官网 2026-04-30 声明 WorldScore、WorldArena、RoboTwin 排名第一，但报告未独立抓取全部 leaderboard 截图 | 作为公司自述记录，不作为独立第三方结论 | 后续需截图或归档 leaderboard 状态 |
| 客户/订单 | 未发现可核验客户名称、订单金额、部署规模、收入 | 写“暂缺” | 是否需要访谈公司或投资方，确认低空/机器人落地客户？ |
| NVIDIA Jetson Thor | 投资方页面称已接入 Jetson Thor，但未见 NVIDIA 官方联合公告 | 作为产业适配线索，不写成 NVIDIA 官方合作 | 是否需要 NVIDIA 官方或硬件部署演示证据？ |
| 同名/混淆来源 | 公开检索中出现“清华、Uber 与 Manifold AI 共同研发 AI 科研平台”等文章，例如[搜狐/ITBEAR 转载页](https://www.sohu.com/a/975313168_362225)，内容与公司官网、融资新闻和技术材料中的“世界模型/具身大脑”定位不一致，且缺少一手来源支撑 | 判为低质量/疑似混淆来源，不纳入本报告核心结论 | 若未来出现 Manifold AI 官方或清华/Uber 官方材料，再重新核验是否为同一主体 |

## 主要来源清单

1. Manifold AI 官网，https://manifoldai.cn/，访问日期：2026-05-17。
2. WorldScape 官方技术页，https://manifoldai.cn/blogs/WorldScape.html，访问日期：2026-05-17。
3. WorldScape Policy 官方页，https://www.manifoldai.cn/blogs/WorldScapePolicy.html，访问日期：2026-05-17。
4. WorldScape Policy 技术报告 PDF，https://manifoldai.cn/assets/file/WorldScapePolicy.pdf，访问日期：2026-05-17。
5. arXiv: RoboScape: Physics-informed Embodied World Model，https://arxiv.org/abs/2506.23135，访问日期：2026-05-17。
6. arXiv: AirScape: An Aerial Generative World Model with Motion Controllability，https://arxiv.org/abs/2507.08885，访问日期：2026-05-17。
7. arXiv: DriveScape: Towards High-Resolution Controllable Multi-View Driving Video Generation，https://arxiv.org/abs/2409.05463，访问日期：2026-05-17。
8. WorldArena 项目页，https://world-arena.ai/，访问日期：2026-05-17。
9. 英诺嘿呀 Manifold AI 融资历史，https://www.innohere.com/ir/161952/finance.html，访问日期：2026-05-17。
10. 英诺创新空间：《Manifold AI流形空间获近亿元天使轮融资》，https://www.innospace.cn/news/detail/c28b732bf4895d1e87368ecf5ec325d4/2，访问日期：2026-05-17。
11. 英诺创新空间：《Manifold AI流形空间完成超亿元天使+轮融资》，https://www.innospace.cn/news/detail/044c3dd434675a7d4ba2fb0f22815428/2，访问日期：2026-05-17。
12. 投中网：《Manifold AI流形空间获近亿元天使轮融资》，https://www.chinaventure.com.cn/news/80-20251020-388472.html，访问日期：2026-05-17。
13. 投中网：《流形空间完成超亿元天使+轮融资》，https://www.chinaventure.com.cn/news/114-20260113-389742.html，访问日期：2026-05-17。
14. 投中网：《Manifold AI流形空间宣布已完成近2亿元PreA轮融资》，https://www.chinaventure.com.cn/news/114-20260304-390332.html，访问日期：2026-05-17。
15. 泰伯网/新浪财经：《世界模型公司Manifold AI流形空间宣布已完成近2亿元PreA轮融资》，https://t.cj.sina.com.cn/articles/view/1877503207/6fe86ce700101g27c?from=tech&subch=otech，访问日期：2026-05-17。
16. 每日经济新闻：《华为哈勃入股具身智能公司流形空间》，https://www.nbd.com.cn/articles/2026-01-19/4225630.html，访问日期：2026-05-17。
17. 甲子光年/新浪财经：《3个月融资亿元，流形空间证明世界模型也需要预训练》，https://finance.sina.com.cn/roll/2025-11-11/doc-infwzmka7326406.shtml，访问日期：2026-05-17。
18. 投资界：《流形空间完成超亿元天使+轮融资，君联资本、同创伟业领投》，https://news.pedaily.cn/202601/559834.shtml，访问日期：2026-05-17。
19. 搜狐/ITBEAR 混淆来源示例，https://www.sohu.com/a/975313168_362225，访问日期：2026-05-17；本文仅用于记录排除原因，不作为公司事实来源。
20. Google DeepMind Genie 3，https://deepmind.google/models/genie/，访问日期：2026-05-17。
21. NVIDIA Cosmos，https://www.nvidia.com/en-us/ai/cosmos/，访问日期：2026-05-17。
22. Physical Intelligence π0.5 arXiv，https://arxiv.org/abs/2504.16054，访问日期：2026-05-17。
23. 智元机器人 Genie Envisioner arXiv，https://arxiv.org/abs/2508.05635，访问日期：2026-05-17。
24. 星海图 Galaxea G0 arXiv，https://arxiv.org/abs/2509.00576，访问日期：2026-05-17。
25. 千寻智能官网关于我们，https://www.spirit-ai.com/about，访问日期：2026-05-17。

## 方法论说明

本报告采用横纵分析法：纵向追踪公司从成立、团队、技术、融资到商业化的演进；横向把公司放进世界模型、VLA、具身大脑和本体一体化玩家的同一时间截面中比较。所有关键判断尽量回到 source/date/entity/evidence_level，并把冲突和未确认事项保留为后续复核入口。
