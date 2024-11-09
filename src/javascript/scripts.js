$(document).ready(function(){
    $('#btn-menu').on('click', function(){
        $('#nav-list').toggleClass('active');
        $('#icon-open-close').toggleClass('fa-x')
    })
})