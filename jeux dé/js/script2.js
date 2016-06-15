$(function(){ //charge le dom avec jquery
	var score1=0;
	var score2=0;
	var nbparti=0;
	$("button").click(function(){
//ça se passe ici
		var de1=Math.floor((6)*Math.random()+1); //genere aleatoir entre 1et 6
		var de2=Math.floor((6)*Math.random()+1);
		nbparti++;
	if (nbparti<6) {	
		$(".dee1").html('<img src="images/des_0'+de1+'.png">');
		$(".dee2").html('<img src="images/des_0'+de2+'.png">');
		$(".partie").html(+nbparti+ 'partie joué')
			if(de1>de2) {
				$("#result").html("score joueur 1= "+score1+'<br>'+"score joueur 2= "+score2)
				score1++;
			}	 //fin if de1>de2


		else if(de1<de2) { 
		$("#result").html("score joueur 1= "+score1+'<br>'+"score joueur 2= "+score2);
		score2++;
		}; //fin if 2



		else {
		 $("#result").html("score joueur 1= "+score1+'<br>'+"score joueur 2= "+score2);
		 score1--;
		 score2--;
		  };//fin else

	
	

	};
	});//fin bouton



});//fin jquery