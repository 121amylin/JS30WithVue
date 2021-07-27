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

```javascript=
console.log("%cHello %cWorld", "color:red;", "color:blue;background:yellow")
```

[JavaScript中不得不說的斷言?](https://codertw.com/%E7%A8%8B%E5%BC%8F%E8%AA%9E%E8%A8%80/668729/)

console.dir()在中顯示顯示指定 JavaScript 對象的屬性時，還通過文件樹樣式的交互列表顯示。(會列出class和ID的值)

console.groupCollapsed() 方法用於設置折疊的分組信息，在這個代碼以下執行輸出的信息都會再折疊的分組裡。 點擊擴展按鈕打開分組信息。
提示: 使用 console.groupEnd() 方法來結束當前的分組。
提示: 使用 console.group() 方法來設置不折疊的分組信息。

```javascript=
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

```javascript=
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

```javascript=
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

預設<video>的controls屬性就包含對影片基本的控制 ( 暫停/撥放、音量、全螢幕、下載、子母畫面 )

主流影片格式，例如：mp4

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

****

## 12 - Key Sequence Detection

***

## 13 - Slide in on Scroll

***

## 14 - JavaScript References VS Copying

****

## 15 - LocalStorage

****

## 16 - Mouse Move Shadow

****

## 17 - Sort Without Articles

****

## 18 - Adding Up Times with Reduce

*****

## 19 - Webcam Fun

******

## 20 - Speech Detection

*******

## 21 - Geolocation

******

## 22 - Follow Along Link Highlighter

******

## 23 - Speech Synthesis

******

## 24 - Sticky Nav

****

## 25 - Event Capture, Propagation, Bubbling and Once

*****

## 26 - Stripe Follow Along Nav

*******

## 27 - Click and Drag

*******

## 28 - Video Speed Controller

**********

## 29 - Countdown Timer

********

## 30 - Whack A Mole
