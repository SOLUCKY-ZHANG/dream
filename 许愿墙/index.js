var container =document.querySelector(".container");
var w = 170 ;
var h = 170 ;
var width = window.innerWidth;
var height =window.innerHeight;
var maxX = width - w;
var maxY = height - h - 100;
var zIndex = 1;

//生成一个心愿
function createWish(words){
	var div = document.createElement("div");
	div.className = "item";

	//文字
	div.innerHTML = words;

	//关闭按钮
	var closeBtn = document.createElement("div");
	closeBtn.className = "close";
	div.appendChild(closeBtn);

	//大小
	div.style.width = w +"px";
	div.style.height = h +"px";

	//位置
	div.style.left = `${getRandom(0,maxX)}px`;
	div.style.top = `${getRandom(0,maxY)}px`;

	//背景颜色
	div.style.background = `rgb(${getRandom(150,256)},${getRandom(150,256)},${getRandom(150,256)})`;

	//点击事件
	div.onclick = function(){
		div.style.zIndex = zIndex++;
	}

	//关闭事件
	closeBtn.onclick = function(){
		container.removeChild(div);
	}
	container.appendChild(div);
}

//定义随机数函数
function getRandom(min,max){
	var dec = max -min;
	return Math.floor(Math.random()*dec + min);
}

//键盘按下事件
function regEnter(){
	var txt = document.querySelector(".txt");
	txt.onkeydown = function(e){
		if(e.keyCode !== 13){
			return;
		}
		if (txt.value) {
			createWish(txt.value);
			txt.value = "";
		}
	}
}
 
//默认的愿望
function createRandomWishes(){
    var words = [
        "找个好工作",
        "每天都要开心",
        "睡觉睡到自然醒，数钱数到手抽筋",
        "与faker五五开",
        "8倍镜不抖"
    ];
    for (var i = 0; i < words.length; i++) {
        var w = words[i];
        createWish(w);
    }
}
createRandomWishes();
regEnter();