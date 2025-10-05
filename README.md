# 🔥 AI-Driven Automation Framework with Playwright + MCP + GitHub Copilot

This project is a cutting-edge end-to-end test automation framework powered by **MCP server**, **GitHub Copilot**, and **Playwright**. It supports full-stack automation — including **UI automation** and **API testing** — with seamless traceability, scalability, and AI-accelerated development.

---

## 🚀 What’s Inside

- ✅ **Playwright**: Robust browser automation for modern web apps  
- ✅ **GitHub Copilot**: Assisted code generation & test coverage enhancement  
- ✅ **MCP Server**: Centralized test execution, monitoring, and CI integration  
- ✅ **Trace Viewer**: Visual debugging for all UI tests  
- ✅ **REST API Automation**: Integrated API layer validation using Playwright or REST-assured  
- ✅ **Single Command Execution**: Unified runs for UI + API with persistent trace storage

---

## 📦 Folder Structure

```bash
.
├── src/
│   ├── fixtures/        # Reusable fixtures (custom test, context)
│   └── pages/           # Page Object Model (POM)
├── tests/               # Test specs (TypeScript/JavaScript)
├── traces/              # Traces, videos, and screenshots
├── playwright.config.ts # Config: dotenv, Allure, devices, projects
├── package.json         # Scripts and dependencies
└── README.md

---

## 🚀 Quick Start

1. Install dependencies
```bash
npm i
```

2. (Optional) create `.env` at repo root
```bash
BASE_URL=https://www.saucedemo.com/
HEADLESS=false
TRACE=on-first-retry
VIDEO=retain-on-failure
SCREENSHOT=only-on-failure
```

3. Run tests
```bash
npm test
```

4. View trace
```bash
npm run trace:show
```

5. Allure report
```bash
npm run allure:open
```

6. Headed or CI modes
```bash
npm run test:headed
npm run test:ci
```
