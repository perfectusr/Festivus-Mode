// ==UserScript==
// @include        http://www.tumblr.com/*
// @include        https://www.tumblr.com/*
// @exclude        http://www.tumblr.com/upload/*
// @exclude        https://www.tumblr.com/upload/*

var audio = new Audio("http://free.mp3songurls.com/1420698.mp3"),
    timer = null,
    isScrolling = false;


function enable() {
    $(window).on('scroll', function() {
        clearTimeout(timer);
        audio.play();
     if (!isScrolling) {
        isScrolling = true;
        setTimeout(function() {
            audio.pause();
            isScrolling = false;
            }, 600);
        }
    });
}

function disable() {
    $(window).off('scroll')
    if (!isScrolling) {
        isScrolling = true;
        setTimeout(function() {
            audio.pause();
            isScrolling = false;
            }, 600);
        }
    }