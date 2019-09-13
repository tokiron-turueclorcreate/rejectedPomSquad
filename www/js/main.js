window.onload = function(){
    /*全体共通のアクション*/
    //イベントを設定するタブバーのアイコンを読み出し
    var ele = document.getElementsByClassName("tab-bar__item");
    //[0](ホームicon)にイベントリスナーを設定
    ele[0].addEventListener("click", function(evt){
        //click処理
        document.location.href="index.html";
        //defaultのイベント禁止
        evt.preventDefault();
        //イベント伝達禁止
        evt.stopPropagation();
    }, false);
    //[1](勉強ツール icon)にイベントリスナーを設定
    ele[1].addEventListener("click", function(evt){
        //click処理
        document.location.href="study.html";
        //defaultのイベント禁止
        evt.preventDefault();
        //イベント伝達禁止
        evt.stopPropagation();
    }, false);
    //[2](ハートicon)にイベントリスナーを設定
    ele[2].addEventListener("click", function(evt){
        //click処理
        document.location.href="about.html";
        //defaultのイベント禁止
        evt.preventDefault();
        //イベント伝達禁止
        evt.stopPropagation();
    }, false);
};
