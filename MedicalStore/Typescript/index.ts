let UserIdAutoIncrement = 1000;
let MedicineIdAutoIncrement = 100;
let OrderIdAutoIncrement = 2000;
var currentUser:User;
var homee=document.getElementById("home") as HTMLDivElement;
var medicinee=document.getElementById("medicine") as HTMLDivElement;
var purchasee=document.getElementById("purchase") as HTMLDivElement;
var cancell=document.getElementById("cancel") as HTMLDivElement;
var topp=document.getElementById("top") as HTMLDivElement;
var showw=document.getElementById("show") as HTMLDivElement;
var orderr=document.getElementById("order") as HTMLDivElement;

class User {

    UserId: string;
    Name:string;
    Email: string;
    Password: string;
    UserPhoneNumber: string;
    Amount:number=0;

    constructor(name:string,email: string,password : string, paramUserPhoneNumber: string) {

        UserIdAutoIncrement++;

        this.UserId = "UID" + UserIdAutoIncrement.toString();
        this.Name=name;
        this.Email = email;
        this.Password = password;
        this.UserPhoneNumber = paramUserPhoneNumber;
    }

}
class MedicineInfo {

    MedicineId: string;
    MedicineName: string;
    MedicineCount: number;
    MedicinePrice: number;
    ExpiryDate:Date
    

    constructor(paramMedicineName: string, paramMedicineCount: number, paramMedicinePrice: number,expiryDate:Date) {
        MedicineIdAutoIncrement++;

        this.MedicineId = "MD" + MedicineIdAutoIncrement.toString();
        this.MedicineName = paramMedicineName;
        this.MedicineCount = paramMedicineCount;
        this.MedicinePrice = paramMedicinePrice;
        this.ExpiryDate=expiryDate;
    }

}
enum orderStatus{
    purchased='purchased',
    cancelled='cancelled'
}

class Order {
    OrderId: string;
    MedicineId: string;
    UserId: string;
    Total:number;

    MedicineName: string;
    MedicineCount: number;
    PurchaseStatus:orderStatus;
    OrderDate:Date;

    constructor(userID: string, medicineID: string,Count: number,total:number,date:Date,order:orderStatus) {
        OrderIdAutoIncrement++;

        this.OrderId = "OID" + OrderIdAutoIncrement.toString();
        this.MedicineId = medicineID;
        this.UserId = userID;
        this.Total=total;
        this.OrderDate=date;
        // this.MedicineName = paramMedicineName;
        this.MedicineCount =Count;
        this.PurchaseStatus=order;
    }
}
let UserArrayList: Array<User> = new Array<User>();

UserArrayList.push(new User("Ravi","Ravi@gmail.com", "12345678", "9789011226"));
UserArrayList.push(new User("Baskaran","Baskaran@gmail.com", "12345678", "9445153060"));

let MedicineList: Array<MedicineInfo> = new Array<MedicineInfo>();

MedicineList.push(new MedicineInfo("Paracetomol", 5, 5,new Date(2024,6,30)));
MedicineList.push(new MedicineInfo("Colpal", 5, 5,new Date(2024,5,30)));
MedicineList.push(new MedicineInfo("Gelucil", 5, 40,new Date(2024,4,30)));
MedicineList.push(new MedicineInfo("Metrogel", 5, 50,new Date(2024,12,30)));
MedicineList.push(new MedicineInfo("Povidin Iodin", 5, 50,new Date(2024,10,30)));

let OrderList: Array<Order> = new Array<Order>();
OrderList.push(new Order("UID1001","MD101",3,15,new Date(2022,11,13),orderStatus.purchased));
OrderList.push(new Order("UID1001","MD102",2,10,new Date(2022,11,13),orderStatus.cancelled));
OrderList.push(new Order("UID1001","MD104",3,100,new Date(2022,11,13),orderStatus.purchased));
OrderList.push(new Order("UID1002","MD103",3,120,new Date(2022,11,13),orderStatus.cancelled));
OrderList.push(new Order("UID1002","MD105",5,250,new Date(2022,11,13),orderStatus.purchased));
OrderList.push(new Order("UID1002","MD102",3,15,new Date(2022,11,13),orderStatus.purchased));

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
function signUpSubmit(e){
    e.preventDefault();
    var name=document.getElementById("name") as HTMLInputElement;
    var email=document.getElementById("email") as HTMLInputElement;
    var password=document.getElementById("password") as HTMLInputElement;
    var cpassword=document.getElementById("cpassword") as HTMLInputElement;
    var phone=document.getElementById("phone") as HTMLInputElement;
    var phoneReg=/^[0-9]{10,10}$/;
    var passReg=/[a-zA-Z]{4,6}[@!#$%&*()]{1,2}[0-9]{1,4}/;
    // var passReg=/^$/

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

function signInSubmit(e){
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
        }})
        if(isavail){
            alert("Invalid Email or Password");
        }
    
}



function home(){
    displayNone();
    homee.style.display="block";
    var a=document.getElementById("welcome") as HTMLHeadingElement;
    a.innerHTML="Welcome " +currentUser.Name;

}
function displayNone(){
    homee.style.display="none";
    medicinee.style.display="none";
    purchasee.style.display="none";
    cancell.style.display="none";
    topp.style.display="none";
    showw.style.display="none";
    orderr.style.display="none";
}
function medicine(){
    displayNone();
    medicinee.style.display="block";
    var a=document.getElementById("tb") as HTMLTableElement;
    var len=a.getElementsByTagName("tr").length;
    if(a.hasChildNodes()){
        for(var i=len-1;i>=1;i--){
            a.removeChild(a.children[i]);
        }
    }
    
    
    // if(a.getElementsByTagName("tr").length==1){
    MedicineList.forEach((val)=>{
        var b=document.createElement("tr") as HTMLTableRowElement;
        var c=document.createElement("td") as HTMLTableCellElement;
        c.innerHTML=val.MedicineName;
        var d=document.createElement("td") as HTMLTableCellElement;
        d.innerHTML=val.MedicinePrice+"";
        var e=document.createElement("td") as HTMLTableCellElement;
        e.innerHTML=val.MedicineCount+"";
        var f=document.createElement("td") as HTMLTableCellElement;
        f.innerHTML=val.ExpiryDate.toLocaleDateString();
        var g=document.createElement("td") as HTMLTableCellElement;
        var h=document.createElement("button") as HTMLButtonElement;
        h.innerHTML="Edit";
        var i=document.createElement("button") as HTMLButtonElement;
        i.innerHTML="Delete";
        g.appendChild(h)
        g.appendChild(i)

        b.appendChild(c);
        b.appendChild(d);
        b.appendChild(e);
        b.appendChild(f);
        b.appendChild(g);
        a.appendChild(b);
    })
// }

}

function cancel(){
    displayNone();
    displayNone();
    cancell.style.display="block";
    var a=document.getElementById("tb2") as HTMLTableElement;
    var len=a.getElementsByTagName("tr").length;
    if(a.hasChildNodes()){
        for(var i=len-1;i>=1;i--){
            a.removeChild(a.children[i]);
        }
    }
    
    OrderList.forEach((val)=>{
        if(val.UserId==currentUser.UserId && val.PurchaseStatus==orderStatus.purchased){
        var b=document.createElement("tr") as HTMLTableRowElement;
        var c=document.createElement("td") as HTMLTableCellElement;
        c.innerHTML=val.OrderId;
        var d=document.createElement("td") as HTMLTableCellElement;
        d.innerHTML=val.UserId;
        var e=document.createElement("td") as HTMLTableCellElement;
        e.innerHTML=val.MedicineId;
        var h=document.createElement("td") as HTMLTableCellElement;
        h.innerHTML=val.MedicineCount+"";
        var i=document.createElement("td") as HTMLTableCellElement;
        i.innerHTML=val.Total+"";
        var f=document.createElement("td") as HTMLTableCellElement;
        f.innerHTML=val.OrderDate.toLocaleDateString();
        var j=document.createElement("td") as HTMLTableCellElement;
        var g=document.createElement("button") as HTMLButtonElement;
        g.innerHTML="cancel";
        g.addEventListener("click",()=>{
           
            MedicineList.forEach((value)=>{
                if(value.MedicineId==val.MedicineId){
                    value.MedicineCount+=val.MedicineCount;
                    UserArrayList.forEach((user)=>{
                        if(user.UserId==val.UserId){
                            user.Amount+=val.Total;
                            val.PurchaseStatus=orderStatus.cancelled;
                            b.remove();
                        }
                    })
                }
            }
        )
        });
        j.appendChild(g);
        
        b.appendChild(c);
        b.appendChild(d);
        b.appendChild(e);
        
        b.appendChild(h);
        b.appendChild(i);
        b.appendChild(f);
        b.appendChild(j);
        a.appendChild(b);
    }
    })


}

function show(){
    displayNone();
    showw.style.display="block";
    var a=document.getElementById("balance") as HTMLHeadingElement;
    a.innerHTML="Your Balance is " +currentUser.Amount;

}

function purchase(){
    displayNone();
    purchasee.style.display="block";
    var a=document.getElementById("tb1") as HTMLTableElement;
    var len=a.getElementsByTagName("tr").length;
    if(a.hasChildNodes()){
        for(var i=len-1;i>=1;i--){
            a.removeChild(a.children[i]);
        }
    }
    
    // if(a.getElementsByTagName("tr").length==1){
    MedicineList.forEach((val)=>{
        var b=document.createElement("tr") as HTMLTableRowElement;
        var c=document.createElement("td") as HTMLTableCellElement;
        c.innerHTML=val.MedicineName;
        var d=document.createElement("td") as HTMLTableCellElement;
        d.innerHTML=val.MedicinePrice+"";
        var e=document.createElement("td") as HTMLTableCellElement;
        e.innerHTML=val.MedicineCount+"";
        var f=document.createElement("td") as HTMLTableCellElement;
        f.innerHTML=val.ExpiryDate.toLocaleDateString();
        var g=document.createElement("td") as HTMLTableCellElement;
        var h=document.createElement("button") as HTMLButtonElement;
        h.innerHTML="Buy";
        h.addEventListener("click",()=>{
            var c=prompt("Enter the Quantity You Want :");
            if(val.ExpiryDate>new Date()){
            if(Number(c)<=val.MedicineCount){
                var amt=Number(c)*val.MedicinePrice;
                if(amt<currentUser.Amount){
                    OrderList.push(new Order(currentUser.UserId,val.MedicineId,Number(c),amt,new Date(),orderStatus.purchased));
                    val.MedicineCount-=Number(c);
                    currentUser.Amount-=amt;
                    purchase();
                    
                }else{
                    alert("Insufficient Balance ")
                }
            }else{
                alert("Enter Quantity Not Available");
            }}
            else{
                alert("Medicine Not available");
            }
        })
        
       
        g.appendChild(h)
        

        b.appendChild(c);
        b.appendChild(d);
        b.appendChild(e);
        b.appendChild(f);
        b.appendChild(g);
        a.appendChild(b);
    })
// }
}

function order(){
    displayNone();
    orderr.style.display="block";
    var a=document.getElementById("tb3") as HTMLTableElement;
    var len=a.getElementsByTagName("tr").length;
    if(a.hasChildNodes()){
        for(var i=len-1;i>=1;i--){
            a.removeChild(a.children[i]);
        }
    }
    
    
    // if(a.getElementsByTagName("tr").length==1){
    OrderList.forEach((val)=>{
        if(val.UserId==currentUser.UserId){
        var b=document.createElement("tr") as HTMLTableRowElement;
        var c=document.createElement("td") as HTMLTableCellElement;
        c.innerHTML=val.OrderId;
        var d=document.createElement("td") as HTMLTableCellElement;
        d.innerHTML=val.UserId;
        var e=document.createElement("td") as HTMLTableCellElement;
        e.innerHTML=val.MedicineId;
        var h=document.createElement("td") as HTMLTableCellElement;
        h.innerHTML=val.MedicineCount+"";
        var i=document.createElement("td") as HTMLTableCellElement;
        i.innerHTML=val.Total+"";
        var f=document.createElement("td") as HTMLTableCellElement;
        f.innerHTML=val.OrderDate.toLocaleDateString();
        var g=document.createElement("td") as HTMLTableCellElement;
        g.innerHTML=val.PurchaseStatus;
        
        b.appendChild(c);
        b.appendChild(d);
        b.appendChild(e);
        
        b.appendChild(h);
        b.appendChild(i);
        b.appendChild(f);
        b.appendChild(g);
        a.appendChild(b);
    }
    })
// }


}

function topup(){
    displayNone();
    topp.style.display="block";
}

function deposit(){
    var a=document.getElementById("amount") as HTMLInputElement;
    currentUser.Amount+=Number(a.value);
    alert("Amount Dposited Successfully");
    a.value="";
}
