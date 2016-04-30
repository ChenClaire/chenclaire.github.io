$('.carousel').carousel();

[].slice.call(document.querySelectorAll('input.input__field')).forEach(function(inputEl) {
    // in case the input is already filled..
    if (inputEl.value.trim() !== '') {
        classie.add(inputEl.parentNode, 'input--filled');
    }

    // events:
    inputEl.addEventListener('focus', onInputFocus);
    inputEl.addEventListener('blur', onInputBlur);
});

function onInputFocus(ev) {
    classie.add(ev.target.parentNode, 'input--filled');
}

function onInputBlur(ev) {
    if (ev.target.value.trim() === '') {
        classie.remove(ev.target.parentNode, 'input--filled');
    }
}


function goTo(el) {
    var ID = "#" + el;
    $('body, html').animate({ scrollTop: $(ID).offset().top }, '900');
}