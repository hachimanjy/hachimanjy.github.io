<!--崩溃欺骗-->
 var OriginTitile = document.title;
  var titleTime;
   document.addEventListener('visibilitychange', function () {
        if (document.hidden) {
             $('[rel="icon"]').attr('href', "/img/TEP.ico");
              document.title = ' 不要走嘛 ~ | QAQ！';
              clearTimeout(titleTime);
         } 
        else {
             $('[rel="icon"]').attr('href', "/favicon.ico");
              document.title = ' 就知道你会回来的OwO~ ' + OriginTitile; 
              titleTime = setTimeout(function () { 
                  document.title = OriginTitile;
                 }, 2000); 
        } 
});