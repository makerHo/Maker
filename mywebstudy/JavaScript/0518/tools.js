// function Msg(){
// 	alert("提交成功~！")
// };
// var btn=document.querySelector('.btn');
// console.log(btn);
// btn.addEventListener("click",function(){
// 	Msg();
// })
 function addZero(num){
	if (num<10) {
		num="0"+num;
	}
	return num;
}