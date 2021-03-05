let name;
let phone;
let mobilePhone;
let email;
let colorUser ;

let date = new Date();

let nameNew;
let phoneNew;
let mobilePhoneNew;
let emailNew;

function validate() {
    colorUser = prompt("please choose color first , red or green or blue");
    name = prompt("Please enter your name.");
    if (name == null || name === "") {
        alert("You must enter your name into the prompt box!");
        validate()
    } else if (!/^[a-zA-Z]+$/.test(name)) {
        alert("Please only enter letters");
        validate()
    }
   nameNew = document.createTextNode(" "+name);

    phone = prompt("Please enter your Phone");
    if (phone == null || phone === "") {
        alert("You must enter your name into the prompt box!");
        validate()
    } else if (!/^[0-9]{0,8}$/.test(phone)) {
        alert("Please enter number with 8 length only");
        validate()
    }

    phoneNew = document.createTextNode(" "+phone);


    mobilePhone = prompt("Enter your mobile phone please");

    if (mobilePhone == null || mobilePhone === "") {
        alert("You must enter your mobile into the prompt box!");
        validate();
    } else if (!/(010|011|012)\d{8}$/.test(mobilePhone)) {
        alert("your mobile Phone is not valid");
        validate();
    }

    mobilePhoneNew = document.createTextNode(" " + mobilePhone);

    email = prompt("Please enter your mail");

    if (email == null || email === "") {
        alert("You must enter your email into the prompt box!");
        validate()
    } else if (!validateEmail(email)) {
        alert("your email is not valid");
        validate()
    }

    emailNew = document.createTextNode(" " +email);

}


function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}


function changeColor() {
    document.getElementById('name').style.color = colorUser;
    document.getElementById('phone').style.color = colorUser;
    document.getElementById('mobilePhone').style.color = colorUser;
    document.getElementById('email').style.color = colorUser;

}


function getUserInfo() {
    document.getElementById('newName').appendChild(nameNew);
    document.getElementById('newPhone').appendChild(phoneNew);
    document.getElementById('newMobile').appendChild(mobilePhoneNew);
    document.getElementById('newEmail').appendChild(emailNew);
}

function getData() {
    let dateChild = document.createTextNode(" " + date.toLocaleString());
    document.getElementById("time").appendChild(dateChild);
    document.getElementById('text').style.color = colorUser;
}


window.addEventListener('load',function () {
    validate();
    changeColor();
    getUserInfo();
    getData();
})

