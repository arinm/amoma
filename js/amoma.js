//fileupload
$("form").on("change", ".file-upload-field", function(){
    $(this).parent(".file-upload-wrapper").attr("data-text",         $(this).val().replace(/.*(\/|\\)/, '') );
});

setInterval(function(){
    $('#loader-1').addClass('none')
},5000);

// function myFunction() {
//     setTimeout(function(){
//        addClass ('#loader-1').css('display','none');
//     }, 3000);
// }



