let pw = document.querySelector("#password");
let conpw = document.querySelector("#conpw");
let mismatch = document.querySelector("#mismatch");


conpw.addEventListener("input", checkpw)
pw.addEventListener("input", checkpw)

function checkpw(){
    if(pw.value !== conpw.value){
        mismatch.style.visibility = "visible";
        pw.style.border = "2px solid red";
        conpw.style.border = "2px solid red";
    } else {
        mismatch.style.visibility = "hidden";
        pw.style.border = "2px solid #eee";
        conpw.style.border = "2px solid #eee";
    }
}
