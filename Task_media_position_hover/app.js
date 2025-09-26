"use strict";
$(document).ready(function () {

    $('.btn').click(function (e) {
        e.preventDefault();
        let a = (m) => {
            if (isNaN(m)) {
                $('.col-md-12').append(`<button>${m}</button>`);
            } else {
                for (let i = 1; i <= m; i++) {
                    $('.col-md-12').append(`<button>${i}</button>`);
                }
            }
        }
        a($('input').val());
        $('input').val('');
    });
});




