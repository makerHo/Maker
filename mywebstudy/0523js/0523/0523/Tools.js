function addZero(num){
	if(num<10){
		num="0"+num;
	}
	return num;
}
/**
*居中函数
*element:需要居中的元素
*/
function center(element){
	element.style.left=((getWindowSize().width-element.offsetWidth)/2+getScrollSize().left)+"px";
	element.style.top=((getWindowSize().height-element.offsetHeight)/2+getScrollSize().top)+"px";
}
/**
*获取窗口的尺寸
*不同的浏览器，窗口的尺寸计算不同
*/
function getWindowSize(){
	return {
		"width":window.innerWidth||document.documentElement.clientWidth,
		"height":window.innerHeight||document.documentElement.clientHeight
	};
}
/**
* 获取滚动条滚动的值
*/
function getScrollSize(){
	return{
		"top":document.documentElement.scrollTop||document.body.scrollTop,
		"left":document.documentElement.scrollLeft||document.body.scrollLeft
	}
}