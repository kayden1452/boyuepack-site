# 第二轮 SEO 审计报告（模拟 Googlebot 抓取）

**站点**：https://boyuepackaging.com　**审计日期**：2026-11-25　**提交**：8a46df5
**审计方式**：不执行 JavaScript，仅用 HTTP GET 抓取原始 HTML 后解析（等同 Googlebot 首轮抓取看到的内容）；本地代码与线上部署双轨校验。

## 一、总体结论

| 检查项 | 结果 |
|---|---|
| 禁用 JS 后正文是否完整 | ✅ 20 个内容页每页 625–2265 词（剥离脚本样式与导航页脚后的正文），全部为静态 HTML，无一处依赖 JS 渲染 |
| 每个 URL 能否独立打开 | ✅ 20/20 返回 200，无跳转链、无空壳页 |
| 独立 Title | ✅ 20/20 唯一，0 重复 |
| 独立 Description | ✅ 20/20 唯一，0 重复 |
| 独立 H1 | ✅ 每页恰好 1 个，0 重复，且无一页 H1 与 Title 完全相同的偷懒写法 |
| Canonical 正确 | ✅ 20/20 指向自身、统一裸域 https://boyuepackaging.com/ |
| Sitemap URL 有效性 | ✅ 20 条全部对应实际可访问页面；404 自动排除 |
| robots.txt | ✅ Allow: / ，声明 Sitemap，无阻止抓取的规则 |
| 重复内容 | ✅ 两两正文相似度最高 <0.6，无一对超过 0.6 |
| 孤立页面 | ✅ 除 404 外，每页入链 ≥3（404 不入链是正确设计） |
| 图片 ALT | ✅ 41 张图 0 空 ALT、0 泛词、0 文件名式堆砌、0 同页重复 |
| 结构化数据 | ✅ 修复后 0 错误（详见第三节） |

## 二、逐页面检查结果

| # | 页面 | 状态码 | 无JS正文词数 | Title | Desc | H1 | Canonical | 结构化数据 | 图片/ALT | 入链数 |
|---|---|---|---|---|---|---|---|---|---|---|
| 1 | 8-side-seal-bags.html | 200 | 1251 | ✅ | ✅ | 1 | ✅ | BreadcrumbList+FAQPage+Product | 1/1 | 20 |
| 2 | about.html | 200 | 625 | ✅ | ✅ | 1 | ✅ | AboutPage+BreadcrumbList | 0/0 | 20 |
| 3 | coffee-bag-material-guide.html | 200 | 692 | ✅ | ✅ | 1 | ✅ | Article+BreadcrumbList+FAQPage | 0/0 | 5 |
| 4 | coffee-bags.html | 200 | 1024 | ✅ | ✅ | 1 | ✅ | BreadcrumbList+FAQPage+Product | 2/2 | 20 |
| 5 | contact.html | 200 | 853 | ✅ | ✅ | 1 | ✅ | BreadcrumbList+ContactPage+FAQPage | 0/0 | 20 |
| 6 | digital-printing-packaging.html | 200 | 1229 | ✅ | ✅ | 1 | ✅ | BreadcrumbList+FAQPage+Product | 1/1 | 19 |
| 7 | gravure-printing-packaging.html | 200 | 1177 | ✅ | ✅ | 1 | ✅ | BreadcrumbList+FAQPage+Product | 1/1 | 19 |
| 8 | index.html | 200 | 1420 | ✅ | ✅ | 1 | ✅ | Organization | 2/2 | 20 |
| 9 | manufacturing.html | 200 | 782 | ✅ | ✅ | 1 | ✅ | BreadcrumbList | 8/8 | 20 |
| 10 | pet-food-bags.html | 200 | 1244 | ✅ | ✅ | 1 | ✅ | BreadcrumbList+FAQPage+Product | 2/2 | 20 |
| 11 | pet-food-packaging-barrier-guide.html | 200 | 695 | ✅ | ✅ | 1 | ✅ | Article+BreadcrumbList+FAQPage | 0/0 | 5 |
| 12 | pouch-type-selection-guide.html | 200 | 953 | ✅ | ✅ | 1 | ✅ | Article+BreadcrumbList+FAQPage | 0/0 | 4 |
| 13 | printed-roll-film.html | 200 | 1246 | ✅ | ✅ | 1 | ✅ | BreadcrumbList+FAQPage+Product | 1/1 | 20 |
| 14 | products.html | 200 | 2265 | ✅ | ✅ | 1 | ✅ | BreadcrumbList+CollectionPage | 17/17 | 20 |
| 15 | quality.html | 200 | 821 | ✅ | ✅ | 1 | ✅ | BreadcrumbList+WebPage | 1/1 | 20 |
| 16 | retort-pouch-structure-guide.html | 200 | 694 | ✅ | ✅ | 1 | ✅ | Article+BreadcrumbList+FAQPage | 0/0 | 5 |
| 17 | retort-pouches.html | 200 | 1276 | ✅ | ✅ | 1 | ✅ | BreadcrumbList+FAQPage+Product | 1/1 | 20 |
| 18 | spout-pouches.html | 200 | 1124 | ✅ | ✅ | 1 | ✅ | BreadcrumbList+FAQPage+Product | 2/2 | 20 |
| 19 | stand-up-pouches.html | 200 | 1075 | ✅ | ✅ | 1 | ✅ | BreadcrumbList+FAQPage+Product | 2/2 | 20 |
| 20 | stand-up-vs-flat-bottom.html | 200 | 696 | ✅ | ✅ | 1 | ✅ | Article+BreadcrumbList+FAQPage | 0/0 | 4 |
| — | 404.html | 404（预期） | 171 | ✅ | ✅ | 1 | —(noindex) | — | 0/0 | 0（预期孤立） |

## 三、本轮发现并修复的问题（2 类，共 46 处修改）

### 问题 1：5 篇技术指南的 Article 结构化数据不完整（严重）

**现象**：coffee-bag-material-guide、pet-food-packaging-barrier-guide、pouch-type-selection-guide、retort-pouch-structure-guide、stand-up-vs-flat-bottom 五页的 Article 节点只有 headline / description / author / publisher / mainEntityOfPage，缺 `image`、`datePublished`、`dateModified`、`url`。

**影响**：Google 的 Article 富媒体结果要求 `image` 和 `datePublished` 为**必填**，缺了直接判定不完整，文章类富媒体展示资格为零。这是上一轮遗漏的真实缺陷。

**修复**：按页面真实配图补 image（coffee.jpg / petfood-views.jpg / flatbottom.jpg / retort.jpg）；datePublished 取该页在 Git 中的**真实首次提交日**（11-12 或 11-16，不是编造）；dateModified 取本次修改日 2026-11-25；补 url。

### 问题 2：41 张图片全部缺 width/height（中等）

**现象**：全站 41 个 img 标签没有一个声明固有宽高，`.hero-media` 等容器虽有 aspect-ratio，但普通图文区的图片在加载前无法占位。

**影响**：图片加载完成前该区域高度为 0，图片落地瞬间把下方内容整体下推——这就是 CLS（布局偏移）的主要来源，也是 Core Web Vitals 里最容易拿分的一项。

**修复**：读每张图真实像素尺寸，写 `width`/`height` 属性；CSS 里 `img{max-width:100%}` 保证实际显示仍自适应，只增加「加载前就知道比例」这一层信息。41/41 全部补齐，线上已核验生效（如 stand-up-pouches 页 `width="1200" height="900"`）。

### 另核实：一个不是问题的问题

我第一版校验脚本报「5 个指南页 Organization 缺 url」，逐字核对后是**我的校验器递归错误**——它把 `@graph` 里嵌套的 Organization 当成顶层实体取了错的字段。站点本身写法正确。已修正校验器，避免误报。

## 四、逐项详查记录

**1. 禁用 JavaScript 后正文是否完整**
剥离 script/style/nav/footer 后统计（与上表数字一致）：index 1420 词、products 2265 词、9 个产品页 1024–1276 词、5 篇指南 692–953 词、about 625 词。所有正文段落都在静态 HTML 里，唯一用到 JS 的是 GA4 统计与移动端菜单开合，不影响内容。

**2. 每个 URL 是否独立打开**
20 个页面直接 GET 均返回 200，内容长度 16KB 级别，非空壳。4 个页面首轮返回 000（DNS/连接层抖动），逐个重试全部 200，可判定为网络抖动而非站点故障。404 页面对不存在路径正确返回 404 状态码，而非 200 软 404。

**3. Title / Description / H1**
21 个页面 21 个唯一 Title、21 个唯一 Description，无一为空；每页恰好 1 个 H1，21 个 H1 两两不同，也无一页照抄 Title。

**4. Canonical**
20 个内容页 canonical 全部等于自身 URL 且统一 `https://boyuepackaging.com/` 裸域，与 www→裸域 301、http→https 301 的跳转链一致，不会产生「canonical 指向的地址又跳转」的浪费。404 页无 canonical，符合规范。

**5. Sitemap**
线上 sitemap.xml 20 条，本地重跑 `gen_sitemap.py` 输出 20 条，与提交版本逐字节一致（构建无差异）；20 条全部对应真实存在的 HTML 文件；404.html 被自动识别并排除。

**6. robots.txt**
`User-agent: * / Allow: / / Sitemap: https://boyuepackaging.com/sitemap.xml`。无 Disallow，无 noindex 误设；20 个内容页 robots meta 均为 `index,follow`，404 页为 `noindex,follow`。

**7. 重复内容**
两两比较 21 个页面剥离公共导航页脚后的正文，最高相似度低于 0.6，全部为各自独立的产品/指南内容。9 个产品页虽然共用同一套模板结构，但 H1、产品描述、材料表、FAQ 问题与答案均为各自独立撰写，不构成模板化重复。

**8. 孤立页面**
统计 20 个内容页的入链数量：index 入链 20（每页页脚都链回首），其余内容页入链 ≥3。唯一 0 入链的是 404.html——404 页本就不应被站内链接指向，这是正确状态，不是缺陷。9 个产品页除页脚固定链接外，还各有 3 条 Related Products 交叉链接与 products.html 卡片直链，形成 首页→分类→详情→联系 的完整闭环。

**9. 图片 ALT**
41 张图逐张检查：无空 ALT、无 image/photo 之类泛词、无把文件名直接塞进 ALT 的堆砌、同一页面内无重复 ALT。样例：`Custom printed stand-up doypack pouches with zipper for snacks, nuts, tea and dried food`、`Stand-up doypack pouch shown from front, side and bottom reference angles`——描述的是画面实际内容与用途，不是关键词表。

**10. 结构化数据完整性**
按顶层实体逐个校验共 53 个实体节点：BreadcrumbList 19、FAQPage 15、Product 9、Article 5、Organization 1、AboutPage/ContactPage/CollectionPage/WebPage 各 1。校验规则含：面包屑 position 连续且从 1 开始、item 为绝对 URL 且指向本站、Product 必含 name/description/url/image/brand 且**不含 offers 与 aggregateRating**（遵守不虚构价格评分）、FAQ 每个问题有 name 且答案有 text、Article 必含 headline/description/image/datePublished/dateModified/author/publisher/url、Organization url 为本站绝对地址。**修复后 0 错误。**（首页未设 BreadcrumbList：首页为目录根节点，面包屑对首页意义有限，不是缺陷。）

## 五、构建与部署

```
HTML 结构校验（标签闭合）: 21/21 通过
JSON-LD 解析: 全部通过，0 失败
sitemap 重建: 20 条，与提交版本无差异
站内链接: 0 死链    图片引用: 0 缺失
根目录 git status: 干净，无未提交改动
```

提交 `8a46df5` — SEO audit round 2: complete Article schema (image/datePublished/dateModified) and add intrinsic width/height to all images，已推送 main，GitHub Pages 部署完成，线上已逐项核验生效。

## 六、仍然需要你人工做、我做不了的

1. **Google Search Console 的「网址检查」**：我无法调用 GSC API，因此「Google 是否真的能抓取并收录」只有你能在后台确认。建议提交后逐页用 URL Inspection 检查 9 个产品页，看是否报「已发现 - 尚未编入索引」或结构化数据错误。
2. **结构化数据的富媒体资格**：Google 的富媒体测试工具是官方后台能力，我这边只能保证语法与必填字段合规；FAQ 富媒体在 2023 年后 Google 已大幅收缩展示范围，即便合规也可能不显示，这属于平台策略不是站点错误。
3. **Core Web Vitals 实测**：本轮已消除 CLS 的已知成因（图片无尺寸），但 LCP/INP 需要真实用户数据或 PageSpeed Insights 才能测，静态站无法本地复现。
4. **图片文件名未改**：仍是原有英文名，非 `custom-stand-up-pouch.jpg` 这类关键词文件名。原因与上一轮相同——40 多张图被 20 页引用，改名遗漏一处即图片 404，风险大于收益，且文件名对排名权重很低。

**边界声明**：本报告所有数字均来自本轮实际抓取与解析，未使用任何推测值。**不能据此声称网站已被 Google 收录或排名将提升**——收录与排名只有 GSC 后台数据能确认。