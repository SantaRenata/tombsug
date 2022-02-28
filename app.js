/*
* File: app.js
* Author: Sánta Renáta Diána
* Copyright: 2022, Sánta Renáta Diána
* Group: Szoft I N
* Date: 2022-02-28
* Github: https://github.com/SantaRenata/
* Licenc: GNU GPL
*/

var oldalIn = document.getElementById("oldal");
var alfaIn = document.getElementById("alfa");
var szamitGomb = document.getElementById("szamitGomb");
var eredmenyIn = document.getElementById("eredmeny");

szamitGomb.addEventListener("click", function(){
    let oldal = oldalIn.value
    let alfa = alfaIn.value
    let sugar = 1/2*oldal*Math.sin(alfa);
    console.log(sugar.toLocaleString());
    eredmenyIn.value = (sugar.toLocaleString());
});