<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.1/jquery.min.js"></script>

// 先把API的URL存成一個變數
var dataUrl = "https://xioda.github.io/?code=4r1iePpaEPziICzkriMR&state=login"
$.ajax({
    url: 'https://api.line.me/oauth2/v2.1/token' , // 指定API 的 URL
    method: 'GET', // 指定請求方法
    dataType: 'json', // API的格式
    data: '', //若有傳送資料時的資料設定 (GET沒有)
    async: true, //  預設是true=非同步,false=同步 (true時整行可省略)

    success: res => {   // 成功的話執行...
        console.log(res)
    },
    error: err => {   // 失敗的話執行...
        console.log(err)
    },
});
// 箭頭涵式寫法:success: res =>{  ....}
// 原始一般寫法:success: function(res){  ....}