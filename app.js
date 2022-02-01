$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            dots:true
        },
        768:{
            items:3,
            dots:false
        },
        
    }
})

// Mobile Navigation Bar
var openbtn = document.querySelector('#openbtn');
var closebtn = document.querySelector('.close-btn');
var menu = document.querySelector('.mobile-nav-wrapper');

openbtn.addEventListener('click',function(){
    menu.style.display ='block';
    openbtn.style.display='none';
    closebtn.style.display='block';
});
closebtn.addEventListener('click',function(){
    menu.style.display ='none';
    openbtn.style.display='block';
    closebtn.style.display='none';
});

// email validation
function getInputValue(){
    // Selecting the input element and get its value 
    var mailtext = document.getElementById("mailtext").value;
    var mail = mailtext;
    var pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
    var formwarn =document.getElementById("form_warn");
    
    // Displaying the value
    // alert(inputVal);
    if (mail.match(pattern)) {
        return true;
    } else {
        formwarn.style.display='block';
    }
    
}