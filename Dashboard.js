let finaluser= JSON.parse(localStorage.getItem("currentUser"))
console.log(finaluser);

let spanvalues=document.getElementsByTagName("span");
spanvalues[0].innerHTML=`${finaluser[0].name}`;
spanvalues[1].innerHTML=`${finaluser[0].email}`

let olpw=document.getElementById("opw")
let nepw=document.getElementById("npw")
let copw=document.getElementById("cnpw")
let change=document.getElementById("change")
let logout=document.getElementById("logout")

change.addEventListener("click", modify)
logout.addEventListener("click", loggingout)

function modify(){
    let oldpw=olpw.value
    let newpw=nepw.value
    let confnewpw=copw.value

    if(oldpw==finaluser[0].pass){ //old password matches
        finaluser[0].pass=newpw
        console.log(finaluser); 
    }
}
function loggingout(){
    // finaluser.
    var popp=finaluser.pop()
    console.log(popp);
}