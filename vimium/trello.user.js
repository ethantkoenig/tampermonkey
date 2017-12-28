// ==UserScript==
// @name         Vimium-friendly links for Trello
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Make Trello buttons and links Vimium-friendly
// @author       Ethan Koenig
// @include      https://trello.com/*
// @grant        none
// @require      http://code.jquery.com/jquery-3.2.1.slim.min.js
// ==/UserScript==

(function() {
    'use strict';
    $('.board-header-btn-icon-close').attr('role', 'button');
})();
