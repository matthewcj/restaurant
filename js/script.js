
window.addEventListener("load", function(){
	// page loader
	document.querySelector(".page-loader").classList.add("fade-out");
	setTimeout(function(){
		document.querySelector(".page-loader").style.display="none";
	},600);
	// animation on scroll
	AOS.init();
});



// toggle navbar
const navToggler = document.querySelector(".nav-toggler"); // untuk memilih bagian mana yang mau di klik, kalau disini yang hamburger
navToggler.addEventListener("click", toggleNav); // untuk menambahkan fungsi klik pada hamburger

function toggleNav(){
	navToggler.classList.toggle("active") // menambahkan kelas active pada nav-toggler
	document.querySelector(".nav").classList.toggle("open"); // menambah kelas open pada nav-toggler agar navbar bisa tampil saat hamburger di klik

};


// untuk menutup nav pada saat mengklik nav item
document.addEventListener("click", function(e){
	if(e.target.closest(".nav-item")){
		toggleNav();
	}
});


// sticky header
window.addEventListener("scroll", function(){
	if(this.pageYOffset > 60){
		document.querySelector(".header").classList.add("sticky"); // menambah kelas sticky pada kelas header saat menscroll web kebawah saat lebih dari 60
	}
	else{
		document.querySelector(".header").classList.remove("sticky"); // menghilangkan keals sticky pada header pada saat point scroll web kurang dari 60
	}
});





// menu tabs
const menuTabs = document.querySelector(".menu-tabs");
menuTabs.addEventListener("click", function(e){
	if(e.target.classList.contains("menu-tab-item") && !e.target.classList.contains("active")){
		const target = e.target.getAttribute("data-target");
		menuTabs.querySelector(".active").classList.remove("active");
		e.target.classList.add("active");
		const menuSection = document.querySelector(".menu-section")
		menuSection.querySelector(".menu-tab-content.active").classList.remove("active");
		menuSection.querySelector(target).classList.add("active");
		AOS.init();
	}
});