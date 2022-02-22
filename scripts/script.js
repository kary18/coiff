$(function() {
	
	/*Ouverture fenêtre modale login / signin / compte*/
	
	$('#modale-ouverture').click(function(event){
		$('#bg-modale').fadeIn(600);
		$('#modale').fadeIn(600);
	});
	
	/*Fermeture fenêtre modale login / signin / compte*/
	
	$('#modale-fermeture').click(function(event){
		$('#bg-modale').fadeOut(600);
		$('#modale').fadeOut(600);
	});
	
	$('#bg-modale').click(function(event) {
		$('#bg-modale').fadeOut(600);
		$('#modale').fadeOut(600);
	})
	
	/*Boutons détail & jour par jour*/
	
	$('.detail-ouverture').click(function(event){
		$('.info-detail-planete').fadeIn(600);
	});
	
	$('.detail-fermeture').click(function(event){
		$('.info-detail-planete').fadeOut(600);
	});
	
	$('.jour-par-jour-ouverture').click(function(event){
		$('.jour-par-jour').fadeIn(600);
	});
	
	$('.jour-par-jour').click(function(event){
		$('.jour-par-jour').fadeOut(600);
	});
	
	
	/*Modification données compte perso*/
	
	/*Navigation planètes*/
	
	$('#btn-nav-terre').click(function(event) {
		/*$('.bg-planete')
			.css('background', 'url(img/bg_terre.jpg) center')
			.css('background-size', 'cover')
			.css('background-repeat', 'no-repeat');*/
		$('#info-terre').fadeIn(600);
		$('#info-venus').css('display', 'none');
		$('#info-mars').css('display', 'none');
		$('#info-titan').css('display', 'none');
	});
	
	$('#btn-nav-venus').click(function(event) {
		/*$('.bg-planete')
			.css('background', 'url(img/bg_venus.jpg) center')
			.css('background-size', 'cover')
			.css('background-repeat', 'no-repeat');*/
		$('#info-venus').fadeIn(600);
		$('#info-terre').css('display', 'none');
		$('#info-mars').css('display', 'none');
		$('#info-titan').css('display', 'none');
	});
	
	$('#btn-nav-titan').click(function(event) {
		/*$('.bg-planete')
			.css('background', 'url(img/bg_titan.jpg) center')
			.css('background-size', 'cover')
			.css('background-repeat', 'no-repeat');*/
		$('#info-titan').fadeIn(600);
		$('#info-terre').css('display', 'none');
		$('#info-mars').css('display', 'none');
		$('#info-venus').css('display', 'none');
	});
	
	$('#btn-nav-mars').click(function(event) {
		/*$('.bg-planete')
			.css('background', 'url(img/bg_mars.jpg) center')
			.css('background-size', 'cover')
			.css('background-repeat', 'no-repeat');*/
		$('#info-mars').fadeIn(600);
		$('#info-terre').css('display', 'none');
		$('#info-venus').css('display', 'none');
		$('#info-titan').css('display', 'none');
	});
	
	/*Tooltips*/
	
	$('[data-toggle="tooltip"]').tooltip();
})