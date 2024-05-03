var UserIdAutoIncrement = 1000;
var MedicineIdAutoIncrement = 100;
var OrderIdAutoIncrement = 2000;
var currentUser;
var homee = document.getElementById("home");
var medicinee = document.getElementById("medicine");
var purchasee = document.getElementById("purchase");
var cancell = document.getElementById("cancel");
var topp = document.getElementById("top");
var showw = document.getElementById("show");
var orderr = document.getElementById("order");
var User = /** @class */ (function () {
    function User(name, email, password, paramUserPhoneNumber) {
        this.Amount = 0;
        UserIdAutoIncrement++;
        this.UserId = "UID" + UserIdAutoIncrement.toString();
        this.Name = name;
        this.Email = email;
        this.Password = password;
        this.UserPhoneNumber = paramUserPhoneNumber;
    }
    return User;
}());
var MedicineInfo = /** @class */ (function () {
    function MedicineInfo(paramMedicineName, paramMedicineCount, paramMedicinePrice, expiryDate) {
        MedicineIdAutoIncrement++;
        this.MedicineId = "MD" + MedicineIdAutoIncrement.toString();
        this.MedicineName = paramMedicineName;
        this.MedicineCount = paramMedicineCount;
        this.MedicinePrice = paramMedicinePrice;
        this.ExpiryDate = expiryDate;
    }
    return MedicineInfo;
}());
var orderStatus;
(function (orderStatus) {
    orderStatus["purchased"] = "purchased";
    orderStatus["cancelled"] = "cancelled";
})(orderStatus || (orderStatus = {}));
var Order = /** @class */ (function () {
    function Order(userID, medicineID, Count, total, date, order) {
        OrderIdAutoIncrement++;
        this.OrderId = "OID" + OrderIdAutoIncrement.toString();
        this.MedicineId = medicineID;
        this.UserId = userID;
        this.Total = total;
        this.OrderDate = date;
        // this.MedicineName = paramMedicineName;
        this.MedicineCount = Count;
        this.PurchaseStatus = order;
    }
    return Order;
}());
var UserArrayList = new Array();
UserArrayList.push(new User("Ravi", "Ravi@gmail.com", "12345678", "9789011226"));
UserArrayList.push(new User("Baskaran", "Baskaran@gmail.com", "12345678", "9445153060"));
var MedicineList = new Array();
MedicineList.push(new MedicineInfo("Paracetomol", 5, 5, new Date(2024, 6, 30)));
MedicineList.push(new MedicineInfo("Colpal", 5, 5, new Date(2024, 5, 30)));
MedicineList.push(new MedicineInfo("Gelucil", 5, 40, new Date(2024, 4, 30)));
MedicineList.push(new MedicineInfo("Metrogel", 5, 50, new Date(2024, 12, 30)));
MedicineList.push(new MedicineInfo("Povidin Iodin", 5, 50, new Date(2024, 10, 30)));
var OrderList = new Array();
OrderList.push(new Order("UID1001", "MD101", 3, 15, new Date(2022, 11, 13), orderStatus.purchased));
OrderList.push(new Order("UID1001", "MD102", 2, 10, new Date(2022, 11, 13), orderStatus.cancelled));
OrderList.push(new Order("UID1001", "MD104", 3, 100, new Date(2022, 11, 13), orderStatus.purchased));
OrderList.push(new Order("UID1002", "MD103", 3, 120, new Date(2022, 11, 13), orderStatus.cancelled));
OrderList.push(new Order("UID1002", "MD105", 5, 250, new Date(2022, 11, 13), orderStatus.purchased));
OrderList.push(new Order("UID1002", "MD102", 3, 15, new Date(2022, 11, 13), orderStatus.purchased));
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
    // var passReg=/^$/
    if (password.value == cpassword.value && phoneReg.test(phone.value) && passReg.test(password.value)) {
        var isavail = true;
        UserArrayList.forEach(function (val) {
            if (val.Email.toLowerCase() == email.value.toLowerCase()) {
                alert("you already have an ID. Please Sign In");
                isavail = false;
            }
        });
        if (isavail) {
            var user = new User(name.value, email.value, password.value, phone.value);
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
    UserArrayList.forEach(function (val) {
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
function home() {
    displayNone();
    homee.style.display = "block";
    var a = document.getElementById("welcome");
    a.innerHTML = "Welcome " + currentUser.Name;
}
function displayNone() {
    homee.style.display = "none";
    medicinee.style.display = "none";
    purchasee.style.display = "none";
    cancell.style.display = "none";
    topp.style.display = "none";
    showw.style.display = "none";
    orderr.style.display = "none";
    ff.style.display = "none";
}
var ff = document.getElementById("form1");
var aa = document.getElementById("medicineName");
var bb = document.getElementById("medicineCount");
var cc = document.getElementById("medicinePrice");
var dd = document.getElementById("expiryDate");
var curIndex = null;
function medicine() {
    displayNone();
    medicinee.style.display = "block";
    var a = document.getElementById("tb");
    var len = a.getElementsByTagName("tr").length;
    if (a.hasChildNodes()) {
        for (var i = len - 1; i >= 1; i--) {
            a.removeChild(a.children[i]);
        }
    }
    // if(a.getElementsByTagName("tr").length==1){
    MedicineList.forEach(function (val) {
        var b = document.createElement("tr");
        var c = document.createElement("td");
        c.innerHTML = val.MedicineName;
        var d = document.createElement("td");
        d.innerHTML = val.MedicinePrice + "";
        var e = document.createElement("td");
        e.innerHTML = val.MedicineCount + "";
        var f = document.createElement("td");
        f.innerHTML = val.ExpiryDate.toLocaleDateString();
        var g = document.createElement("td");
        var h = document.createElement("button");
        h.innerHTML = "Edit";
        h.addEventListener("click", function () {
            curIndex = val.MedicineId;
            ff.style.display = "block";
            aa.value = val.MedicineName;
            bb.value = val.MedicineCount + "";
            cc.value = val.MedicinePrice + "";
            var da = val.ExpiryDate.getDate();
            var mm = val.ExpiryDate.getMonth() + 1;
            if (mm < 10) {
                mm = "0" + mm;
            }
            if (da < 10) {
                da = "0" + da;
            }
            dd.value = "".concat(val.ExpiryDate.getFullYear(), "-").concat(mm, "-").concat(da);
        });
        var i = document.createElement("button");
        i.innerHTML = "Delete";
        i.addEventListener("click", function () {
            MedicineList = MedicineList.filter(function (v) { return v.MedicineId != val.MedicineId; });
            medicine();
        });
        g.appendChild(h);
        g.appendChild(i);
        b.appendChild(c);
        b.appendChild(d);
        b.appendChild(e);
        b.appendChild(f);
        b.appendChild(g);
        a.appendChild(b);
    });
    // }
}
function cancel() {
    displayNone();
    displayNone();
    cancell.style.display = "block";
    var a = document.getElementById("tb2");
    var len = a.getElementsByTagName("tr").length;
    if (a.hasChildNodes()) {
        for (var i = len - 1; i >= 1; i--) {
            a.removeChild(a.children[i]);
        }
    }
    OrderList.forEach(function (val) {
        if (val.UserId == currentUser.UserId && val.PurchaseStatus == orderStatus.purchased) {
            var b = document.createElement("tr");
            var c = document.createElement("td");
            c.innerHTML = val.OrderId;
            var d = document.createElement("td");
            d.innerHTML = val.UserId;
            var e = document.createElement("td");
            e.innerHTML = val.MedicineId;
            var h = document.createElement("td");
            h.innerHTML = val.MedicineCount + "";
            var i = document.createElement("td");
            i.innerHTML = val.Total + "";
            var f = document.createElement("td");
            f.innerHTML = val.OrderDate.toLocaleDateString();
            var j = document.createElement("td");
            var g = document.createElement("button");
            g.innerHTML = "cancel";
            g.addEventListener("click", function () {
                MedicineList.forEach(function (value) {
                    if (value.MedicineId == val.MedicineId) {
                        value.MedicineCount += val.MedicineCount;
                        UserArrayList.forEach(function (user) {
                            if (user.UserId == val.UserId) {
                                user.Amount += val.Total;
                                val.PurchaseStatus = orderStatus.cancelled;
                                b.remove();
                            }
                        });
                    }
                });
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
    });
}
function show() {
    displayNone();
    showw.style.display = "block";
    var a = document.getElementById("balance");
    a.innerHTML = "Your Balance is " + currentUser.Amount;
}
function purchase() {
    displayNone();
    purchasee.style.display = "block";
    var a = document.getElementById("tb1");
    var len = a.getElementsByTagName("tr").length;
    if (a.hasChildNodes()) {
        for (var i = len - 1; i >= 1; i--) {
            a.removeChild(a.children[i]);
        }
    }
    // if(a.getElementsByTagName("tr").length==1){
    MedicineList.forEach(function (val) {
        var b = document.createElement("tr");
        var c = document.createElement("td");
        c.innerHTML = val.MedicineName;
        var d = document.createElement("td");
        d.innerHTML = val.MedicinePrice + "";
        var e = document.createElement("td");
        e.innerHTML = val.MedicineCount + "";
        var f = document.createElement("td");
        f.innerHTML = val.ExpiryDate.toLocaleDateString();
        var g = document.createElement("td");
        var h = document.createElement("button");
        h.innerHTML = "Buy";
        h.addEventListener("click", function () {
            var c = prompt("Enter the Quantity You Want :");
            if (val.ExpiryDate > new Date()) {
                if (Number(c) <= val.MedicineCount) {
                    var amt = Number(c) * val.MedicinePrice;
                    if (amt <= currentUser.Amount) {
                        OrderList.push(new Order(currentUser.UserId, val.MedicineId, Number(c), amt, new Date(), orderStatus.purchased));
                        val.MedicineCount -= Number(c);
                        currentUser.Amount -= amt;
                        purchase();
                    }
                    else {
                        alert("Insufficient Balance ");
                    }
                }
                else {
                    alert("Enter Quantity Not Available");
                }
            }
            else {
                alert("Medicine Not available");
            }
        });
        g.appendChild(h);
        b.appendChild(c);
        b.appendChild(d);
        b.appendChild(e);
        b.appendChild(f);
        b.appendChild(g);
        a.appendChild(b);
    });
    // }
}
function order() {
    displayNone();
    orderr.style.display = "block";
    var a = document.getElementById("tb3");
    var len = a.getElementsByTagName("tr").length;
    if (a.hasChildNodes()) {
        for (var i = len - 1; i >= 1; i--) {
            a.removeChild(a.children[i]);
        }
    }
    // if(a.getElementsByTagName("tr").length==1){
    OrderList.forEach(function (val) {
        if (val.UserId == currentUser.UserId) {
            var b = document.createElement("tr");
            var c = document.createElement("td");
            c.innerHTML = val.OrderId;
            var d = document.createElement("td");
            d.innerHTML = val.UserId;
            var e = document.createElement("td");
            e.innerHTML = val.MedicineId;
            var h = document.createElement("td");
            h.innerHTML = val.MedicineCount + "";
            var i = document.createElement("td");
            i.innerHTML = val.Total + "";
            var f = document.createElement("td");
            f.innerHTML = val.OrderDate.toLocaleDateString();
            var g = document.createElement("td");
            g.innerHTML = val.PurchaseStatus;
            b.appendChild(c);
            b.appendChild(d);
            b.appendChild(e);
            b.appendChild(h);
            b.appendChild(i);
            b.appendChild(f);
            b.appendChild(g);
            a.appendChild(b);
        }
    });
    // }
}
function topup() {
    displayNone();
    topp.style.display = "block";
    document.getElementById("curBalance").innerHTML = "Available Balance :".concat(currentUser.Amount);
}
function deposit() {
    var a = document.getElementById("amount");
    currentUser.Amount += Number(a.value);
    alert("Amount Dposited Successfully");
    a.value = "";
    document.getElementById("curBalance").innerHTML = "Available Balance :".concat(currentUser.Amount);
}
function addMedicine() {
    var dateSplit = dd.value.split("-");
    console.log(dd.value);
    console.log(dateSplit);
    // displayNone();
    // medicinee.style.display="block";
    document.getElementById("form1").style.display = "block";
    ff.style.display = "block";
    if (curIndex != null) {
        MedicineList.forEach(function (value) {
            if (value.MedicineId == curIndex) {
                value.MedicineName = aa.value;
                value.MedicineCount = Number(bb.value);
                value.MedicinePrice = Number(cc.value);
                value.ExpiryDate = new Date(Number(dateSplit[0]), (Number(dateSplit[1]) - 1), (Number(dateSplit[2])));
            }
        });
    }
    else {
        if (aa.value.trim() != "") {
            MedicineList.push(new MedicineInfo(aa.value, Number(bb.value), Number(cc.value), new Date(Number(dateSplit[0]), (Number(dateSplit[1]) - 1), Number(dateSplit[2]))));
        }
    }
    aa.value = "";
    bb.value = "";
    cc.value = "";
    dd.value = "";
    curIndex = null;
    medicine();
    ff.style.display = "block";
}
function Logout() {
    displayNone();
    document.getElementById("menu").style.display = "none";
    document.getElementById("box").style.display = "block";
    currentUser = null;
}
