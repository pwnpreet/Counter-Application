let c = 0, ci= 0, cd= 0;
const count= document.getElementById("count");
const incCount= document.getElementById("incCount");
const decCount= document.getElementById("decCount");

function inc() {
    c++;
    ci = (ci>=100)? 0: ci+1;
    update();
}

function dec() {
    c = (c>0)? c-1: 0;
    cd = (cd>=100)? 0: cd+1;
    update();
}

function update() {
    incCount.textContent = ci;
    decCount.textContent = cd;
    count.textContent = c;
}