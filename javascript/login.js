
let data = [
    {
        userFirstName: "jairaj",
        userLastName: "rathod",
        userEmail: "rathodjairaj805@gmail.com",
        userNewPassword: "jairathod@123",
        userConfirmPassword: "jairathod@123"
    }
]

const userEmailAddress = document.getElementById("email")
const userPassword = document.getElementById("password")
const btna = document.getElementById("logina")



for (let i=0 ; i<data.length ; i++ ){
    if (userEmailAddress == data[i].userEmail && userPassword == data[i].userConfirmPassword){
        btna.setAttribute("href","home.html")
    }
}