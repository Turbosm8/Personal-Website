# 张蒙 Turbo - 个人网站

这是一个静态个人网站项目，用于展示张蒙（Turbo）的产品经历、业务方向与代表项目。

## 站点内容

- 个人简介与职业定位
- 工作经历时间线
- 电商、积分通兑联盟、Web3 钱包与支付相关业务能力
- 代表项目案例
- 联系方式

## 本地预览

在项目目录启动一个本地静态服务器后即可预览，例如：

```bash
python3 -m http.server 4173
```

然后访问：

```text
http://localhost:4173
```

## 部署方式

项目已包含 GitHub Pages 工作流配置：

- 推送到 `main` 分支后自动触发部署
- GitHub Actions 会将当前仓库内容发布到 GitHub Pages

## 项目结构

```text
.
├── index.html
├── styles.css
├── script.js
├── avatar-optimized.jpg
└── .github/workflows/deploy-pages.yml
```

## 说明

- 本项目为纯静态页面，无需构建步骤
- 建议使用 GitHub Pages 托管
- 若后续接入自定义域名，可在仓库中补充 `CNAME` 文件
