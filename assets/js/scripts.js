// window.onload=function(){
//     var theme = localStorage.getItem('data-theme');
//     if(theme=='light'){
//       document.documentElement.setAttribute('data-theme', 'light');
//     }else if(theme==''){
//       document.documentElement.setAttribute('data-theme', 'light');
//     }else if(theme=='dark'){
//       document.documentElement.setAttribute('data-theme' , 'dark');
//       document.getElementById("drack-box").checked = true;
//     }
//   }
//   function toggle(a){
//     if(a.drack_box.checked==true){
//       document.documentElement.classList.add('transition');
//       document.documentElement.setAttribute('data-theme', 'dark');
//       localStorage.setItem('data-theme','dark');
//     }
//     else if(a.checkbox.checked==false){
//       document.documentElement.classList.add('transition');
//       document.documentElement.setAttribute('data-theme', 'light');
//       localStorage.setItem('data-theme','light');
//     }

//   };

var typed = new Typed('strong', {
    // Waits 1000ms after typing "First"
    strings:[
        'Developer', 
    ],
    loop:true,
    typeSpeed: 250,
    backSpeed:400,
});

var typed = new Typed('#masud', {
    // Waits 1000ms after typing "First"
    strings: [
        'Masud Rana' 
    ],
    loop:true,
    typeSpeed: 200,
    backSpeed:300,
});

 

var filter_fix = ".cover";
var mixer = mixitup(filter_fix,{
     
});
$(document).ready(function(){
    $('.mobile-icon').click(function(){
        $('.right_icon_box').slideToggle( 1000);
        
    });
});

$(document).ready(function(){
    $('.mycarousel').owlCarousel({
        loop:false,
          
        autoplay:true,
        autoplayTimeout:2500,
        responsive:{
            0:{
                items:1,
                 
            },
            700:{
                items:2,
                 
            },
            1100:{
                items:3,
                 
            }
        }
          
    });
    
        
    $('.logo_area1').owlCarousel({
        loop:true,
        autoplay:true,
        autoplayTimeout:3000,
        items:4,
        dots:false,
         
   });

   
    
});
$(document).ready(function(){
    $('.mag-1').magnificPopup({type:'image'});
   $('.mag-2').magnificPopup({type:'image'});
   $('.mag-3').magnificPopup({type:'image'});
   $('.mag-4').magnificPopup({type:'image'});
   $('.mag-5').magnificPopup({type:'image'});
   $('.mag-6').magnificPopup({type:'image'});
   $('.mag-7').magnificPopup({type:'image'});
   $('.mag-8').magnificPopup({type:'image'});
   $('.mag-9').magnificPopup({type:'image'});

   

   
});


$(document).ready(function(){
     $('.body-button').click(function(){
        $('html,body').animate({
            scrollTop: 0
        },1000);

        return false;
    });

 $(window).scroll(function(){
        var scrollvalue = $(this).scrollTop();

        if (scrollvalue>500) {
            $('.body-button').fadeIn();
        }
        else{
            $('.body-button').fadeOut();
        }
    });
    
    
    
});

 

 