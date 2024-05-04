
let UserIdAutoIncrement = 1000;
let TicketIdAutoIncrement = 3000;
let TravelIdAutoIncrement = 2000;
var currentUser:User;

class User {

    UserId: string;
    Name:string;
    Email: string;
    Password: string;
    UserPhoneNumber: string;
    Amount:number=0;

    constructor(name:string,email: string,password : string, paramUserPhoneNumber: string) {

        UserIdAutoIncrement++;
        this.UserId = "CMRL" + UserIdAutoIncrement.toString();
        this.Name=name;
        this.Email = email;
        this.Password = password;
        this.UserPhoneNumber = paramUserPhoneNumber;
    }

}
class Ticket{

    TicketId:string;
    From: string;
    To:string;
    Fair:number;
    
    constructor(from:string,to:string,fair:number) {
        TicketIdAutoIncrement++;
        this.TicketId="MR"+TicketIdAutoIncrement.toString();
        this.From=from;
        this.To=to;
        this.Fair=fair;
        
    }

}
class Travel{

    TravelId:string;
    UserID:string;
    From: string;
    To:string;
    TravelDate:Date;
    Fair:number;
    
    constructor(userId:string,from:string,to:string,date:Date,fair:number) {
        TravelIdAutoIncrement++;
        this.TravelId="TID"+TravelIdAutoIncrement.toString();
        this.UserID=userId;
        this.From=from;
        this.To=to;
        this.TravelDate=date;
        this.Fair=fair;
        
    }

}

let UserArrayList: Array<User> = new Array<User>();
let TravelArrayList: Array<Travel> = new Array<Travel>();
let TicketArrayList: Array<Ticket> = new Array<Ticket>();

//default data
UserArrayList.push(new User("Ravi","Ravi@gmail.com", "12345678", "9789011226"));
UserArrayList.push(new User("Baskaran","Baskaran@gmail.com", "12345678", "9445153060"));

TicketArrayList.push(new Ticket("Airport","Egmore",55));
TicketArrayList.push(new Ticket("Airport","Koyambedu",25));
TicketArrayList.push(new Ticket("Alandur","Koyambedu",25));
TicketArrayList.push(new Ticket("Koyambedu","Egmore",32));
TicketArrayList.push(new Ticket("Vadapalani","Egmore",45));
TicketArrayList.push(new Ticket("Arumbakkam","Egmore",25));
TicketArrayList.push(new Ticket("Vadapalani","Koyambedu",25));
TicketArrayList.push(new Ticket("Arumbakkam","Koyambedu",16));

TravelArrayList.push(new Travel("CMRL1001","Airport","Egmore",new Date(2023,10,10),55));
TravelArrayList.push(new Travel("CMRL1001","Egmore","Koyambedu",new Date(2023,10,10),32));
TravelArrayList.push(new Travel("CMRL1002","Alandur","Koyambedu",new Date(2023,10,11),25));
TravelArrayList.push(new Travel("CMRL1002","Airport","Arumbakkam",new Date(2023,10,11),25));

var homee=document.getElementById("home") as HTMLDivElement;
var historyy=document.getElementById("history") as HTMLDivElement;
var travell=document.getElementById("travel") as HTMLDivElement;
var showw=document.getElementById("show") as HTMLDivElement;
var topp=document.getElementById("top") as HTMLDivElement;

var a=document.getElementById("signin") as HTMLDivElement;
var b=document.getElementById("signup") as HTMLDivElement;
var c=document.getElementById("si") as HTMLDivElement;
var d=document.getElementById("su") as HTMLDivElement;

function signIn():void{
    
    a.style.display="block";
    b.style.display="none";
    c.style.background="orange";
    d.style.background="none";

}

function signUp():void{
    a.style.display="none";
    b.style.display="block";
    c.style.background="none";
    d.style.background="orange";
}

function signUpSubmit(e:Event){
    e.preventDefault();
    var name=document.getElementById("name") as HTMLInputElement;
    var email=document.getElementById("email") as HTMLInputElement;
    var password=document.getElementById("password") as HTMLInputElement;
    var cpassword=document.getElementById("cpassword") as HTMLInputElement;
    var phone=document.getElementById("phone") as HTMLInputElement;
    var phoneReg=/^[0-9]{10,10}$/;
    var passReg=/[a-zA-Z]{4,6}[@!#$%&*()]{1,2}[0-9]{1,4}/;

    if(password.value==cpassword.value && phoneReg.test(phone.value) && passReg.test(password.value)){
    var isavail:boolean=true;
    UserArrayList.forEach((val)=>{
        if(val.Email.toLowerCase()==email.value.toLowerCase()){
            alert("you already have an ID. Please Sign In");
            isavail=false;
        }})
     if(isavail){
        let user:User=new User(name.value,email.value,password.value,phone.value);
        alert("Your User ID is "+user.UserId)
        UserArrayList.push(user);
        var a=document.getElementById("box") as HTMLDivElement
            a.style.display="none";
            var b=document.getElementById("menu") as HTMLDivElement;
            b.style.display="block"
            isavail=false;
            currentUser=user;
            home();
     }
    }else{
       var i=document.getElementById("signup") as HTMLDivElement;
       i.style.border="2px solid red";
    }
}

function signInSubmit(e:Event){
    e.preventDefault();
    var isavail:boolean=true;
    var email=document.getElementById("email1") as HTMLInputElement;
    var password=document.getElementById("password2") as HTMLInputElement; 
  
    UserArrayList.forEach((val)=>{
        if(val.Email.toLowerCase()==email.value.toLowerCase() && val.Password==password.value){
            var a=document.getElementById("box") as HTMLDivElement
            a.style.display="none";
            var b=document.getElementById("menu") as HTMLDivElement;
            b.style.display="block"
            isavail=false;
            currentUser=val;
            home();
            email.value="";
            password.value=""

        }})
        if(isavail){
            alert("Invalid Email or Password");
        }
    
}

function displayNone(){
    homee.style.display="none";
    historyy.style.display="none";
    travell.style.display="none";
    topp.style.display="none";
    showw.style.display="none";
    
}

function home(){
    displayNone();
    homee.style.display="block";
    var a=document.getElementById("welcome") as HTMLHeadingElement;
    if(currentUser!=null){
    a.innerHTML="Welcome " +currentUser.Name;
    }
}

function balance(){
    displayNone();
    showw.style.display="block";
    var a=document.getElementById("balance") as HTMLHeadingElement;
    if(currentUser!=null){
    a.innerHTML="Your Balance is " +currentUser.Amount;
    }
}
function recharge(){
    displayNone();
    topp.style.display="block";
    if(currentUser!=null){
    (document.getElementById("curBalance") as HTMLHeadingElement).innerHTML=`Available Balance :${currentUser.Amount}`;
    }
}

function deposit(){
    var a=document.getElementById("amount") as HTMLInputElement;
    if(currentUser!=null){
    currentUser.Amount+=Number(a.value);
    alert("Amount Deposited Successfully");
    a.value="";
    (document.getElementById("curBalance") as HTMLHeadingElement).innerHTML=`Available Balance :${currentUser.Amount}`;
    }
}

function travel(){
    displayNone();
    travell.style.display="block";
    var tbody=document.getElementById("tbodyData")  as HTMLTableSectionElement;
    tbody.innerHTML="";
    

    TicketArrayList.forEach((element) => {
        var row =document.createElement("tr");
        row.innerHTML=`
        <td>${element.From}</td>
        <td>${element.To}</td>
        <td>${element.Fair}</td>
        <td><button onclick="book('${element.From}','${element.To}',${element.Fair})">BOOK</button></td>
        `
        tbody.appendChild(row);
    }
    );
}
function trHistory(){
    displayNone();
    historyy.style.display="block";
    var tbody=document.getElementById("tbodyData1")  as HTMLTableSectionElement;
    tbody.innerHTML="";
    

    TravelArrayList.forEach((element) => {
        if(element.UserID==currentUser.UserId){
        var row =document.createElement("tr");
        row.innerHTML=`
        <td>${element.TravelId}</td>
        <td>${element.UserID}</td>
        <td>${element.From}</td>
        <td>${element.To}</td>
        <td>${element.TravelDate.toLocaleDateString()}</td>
        <td>${element.Fair}</td>
       
        `
        tbody.appendChild(row);}
    }
    );
}

function book(a:string,b:string,c:number){
    if(currentUser.Amount>=c){
        currentUser.Amount-=c;
    TravelArrayList.push(new Travel(currentUser.UserId,a,b,new Date(),c));
    alert("Ticket booked successfully")
    }
    else{
        alert("Insufficient balance");
    }
}

function Logout(){
    displayNone();
    (document.getElementById("menu") as HTMLDivElement).style.display="none";
    (document.getElementById("box") as HTMLDivElement).style.display="block";
    // currentUser=null;

}