
let lotto=[];

while(lotto.length<6){
    let num= (parseInt(Math.random()*45)+1);
    if(lotto.indexOf(num) == -1)
        lotto.push(num);
}
lotto.sort((a,b)=>(a-b));


document.write("<div class='ball ball1'>" + lotto[0] +"</div>");
document.write("<div class='ball ball2'>" + lotto[1] +"</div>");
document.write("<div class='ball ball3'>" + lotto[2] +"</div>");
document.write("<div class='ball ball4'>" + lotto[3] +"</div>");
document.write("<div class='ball ball5'>" + lotto[4] +"</div>");
document.write("<div class='ball ball6'>" + lotto[5] +"</div>");

//배열1~45까지 정수 => parseInt, Math.random(), 6번 반복문(배열 길이 기준)
//중복제외,조건문 (indexOf()==-1)
//

/*방법 1) for문

for(let i=0; lotto.length<6;i++){
    let num=(parseInt(Math.random()*45+1));
    if (lotto.indexOf(num) == -1)
        lotto.push(num);
}
document.write(lotto);
*/

//방법 2) While문


/* 
Math.random() => 0 이상~1미만 실수(FLOAT)
 Math.random()*45+1; => 1이상~46미만 실수(FLOAT)
 PARSEiNT();=>소수점은 버리고 정수로 변환
중복값 제외하고 배열에 넣는 방법
배열이름.indexOf(값) : 값이 있으면 위치 표시, 없으면 -1
배열값 오름차순 정렬 : 배열이름.sort((a,b)=>a-b); 내림차순은 배열이름.sort((a,b)=>b-a);

 */


