/*
*Daniel De Pinho Lucas 
*JS-1  - Corus exercices
*
*/

//cours forntend -HEAJ - Monsieur Thronte
/***Menu*/
const burger = document.querySelector(".burger");
const menu = document.querySelector(".menu");
console.log(burger);

burger.addEventListener("click", function(){
	menu.classList.toggle('menu--open');
});

//exercice 1
/*begin:firstDeg function*/
		function firstDeg(a,b) {
			var x = -b/a;
			return x;	
		}
		/*end:firstDeg function*/

		/*btn-listen to click event*/
		/*begin:EventListener*/
		result.addEventListener("click", function(e){

			/*begin:Get values of user input*/
			var a = parseFloat(document.getElementById("a1").value);
			var b = parseFloat(document.getElementById("b1").value);
			/*end:Get values of user input*/
				
					/*notify user of invalid number*/
					if (a==0) {
						document.write("Condiition d'existabce : a ≠ 0");
						/* CD : WHY NOT use the showResult field */
					}
					/*display result*/
					else{
						var showResult = document.getElementById("show-result");
						/*gave a shotter more spcific html content to result*/
						showResult.innerHTML = "X = "+firstDeg(a,b);
				} });
		/*end:EventListener*/	

//exercice 2
/*begin:secondDeg function*/
/*declare var*/
		
function secondDeg(a,b,c) {
    /* you do not handle correctly the case where a is zero, THINK */
		    var delta = Math.pow(b,2)-4*a*c;// need to re-calculate; the alternative is to pass delta in the parameters (because delta was calculated outside of this functio
			
		    var x1 = (-b-Math.sqrt(delta))/2*a;
		    var x2 = (-b+Math.sqrt(delta))/2*a;
			return x2; // the larger of the two rrots	
		}
/*end:secondDeg function*/
		/*this var delta (also called Discriminant in maths) will help us setting up this programm and condition if you do not understand this formula 
		visite this src"http://www.xm1math.net/premiere_s/prem_s_chap1_cours.pdf"*/
		
		/*begin:Get values of secondDeg results*/
		var showResultSecondDeg = document.getElementById("show-resultSecondDeg");
		/*end:Get values of secondDeg results*/

		
		/*begin:EventListener*/
		/*btn listen to click event*/
		resultSecondDeg.addEventListener("click", function(e){
			/*begin:Get values of user input*/
			var a = Number(document.getElementById("a2").value);
			console.log(a);
			var b = Number(document.getElementById("b2").value);
			console.log(b);
			var c = Number(document.getElementById("c2").value);
			console.log(c);
		    var delta = Math.pow(b,2)-4*a*c;

			/*end:Get values of user input*/
					/*notify user of invalid number*/
					if (delta < 0) {
						showResultSecondDeg.innerHTML = "Pas de solution trouver! Essayer autres valeurs.";
					}else if(delta ==0){
						/*gave a shotter more spcific html content to result*/
						showResultSecondDeg.innerHTML = "X = "+secondDeg(a,b,c);
					}else if (delta > 0) {
						showResultSecondDeg.innerHTML = "X = "+secondDeg(a,b,c);
					}
					else{
						showResultSecondDeg.innerHTML = "Veuillez n'entrer que des nombres";
					} 
			});
		/*end:EventListener*/	
