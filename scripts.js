//JavaScript for TP7

function loadFileInto(fromFile, whereTo) {

	// creating a new XMLHttpRequest object
	ajax = new XMLHttpRequest();

	// defines the GET/POST method, source, and async value of the AJAX object
	ajax.open("GET", fromFile, true);

	// provides code to do something in response to the AJAX request
	ajax.onreadystatechange = function() {
			if ((this.readyState == 4) && (this.status == 200)) {
				document.querySelector(whereTo).innerHTML += this.responseText;
				
			} else if ((this.readyState == 4) && (this.status != 200)) {
				console.log("Error: " + this.responseText);
			}
		
	} // end ajax.onreadystatechange function

	// initiate request and wait for response
	ajax.send();

}

//new recipe object
function Recipe(recipeName, contributorName, imageURL, ingredientsURL, equipmentURL, directionsURL) {
  this.recipeName = recipeName;
  this.contributor = contributorName;
  this.image = imageURL;
  this.ingredients = ingredientsURL;
  this.equipment = equipmentURL;
  this.directions = directionsURL;
  
  this.displayRecipe = function() {
    document.querySelector("#recipeBanner h1").innerHTML = this.recipeName;
    document.querySelector("#contributor").innerHTML = this.contributor;
    document.querySelector("#recipeBanner").style.backgroundImage = "url(" + this.image + ")";
    loadFileInto(this.ingredients, "#ingredients ul");
    loadFileInto(this.equipment, "#equipment ul");
    loadFileInto(this.directions, "#directions ol");
  }
}

MushroomSalsaChili = new Recipe("Mushroom Salsa Chili", "Sarah Hoppe", "chiliPhoto2.jpg", "ingredients.html", "equipment.html", "directions.html");
BasicCrepes = new Recipe("Basic Crepes", "Zakiya Pruitt", "crepesPhoto.jpg", "ingredientsCrepes.html", "equipmentCrepes.html", "directionsCrepes.html");
Pancakes = new Recipe("Old Fashioned Pancakes", "Maddy Szczypka", "pancakesPhoto.jpg", "ingredientsPancakes.html", "equipmentPancakes.html", "directionsPancakes.html");

window.onload = function() {
 document.querySelector("#firstRecipe").onclick = function() {
   MushroomSalsaChili.displayRecipe();
 }
 
 document.querySelector("#secondRecipe").onclick = function() {
   BasicCrepes.displayRecipe();
 }
 
 document.querySelector("#thirdRecipe").onclick = function() {
   Pancakes.displayRecipe();
 }
} //end of window.onload