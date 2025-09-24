"use strict";
$(document).ready(function () {

    // $('.btn').click(function (e) {
    //     e.preventDefault();
    //     $('.col-md-12').append(`<button></button>`);

    //     $('input').val();
    // });


    $('.btn').click(function (e) {
        e.preventDefault();

        let a = (a) => {
            for (let i = 1; i <= a; i++) {
                $('.box').append(`<button>${i}</button>`);
            }
        }
        a($('input').val())
    });
});




