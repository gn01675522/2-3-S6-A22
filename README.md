# Express基礎驗收
　　此專案為針對 Express 功能及 git 使用方式做基礎驗收，使用方式請見下方！

## 如何執行
  首先，先確保您有下載 git bash 或其他有相同功能之 terminal 應用程式，
  並依序於該 terminal 執行以下步驟：

  1. **複製此專案於您本機資料夾，可參照以下指令：**
    <pre><code>git clone `https://github.com/gn01675522/2-3-S6-A22.git`</code>
  2. **將 terminal 路徑指向至您存放此專案之資料夾，並將路徑切換至專案資料夾：**
    <pre><code>cd restaurant</code></pre>
  3. **接著執行下列指令來安裝 npm 、 express 、 nodemon**
    <pre><code>npm install</code></pre>
    <pre><code>npm i express</code></pre>
    <pre><code>npm i nodemon</code></pre>
  4. **再來輸入下列指令：**
    <pre><code>nodemon app.js</code></pre>
  5. **若您於 terminal 中看見以下訊息，則代表成功啟動 server：**
    <pre><code>Server is listening on port:3000</code></pre>
  6. **接著在您的瀏覽器輸入 http://localhost:3000/ 即可前往專案網頁；若想要中斷執行可於 terminal 中按 ctrl + c 即可中斷！**

## 開發工具
  2. express：4.18.1
  4. nodemon：2.0.16
