// ==UserScript==
// @name         Move Menu
// @version      0.0.2
// @description  Move the important things to a gooder place
// @author       thesecretmaster
// @match        *.stackexchange.com*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var nav = document.getElementsByClassName("secondary-nav")[0];
    var rightSection = document.getElementsByClassName("-actions")[0];
    nav.remove();
    rightSection.insertBefore(nav, rightSection.childNodes[0]);

    nav = nav.getElementsByClassName("-list")[0];
    var diamond = document.getElementsByClassName("-item")[4];
    var flags = document.getElementsByClassName("-item")[5];
    diamond.remove();
    flags.remove();
    diamond.className = "-item";
    nav.insertBefore(diamond, nav.childNodes[0]);
    nav.insertBefore(flags, nav.childNodes[0]);
})();