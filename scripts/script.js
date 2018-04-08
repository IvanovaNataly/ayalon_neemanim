
$(document).ready(function(){

	/*Horizontal menu turns to vertical*/
	/*On click nav recieves .nav-visible*/
	var hamburgerButton = document.querySelector("#hamburgerButton");
	var ddMenu = document.querySelector("#mainMenu");

	function menuToggle() {
		hamburgerButton.classList.toggle('close-menu');

		if (hamburgerButton.classList.contains("close-menu")) {
			ddMenu.classList += " nav-visible"
		}
		else {
			ddMenu.classList = "nav-list";
		}
	}

	hamburgerButton.addEventListener("click", menuToggle);

//Close menu on click
	//$('.nav-link').on('click', menuToggle);

});
