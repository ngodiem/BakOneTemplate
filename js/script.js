$(".portfolio button").click(function(event) {
var portfolios = $(this).siblings('.row').children(); // thẻ button với .row là anh em, con của row 8 cột
var datas = $(this).attr("data");
$(this).addClass('active');
$(this).siblings('button').removeClass('active');

if(datas == undefined) {
	$(portfolios).show();
}
else {
	var showdenElement = $(portfolios).filter("[data="+ datas +"]");
	var hidenElemnts   = $(portfolios).not(showdenElement);
	$(portfolios).show();
	$(hidenElemnts).hide();
 
}

});

// tạo menu
toggeleBackToTop();
$(window).scroll(function(event) {
	if($(window).scrollTop() >= $("#portfolio").offset().top) {
		$(" header .navbar").addClass('fixed-top');
		$(" header ").addClass('dummy-padding');
	}
	else {
		$(" header .navbar").removeClass('fixed-top');
		$(" header ").removeClass('dummy-padding');
	}
	toggeleBackToTop();
});

//
$(".back-to-top").click(function(event) {
	/* Act on the event */
	var v = 1;
	var distance = $(this).offset().top;
	var time  = distance / v;
	$("html,boby").animate({scrollTop: 0}, time);
});

// khai báo hàm 
function toggeleBackToTop() {
	if($(window).scrollTop() == 0) {
		//ẩn
		$(".back-to-top").fadeOut();
	}
	else {
		$(".back-to-top").fadeIn();

	}
}

// 
$("header nav ul li a, .home a").click(function(event) {
	/* Act on the event */
	event.preventDefault();  //ngăn chặn không cho chạy đến vùng có id tương ứng với hash
	// var hash = $(this).attr("href"); chỉ xài được cho code viết sẳn
	var hash = this.hash; // đường dẫn tương đối cho mọi trường hợp
	var target = $(hash);
	// phần tử có id tương ứng với hash của nút được click
	var top = $(target).offset().top;
	var v = 0.5;
	var distance = Math.abs($(this).offset().top - top);
	var time = distance / v;

	$("html,body").stop().animate({scrollTop: top}, time, function() {
		// cập nhật thanh địa chỉ
		window.location.hash=hash;
	});

});


