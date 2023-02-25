
console.log("entered login");
var item=JSON.parse(localStorage.getItem("data"))
console.log(item);


let email=document.getElementById("email")
let pw=document.getElementById("pw")
let login=document.getElementById("login")
login.addEventListener("click", pass)

function pass(){
    let lmail=email.value
    let lpw=pw.value
    console.log(lmail+" "+lpw);
    console.log(item.pass);
    if(lmail==item[0].email && lpw==item[0].pass){
        console.log("Login is successful");
        let tokenname=crypto.randomUUID()
        console.log(tokenname);
        let finaltoken=tokenname.substring(0,16)
        console.log(finaltoken);
        item.token=finaltoken;
        console.log(item);
        localStorage.setItem("currentUser",JSON.stringify(item))
        window.location.href="Dashboard.html"
    }
    else{
        console.log("enter valid credentials");
    }


}