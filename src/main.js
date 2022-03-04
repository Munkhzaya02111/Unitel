document.addEventListener("DOMContentLoaded",() => {
    const loginForm = document.querySelector("#otpass");
    const passloginForm = document.querySelector("#password");

    document.querySelector("#otpass").addEventListener("check", e => {
        e.preventDefault();
        loginForm.classList.add("form2--hidden");
        passloginForm.classList.remove("form--hidden");  
    });

    document.querySelector("#password").addEventListener("check", e => {
        e.preventDefault();
        login.classList.remove("form2--hidden");
        passlogin.classList.add("form--hidden");
    });
});