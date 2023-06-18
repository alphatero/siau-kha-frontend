# 燒角 Siau Kha（點餐系統）－前端

## 專案介紹
> 台語諧音「燒烤」，意思是燒烤店，同時也有搞笑的感覺
> 題目理念：希望能打造餐廳餐點及客人管理友善的系統
- [線上觀看連結](https://siau-kha-frontend.vercel.app)

## 安裝本專案
- Node.js 版本必需為 v18.15.0
1. 取得專案
   ```
   git clone git@github.com:alphatero/siau-kha-frontend.git
   ```
2. 移動到專案中
   ```
   cd siau-kha-frontend
   ```
3. 安裝套件
   ```
   pnpm install
   ```
4. 根據 `.evn.example` 內容來調整設定
   ```
   NEXT_PUBLIC_API_URL= # API 位置
   ```
5. 運行專案
   ```
   pnpm run dev
   ```
6. 開啟專案
   在瀏覽器中前往 `http://localhost:3000` 後，輸入對應身份組的帳號密碼即可查看

## 資料夾說明
| 資料夾/檔案 | 說明 |
| --- | --- |
| `src/apps` | 根據身份組（路由）去開不同的資料夾，內有此專案主要的功能核心 |
| `src/assets` | 圖片、svg 等放置於此 |
| `src/components` | 此資料夾中含有共用的頁面配置、元件 |
| `src/hooks` | 此資料夾中放置共用的 React custom hooks |
| `src/pages` | 路由在此資料夾設定 |
| `src/services` | 像後端取得資料的 api 在此資料夾設定 |
| `src/stores` | 於此資料夾中設定全域共用的狀態管理 |
| `src/styles` | 全域的樣式檔 |
| `src/types` | TypeScript 的型別統一於此設定 |
| `src/utils` | 全域共用的函示會放在此資料夾中 |

在每個 `src/apps` 的元件中，通常會包含以下幾個檔案：
- `components/*`：此頁面所需的元件
- `hooks/*`：定義此頁面所需的 React custom hooks
- `index.tsx`：此頁面的進入點
- `stores.ts`：此頁面所需的狀態管理

## 專案使用技術
- Node.js: =v18/15/0
- Next.js: v13.3
- TypeScript: v5.0.4
- Zustand: v4.3.7
- React hook form: v7
- TailwindCSS: v3.3.1
- ESlint: next/core-web-vitals + airbnb-base
