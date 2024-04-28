
// 텍스트 입력&삭제되는 것같은 에니메이션 효과 구현 
(function(){
var spanEl =document.querySelector("main .container h2 span");

var textArr= ['Front-End Developer', 'Web Publisher', 'Back-End Developer', 'Web UI Designer'];

var index= 0;
var  currentText= textArr[index].split("");   //  F r o n t ..  text를 한글자씩  분리

function writeText(){
   
    spanEl.textContent+= currentText.shift();  // 배열 currentText의 data들을 앞에서부터 하나씩 추출한다.
    if(currentText.length!==0){
        setTimeout(writeText,Math.floor(Math.random()*100));  //setTimeOut메서드  랜덤시간이후에 writeText함수 실행
    }
    else{
        currentText= spanEl.textContent.split("");  // spanEl의 text들을 한글자씩 분리하여 다시 currentText에 집어넣는다.
        setTimeout(deleteText,3000);

    }
    }

    function deleteText(){
    currentText.pop();
    spanEl.textContent= currentText.join("");  // split()메서드 반대로 각각의 data들을 분리기준("")으로 하나로 묶는다.
    if(currentText.length!==0){
        setTimeout(deleteText,Math.floor(Math.random()*100));  
    }
    else{
        index= (index+1)%textArr.length;   // 무한히 반복
        currentText= textArr[index].split("");   
        writeText();

    }
}

writeText();
})();
/////////////////////////

var headerEl= document.querySelector('header');

window.addEventListener("scroll",function(){
    var broswerscrollY = window.scrollY;
    if(broswerscrollY>0){
        headerEl.classList.add("active");

    }
    else{
        headerEl.classList.remove("active");
    }
});