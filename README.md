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

推荐使用 GitHub Pages 的「从分支部署」方式（无需 GitHub Actions 工作流文件）：

- 在仓库 Settings → Pages → Build and deployment 中选择 Deploy from a branch
- Branch 选择 `main`，目录选择 `/ (root)`，保存后即可自动发布

如果你希望使用 GitHub Actions 自动化工作流部署（例如后续接入构建步骤），需要将 `.github/workflows/deploy-pages.yml` 推送到仓库；该文件写入需要具备 workflow 权限的 GitHub 凭证。

## 项目结构

```text
.
├── index.html
├── styles.css
├── script.js
├── avatar-optimized.jpg
└── avatar.jpg
```

## 说明

- 本项目为纯静态页面，无需构建步骤
- 建议使用 GitHub Pages 托管
- 若后续接入自定义域名，可在仓库中补充 `CNAME` 文件
