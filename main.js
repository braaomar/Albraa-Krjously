let menu = document.querySelector('.menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    navbar.classList.toggle('open-menu');
    menu.classList.toggle("move");
};
window.onscroll = () => {
  navbar.classList.remove('open-menu');
  menu.classList.remove("move");
};


  var swiper = new Swiper(".review-content", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: true,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


  // Email JS
  emailjs.send("service_ld3u7fx","template_fpjk0qa");

  function validate(){
    let name = document.querySelector(".name");
    let email = document.querySelector(".email");
    let msg = document.querySelector(".message");
    let send = document.querySelector(".send-btn");


    send.addEventListener('click',(e)=>{
      e.preventDefault();
      if(name.value== ""|| email.value== ""|| msg.value== ""){
        emptyerror();

      }else{
        sendmail(name.value,email.value,msg.value);
        success();
      }
    })
  }
  validate();

  function sendmail(name,email,msg){
    // code from website ***1.4***
    emailjs.send("service_ld3u7fx","template_fpjk0qa",{
      to_name: name,
      from_name: email,
      message: msg,
      });
  }

  function emptyerror(){
    swal({
      tittle:"No",
      text:"Fileds cannot be empty",
      icon:"error",
    });
  }
  function success(){
    swal({
      tittle:"Email sent successfuly",
      text:"We try to reply soon",
      icon:"success",
    });
  }

  // header background change on scroll


let header = document.querySelector("header");
window.addEventListener("scroll", ()=>{
    header.classList.toggle("header-active", window.scrollY > 0);
  });

