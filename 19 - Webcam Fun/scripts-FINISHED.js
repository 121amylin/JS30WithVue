const video = document.querySelector('.player'); //獲取視訊
const canvas = document.querySelector('.photo'); //獲取canvas
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip'); //獲取相片集錦元素物件
const snap = document.querySelector('.snap'); //獲取音效audio元素

//  DEPRECIATION : 
//       The following has been depreceated by major browsers as of Chrome and Firefox.
//       video.src = window.URL.createObjectURL(localMediaStream);
//       Please refer to these:
//       Deprecated  - https://developer.mozilla.org/en-US/docs/Web/API/URL/createObjectURL
//       Newer Syntax - https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/srcObject

// 向用戶請求使用媒體輸入的許可
function getVideo() {
  navigator.mediaDevices.getUserMedia({
      video: true,
      audio: false
    })
    .then(localMediaStream => {
      console.log(localMediaStream);
      video.srcObject = localMediaStream;
      video.play();
    })
    .catch(err => {
      console.error(`OH NO!!!`, err);
    });
}

function paintToCanvas() {
  const width = video.videoWidth;
  const height = video.videoHeight;
  canvas.width = width;
  canvas.height = height;

  //螢幕(通常是固定值)ex:60HZ=60/1秒 約=16.6ms 刷新一次
  //代表螢幕每隔多少時間刷新一張圖片給你看
  return setInterval(() => {
    ctx.drawImage(video, 0, 0, width, height);
    // take the pixels out
    let pixels = ctx.getImageData(0, 0, width, height);
    // mess with them
    // pixels = redEffect(pixels);

    pixels = rgbSplit(pixels);
    // ctx.globalAlpha = 0.8;

    // pixels = greenScreen(pixels);
    // put them back
    ctx.putImageData(pixels, 0, 0);
  }, 16);
}

function takePhoto() {
  // played the sound 播放聲音
  snap.currentTime = 0;  //將當前媒體撥放的時間歸零，即從頭開始撥放
  snap.play();

  // take the data out of the canvas
  const data = canvas.toDataURL('image/jpeg'); //紀錄base64的圖像
  const link = document.createElement('a'); //創建一個a element
  link.href = data;
  link.setAttribute('download', 'handsome'); //將 a element 設置下載屬性 handsome是下載檔名
  link.innerHTML = `<img src="${data}" alt="Handsome Man" />`;//處理HTML結構
  strip.insertBefore(link, strip.firstChild);//加入生成節點
}

function redEffect(pixels) {
  for (let i = 0; i < pixels.data.length; i += 4) {
    pixels.data[i + 0] = pixels.data[i + 0] + 200; // RED
    pixels.data[i + 1] = pixels.data[i + 1] - 50; // GREEN
    pixels.data[i + 2] = pixels.data[i + 2] * 0.5; // Blue
  }
  return pixels;
}

function rgbSplit(pixels) {
  for (let i = 0; i < pixels.data.length; i += 4) {
    pixels.data[i - 150] = pixels.data[i + 0]; // RED
    pixels.data[i + 500] = pixels.data[i + 1]; // GREEN
    pixels.data[i - 550] = pixels.data[i + 2]; // Blue
  }
  return pixels;
}

function greenScreen(pixels) {
  const levels = {};

  document.querySelectorAll('.rgb input').forEach((input) => {
    levels[input.name] = input.value;
  });

  for (i = 0; i < pixels.data.length; i = i + 4) {
    red = pixels.data[i + 0];
    green = pixels.data[i + 1];
    blue = pixels.data[i + 2];
    alpha = pixels.data[i + 3];

    if (red >= levels.rmin &&
      green >= levels.gmin &&
      blue >= levels.bmin &&
      red <= levels.rmax &&
      green <= levels.gmax &&
      blue <= levels.bmax) {
      // take it out!
      pixels.data[i + 3] = 0;
    }
  }

  return pixels;
}

getVideo();

video.addEventListener('canplay', paintToCanvas);//當瀏覽器播放視頻的時候監聽並繪製canvas