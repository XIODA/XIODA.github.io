/* test alert 警告框 "Hello World" */
/*var helloBtn = document.querySelector(".helloBtn");

helloBtn.addEventListener(
    'click',
    function () {
        alert("Hello World" );
    }
) ;
*/

/** 點選Hello按鈕 會出現對話框圖片Hello 由小放大顯示在人物 */ 






// Wrap every letter in a span
/*var textWrapper = document.querySelector('.ml1 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
*/

/* XIODA文字動畫 */ 
// Wrap every letter in a span

var textWrapper = document.querySelector('.ml2');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml2 .letter',
    scale: [4,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 950,
    delay: (el, i) => 70*i
  }).add({
    targets: '.ml2',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });

  /* 滾輪下滑動畫 */
  AOS.init();
  
  /* 泡泡背景 */
  

// 打字機
var helloBtn = document.querySelector('.helloBtn');







helloBtn.addEventListener (
  'click',
  function (){
    var typed = new Typed('#typed', {
      strings: ['loading...','Hello','我的名字是吳勖群'],
      typeSpeed: 100,
      //loop: true,
      loopCount: Infinity,
      bindInputFocusEvents:true
    });
      
    typed.start();
      

  });