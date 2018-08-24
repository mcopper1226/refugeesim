var flipperOuterContainer = document.querySelector('.flip-container');
var flipperContainer = document.querySelector('.flipper');
var frontContainer = document.querySelector('.front');
if (frontContainer != undefined) {
  var flipperHeight = frontContainer.clientHeight;
  flipperContainer.style.height=flipperHeight + 'px';

  var flipperBtns = document.querySelectorAll('.country-flip-item');

  for (var i = 0; i < flipperBtns.length; i++) {
    flipperBtns[i].addEventListener('click', function() {
      var flipperTargetAtt = this.getAttribute('data-show');
      var flipperTargetClass = '.countryInfo__' + flipperTargetAtt;
      var flipperTarget = document.querySelector(flipperTargetClass);
      var newFlipperHeight = flipperTarget.clientHeight + 'px';
      flipperTarget.classList.add('country-flip-item-show');
      flipperOuterContainer.classList.add('is-flipped');
      flipperContainer.style.height = newFlipperHeight;
      var exitBtn = flipperTarget.querySelector('.country-flip-exit');
      console.log(exitBtn);
      exitBtn.addEventListener('click', function(){

        flipperOuterContainer.classList.remove('is-flipped');
        flipperContainer.style.height = flipperHeight + 'px';
        console.log('hiya');
        setTimeout(function() {flipperTarget.classList.remove('country-flip-item-show')},1000);
      })
    });
  }
}



var canvasOpen = document.querySelectorAll('.click-me');
var dashWrap = document.querySelector('.dash__wrap');
var canvas = document.querySelector('.dash__offCanvas');
var articles = document.querySelectorAll('.dash__article');
var closeArticle = document.querySelector('.close-article');

for (var i = 0; i < canvasOpen.length; i++) {
  canvasOpen[i].addEventListener('click', function() {
    var articleRef = '#' + this.getAttribute('data-newsItem');
    var article = document.querySelector(articleRef);
    //remove all active articles first
    for (var i = 0; i < articles.length; i++) {
      if(articles[i].classList.contains('active-article')) {
        articles[i].classList.remove('active-article');
      }
    };
    article.classList.add('active-article');
    //push canvas left
    canvas.classList.add('canvas-is-open');
    //push main container left
    dashWrap.classList.add('push-left');
    dashWrap.classList.add('overlay-visible');
  })

}

closeArticle.addEventListener('click', function() {
  for (var i = 0; i < articles.length; i++) {
    if(articles[i].classList.contains('active-article')) {
      articles[i].classList.remove('active-article');
    }
  };
  //push canvas left
  canvas.classList.remove('canvas-is-open');
  //push main container left
  dashWrap.classList.remove('push-left');
  dashWrap.classList.remove('overlay-visible');
})
