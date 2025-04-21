//let h2=document.querySelector("h2");
//console.dir(h2.innerText);
//h2.innerText=h2.innerText+"from software company";
let divs=document.querySelectorAll(".box");
console.log(divs);
//div[1] seperete acccess
//div[2]
let idx=1;
for(div of divs){
    div.innerText=`new unique value ${idx}`;
    idx++;
}
//div[0].innerText="new unique value1";
//div[1].innerText="new unique value2";
//div[2].innerText="new unique value3";