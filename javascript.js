let btn = document.querySelector(".btn1");
let btn2 = document.querySelector(".btn2");
let parent = document.getElementById("parent");
let slct = document.getElementById("selection");


btn.onclick = ()=>{
let div = document.createElement("div");
if(slct.value==="squire"){
    div.className="squire";
}
else if(slct.value==="circle"){
    div.className="circle";
}
parent.appendChild(div);
}

btn2.onclick = ()=>{
    let bool=false;
    let parntchilds = parent.children;
    console.log(parntchilds);
    for(i in parntchilds){

    if(parntchilds[i].className===slct.value){
         parent.removeChild(parntchilds[i]);
         bool=true;
        break;}}
        if(bool==false){
            window.alert("not possible!");
        }
}
