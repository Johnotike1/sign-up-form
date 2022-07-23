const form = document.getElementById("form");
const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email");
const password = document.getElementById("password");

form.addEventListener("submit", e => {
    e.preventDefault();

    checkInput();
});

function checkInput() {
    const firstNameValue = firstName.value.trim();
    const lastNameValue = lastName.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

    if (firstNameValue === "") {
        setError(firstName, "first name can not be blenk");
    } else {
        setSuccess(firstName)
    };

    if (lastNameValue === "") {
        setError(lastName, "last name can not be blank");
    } else {
        setSuccess(lastName)
    };

    if (emailValue === "") {
        setError(email, "email can not be empty");
    } else if (!isEmail(emailValue)) {
        setError(email, "this is not a valid email address")
    } else {
        setSuccess(email)
    };

    if (passwordValue === "") {
        setError(password, "invalid password")
    } else {
        setSuccess(password)
    };
};

function setError(input, message) {
    const formGroup = input.parentElement;
    const small = formGroup.querySelector("small");
    small.innerText = message;
    formGroup.className = 'form-group error';
};

function setSuccess(input) {
    const formGroup = input.parentElement;
    formGroup.className = "form-group success";
};

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        .test(email);
};
/*  another email validation regex
  /([-!#-'*+/-9=?A-Z^-~]+(\.[-!#-'*+/-9=?A-Z^-~]+)*|"([]!#-[^-~ \t]|(\\[\t -~]))+")@[0-9A-Za-z]([0-9A-Za-z-]{0,61}[0-9A-Za-z])?(\.[0-9A-Za-z]([0-9A-Za-z-]{0,61}[0-9A-Za-z])?)+/
*/