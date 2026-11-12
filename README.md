# Boyue Packaging — B2B Flexible Packaging Website

纯静态英文 B2B 包装厂官网，可直接部署到 GitHub + Cloudflare Pages，永久免费托管。

## 目录结构

```
boyuepack-site/
├── index.html          # 首页
├── products.html       # 产品页（6 类包装袋）
├── about.html          # 关于我们
├── contact.html        # 询盘表单（Formspree）
├── css/style.css       # 全站样式（响应式）
├── js/main.js          # 移动端菜单
├── images/             # 产品占位 SVG
├── robots.txt
└── sitemap.xml
```

## 上线步骤

### 1. 上传到 GitHub
1. 登录 github.com，新建仓库（名字如 `boyuepack-site`，Public / Private 均可）。
2. 把本文件夹内全部文件上传到仓库根目录（main 分支）。

### 2. Cloudflare Pages 部署
1. 登录 dash.cloudflare.com → Workers & Pages → Create → Pages → Connect to Git。
2. 授权 GitHub，选中本仓库。
3. 构建设置（纯静态，不填构建命令）：
   - Production branch：`main`
   - Build command：留空（或填 `exit 0`）
   - Build output directory：`/`
4. Save and Deploy，约 1 分钟后得到 `xxx.pages.dev` 免费地址。

### 3. 绑定独立域名（可选）
Pages 项目 → Custom domains → Add a domain（如 `boyuepack.com`），按提示在域名商处把 DNS 托管到 Cloudflare，等待生效。

## 上线前必须替换的占位内容

| 位置 | 占位 | 改成 |
| --- | --- | --- |
| 全站邮箱 | 已填 yh19953322028@outlook.com | 上线后核对 |
| 全站电话 | 已填 +86 19953322028 | 上线后核对 |
| 各页面 canonical / og:url / sitemap | https://www.boyuepack.com/ | 你的真实域名 |
| contact.html 表单 | `https://formspree.io/f/XXXXXXX` | 注册 formspree.io 后替换成你的表单 endpoint |
| index.html 注释中的 GA4 | G-XXXXXXXXXX | 你的 GA4 测量 ID（可选） |
| images/*.svg | 占位图 | 后续替换成真实产品照片（压缩后放入 images/） |

## 谷歌配套（上线后做）
1. 提交 Google Search Console，验证域名，上传 `sitemap.xml`。
2. 安装 GA4（index.html head 已留好注释位置）。
3. 表单提交设为谷歌广告转化。

## 本地预览
```
cd boyuepack-site
python3 -m http.server 8000
# 浏览器打开 http://localhost:8000
```
