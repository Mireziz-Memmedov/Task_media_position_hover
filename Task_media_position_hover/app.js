"use strict";
$(document).ready(function () {

    $('.btn').click(function (e) {
        e.preventDefault();
        let text = $('input').val().trim();
        if (text === '') return;
        if (isNaN(text)) {
            $('.col-md-12').append(`<button>${text}</button>`);
        } else {
            let a = parseInt(text);
            for (let i = 1; i <= a; i++) {
                $('.col-md-12').append(`<button>${i}</button>`);
            }
        }
        $('input').val('');
    });
});




