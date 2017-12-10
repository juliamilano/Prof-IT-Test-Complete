$(function() {

$(document).ready(function(){
    $('.block-slider').slick();
});
    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        arrows: true,
        draggable: true,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav',
        autoplay: true,
        autoplaySpeed: 2000
    });
    $('.slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        variableWidth: true,
        asNavFor: '.slider-for',
        centerMode: true,
        focusOnSelect: true        
    });


$(document).ready(function() {
    $('.slider-nav').magnificPopup({
        delegate: 'a',
        type: 'image'        
        //gallery: {
         //   enabled: true
        //}
    });
});

});

// модальное окно отправки формы

function AlertSubmit(){
    var __self = this;
    let modalWindow = document.getElementById('modal');
    let modalAlert = document.querySelector('.modal-alert');
    let buttonSubmit = document.getElementById('submit');
    let closeAlertSpan = document.getElementById('close');

    buttonSubmit.onclick = function(){
            modalWindow.style.display = "block";
            modalAlert.style.top = screen.availHeight/2 - modalAlert.offsetHeight/1.5 + "px";
    }
    closeAlertSpan.onclick = function(){
            modalWindow.style.display = "none";
    }
}







