$(function(){ //charge le dom avec jquery
	$("button").click(function(){
//ça se passe ici
		var de1=Math.floor((6)*Math.random()+1); //genere aleatoir entre 1et 6
		var de2=Math.floor((6)*Math.random()+1);			
		$(".dee1").html('<img src="images/des_0'+de1+'.png">');
		$(".dee2").html('<img src="images/des_0'+de2+'.png">');
	if(de1>de2) {
		$("#result").html("le joueur 1 a gagné")} //fin if de1>de2


	else if(de1<de2) { $("#result").html("le joueur 2 a gagné")} //fin if 2



	else { $("#result").html("égalité") }
	});//fin bouton
	
});//fin jquery