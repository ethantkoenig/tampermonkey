// ==UserScript==
// @name         Vimium-friendly links for ErgoDoz EZ config tool
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Make ErgoDoz EZ config tool Vimium-friendly
// @author       Ethan Koenig
// @match        https://configure.ergodox-ez.com/*
// @grant        none
// @require      http://code.jquery.com/jquery-3.2.1.slim.min.js
// ==/UserScript==

(function() {
    'use strict';

    $('div.keytop').attr('role','button');
})();
