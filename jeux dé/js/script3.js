$(function(){ //charge le dom avec jquery
		var parti=5
		var scr1=0
		var scr2=0
		var jeu=true
	$(".jouer").click(function(){
		
		//ça se passe ici
		if (parti==0) {
			jeu=false; $(".jouer").html('gameover')
			$(".jouer").fadeOut(100)
			$(".rejouer").fadeIn(10000)
		}
	
		if (jeu==true) {
				parti--
				$(".dee1").html('<img src="images/des3D.gif">');
				$(".dee2").html('<img src="images/des3D.gif">');	
			setTimeout(function(){
				var de1=Math.floor((6)*Math.random()+1); //genere aleatoir entre 1et 6
				var de2=Math.floor((6)*Math.random()+1);			
				$(".dee1").html('<img src="images/des_0'+de1+'.png">');
				$(".dee2").html('<img src="images/des_0'+de2+'.png">');
		
				if(de1>de2) {
					$("#result").html("le joueur 1 a gagné")
					scr1++
					$(".joueur1").html("joueur1 : "+scr1+" point(s)")
				} //fin if de1>de2


				else if(de1<de2) { 
					$("#result").html("le joueur 2 a gagné")
					scr2++
					$(".joueur2").html("joueur2 : "+scr2+" point(s)")
				} //fin if 2



				else {
					$("#result").html("égalité") 
					scr1--
					scr2--
					$(".joueur1").html("joueur 1 : "+scr1+" point(s)")
					$(".joueur2").html("joueur 2 : "+scr2+" point(s)")

				}//fin else 
			},100);
		} 

	});//fin bouton
	
});//fin jquery