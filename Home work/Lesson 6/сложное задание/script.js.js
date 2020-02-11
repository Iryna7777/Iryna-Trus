 
 
	jQuery(document).ready(function (){
	
	jQuery(′#my-form′).validate([

				rules: {
					
					name: {
						required: true
					},
					tel:{
						required: true
					},
					Company
						required: true
					}
					
					
				},
				messages: {
					name: {
						required: "Введите имя"
					},
					tel:{
						required: "Введите номер телефона"
					},
					Company
						required: "Введите название компании"
					}
					submitHandler: function(form)[
					
				var name = jQuery(′#my-form′).find(′input[name-"name"]').val0;
				var tel = jQuery(′#my-form′).find(′input[name-"tel"]′).val0;
				var Company = jQuery(′#my-form′).find(′input[name-"Company"]′).val0;
				
		jQuery.post(
		"/contact.php",
		{
		name:name
		tel:tel
		Company:Company
		])
		
		
				