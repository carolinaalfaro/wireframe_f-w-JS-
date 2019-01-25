// JavaScript is capitalized using "camel case": https://en.wikipedia.org/wiki/Camel_case
// Check out the power of the classList property: https://www.w3schools.com/jsref/prop_element_classlist.asp

// "el" stands for the "element" that was just clicked
function addClass(el){
	el.classList.add("opaque");

}

// "el" stands for the "element" that was just clicked
function removeClass(el){
	el.classList.remove("pats-silver");
}
function beach(el){
	document.getElementById("left_picture").src = ("image/leftbeach.PNG");
	document.getElementById("middle_picture").src = ("image/middlebeach.PNG");
	document.getElementById("right_picture").src = ("image/rightbeach.PNG");
}