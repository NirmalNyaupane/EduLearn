const searchForm = document.querySelector('.search-form')
document.querySelector("#search-btn").onclick = () =>{
    searchForm.classList.toggle("active");
    shoppingCart.classList.remove("active");
    loginForm.classList.remove("active");
    navbar.classList.remove('active');
}
const shoppingCart = document.querySelector('.shopping-cart')  
document.querySelector("#cart-btn").onclick = () =>{
    shoppingCart.classList.toggle("active")
    loginForm.classList.remove("active")
    searchForm.classList.remove("active")
    navbar.classList.remove('active');
}
const loginForm = document.querySelector('.login-form')
document.querySelector("#login-btn").onclick = () =>{
    loginForm.classList.toggle('active');
    shoppingCart.classList.remove('active');
    searchForm.classList.remove('active');
    navbar.classList.remove('active');
}
let navbar = document.querySelector('.navbar');
document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    loginForm.classList.remove("active")
    shoppingCart.classList.remove("active")
    searchForm.classList.remove("active")
}
window.onscroll = () =>{
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

// Top rated Btn Filter 
const top_btn = document.querySelector(".top-btn")
const t_btn = document.querySelectorAll(".t-btn")
const t_img = document.querySelectorAll(".course")

top_btn.addEventListener("click", (e) =>{
    const t_btn_clicked = e.target;
    
    if (!t_btn_clicked.classList.contains("t-btn")) return;

    t_btn.forEach((curElem) => curElem.classList.remove("t-btn-active"));

    t_btn_clicked.classList.add("t-btn-active");

    const btn_num = t_btn_clicked.dataset.btnNum;

    const img_active = document.querySelectorAll(`.t-btn--${btn_num}`);

    t_img.forEach((curElem) => curElem.classList.add("t-image-not-active"))
    img_active.forEach((curElem) => curElem.classList.remove("t-image-not-active"))
})

// testimonials
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  // Annimate Count Number
const countNum = document.querySelectorAll(".count-number")
const speed = 100;

countNum.forEach((curElem) =>{
  const updateNum = () =>{
     const targetNum = parseInt(curElem.dataset.num);
     const initialNum = parseInt(curElem.innerText);
     const incrementNum = Math.trunc(targetNum/speed);

     if(initialNum < targetNum){
       curElem.innerText = `${initialNum + incrementNum}+`;
       setTimeout(updateNum, 10);
     }
  };
  updateNum();
})

 // Scroll To Top Button
 const homesection = document.querySelector(".home-section")  
 const footerElem = document.querySelector(".footer")  
 
 const scroollElement = document.querySelector(".scroll-top");
 
 const scrollTop = () =>{
    homesection.scrollIntoView({behavior: "smooth"});
 };
 scroollElement  .addEventListener("click", scrollTop)

// sticky navbar
const sectionHome = document.querySelector(".home-section");

const observer = new IntersectionObserver(
  (entries) => {
    const ent = entries[0];
    !ent.isIntersecting ?
    document.body.classList.add("sticky") :
    document.body.classList.remove("sticky");
  }, {
    // viewport
    root: null,
    threshold: 0,
    rootMargin: "-100px",
  }
  );
   observer.observe(sectionHome);