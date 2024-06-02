let nameField = document.getElementById("nameField");
let signInBtn = document.getElementById("signInBtn");
let signInText = document.getElementById("signInText");

signInText.onclick = function() {
console.log(signInBtn.innerHTML)
    if (signInBtn.innerHTML.trim() === "Sign In") {
        nameField.style.maxHeight = "65px"; // Show name field for sign up
        signInText.innerHTML = "You have an account? Sign In";
        signInBtn.innerHT
        
        
        
        ML = "Sign Up";
    } else {
        
        nameField.style.maxHeight = "0px";  // Hide name field for login
        signInText.innerHTML = "Don’t have an account? Sign Up";
        signInBtn.innerHTML = "Sign In";
    }
}