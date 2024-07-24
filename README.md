# TypeScriptNote

## 簡介

- 用來測試 Typescript 一些寫法的專案

## 安裝運行環境

需要先去安裝 bun  
用 bun 指令去運行

### Window 安裝指令

```sh=
powershell -c "irm bun.sh/install.ps1 | iex"
```

### Linux 安裝指令

```sh=
curl -fsSL https://bun.sh/install | bash
```

## 推薦 Vscode 插件

- Code Runner

#### 使用

先到 settings.json 添加

```
  "code-runner.executorMap": {
    "typescript": "bun"
  },
```

運行快捷鍵

```
ctrl + F8
```
