
let nameField = document.getElementById("nameField");
let signInBtn = document.getElementById("signInBtn");
let signInText = document.getElementById("signInText");
let nameInput = document.getElementById("userName");
let emailInput = document.getElementById("email");
let passInput = document.getElementById("password");
let errorMessage = document.getElementById("message");



console.log(signInBtn.innerHTML)

signInText.onclick = function () {
    console.log(email.value);

    console.log(signInBtn.innerHTML)
    if (signInBtn.innerHTML.trim() === "Sign In") {
        nameField.style.maxHeight = "65px"; // Show name field for sign up
        signInText.innerHTML = "You have an account? Sign In";
        signInBtn.innerHTML = "Sign Up";
    } else {

        nameField.style.maxHeight = "0px";  // Hide name field for login
        signInText.innerHTML = "Don’t have an account? Sign Up";
        signInBtn.innerHTML = "Sign In";
    }
    errorMessage.innerHTML = "";
}

signInBtn.onclick = function () {
    const email = emailInput.value.trim();
    const pass = passInput.value.trim();
    const userName = nameInput.value.trim();

    if (signInBtn.innerHTML.trim() === "Sign Up") {

        if (email && pass && userName) {
            AddUserToDb(email, pass, userName);
            emailInput.value = "";
            passInput.value = "";
            nameInput.value = "";

        } else {
            errorMessage.innerHTML = "all fields are required"
        }
    } else {
        if (email && pass) {
            checkUser(email, pass);
        } else {
            errorMessage.innerHTML = "all fields are required";
        }
    }


}



function AddUserToDb(email, pass, userName) {
    let arrayOfUsers = JSON.stringify(window.localStorage.getItem("users"))||[];
    if (!Array.isArray(arrayOfUsers)) {
        arrayOfUsers = [];
    }
    const userExists =arrayOfUsers.some(user=>user.email ===email);
    if (userExists) {
        errorMessage.innerHTML = "Email is already registered. Please use a different email.";
        return;
    }

    console.log(email);
    console.log(userName);
    console.log("welcom to add");
    const user = {
        id: Date.now(),
        userEmail: email,
        userPass: pass,
        nameOfUser: userName
    }
    arrayOfUsers.push(user);
    window.localStorage.setItem("users",JSON.stringify(arrayOfUsers));
    console.log(arrayOfUsers);
    alert("Account Created Succssfully! Please Sign In.");
    signInText.click(); 

}






