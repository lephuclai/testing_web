$(document).ready(function() {
	// Thêm hình vào banner
	var imgs = ["banner1", "banner2", "banner3", "banner4", "banner5", "banner6"];
	for (var img of imgs) {
		var linkimg = "img/banners/" + img + ".png";
		addBanner(linkimg, linkimg);
	}

	// Khởi động thư viện hỗ trợ banner
	var owl = $('.owl-carousel');
	owl.owlCarousel({
		items: 1.3,
		center: true,
		loop: true,
		smartSpeed: 450,

		autoplay: true,
		autoplayTimeout: 3000,
		autoplayHoverPause: true,
		responsive: {
			600: {
				items: 1
			},
			1000: {
				items: 1.3
			},
			1400: {
				items: 2.5
			}
		}
	});
	owl.on('mousewheel', '.owl-stage', function(e) {
		var del = e.deltaY || e.originalEvent.deltaY;
		if (del > 0) {
			owl.trigger('next.owl');
		} else {
			owl.trigger('prev.owl');
		}
		e.preventDefault();
	});



	// thêm tags (từ khóa) vào khung tìm kiếm
	var tags = ["Samsung", "iPhone", "Huawei", "Oppo", "LG"];
	for (var t of tags)
		addTags(t, "");


	// Thêm sản phẩm từ file products.json
	$.getJSON("data/products.json", function(data) {
	    console.log(data);
	    var product, promo;
	    for(var p of data.list) {
	    	promo = new Promo(p.promo.name, p.promo.value);
	    	product = new Product(p.img, p.name, p.price, p.star, p.rateCount, promo);
	    	product.addToWeb();
	    }
	});
});

