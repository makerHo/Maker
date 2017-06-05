
//居中函数
function elementCenter(elements){
		elements.style.left=((getWindowSize().width-elements.offsetWidth)/2+getScrollSize().left)+"px";
		elements.style.top=((getWindowSize().height-elements.offsetHeight)/2+getScrollSize().top)+"px";
		//innerWidth,有兼容性的问题
}

function getWindowSize(){
	return{
		"width":window.innerWidth||document.documentElement.clientWidth,
		"height":window.innerHeight||document.documentElement.clientHeight
	}//使用object形式存取；
}
//--------------------------------------------------------------------
//获取滚动条滚动的值
function getScrollSize(){
	return{
		"top":document.documentElement.scrollTop||document.body.scrollTop,
		"left":document.documentElement.scrollLeft||document.body.scrollLeft
	}
}
//-----------------------------------------------
/**
始终保持num为两位数，如果num小于10则在num前面加0；


	*/
function addZero(num){
	if (num<10) {
		num="0"+num
	}else{
		num=num
	};
	return num;}