function bigger(x) {
x.style.height = "30px";
x.style.width = "30px";
}

function normal(x) {
x.style.height = "15px";
x.style.width = "15px";
}
// 사이드바 크기 커지게하기

var slideIndex = 0;
showSlides();

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");

   for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;

    if (slideIndex> slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 5000);
	var dots = document.getElementsByClassName("dot");

	for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";



}

//메인이미지 자동 변경

	function rolling(options) {
		var self = this;
		this.object = document.getElementById(options.rollId);
		this.object.onmouseover = function() { self.stop(); };
		this.object.onmouseout = function() { self.play(); };
		this.delay = options.delay || 1000;
		this.speed = options.speed || 50;
		this.step = options.step || 1;
		this.mover = options.mover || false;
		this.elChildHeight = options.childHeight;
		this.elHeight = this.object.offsetHeight;
		this.elPosition = 0;
		this.object.appendChild(this.object.cloneNode(true));
		this.control = setTimeout(function() {self.play()}, this.delay);
	}
	rolling.prototype = {
		play:function() {
			var self = this, time;
			this.elPosition = this.elPosition>(this.mover?this.elHeight:0) ? this.elPosition-this.elHeight : this.elPosition+1;
			this.object.style.top = (this.mover ? -this.elPosition : this.elPosition) + "px";
			this.control = setTimeout(function() {self.play()}, this.elPosition%(this.elChildHeight*this.step)==0?this.delay:this.speed);
		},
		stop:function() {
			clearTimeout(this.control);
		}
	}
	var roll1 = null;
	/*window.onload = function() {
		roll1 =  new rolling({rollId: "rollText", delay: 1000, speed: 20, step: 2, mover: true, childHeight: 15});
	}*/

// 실시간 기부현황 (아래로 슬라이드)



function change(val){
document.getElementById("maps").src = "img/map" +val+ ".png";
}

// 지도에 선택지역 색칠하기

function view1(opt) {
  if(opt) {
       spec1.style.display = "block";
  }
  else {
     spec1.style.display = "none";
  }
}

function view2(opt) {
  if(opt) {
       spec2.style.display = "block";
  }
  else {
     spec2.style.display = "none";
  }
}

function view3(opt) {
  if(opt) {
       spec3.style.display = "block";
  }
  else {
     spec3.style.display = "none";
  }
}

function view4(opt) {
  if(opt) {
       spec4.style.display = "block";
  }
  else {
     spec4.style.display = "none";
  }
}

// 마우스 오버시 gif 띄우기

$(window).scroll(function(){
	if($(window).scrollTop() > 500){
		$('.box-header1').animate({ opacity: 1},1000)
		$('.box2img').animate({ opacity: 1},2000)
		$('.box2p').animate({ opacity: 1},2000) }
});


$(window).scroll(function(){
	if($(window).scrollTop() > 900){
		$('.box-header2').animate({ opacity: 1},1000)
		$('.text1').animate({ opacity: 1},2000)
		$('.text2').animate({ opacity: 1},2200)
		$('.text3').animate({ opacity: 1},2500)
		$('.text4').animate({ opacity: 1},2700) }
});


$(window).scroll(function(){
	if($(window).scrollTop() > 1600){
		$('.box-header3').animate({ opacity: 1},1000)
		$('.box4-con').animate({ opacity: 1},2000)
	 }
});

// 스크롤시 해당부분 보이기


var a = 0;
 $("#intro-button").click(function() {
	 a = 1;

	$("#intro-animate").slideToggle(2000);
	$('.small-text').animate({ opacity: 1},3500);


	if (a == 1)
	{ document.getElementById("intro-button").src = "img/up-button.png";
	} else {
		document.getElementById("intro-button").src = "img/down-button.png";
	}
 });

 // 버튼 눌렀을때 하는일 보여주기 (커튼효과)


 $(document).ready(function(){
      $("#post").click(function(){
       if($("#news").is(":checked")){
          $('#give').text("보내주실 물건은 [신문지] 입니다 ^^");
      }


       if($("#o2").is(":checked")){
          $('#give').text("보내주실 물건은 [헌 옷] 입니다 ^^");
      }


       if($("#o3").is(":checked")){
          $('#give').text("보내주실 물건은 [기부금] 입니다 ^^");
      }

       if($("#o4").is(":checked")){
          $('#give').text("보내주실 물건은 [헌 이불] 입니다 ^^");
      }

        })

              ;})

			  //기부접수
