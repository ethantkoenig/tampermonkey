// ==UserScript==
// @name         Vimium-friendly links for Habitica
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Make Habitica tasks Vimium-friendly
// @author       Ethan Koenig
// @include      https://habitica.com/*
// @grant        none
// @require      http://code.jquery.com/jquery-3.2.1.slim.min.js
// ==/UserScript==

function makeClickable($node) {
    $node.find('.task-clickable-area, .task-control, .task-reward, .drawer-toggle-icon, .spell')
        .attr('role', 'button');
}

(function() {
    'use strict';
    makeClickable($('body'));
    $(document).ready(function(){
        var observer = new MutationObserver(function(mutations) {
            mutations.forEach(function(mutation) {
                if (!mutation.addedNodes) {
                    return;
                }
                mutation.addedNodes.forEach(function(node) {
                  makeClickable($(node));
                });
            });
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true,
            attributes: false,
            characterData: false
        });
    });
})();
