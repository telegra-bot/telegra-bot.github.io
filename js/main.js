var scene = document.getElementById('scene');
var parallax = new Parallax(scene);

function magic() {
	if (window.pageYOffset > 200) {
		document.querySelector('.top-btn').style.opacity = '1';
		document.querySelector('.navbar-frame').style.opacity = '1';
		document.querySelector('.navbar-frame').style.top = '0';
	} else {
		document.querySelector('.top-btn').style.opacity = '0'
		document.querySelector('.navbar-frame').style.opacity = '0';
		document.querySelector('.navbar-frame').style.top = '-150px';
	}
}




const tabsHeaders = document.querySelectorAll("[data-tab]");

tabsHeaders.forEach (tabsHandler);

function tabsHandler(item) {
	item.addEventListener("click", tabsClick)
};

function tabsClick() {
    const tabId = this.dataset.tab;

    document.querySelectorAll("[data-tab-content]").forEach(function (item) {
        item.classList.add("d-none");
    });
    
    document.getElementById(tabId).classList.toggle("d-none");
};



$('.owl-carousel').owlCarousel({
	center: true,
	loop:true,
	dots:false,
    margin:75,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        1000:{
            items:2
        }
    }
});