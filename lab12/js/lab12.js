"use strict";

$(document).ready(function(){
    // Task 1 - Fade in effect for heading
    $('h1').hide().fadeIn(1000);
    
    // Task 2 - Mouseenter/mouseleave effects
    $('h1').mouseenter(function(){
        var $str = $('h1').text();
        $('h1').text($str + "^^");
    });
    
    $('h1').mouseleave(function(){
        $('h1').text("AST10962");
    });
    
    // Task 2 - Click effect for h2
    $('h2').click(function(){
        $(this).toggleClass("tg");
    });
    
    // Task 2 - Form submission
    $('#submit').click(function(){
        var $username = $('#username').val();
        var $password = $('#password').val();
        $('#feedback').text($username + " : " + $password);
    });
    
    // Task 3 - Username validation
    $('#username').focus(function(){
        $('#feedback').addClass('tip');
        $('#feedback').text('Username must be at least 6 characters');
    });
    
    $('#username').blur(function(){
        if ($(this).val().length < 6) {
            $('#feedback').removeClass('tip');
            $('#feedback').addClass('warning');
            $('#feedback').text('Username too short! (Minimum 6 characters)');
        } else {
            $('#feedback').text('').removeClass('warning tip');
        }
    });
});