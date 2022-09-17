// click - Arrow down

var clicks = document.querySelectorAll('.click');
var service_block = document.querySelector('.service_block');

clicks.forEach((click) => {
    click.addEventListener('click', function (e) {
        service_block.classList.toggle('hidden');
        service_block.classList.toggle('active');
    })
})

//onclick - Languages

var onclicks = document.querySelectorAll('.onclick');
var language_button = document.querySelector('.language_button');

onclicks.forEach((onclick) => {
    onclick.addEventListener('click', function (e) {
        language_button.classList.toggle('hidden');
        language_button.classList.toggle('active');

    })
})

//1)Читать далее - .next
if(document.querySelectorAll(service_next)){
    var next = document.querySelectorAll('.next');
    var next_item1 = document.querySelectorAll('.next_item1');
    var next2 = document.querySelectorAll('.next2');
    var next3 = document.querySelectorAll('.next3');
    var service_next = document.querySelector('.service_next');
    var next_two = document.querySelector('.next_two');
    var next_three = document.querySelector('.next_three');
    var close = document.querySelectorAll('.close');
    var close2 = document.querySelectorAll('.close_two');
    var close3 = document.querySelectorAll('.close_three');
    
    next.forEach((next) => {
        next.addEventListener('click', function (e) {
            service_next.classList.toggle('hidden');
            service_next.classList.toggle('active');
            // next.style.display = 'none';       
        })
    })

    //close
    var close = document.querySelectorAll('.close');
    var service_next = document.querySelector('.service_next');
    
    close.forEach((close) => {
        close.addEventListener('click', function (e) {
            service_next.classList.toggle('hidden');
            service_next.classList.toggle('active');
    
        })
    })
    if (document.querySelector('.next2')){
        next2.forEach((next2) => {
            next2.addEventListener('click', function (e) {
                next_two.classList.toggle('hidden2');
                next_two.classList.toggle('active');
        
            })
        })
        
        close2.forEach((close2) => {
            close2.addEventListener('click', function (e) {
                next_two.classList.toggle('hidden2');
                next_two.classList.remove('active');
        
            })
        })
    }

    if(document.querySelector('.next3')){
        next3.forEach((next3) => {
            next3.addEventListener('click', function (e) {
                next_three.classList.toggle('hidden3');
                next_three.classList.toggle('active');
        
            })
        })
    
        close3.forEach((close3) => {
            close3.addEventListener('click', function (e) {
                next_three.classList.toggle('hidden3');
                next_three.classList.toggle('active3');
        
            })
        })   
    }
    

}


// Slider-1

// let offset = 0;
// const imgBlock = document.querySelector('.images_block');

// document.querySelector('.slider_next').addEventListener('click', function () {
//     offset = offset + 1200;

//     if (offset > 1200) {
//         offset = 0;
//     }
//     // imgBlock.style.left = -offset + 'px';
//     imgBlock.style.transform=`translateX(-${offset}px)`;
// });
//       // transform:translateX(0);
//       document.querySelector('.slider_prev').addEventListener('click',function(){
//       offset = offset - 1200;

//       if(offset < 0){
//         offset = 1200;
//       }

//       // imgBlock.style.left = -offset + 'px';
//       imgBlock.style.transform=`translateX(-${offset}px)`;
//     });

if (document.querySelector('.images_block')) {
    // Slider-1 -> Tiny Slider
    var slider = tns({
        container: '.images_block',
        items: 2,
        slideBy: 'page',
        nav: false,
        controlsPosition: 'bottom',
        navPosition: 'bottom',
        mouseDrag: true,
        // autoplay: true,
        autoplayButtonOutput: false,
        controlsContainer: '#custom-control',
        responsive:{
            0:{
                items:2,
            }
        }
    })    
}

if (document.querySelector('.Equipment_block')){
    // Slider-2 -> Tiny Slider
    var slider = tns({
        container: '.Equipment_block',
        items: 3,
        // edgePadding:2,
        controls: false,
        slideBy: 'page',
        controlsPosition: 'bottom',
        navPosition: 'bottom',
        mouseDrag: true,
        autoplay: true, 
        autoplayButtonOutput: false,
        responsive: {
           0:{
               items:1,
               slideBy: 1,
               nav: false,
            //    autoplay: false,
           },
           768: {
               items:3,
               nav: true,
           },
           1024:{
                items:3,
                nav: true,
           }
        }
    })
}

if (document.querySelector('.content_line')) {
    // Slider-3 -> Tiny Slider
    var slider = tns({
        container: '.content_line',
        items: 3,
        slideBy: 'page',
        gutter: 50,
        edgePadding:2,
        controls: false,
        navPosition: 'bottom',
        mouseDrag: true,
        autoplay: true, 
        autoplayButtonOutput: false,
        responsive:{
            0: {
                items: 1,
                nav: false,
            },
            768:{
                items: 3,
                nav: true,
            },
            1024:{
                items: 3,
                nav: true,
            }
        }
    })
}

// Slider-2

// const sliderLine = document.querySelector('.Equipment_content');
//     const selected1 = document.querySelectorAll('.selected-on');
//     const selected2 = document.querySelectorAll('.selected-two');
//     const selected3 = document.querySelectorAll('.selected-three');

//     document.querySelector('.selected-one').addEventListener('click', function(){
//         sliderLine.style.transform = `translateX(-${0}px)`;
//                 // this.classList.add('selected');
//                 // selected2.classList.remove('selected');
//                 // selected3.classList.remove('selected');
//     });

//     document.querySelector('.selected-two').addEventListener('click', function(){
//         sliderLine.style.transform = `translateX(-${1200}px)`;
//                 // this.classList.add('selected');
//                 // selected1.classList.remove('selected');
//                 // selected3.classList.remove('selected');
//     });

//     document.querySelector('.selected-three').addEventListener('click', function(){
//         sliderLine.style.transform = `translateX(-${2400}px)`;
//                 // this.classList.add('selected');
//                 // selected1.classList.remove('selected');
//                 // selected2.classList.remove('selected');
//     });



    // Slider-3

    // const contentSlider = document.querySelector('.content');
    // const slider1 = document.querySelectorAll('.slider-one');
    // const slider2 = document.querySelectorAll('.slider-two');
    // const slider3 = document.querySelectorAll('.slider-three');

    // document.querySelector('.slider-one').addEventListener('click', function(){
    //     contentSlider.style.transform = `translateX(-${0}px)`;
    // });

    // document.querySelector('.slider-two').addEventListener('click', function(){
    //     contentSlider.style.transform = `translateX(-${1200}px)`;
    // });

    // document.querySelector('.slider-three').addEventListener('click', function(){
    //     contentSlider.style.transform = `translateX(-${2400}px)`;
    // });

    
    // Slider-3 For -> About.html

    // const content = document.querySelector('.content-box');

    // document.querySelector('.slider_one').addEventListener('click', function(){
    //     content.style.transform = `translateX(-${0}px)`;
    // });

    // document.querySelector('.slider_two').addEventListener('click', function(){
    //     content.style.transform = `translateX(-${1200}px)`;
    // });

    // document.querySelector('.slider_three').addEventListener('click', function(){
    //     content.style.transform = `translateX(-${2400}px)`;
    // });


    /* humburger menu - JS open*/

    const menuBtn = document.querySelector(".menu_btn");
    let menuOpen = false;
    var x = document.getElementsByTagName("BODY")[0];

    menuBtn.addEventListener('click', () => {
        if (!menuOpen) {
            menuBtn.classList.add('open');
            menuOpen = true;
            x.style.overflow = 'hidden';
        }
        else{
            menuBtn.classList.remove('open');
            menuOpen = false;
            x.style.overflow = 'visible';
        }
    });

    /* humburger menu - JS close*/


    /* scroll-to-top button - start */

    const gotobtn = document.querySelector(".gotobtn");

    window.addEventListener("scroll", () => {
        if(window.pageYOffset > 800){
            gotobtn.classList.add("active_up");
        }else{
            gotobtn.classList.remove("active_up");
        }
    })

    /* scroll-to-top button - end */


    // Modal-form modal onclick

if(document.querySelector('.modal_form')){
    const loginClick = document.querySelector('.open_modal');
    const modalForm = document.querySelector('.modal_form');

    loginClick.addEventListener('click',function(e){
    // modalForm.classList.toggle('hidden');
    modalForm.classList.add('active');

    
})
    const closeClick = document.querySelector('.close_form');
    

    closeClick.addEventListener('click',function(e){
        modalForm.classList.remove('active');
        
    })
}


// Tab Link - open
function openCity(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;
    const tabClick = document.querySelector('.tab_click');
    const tabActive = document.querySelector(".tabcontent_active");
    tabActive.style.display = "none";
    const activeAdd = document.getElementById("active_add");
      
    // Get all elements with class="tabcontent" and hide them
    tabcontents = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontents.length; i++) {
        tabcontents[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove('active');
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
    
  }

//   if (document.querySelector('.tabcontent_active')) {
//       const tabClick = document.querySelector('.tab_click');
//       const tabActive = document.querySelector(".tabcontent_active");
    
//     //   tabClick.addEventListener('click',() => {
//     //         tabActive.style.display = "block";
//     //   });

//   }

  // Tab Link - close

  /* navbar sticky - open */

window.addEventListener('scroll', function(){
    var headerContent = document.querySelector(".header_top");
    headerContent.classList.toggle("sticky",window.scrollY > 0);
})

/* navbar sticky - close */