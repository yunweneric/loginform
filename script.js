let input = document.querySelector("input[type = submit]");
input.addEventListener("click",(e)=>{
let password = document.querySelector("#password").value;
if (password.length < 5){
    let passwordafter = document.querySelector("#verify");
    passwordafter.innerHTML = "Ooooppps password too short";
    passwordafter.style.color ="red";
    passwordafter.style.padding="8px"
}
// else continue
    e.preventDefault


})
