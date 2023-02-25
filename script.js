let tname = document.getElementById("name")
let tmail = document.getElementById("email")
let tpw = document.getElementById("pw")
let tcpw = document.getElementById("cpw")
let signupbtn = document.getElementById("signup")
let alert = document.getElementById("alertmsg")

signupbtn.addEventListener("click", validate)
let arr = []

function validate(e) {

    let teachername = tname.value
    let teachermail = tmail.value
    let teacherpw = tpw.value
    let teachercpw = tcpw.value



    let obj = {
        email: teachermail,
        pass: teacherpw,
        name: teachername,
    }
    console.log(obj);
    arr.push(obj)

    var re = /\S+@\S+\.\S+/;
    if (re.test(teachermail)) {
        if (teachercpw != " " && teacherpw != "") {
            if (teacherpw == teachercpw) {
                window.location.href = "/login.html"
                console.log("hi");
            }
            console.log("both are not matching");
            let alertm = `Password and confirm password should match`
            alert.innerHTML = alertm
        }
        else{
            let alertm = `Password and confirm password shouldn't empty`
            alert.innerHTML = alertm
        }
    }
    if (re.test(teachermail) == false) {
        console.log("mail should be validated");
        let alertm = `Email should have specific characters`
        alert.innerHTML = alertm
    }
    if (teachername == "") {
        console.log("take name");
        let alertm = `Name should not empty`
        alert.innerHTML = alertm
    }
    localStorage.setItem("data", JSON.stringify(arr))

}
