// (function ($) { 
//     var loader = function () {
//         setTimeout(function () {
//             if ($('#loader').length > 0) {
//                 $('#loader').removeClass('show');
//             }
//         }, 2000);
//     };
//     loader(); 
// })(jQuery);
function toggleSubmenu() {
    var submenu = document.querySelector('.submenu');
    var arrow = document.querySelector('.arrow');
    if (submenu.style.display === "block") {
        submenu.style.display = "none";
        arrow.innerHTML = "&#x2192;";
    } else {
        submenu.style.display = "block";
        arrow.innerHTML = "&#x2193;";
    }
}
function toggleSubmenu_2() {
    var submenu_2 = document.querySelector('.submenu_2');
    var arrow_2 = document.querySelector('.arrow_2');
    if (submenu_2.style.display === "block") {
        submenu_2.style.display = "none";
        arrow_2.innerHTML = "&#x2192;";
    } else {
        submenu_2.style.display = "block";
        arrow_2.innerHTML = "&#x2193;";
    }
}
document.querySelector("#btn-menu").onclick = function(){
    (function ($) { 
        $('#menu').addClass('open');
    })(jQuery);
    // console.log('ff')
}
document.querySelector("#close").onclick = function(){
    (function ($) { 
        $('#menu').removeClass('open');
    })(jQuery);
    // console.log('ff')
}
window.onload = function(){
    setTimeout(function () {
        (function ($) { 
            $('#loader').removeClass('show');
            $('.loader').addClass('d-none');
        })(jQuery);
    }, 1250)
}