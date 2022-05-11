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

document.getElementById("input").addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
     event.preventDefault();
     document.getElementById("submit").click();
    }
});

function highlight(input){
    if(last!="" && !regu.test(last)){
        var rep = document.getElementsByClassName("highlight");
        console.log(rep);
        var length = rep.length;
        for(var i = 0; i<length; i++){
            rep.item(0).outerHTML = last;
        }
        last="";
    }
    if(input!="" && !regu.test(input)){
        var texts = document.getElementsByClassName("text");
        for(var i = 0; i<texts.length; i++){
            var innerHTML = texts.item(i).innerHTML;
            var index = innerHTML.indexOf(input);
            if (index >= 0) { 
                texts.item(i).innerHTML=innerHTML.split(input).join('<span class="highlight">'+input+'</span>');
                last = input;
            }
        }
    }
}

var questions={
    quiz1:{
        text: "Question?",
        option: {
            a: '1',
            b: '2',
            c: '3',
        },
        answer: 'b'   
    },
    quiz2:{
        text: "Question2?",
        option: {
            a: '2',
            b: '1',
            c: '3',
        },
        answer: 'a'   
    }
};

function buildQuiz(question){
    const quiz = questions[question];
    const answers = [];
    for(letter in quiz["option"]){
        answers.push(`<label><input type="radio" name="${question}" value="${letter}">${letter} :${quiz["option"][letter]}</label>`)
    }
    document.getElementById(question).innerHTML=`<div class="question text"> ${quiz["text"]} </div><div class="answers"> ${answers.join('')} </div>`;
}

function showResult(question){
    const quiz = questions[question];
    const answerContainer = document.getElementById(question).querySelector('.answers');
    const selector = `input[name=${question}]:checked`;
    const inputAnswer = (answerContainer.querySelector(selector) || {}).value;

    if(inputAnswer == quiz["answer"]){
        answerContainer.style.color = '#39c5bb';
    }
    else{
        answerContainer.style.color = 'red';
    }

}


var currentPage = document.title;


//Loading Page

if(currentPage == "Page1"){
    buildQuiz("quiz1");
    buildQuiz("quiz2");
}
if(currentPage == "Page2"){

}
if(currentPage == "Page3"){

}
if(currentPage == "Page4"){

}
if(currentPage == "Home"){

}