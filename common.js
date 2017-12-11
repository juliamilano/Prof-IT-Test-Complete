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
    let modalWindow = document.getElementById('modal');
    let modalWindowError = document.getElementById('error');

    let modalAlert = document.querySelector('.modal-alert');
    let modalError = document.querySelector('.modal-error');
    let closeAlertSpan = document.querySelectorAll('.close');

    let buttonSubmit = document.getElementById('submit');
    
    var forma = document.forms[0];
    let name = forma.elements['name-input'];
    let email = forma.elements['email-input'];
    let textAreaComments = forma.elements['comments'];
    
    const paternName = /[a-zA-Z0-9а-яА-Я._%+-]+[\s]{0,1}[a-zA-Zа-яА-Я0-9._%+-]+/i;
    const paternEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i;

    closeAlertSpan.onclick = function(){
            modalWindow.style.display = "none";
            modalWindowError.style.display = "none";
    }

    buttonSubmit.onclick = function(e){
       if((name.value.length !== 0) && paternEmail.test(email.value) && paternName.test(name.value) && (textAreaComments.value.length !== 0)){
            modalWindow.style.display = "block";
            modalAlert.style.top = screen.availHeight/2 - modalAlert.offsetHeight/1.5 + "px";
            setTimeuot(function(){
                 modalWindow.style.display = "none";
            }, 1000);
            return true;
        }else{
            modalWindowError.style.display = "block";
            modalError.style.top = screen.availHeight/2 - modalError.offsetHeight/1.5 + "px";
            var errorInterval = setInterval(function(){
              modalWindowError.style.display = "none";
            }, 1000);
            setTimeout(function(){
              clearInterval(errorInterval);
            }, 2000);
        }
    };

}







