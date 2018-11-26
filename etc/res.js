//https://css-tricks.com/snippets/jquery/smooth-scrolling/
//http://iamdustan.com/smoothscroll/

//https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollTo

// SEEEEE ANSWER 43   https://stackoverflow.com/questions/17733076/smooth-scroll-anchor-links-without-jquery

function navi(target) {
	switch(target) {
		case 'a-home':
		var pos = document.getElementById('a-home').offsetTop;
			break;
		case 'a-web':
		var pos = document.getElementById('a-web').offsetTop;
			break;
		case 'a-skills':
		var pos = document.getElementById('a-skills').offsetTop;
			break;
		case 'a-cv':
		var pos = document.getElementById('a-cv').offsetTop;
			break;
		case 'a-ref':
		var pos = document.getElementById('a-ref').offsetTop;
			break;
		case 'a-colo':
		var pos = document.getElementById('a-colo').offsetTop;
			break;
		case 'a-contact':
		var pos = document.getElementById('a-contact').offsetTop;
			break;
	}
	window.scrollTo({
		top: pos-30,
		behavior: "smooth"
	});
}

/*
var myArticlelist = document.querySelectorAll('article');
var i;
for (i = 0; i < myArticlelist.length; i++) {
    myArticlelist[i].style.backgroundColor = "red";
}
*/

