const eMail=document.getElementById("eMail");
const subBtn=document.querySelector(".subBtn")
const errorMsg=document.querySelector(".errorMsg")

function validateEmail(){
    const eMailValue=eMail.value.trim();
    const regex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(regex.test(eMailValue)){
        errorMsg.style.display="none"
        eMail.style.border = `1px solid ${getComputedStyle(document.documentElement).getPropertyValue('--clr-PaleBlue')}`;
        return true
    }
    errorMsg.style.display="block"
    eMail.style.border = `1px solid ${getComputedStyle(document.documentElement).getPropertyValue('--clr-Red')}`;
    return false
}

subBtn.addEventListener("click",function(e){
    e.preventDefault();

    const isValidEmail=validateEmail();

    if(isValidEmail){
        document.querySelector("form").reset();
    }
    
})