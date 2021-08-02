## 說明

拿JS30範例練習Vue框架

[GitHub - wesbos/JavaScript30: 30 Day Vanilla JS Challenge](https://github.com/wesbos/JavaScript30)

****

## 01 - JavaScript Drum Kit

### **transitionend 事件**

transitionend 事件在CSS 完成過渡後觸發。如果過渡在完成前移除，例如 CSS transition-property 屬性被移除，過渡事件將不被觸發

### **HTML Audio/Video DOM currentTime 属性**

currentTime 屬性設置或返回音頻/視頻播放的當前位置（以秒計）。

當設置該屬性時，播放會跳躍到指定的位置。
**如果要連續觸發要將currentTime設為0 ( 從頭開始 )**

[vue组件中如何给div绑定keydown等键盘事件 · Issue #8981 · vuejs/vue · GitHub](https://github.com/vuejs/vue/issues/8981)

([vue.js中内联样式style、class三元表达式_人间草木-CSDN博客_vue中class三元表达式](https://blog.csdn.net/qq_43258252/article/details/86677256))

****

## 02 - JS and CSS Clock

[css - vueJS transform rotate style inline - Stack Overflow](https://stackoverflow.com/questions/48381670/vuejs-transform-rotate-style-inline)

[Vue mounted方法中使用data变量](https://blog.csdn.net/VcStrong/article/details/89917172)

****

## 03 - CSS Variables

["Variables" | Can I use... Support tables for HTML5, CSS3, etc](https://caniuse.com/?search=Variables)

[unsplash_pictureUrl](https://source.unsplash.com/)

***

## 04 - Array Cardio Day 1

sort()內部的function回傳負數或0不會替換位置；回傳正數才會替換位置

[Array.prototype.reduce() - JavaScript | MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)

****

## 05 - Flex Panel Gallery

[突然間的思考（一）：setTimeout究竟需不需要執行完進行clearTimeout?你開心就好...](https://juejin.cn/post/6844903937238106126)

[你所不知道的setTimeout | 晚晴幽草轩](https://www.jeffjade.com/2016/01/10/2016-01-10-javacript-setTimeout/)

****

## 06 - Type Ahead

[regex101](https://regex101.com/)

[正規表示式 - 線上產生器](https://cloudlab.tw/wp/sampleFiles/RegExp/)

fetch  沒有支援progress

pure function 不改變傳進去東西和他自己的東西，回傳產出的東西（工具型的函式）

replace  VS RegExp  差別 RegExp 可以設置g  i ....

toLocaleString()

​/\B(?=(\d{3})+(?!\d))/g

/\Be/g前面要有東西    /e\B/g後面要有東西   /\Be\B/g前後面要有東西  ；​\b是單字的最左和最右，\B就相反不能是最左最右

()小括號是群組；{}大括號是要有幾次；+至少一次

[正则表达式案例分析 （一）](https://gitee.com/janking/Infinite-f2e/issues/IDWPH)

[電子書](https://zhuanlan.zhihu.com/p/27653434)

[regexper.com](https://regexper.com/)

***

## 07 - Array Cardio Day 2

Array.prototype.some()、Array.prototype.every()、 Array.prototype.find()、Array.prototype.findIndex() 使用、解構附值

***

## 08 - Fun with HTML5 Canvas

[CanvasRenderingContext2D.globalCompositeOperation 混合模式操作 MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/globalCompositeOperation)

***

## 09 - Dev Tools Domination

[瀏覽器console.log()外的一些其他用法](https://ithelp.ithome.com.tw/articles/10209871)

- %d表示數位數字(digital)
- %f表示浮點數(float)
- %s表示字串(string)一樣
- %c，與其對應的是一個CSS格式的字串

```javascript
console.log("%cHello %cWorld", "color:red;", "color:blue;background:yellow")
```

[JavaScript中不得不說的斷言?](https://codertw.com/%E7%A8%8B%E5%BC%8F%E8%AA%9E%E8%A8%80/668729/)

console.dir()在中顯示顯示指定 JavaScript 對象的屬性時，還通過文件樹樣式的交互列表顯示。(會列出class和ID的值)

console.groupCollapsed() 方法用於設置折疊的分組信息，在這個代碼以下執行輸出的信息都會再折疊的分組裡。 點擊擴展按鈕打開分組信息。
提示: 使用 console.groupEnd() 方法來結束當前的分組。
提示: 使用 console.group() 方法來設置不折疊的分組信息。

```javascript
  // Grouping together  console分組
    const dogs = [
      { name: "Snickers", age: 2 },
      { name: "hugo", age: 8 },
      { name: "Amy", age: 27 },
    ];

    //不展開分組
    dogs.forEach(dog => {
      console.groupCollapsed(`${dog.name}`);
      console.log(`This is ${dog.name}`);
      console.log(`${dog.name} is ${dog.age} years old`);
      console.log(`${dog.name} is ${dog.age * 7} dog years old`);
      console.groupEnd(`${dog.name}`);
    });

    //展開分組
    dogs.forEach(dog => {
      console.group(`${dog.name}`)
      console.log(`This is ${dog.name}`);
      console.log(`${dog.name} is ${dog.age} years old`);
      console.log(`${dog.name} is ${dog.age * 7} dog years old`);
      console.groupEnd(`${dog.name}`);
    });
```

console.count 計數

```javascript
    console.count('Wes');
    console.count('Wes');
    console.count('Steve');
    console.count('Steve');
    console.count('Wes');
    console.count('Steve');
    console.count('Wes');
    console.count('Steve');
    console.count('Steve');
    console.count('Steve');
    console.count('Steve');
    console.count('Steve');
```

console.table()表格

timing 執行時間計算  console.time()、console.timeEnd()

```javascript
    console.time('fetching data');
   fetch('https://api.github.com/users/wesbos')
     .then(data => data.json())
     .then(data => {
       console.log(data);
     });
   console.timeEnd('fetching data');
```

****

## 10 - Hold Shift and Check Checkboxes

input checkbox type，checked屬性為checkbox時，表示輸入是否被選中。設置的屬性設置可以為checked="checked"，或簡單地設置為checked。

****

## 11 - Custom Video Player

[:fullscreen - CSS（层叠样式表） | MDN](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:fullscreen)

[:fullscreen| Can I use](https://caniuse.com/?search=%3Afullscreen)

[::-webkit-slider-runnable-track - CSS（层叠样式表） | MDN](https://developer.mozilla.org/zh-CN/docs/Web/CSS/::-webkit-slider-runnable-track)

[::-webkit-slider-thumb - CSS（层叠样式表） | MDN](https://developer.mozilla.org/zh-CN/docs/Web/CSS/::-webkit-slider-thumb)

[HTMLMediaElement.currentTime - Web API 接口参考 | MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLMediaElement/currentTime)

常見影片操作：常影片通常會把影片放到youtube再崁到網頁裡可以降低server的負擔；短影片會做為背景影音作循環撥放，但就不是像第11天的範例一樣操作影片

[&lt;video&gt; - HTML（超文本标记语言） | MDN](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/video)

[HTMLMediaElement: timeupdate | MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLMediaElement/timeupdate_event)

[HTML <input> 标签的 step 属性](https://www.w3school.com.cn/tags/att_input_step.asp)

預設< video >的controls屬性就包含對影片基本的控制 ( 暫停/撥放、音量、全螢幕、下載、子母畫面 )

主流影片格式，例如：mp4

Vue 的$event操作，例如:@click='progressBarHandle($event)'

```javascript
//用中括號取物件屬性 ( key或index都可以使用 )
const method = video.paused ? "play" : "pause";
video[method]();
//避免if else判斷的分歧，比較精省
```

```javascript
//將狀態管理和畫面管理分成2個function去耦合
//使用者 > 操作video > video狀態更新畫面
// 撥放 / 暫停=>狀態切換
function togglePlay() {
  const method = video.paused ? "play" : "pause";
  video[method]();
}

// 撥放 / 暫停=>畫面切換
function updateButton() {
  const icon = this.paused ? "►" : "❚ ❚";
  toggle.textContent = icon;
}   

video.addEventListener("click", togglePlay);
video.addEventListener("play", updateButton);
video.addEventListener("pause", updateButton);
```

拖曳操作：算座標、滑鼠按下開啟、滑鼠放開關閉（移動端要用 touch事件）

```javascript
progress.addEventListener("mousemove", (e) => mousedown && scrub(e));
```

```javascript
//<button data-skip="-10" class="player__button">« 10s</button>
//<button data-skip="25" class="player__button">25s »</button>
function skip() {
  video.currentTime += parseFloat(this.dataset.skip);
}
```

****

## 12 - Key Sequence Detection

應用：活動案的彩蛋

keydown  按著會連續觸發；keyup起來才會觸發一次

e.key    VS  e.keycode    ，e.key會有大小寫議題

比對兩個陣列內容一不一樣的思路：轉字串、跑迴圈、資料比對

```javascript
 splice第一、二個參數是負數的時候不會切東西出來
 pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);
 //​keyArr.splice(0, input.length - secretCode.length);
```

練習範例：注意監聽的感應區域

***

## 13 - Slide in on Scroll

[JS 30 - 13 - Slide in on Scroll](https://ithelp.ithome.com.tw/articles/10205963)

<!-- wesbos範例圖片加載進入的位置在圖片尾部，練習的範例希望在中間(本範例其實不用用vue做，mounted裡面的程式和debounce一樣放在不外部也可以) -->

可以用console.log(new Date().getTime())測試校驗

debounce做計時器的包裝(延遲)

call 、apply的差別＝＞傳遞參數的方始

```javascript
 //debounce =>好處可以讓事件觸發不會過於頻繁；缺點是可能導致效果延遲使用體驗驗卡頓      
 function debounce(func, wait = 20, immediate = true) {
      var timeout;
      return function() {
        var context = this, args = arguments;
        var later = function() {
          timeout = null;
          if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
      };
    };
```

閉包觀念：通常除了呼叫他，他自己運用修改，沒有其他的方式修改內部內容

```javascript
let fun=function(num){
    //設計參數
    let count=num

    //設計操作功能
    return function(){console.log(++count)}
}
let num=fun(0)

num()
num()
num()
```

```javascript
let fun=function(num){
    //設計參數
    let count=num

    //設計操作功能
    return { 
        add(){
            console.log(++count)
        },
        get(){
            console.log(num)
        }
    }
}
let num=fun(0)
num.get()
num.add()
num.get()
```

捲軸相關事件：scroll 卷軸、mousewhell 滑鼠滾輪

window.scrollTop(X,Y)  、scrollY、scrollTop

```javascript
let windowTop=window.scrollY;
let windowBottom=windowTop+window.innerHeight;
let img document.querySelector('img')
if(img.offsetTop<windowBottom){   //頭進來，看到比較少的動畫過程
    img.classList.add('active')
}

if(img.offsetTop+img.height <windowBottom){   //屁股進來，看到很多留白
    img.classList.add('active')
}
if(img.offsetTop+img.height/2 <windowBottom){   //肚子進來，適中
    img.classList.add('active')
}
```

橫向捲軸應用：[範例：東森新聞 - 新聞在哪裡 東森就在哪裡](https://news.ebc.net.tw/) 、  [jQuery - 滚动条插件 NiceScroll 使用详解（滚动条美化）](https://www.hangge.com/blog/cache/detail_1931.html)

【debounce 事件延遲 VS throttle 函數節流】
[【underscore.js】[javascript] throttle 與 debounce，處理頻繁的 callback 執行頻率](https://blog.camel2243.com/2017/06/05/javascript-throttle-%E8%88%87-debounce%EF%BC%8C%E8%99%95%E7%90%86%E9%A0%BB%E7%B9%81%E7%9A%84-callback-%E5%9F%B7%E8%A1%8C%E9%A0%BB%E7%8E%87/)
[lodash___debounce](https://lodash.com/docs/4.17.15#debounce)
[lodash___throttle](https://lodash.com/docs/4.17.15#throttle)

[JS throttle與debounce的區別](https://segmentfault.com/a/1190000014292298)
debounce：延遲函數的執行，在函數最後一次調用時刻的wait毫秒之後，停止之後再執行的行為，將一個連續的調用歸為一個。
throttle：創建並返回一個像節流閥一樣的函數，當重複調用函數的時候，最多每隔指定的wait毫秒調用一次該函數；

[【underscore】一句話說清楚_.throttle和_.debounce的區別](https://www.tangshuang.net/3133.html)
雖然在等待時間內函數都不會再執行，但_.throttle在第一次觸發後開始計算等待時間，_.debounce在最後一次觸發之後才計算等待時間（最後一次在等待時間範圍內）。

應用範例：debounce=>mouseover ( chrome線上應用程式商店hover效果 )，其他的throttle應用比較多

lazyload(data系列或是框架) [範例](#)

***

## 14 - JavaScript References VS Copying

【array】
複製array的方法(以下都是淺拷貝)

```javascript
  // with array
  const players = ["Wes", "Sarah", "Ryan", "Poppy"];
  const players2 = ["Wes", "Sarah", "Ryan", "Poppy", [1, 2, 3]];


  //淺考貝
  const team2 = players.slice();
  const team3 = [].concat(players);
  const team4 = [...players];
  const team5 = Array.from(players);
```

[輕鬆淺拷貝的陣列 Array 方法 slice()](https://ithelp.ithome.com.tw/articles/10224915) 

slice() 不給參數就什麼都給你。所以可以當作數組的淺拷貝，但遇到多維的深拷貝就失效
slice() 會回傳一個新陣列物件

```javascript
//arr.slice([begin[, end]])
//如果第二個參數是負數，表示從陣列的尾端算回來。
//arr.slice()===arr.slice(0)=>不給參數就什麼都給你

const friends1 = ['Ayda', 'Phi', 'Alex', 'Chris', 'Tracy', 'Thomas', 'Jean'];

// 從索引值 1 擷取 至 2 (2+1=3) 
const friends2 = friends1.slice(1, 3);
friends2; // [ 'Phi', 'Alex' ]

// 只要第二個參數是 0 就會回傳空陣列
const friends3 = friends1.slice(1, 0);
friends3; // []

// -2 是從尾端開始數回來
const friends4 = friends1.slice(2, -2);
friends4; // [ 'Alex', 'Chris', 'Tracy' ]

const friends5 = friends1.slice(2, 2);
friends5; // []
```

比較splice
splice會改變原數組

```javascript
array.splice(start[, deleteCount[, item1[, item2[, ...]]]])
```

【object】
複製object的方法

```javascript
const wes = {
  name: 'Wes',
  age: 100,
  social: {
    twitter: '@wesbos',
    facebook: 'wesbos.developer'
  }
};

//淺拷貝
const dev = Object.assign({}, wes);
let obj={...wes}

//深拷貝
const dev2 = JSON.parse(JSON.stringify(wes));
```

Object.assign()被用來複製一個或多個物件自身所有可數的屬性到另一個目標物件。回傳的值為該目標物件。

[Object.assign()的使用](https://www.796t.com/article.php?id=87234) 

深拷貝方法：JSON.stringify()、JSON.parse()     (不支援函式拷貝)

```javascript
let obj1 = {
  a: 1,
  b: 2,
};
let obj2 = JSON.parse(JSON.stringify(obj1));
console.log(obj2) //{a: 1, b: 2}
obj2.c=3 
console.log(obj1) //{a: 1, b: 2}
console.log(obj2) //{a: 1, b: 2, c: 3}
```

用遞歸實現深拷貝(函式也能拷貝)

```javascript
function checkType(item) {
  return Object.prototype.toString.call(item).slice(8, -1)  //判斷型別
}
function deepClone(item) {
  let type = checkType(item)
  let result
  if (type === "Object") {  //處理物件型別
    result = {}
  } else if (type === "Array") {  //處理陣列型別
    result = []
  } else {    //處理基本型別
    result = item
  }
  for (let i in item) {
    let value = item[i]
    let valueType = checkType(value)
    if (valueType === "Object" || valueType === "Array") {
      result[i] = deepClone(value)  //遞歸
    } else {
      result[i] = value
    }
  }
  return result
}


let obj = {
  a: 1,
  b: {
    c: 2
  },
  foo(){
    console.log(1)
  }
}
let obj2=deepClone(obj)
obj.a=99
console.log(obj) //{a: 99, b: {…}, foo: ƒ}
console.log(obj2) //{a: 1, b: {…}, foo: ƒ}
obj2.foo=function(){
  console.log(99)
}
obj2.foo() //99
obj.foo() //1
```

****

## 15 - LocalStorage

[Window.localStorage___MDN](https://developer.mozilla.org/zh-TW/docs/Web/API/Window/localStorage)
[[JavaScript] localStorage 的使用](https://medium.com/%E9%BA%A5%E5%85%8B%E7%9A%84%E5%8D%8A%E8%B7%AF%E5%87%BA%E5%AE%B6%E7%AD%86%E8%A8%98/javascript-localstorage-%E7%9A%84%E4%BD%BF%E7%94%A8-e0da6f402453)
[ICON工具](https://thenounproject.com/search/?q=fish&i=589236)

chrome開發者工具__sources看讀了那些檔案()snippets)、network看呼叫那些API讀了那些檔案

【Local Storage】

- 本地儲存庫

- key value可以儲存文字、數字（不能記物件）

- 不主動刪除，記錄不會不見

- 5~10MB

- 使用上注意使用者開二個視窗會發生什麼事？

- 只依照key做對應(如果使用者開2個視窗，會發生什麼事)

【Cookie 】

- 用於登錄、驗證

- 4K

【Session Storage 】

- 單次執行（Session概念）

- 記在本地端（Session記在服務器，佔服務器端資源）

【IndexedDB】

- 可以練習資料管理

- 相 容性不錯

【Web SQL】

- 棄用

- W3C Web 應用工作組（Web Applications Working Group）已於2010年11月停止研究該規範，理由是凡是使用Web SQL 資料庫的瀏覽器對應的資料庫管理系統均為SQLite，無法在其他資料庫管理系統上實現，因此Web SQL 資料庫無法繼續成為W3C的推薦規範。

- ​[match]([String.prototype.match() - JavaScript | MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/match)) 跟[matches]([Element.matches() - Web API 接口参考 | MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/Element/matches))

[vue中v-if和v-for不建議同時使用的坑](https://zhuanlan.zhihu.com/p/147882950)

****

## 16 - Mouse Move Shadow

解構賦值

```javascript
  const { offsetWidth: width, offsetHeight: height } = hero;
  let { offsetX: x, offsetY: y } = e;
```

offsetX、offsetY和e.target互相影響

左右平衡計算 :  0~1  ，-1~1=>x2-1   ，　0 x 2-1 ~0 x 2-1  

****

## 17 - Sort Without Articles

[String.prototype.replace()___MDN](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/String/replace)
replace() 返回新字串，但原始的字串會保持不變。
正則：//=>宣告正則、^=>從頭開始、()=>分組、|=>或、i=>忽略大小寫

****

## 18 - Adding Up Times with Reduce

資料處理練習，沒有使用Vue框架

*****

## 19 - Webcam Fun
Webcam  API

一個點由RGBA(四個值)組成

去背 ( 邊緣演算法 ) JS：OpevCV.js

roDURL() 轉成base64

insertBefore() ， DOM操作API

延伸應用：彈幕（canvas）

[navigator 物件讓你可以存取使用者的瀏覽器資訊](https://www.fooish.com/javascript/navigator.html)

[MediaDevices.getUserMedia()___MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/MediaDevices/getUserMedia)

[HTML DOM Video 对象](https://techbrood.com/jsref?p=dom-obj-video)

[Day04 你知道 setTimout、setInterval、requestAnimationFrame API 三者的關係嗎](https://zh-tw.coderbridge.com/series/dd90bf7c9656467cb47636c37faf79f3/posts/a417d1e1f8034469ae3f460dfa63b5a3)

[HTMLMediaElement.currentTime__MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLMediaElement/currentTime)會以秒為單位返回當前媒體元素的播放時間

[HTMLCanvasElement.toDataURL()](https://developer.mozilla.org/zh-TW/docs/Web/API/HTMLCanvasElement/toDataURL)  回傳base64的圖像

[HTML <a> download Attribute](https://www.w3schools.com/tags/att_a_download.asp)

[Node.insertBefore()](https://developer.mozilla.org/zh-TW/docs/Web/API/Node/insertBefore)
父節點.insertBefore(新增節點, 參考節點(位置));
如果 referenceNode 為 null，則將 newNode 插入到子節點列表的末尾。

[HTML 音頻/視頻DOM canplay 事件](http://www.w3big.com/zh-TW/tags/av-event-canplay.html)  當瀏覽器能夠開始播放指定的音頻/視頻時，會發生canplay 事件

******

## 20 - Speech Detection
★不需要資料管理，沒有使用vue框架 ★
語音辨識API

用google的server

[contenteditable_MDN](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Global_attributes/contenteditable)  contenteditable屬性就可以直接讓HTML元件具備編輯的功能

speechSynthesis 語音合成(文字轉語音)
speechRecognition 語音識別(非同步語音識別)
如果是在prefixed interface下，則window.SpeechRecognition需要前綴
變成webkitSpeechRecognition

[SpeechRecognition - Web APIs | MDN](https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition)

[caniuse__SpeechRecognition](https://caniuse.com/?search=SpeechRecognition%20)  Edge、Chrome、safari 支援

[SpeechRecognitionAlternative.transcript___MDN](https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognitionAlternative/transcript)

[SpeechRecognitionResult.isFinal___MDN](https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognitionResult/isFinal)


【應用練習】
 ★ ★語音記事本 ★ ★


*******

## 21 - Geolocation
★不需要資料管理，沒有使用vue框架 ★

Geolocation 地理定位API

[地理位置定位 (Geolocation)](https://developer.mozilla.org/zh-TW/docs/Web/API/Geolocation_API)

[Geolocation.getCurrentPosition()_MDN](https://developer.mozilla.org/zh-TW/docs/Web/API/Geolocation/getCurrentPosition) 
Geolocation.getCurrentPosition() 方法用來獲取設備當前的位置

[Geolocation.watchPosition()___MDN](https://developer.mozilla.org/zh-TW/docs/Web/API/Geolocation/watchPosition)
和 setTimeout一樣宣告的時候要命名(清除用)
這個函式將回傳一組 ID 編號，此編號搭配 Geolocation.clearWatch() 函式，即可停止更新使用者的位置。

******

## 22 - Follow Along Link Highlighter
★不需要資料管理，沒有使用vue框架 ★

[Element.getBoundingClientRect()](https://developer.mozilla.org/zh-CN/docs/Web/API/Element/getBoundingClientRect)
用於返回元素的大小和相對於視口的位置，回傳值是一個物件，包含width、height、x、y、top、right、bottom、left

要做全域畫面的話，就要處理卷軸位置 ( 因為getBoundingClientRect() 是依整個視口位置再算做座標 )；純粹區域內可以用offectTop、offectLeft ( 主選單效果應用 )******

-----

## 23 - Speech Synthesis
★不需要資料管理，沒有使用vue框架 ★

語音閱讀 API，IE不支援

new SpeechSynthesisUtterance()
[SpeechSynthesisUtterance___MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/SpeechSynthesisUtterance)
Speech 言語、Synthesis 合成、Utterance 發聲/表達/說話


[voice屬性](https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesisUtterance/voice)、[cancel()方法](https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/cancel)、[speak()方法](https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/speak)

接口的voice屬性 SpeechSynthesisUtterance獲取和設置將用於說出話語的聲音

接口的cancel()方法SpeechSynthesis從話語隊列中移除所有話語。如果當前正在說話，說話將立即停止。

voiceschanged 事件

getVoices( )、speak( )、cancel( )


```javascript
//選取器使用方式參考
  const options = document.querySelectorAll('[type="range"], [name="text"]');
  const xxx= document.querySelectorAll("[class*=col]")
```

```javascript
  function setOption() {
   console.log(this.name, this.value);
   msg[this.name] = this.value;
   toggle();
 }
 //name的取名設計和value對照，精簡寫法＝＞不用額外判斷或 function 設計
  options.forEach(option => option.addEventListener('change', setOption));
```

【其他】
get系列的選取器可以跑for迴圈或是想辦法轉成數組(Array.from...)
偽元素、虛擬元素在JS沒辦法處理


******

## 24 - Sticky Nav
★不需要資料管理，沒有使用vue框架 ★

****

## 25 - Event Capture, Propagation, Bubbling and Once
 ★ 複習事件冒泡與事件捕獲，沒有使用Vue框架 ★ 
[EventTarget.addEventListener()__MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/EventTarget/addEventListener)

addEventListener() 第三個參數可以傳布林值或是物件(capture、once、passive、signal)。第三個參數預設值是false，即不使用事件捕獲。所以不設置的話addEventListener()都是走事件冒泡

e.target.className  VS  this.classList.value

```javascript
  function showClassName() {
    // console.log(e.target.className)
    console.log(this.classList.value)
  }
```

*****

## 26 - Stripe Follow Along Nav
 ★不需要資料管理，沒有使用vue框架 ★
分2次加class，是為了互動動畫的節奏和層次和判斷是否加第2個class ( 狀態控制 )

```javascript
setTimeout(() => this.classList.contains('trigger-enter') && this.classList.add('trigger-enter-active'), 150);
```
[CSSStyleDeclaration.setProperty()](https://developer.mozilla.org/zh-CN/docs/Web/API/CSSStyleDeclaration/setProperty)

【其他】
mouseover、mouseout=>targer ; mouseleave 、mouseented=>currtarger ( 沒辦法用委派的概念 ) 

e.composedPath()


*******

## 27 - Click and Drag
拖曳狀態處理：計算相對地移動
1.開始（按下mousedown）
2.進行中 ( mousemove)
3.結束 ( mouseup、mouseleave )



pageX不是用絕對座標

手機要用touch系列 ( touchstart、touchmove、touchen  d )

拖曳的時候注意文字、圖片、連結的預設事件

*******

## 28 - Video Speed Controller
0-1範圍調整公式：（0-1）* ( 大 - 小 )  + 小
[Number.prototype.toFixed()](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed)
toFixed(num) 方法會使用定點小數表示法（fixed-point notation）來格式化數字。
num 顯示數值至多少個小數點，範圍由0到20之間


**********


## 29 - Countdown Timer

********


## 30 - Whack A Mole
[Event.isTrusted___MDN](https://developer.mozilla.org/zh-TW/docs/Web/API/Event/isTrusted)
用proxy概念實作資料驅動畫面 
