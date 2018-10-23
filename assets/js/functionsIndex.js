function showOneDiv(anID) {
	/*Shows one div and hide others*/
	var myMenus = document.querySelectorAll('.my-menus'),
	i = 0, l = myMenus.length;
	for (i; i < l; i++) {
		myMenus[i].style.display = 'none';
	}
	var div = document.getElementById(anID);
	div.style.display = "block";
}

$(function(){
	price=0;
	$('.add').click(function(e){
		contentsCart = $('.cart').html();
		idButton = this.id;
		console.log(idButton);
		$("#"+idButton).attr("disabled", "disabled");
		console.log($('#name'+idButton).html());
		name = $('#name'+idButton).html();
		quantity = parseInt($('#quantity'+idButton).val());
		priceObject = parseFloat($('#price'+idButton).html());
		price+=priceObject*quantity;
		console.log(price);
		$('.cart').html(contentsCart+'<div class="col-xl-3 col-xs-12">'+name+'</div><div class="col-xl-3 col-xs-12"><p>'+quantity+'</p></div><div class="col-xl-3 col-xs-12"><p>'+priceObject+'</p></div><div class="col-xl-3 col-xs-12"><p>'+quantity*priceObject+'</p></div>');
		$('#priceTotal').html(price);
		e.stopImmediatePropagation();
	});

	confirm =$('#confirm');
	firstName = ValidName($('#firstName'));
	lastName = ValidName($('#lastName'));
	email = ValidMail($('#email'));
	phone = ValidPhone($('#phone'));
	address = ValidAddress($('#address'));
	postalCode = ValidPC($('#postalCode'));
	city = ValidName($('#city'));
	pass = ValidPass($('#password'),$('#confirmPass'));

	$('#confirm').click(ValidationForm());
	$('#firstName').blur(function(){
		ValidName($('#firstName'));
	});
	$('#lastName').blur(function(){
		ValidName($('#lastName'));
	});
	$('#email').blur(function(){
		ValidMail($('#email'));
	});
	$('#phone').blur(function(){
		ValidPhone($('#phone'));
	});
	$('#address').blur(function(){
		ValidAddress($('#address'));
	});
	$('#postalCode').blur(function(){
		ValidPC($('#postalCode'));
	});
	$('#city').blur(function(){
		ValidName($('#city'));
	});
	$('#confirmPass').blur(function(){
		validPass($('#password'),$('#confirmPass'));
	});
});
