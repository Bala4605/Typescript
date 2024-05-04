"use strict";
let UserIdAutoIncrement = 1000;
let TicketIdAutoIncrement = 3000;
let TravelIdAutoIncrement = 2000;
var currentUser;
class User {
    constructor(name, email, password, paramUserPhoneNumber) {
        this.Amount = 0;
        UserIdAutoIncrement++;
        this.UserId = "CMRL" + UserIdAutoIncrement.toString();
        this.Name = name;
        this.Email = email;
        this.Password = password;
        this.UserPhoneNumber = paramUserPhoneNumber;
    }
}
class Ticket {
    constructor(from, to, fair) {
        TicketIdAutoIncrement++;
        this.TicketId = "MR" + TicketIdAutoIncrement.toString();
        this.From = from;
        this.To = to;
        this.Fair = fair;
    }
}
class Travel {
    constructor(userId, from, to, date, fair) {
        TravelIdAutoIncrement++;
        this.TravelId = "TID" + TravelIdAutoIncrement.toString();
        this.UserID = userId;
        this.From = from;
        this.To = to;
        this.TravelDate = date;
        this.Fair = fair;
    }
}
let UserArrayList = new Array();
let TravelArrayList = new Array();
let TicketArrayList = new Array();
//default data
UserArrayList.push(new User("Ravi", "Ravi@gmail.com", "12345678", "9789011226"));
UserArrayList.push(new User("Baskaran", "Baskaran@gmail.com", "12345678", "9445153060"));
TicketArrayList.push(new Ticket("Airport", "Egmore", 55));
TicketArrayList.push(new Ticket("Airport", "Koyambedu", 25));
TicketArrayList.push(new Ticket("Alandur", "Koyambedu", 25));
TicketArrayList.push(new Ticket("Koyambedu", "Egmore", 32));
TicketArrayList.push(new Ticket("Vadapalani", "Egmore", 45));
TicketArrayList.push(new Ticket("Arumbakkam", "Egmore", 25));
TicketArrayList.push(new Ticket("Vadapalani", "Koyambedu", 25));
TicketArrayList.push(new Ticket("Arumbakkam", "Koyambedu", 16));
TravelArrayList.push(new Travel("CMRL1001", "Airport", "Egmore", new Date(2023, 10, 10), 55));
TravelArrayList.push(new Travel("CMRL1001", "Egmore", "Koyambedu", new Date(2023, 10, 10), 32));
TravelArrayList.push(new Travel("CMRL1002", "Alandur", "Koyambedu", new Date(2023, 10, 11), 25));
TravelArrayList.push(new Travel("CMRL1002", "Airport", "Arumbakkam", new Date(2023, 10, 11), 25));
var homee = document.getElementById("home");
var historyy = document.getElementById("history");
var travell = document.getElementById("travel");
var showw = document.getElementById("show");
var topp = document.getElementById("top");
var a = document.getElementById("signin");
var b = document.getElementById("signup");
var c = document.getElementById("si");
var d = document.getElementById("su");
function signIn() {
    a.style.display = "block";
    b.style.display = "none";
    c.style.background = "orange";
    d.style.background = "none";
}
function signUp() {
    a.style.display = "none";
    b.style.display = "block";
    c.style.background = "none";
    d.style.background = "orange";
}
function signUpSubmit(e) {
    e.preventDefault();
    var name = document.getElementById("name");
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    var cpassword = document.getElementById("cpassword");
    var phone = document.getElementById("phone");
    var phoneReg = /^[0-9]{10,10}$/;
    var passReg = /[a-zA-Z]{4,6}[@!#$%&*()]{1,2}[0-9]{1,4}/;
    if (password.value == cpassword.value && phoneReg.test(phone.value) && passReg.test(password.value)) {
        var isavail = true;
        UserArrayList.forEach((val) => {
            if (val.Email.toLowerCase() == email.value.toLowerCase()) {
                alert("you already have an ID. Please Sign In");
                isavail = false;
            }
        });
        if (isavail) {
            let user = new User(name.value, email.value, password.value, phone.value);
            alert("Your User ID is " + user.UserId);
            UserArrayList.push(user);
            var a = document.getElementById("box");
            a.style.display = "none";
            var b = document.getElementById("menu");
            b.style.display = "block";
            isavail = false;
            currentUser = user;
            home();
        }
    }
    else {
        var i = document.getElementById("signup");
        i.style.border = "2px solid red";
    }
}
function signInSubmit(e) {
    e.preventDefault();
    var isavail = true;
    var email = document.getElementById("email1");
    var password = document.getElementById("password2");
    UserArrayList.forEach((val) => {
        if (val.Email.toLowerCase() == email.value.toLowerCase() && val.Password == password.value) {
            var a = document.getElementById("box");
            a.style.display = "none";
            var b = document.getElementById("menu");
            b.style.display = "block";
            isavail = false;
            currentUser = val;
            home();
            email.value = "";
            password.value = "";
        }
    });
    if (isavail) {
        alert("Invalid Email or Password");
    }
}
function displayNone() {
    homee.style.display = "none";
    historyy.style.display = "none";
    travell.style.display = "none";
    topp.style.display = "none";
    showw.style.display = "none";
}
function home() {
    displayNone();
    homee.style.display = "block";
    var a = document.getElementById("welcome");
    if (currentUser != null) {
        a.innerHTML = "Welcome " + currentUser.Name;
    }
}
function balance() {
    displayNone();
    showw.style.display = "block";
    var a = document.getElementById("balance");
    if (currentUser != null) {
        a.innerHTML = "Your Balance is " + currentUser.Amount;
    }
}
function recharge() {
    displayNone();
    topp.style.display = "block";
    if (currentUser != null) {
        document.getElementById("curBalance").innerHTML = `Available Balance :${currentUser.Amount}`;
    }
}
function deposit() {
    var a = document.getElementById("amount");
    if (currentUser != null) {
        currentUser.Amount += Number(a.value);
        alert("Amount Deposited Successfully");
        a.value = "";
        document.getElementById("curBalance").innerHTML = `Available Balance :${currentUser.Amount}`;
    }
}
function travel() {
    displayNone();
    travell.style.display = "block";
    var tbody = document.getElementById("tbodyData");
    tbody.innerHTML = "";
    TicketArrayList.forEach((element) => {
        var row = document.createElement("tr");
        row.innerHTML = `
        <td>${element.From}</td>
        <td>${element.To}</td>
        <td>${element.Fair}</td>
        <td><button onclick="book('${element.From}','${element.To}',${element.Fair})">BOOK</button></td>
        `;
        tbody.appendChild(row);
    });
}
function trHistory() {
    displayNone();
    historyy.style.display = "block";
    var tbody = document.getElementById("tbodyData1");
    tbody.innerHTML = "";
    TravelArrayList.forEach((element) => {
        if (element.UserID == currentUser.UserId) {
            var row = document.createElement("tr");
            row.innerHTML = `
        <td>${element.TravelId}</td>
        <td>${element.UserID}</td>
        <td>${element.From}</td>
        <td>${element.To}</td>
        <td>${element.TravelDate.toLocaleDateString()}</td>
        <td>${element.Fair}</td>
       
        `;
            tbody.appendChild(row);
        }
    });
}
function book(a, b, c) {
    if (currentUser.Amount >= c) {
        currentUser.Amount -= c;
        TravelArrayList.push(new Travel(currentUser.UserId, a, b, new Date(), c));
        alert("Ticket booked successfully");
    }
    else {
        alert("Insufficient balance");
    }
}
function Logout() {
    displayNone();
    document.getElementById("menu").style.display = "none";
    document.getElementById("box").style.display = "block";
    // currentUser=null;
}
