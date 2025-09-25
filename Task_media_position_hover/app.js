"use strict";
$(document).ready(function () {

    $('.btn').click(function (e) {
        e.preventDefault();
        let text = $('input').val();
        if (!text) return;
        $('.col-md-12').append(`<button>${text}</button>`);
    });


    $('.btn').click(function (e) {
        e.preventDefault();

        let a = (a) => {
            for (let i = 1; i <= a; i++) {

                $('.col-md-12').append(`<button>${i}</button>`);
            }
        }
        a($('input').val())
    });





});




