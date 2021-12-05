document.addEventListener("DOMContentLoaded",() => {
    const loginForm = document.querySelector("#otpass");
    const passloginForm = document.querySelector("#password");

    document.querySelector("#login").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.add("form--hidden");
        passloginForm.classList.remove("form--hidden");  
    });

    document.querySelector("#passlogin").addEventListener("click", e => {
        e.preventDefault();
        login.classList.remove("form--hidden");
        passlogin.classList.add("form--hidden");
    });
});