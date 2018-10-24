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
		price= 0;
	$('.add').click(function(){
		/*Collect all the elments needed in the cart*/
		contentsCart = $('.cart').html();
		idButton = this.id;
		if(isNaN(parseInt($('#quantity'+idButton).val()))){
			alert('Ce n\'est pas un nombre');
		}else {
			$("#"+idButton).attr("disabled",true);
			$("#quantity"+idButton).attr("disabled",true);
			name = $('#name'+idButton).html();
			quantity = parseInt($('#quantity'+idButton).val());
			priceObject = parseFloat($('#price'+idButton).html());
			price=parseFloat((price+(priceObject*quantity)).toFixed(2));
			/*Add article in cart*/
			$('.cart').html(contentsCart+'<div class="row text-center align-items-center cart'+idButton+'"><div class="col-xl-3 col-xs-12">'+name+'</div><div class="col-xl-2 col-xs-12"><input type="number" id="quantityCart'+idButton+'" class="quantityCart" value="'+quantity+'" min="0"></div><div class="col-xl-2 col-xs-12"><p>'+priceObject+'</p></div><div class="col-xl-3 col-xs-12"><span id="priceTotal'+idButton+'">'+quantity*priceObject+'</span></div><div class="col-xl-2 col-xs-12"><input type="button" id="cart'+idButton+'" class="remove" value="Enlever article"></div></div>');
			$('#priceTotal').html(price);
			/*Button who removes the article in the cart*/
			$('.remove').click(function(){
				currentArticle = this.id.substring(4);
				price-=parseFloat($('#priceTotal'+currentArticle).html());
				price=price.toFixed(2);
				$('.'+this.id).remove();
				$("#"+currentArticle).attr("disabled",false);
				$("#quantity"+currentArticle).attr("disabled",false);
				$('#priceTotal').html(price);
			});
			$('.quantityCart').keyup(function(){
				currentArticle = this.id.substring(12);
				priceArticle = parseFloat($('#price'+idButton).html());
				priceTotalArticleBefore=parseFloat($('#priceTotal'+currentArticle).html());
				priceTotal=parseFloat($('#priceTotal').html());
				currentQuantity = $("#quantityCart"+currentArticle).val();
				$('#priceTotal'+currentArticle).html(priceArticle*currentQuantity);
				priceTotal=parseFloat((priceTotal+((priceArticle*currentQuantity)-priceTotalArticleBefore)).toFixed(2));
				$('#priceTotal').html(priceTotal);
			});
		}
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

	$('#confirm').click(function(){

		if(ValidationForm())
		{
			console.log("envoyé !");
		}
	});
	$('#firstName').blur(function(){
		firstName = ValidName($('#firstName'));
	});
	$('#lastName').blur(function(){
		lastName = ValidName($('#lastName'));
	});
	$('#email').blur(function(){
		email = ValidMail($('#email'));
	});
	$('#phone').blur(function(){
		phone = ValidPhone($('#phone'));
	});
	$('#address').blur(function(){
		address = ValidAddress($('#address'));
	});
	$('#postalCode').blur(function(){
		postalCode = ValidPC($('#postalCode'));
	});
	$('#city').blur(function(){
		city = ValidName($('#city'));
	});
	$('#confirmPass').blur(function(){
		pass = ValidPass($('#password'),$('#confirmPass'));
	});

});
