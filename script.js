var button = document.getElementById("topButton");
var navBar = document.getElementById("menu");

window.onscroll = function() {scrolling()};

function scrolling(){ 
    if(document.body.scrollTop>20||document.documentElement.scrollTop > 20){
        button.style.visibility=1;
        button.style.opacity=1;
    }
    else{
        button.style.visibility=0;
        button.style.opacity=0;
    }
    if(document.body.scrollTop>200||document.documentElement.scrollTop > 200){
        navBar.style.position = "fixed";
        navBar.style.top = "0";
        navBar.style.visibility = "1";
        navBar.style.opacity = "1";
    }
    else{
        navBar.style.position = "relative";
        navBar.style.visibility = "0";
        navBar.style.opacity = "0";
    }
}

function backTop(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop=0;
}

function getoffsetTop(element){
    var offsetTop = 0;
    while(element){
        offsetTop += element.offsetTop;
        element = element.offsetParent;
    }
    return offsetTop;
}

var last="";
var regu = new RegExp("^[ ]+$");

function highlight(text){
    if(last!="" && !regu.test(last)){
        var rep = document.getElementById("ADDDDDD");
        rep.outerHTML = last;
        last="";
    }
    if(text!="" && !regu.test(text)){
        var inputText = document.getElementById("text");
        var innerHTML = inputText.innerHTML;
        var index = innerHTML.indexOf(text);
        light = false;
        if (index >= 0) { 
        inputText.innerHTML=innerHTML.split(text).join('<span class="highlight" id="ADDDDDD">'+text+'</span>');
        last = text;
        }
    }
}