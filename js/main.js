$(function() {
    $(window).scroll(function() {
        if($(this).scrollTop() != 0) {
            $('#up').fadeIn();
        } else {
            $('#up').fadeOut();
        }
    });
    $('#up').click(function() {
        $('body,html').animate(700);
    });
});

let i = 2;
price = () => {
    const img = document.querySelector('#price');
    if ((i % 2) == 0) {
        img.classList.add('active');
        i++;
    } else {
        img.classList.remove('active');
        i++;
    }
}

let j = 2;
age = () => {
    const img = document.querySelector('#age');
    if ((j % 2) == 0) {
        img.classList.add('active');
        j++;
    } else {
        img.classList.remove('active');
        j++;
    }
}
