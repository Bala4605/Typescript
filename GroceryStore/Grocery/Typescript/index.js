"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var currentUser;
var curIndex;
var sign1 = document.getElementById("signin");
var sign2 = document.getElementById("signup");
var sign3 = document.getElementById("si");
var sign4 = document.getElementById("su");
var homes = document.getElementById("home");
var stocks = document.getElementById("stock");
var purchases = document.getElementById("purchase");
var historys = document.getElementById("history");
var topp = document.getElementById("top");
var showw = document.getElementById("show");
var carts = document.getElementById("cart");
var form1 = document.getElementById("form1");
var itemName = document.getElementById("itemName");
var itemCount = document.getElementById("itemCount");
var itemPrice = document.getElementById("itemPrice");
var purchaseDate = document.getElementById("purchaseDate");
var expiryDate = document.getElementById("expiryDate");
var itemImage = document.getElementById("itemImage");
var temporaryCart = new Array();
//------------------------------------------------
// ---------Async Functions---------------------
function fetchUsers() {
    return __awaiter(this, void 0, void 0, function* () {
        const apiUrl = 'http://localhost:5288/users';
        const response = yield fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Failed to fetch Data');
        }
        return yield response.json();
    });
}
function addUser(user) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch('http://localhost:5288/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        });
        if (!response.ok) {
            throw new Error('failed to fetch Data');
        }
        // renderContacts();
    });
}
function updateAmount(id, amount) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(`http://localhost:5288/users/${id}/${amount}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (!response.ok) {
            throw new Error('failed to fetch Data');
        }
        return yield response.json();
    });
}
function postProduct(product) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch('http://localhost:5288/product', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(product)
        });
        if (!response.ok) {
            throw new Error('failed to fetch Data');
        }
        stock();
    });
}
function postBooking(product) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch('http://localhost:5288/booking', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(product)
        });
        if (!response.ok) {
            throw new Error('failed to fetch Data');
        }
        return yield response.json();
    });
}
function fetchProducts() {
    return __awaiter(this, void 0, void 0, function* () {
        const apiUrl = 'http://localhost:5288/product';
        const response = yield fetch(apiUrl);
        if (!response.ok) {
            throw new Error('failed to fetch Data');
        }
        return yield response.json();
    });
}
function deleteProduct(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(`http://localhost:5288/product/${id}`, {
            method: 'DELETE'
        });
        if (!response.ok) {
            throw new Error('Failed to delete contact');
        }
        // bookDetails();
        stock();
    });
}
function updateProduct(id, book) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(`http://localhost:5288/product/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(book)
        });
        if (!response.ok) {
            throw new Error('Failed to update contact');
        }
        stock();
    });
}
//----------------------------------------------------
//---------Functions
function signIn() {
    sign1.style.display = "block";
    sign2.style.display = "none";
    sign3.style.background = "orange";
    sign4.style.background = "none";
}
function signUp() {
    sign1.style.display = "none";
    sign2.style.display = "block";
    sign3.style.background = "none";
    sign4.style.background = "orange";
}
function signUpSubmit(e) {
    return __awaiter(this, void 0, void 0, function* () {
        var _a;
        e.preventDefault();
        var name = document.getElementById("name");
        var email = document.getElementById("email");
        var password = document.getElementById("password");
        var cpassword = document.getElementById("cpassword");
        var fileElement = document.getElementById("fileElement");
        var base64;
        var file;
        fileElement.addEventListener('change', () => {
            var _a;
            file = (_a = fileElement.files) === null || _a === void 0 ? void 0 : _a[0];
        });
        file = (_a = fileElement.files) === null || _a === void 0 ? void 0 : _a[0];
        // var phoneReg=/^[0-9]{10,10}$/;
        var passReg = /[a-zA-Z]{4,6}[@!#$%&*()]{1,2}[0-9]{1,4}/;
        if (password.value == cpassword.value) {
            var isavail = true;
            var UserArrayList = yield fetchUsers();
            UserArrayList.forEach((val) => {
                if (val.email.toLowerCase() == email.value.toLowerCase()) {
                    alert("you already have an ID. Please Sign In");
                    isavail = false;
                }
            });
            if (file) {
                var fileReader = new FileReader();
                fileReader.readAsDataURL(file);
                fileReader.addEventListener('load', (event) => {
                    var _a;
                    base64 = (_a = event.target) === null || _a === void 0 ? void 0 : _a.result;
                    if (isavail) {
                        addUser({ userID: undefined, name: name.value, email: email.value, password: password.value, image: [base64], amount: 0 });
                        signIn();
                    }
                });
            }
        }
        else {
            var i = document.getElementById("signup");
            i.style.border = "2px solid red";
        }
    });
}
function signInSubmit(e) {
    e.preventDefault();
    var isavail = true;
    var email = document.getElementById("email1");
    var password = document.getElementById("password2");
    fetchUsers().then(UserArrayList => {
        UserArrayList.forEach((val) => {
            if (val.email.toLowerCase() == email.value.toLowerCase() && val.password == password.value) {
                var a = document.getElementById("box");
                a.style.display = "none";
                var b = document.getElementById("menu");
                b.style.display = "block";
                isavail = false;
                currentUser = val;
                home();
                email.value = "";
                password.value = "";
                if (isavail) {
                    alert("Invalid Email or Password");
                }
            }
        });
    });
}
function home() {
    displayNone();
    homes.style.display = "block";
    var a = document.getElementById("welcome");
    var b = document.getElementById("imgTag");
    a.innerHTML = "Welcome " + currentUser.name;
    b.src = currentUser.image[0];
}
function displayNone() {
    homes.style.display = "none";
    stocks.style.display = "none";
    purchases.style.display = "none";
    historys.style.display = "none";
    topp.style.display = "none";
    showw.style.display = "none";
    carts.style.display = "none";
    form1.style.display = "none";
}
function recharge() {
    displayNone();
    topp.style.display = "block";
    document.getElementById("curBalance").innerHTML = `Available Balance :${currentUser.amount}`;
}
function show() {
    displayNone();
    showw.style.display = "block";
    var a = document.getElementById("balance");
    a.innerHTML = "Your Balance is " + currentUser.amount;
}
function deposit() {
    return __awaiter(this, void 0, void 0, function* () {
        var a = document.getElementById("amount");
        var amt = currentUser.amount + Number(a.value);
        currentUser = yield updateAmount(currentUser.userID, amt);
        alert("Amount Deposited Successfully");
        a.value = "";
        document.getElementById("curBalance").innerHTML = `Available Balance :${currentUser.amount}`;
    });
}
function Logout() {
    displayNone();
    document.getElementById("menu").style.display = "none";
    document.getElementById("box").style.display = "block";
}
//---------------------
function stock() {
    return __awaiter(this, void 0, void 0, function* () {
        displayNone();
        stocks.style.display = "block";
        var tbody = document.getElementById("tbody1");
        tbody.innerHTML = "";
        var bookList = yield fetchProducts();
        bookList.forEach((element) => {
            if (element.quantityAvailable > 0) {
                var row = document.createElement("tr");
                row.innerHTML = `

      <td>${element.productName}</td>
      <td>${element.quantityAvailable}</td>
      <td>${element.pricePerQuantity}</td>
      <td>${element.purchaseDate.split("T")[0].split("-").reverse().join("/")}</td>
      <td>${element.expiryDate.split("T")[0].split("-").reverse().join("/")}</td>
      <td><img src='${element.image}'></td>
      <td>
      <button onclick="Edit(${element.productID},'${element.productName}',${element.quantityAvailable},${element.pricePerQuantity},'${element.purchaseDate}','${element.expiryDate}')">Edit</button>
      <button onclick="deleteProduct(${element.productID})">Delete</button>
      </td>
      `;
                tbody.appendChild(row);
            }
        });
    });
}
function Edit(id, name, quan, price, pDate, eDate) {
    form1.style.display = "block";
    curIndex = id;
    itemName.value = name;
    itemCount.value = quan + "";
    itemPrice.value = price + "";
    purchaseDate.value = pDate.split("T")[0];
    expiryDate.value = eDate.split("T")[0];
}
function Delete(id) {
    deleteProduct(id);
}
var itemBase64;
function addProductTo() {
    var _a, _b;
    if (curIndex != null) {
        var itemFile = (_a = itemImage.files) === null || _a === void 0 ? void 0 : _a[0];
        if (itemFile) {
            var fileReader = new FileReader();
            fileReader.readAsDataURL(itemFile);
            fileReader.addEventListener('load', (event) => {
                var _a;
                itemBase64 = (_a = event.target) === null || _a === void 0 ? void 0 : _a.result;
                if (curIndex != null) {
                    updateProduct(curIndex, {
                        productID: curIndex,
                        productName: itemName.value,
                        quantityAvailable: +itemCount.value,
                        pricePerQuantity: Number(itemPrice.value),
                        image: [itemBase64],
                        purchaseDate: new Date(purchaseDate.value).toISOString(),
                        expiryDate: new Date(expiryDate.value).toISOString()
                    });
                }
                curIndex = null;
                itemName.value = "";
                itemCount.value = "";
                itemPrice.value = "";
                purchaseDate.value = "";
                expiryDate.value = "";
            });
        }
    }
    else {
        var itemFile = (_b = itemImage.files) === null || _b === void 0 ? void 0 : _b[0];
        if (itemFile) {
            var fileReader = new FileReader();
            fileReader.readAsDataURL(itemFile);
            fileReader.addEventListener('load', (event) => {
                var _a;
                itemBase64 = (_a = event.target) === null || _a === void 0 ? void 0 : _a.result;
                postProduct({
                    productID: undefined,
                    productName: itemName.value,
                    quantityAvailable: +itemCount.value,
                    pricePerQuantity: Number(itemPrice.value),
                    image: [itemBase64],
                    purchaseDate: new Date(purchaseDate.value).toISOString(),
                    expiryDate: new Date(expiryDate.value).toISOString()
                });
                // curIndex=null;
                // itemName.value="";
                // itemCount.value="";
                // itemPrice.value="";
                // purchaseDate.value="";
                // expiryDate.value="";
            });
        }
    }
}
//-----------------------
function purchase() {
    return __awaiter(this, void 0, void 0, function* () {
        displayNone();
        purchases.style.display = "block";
        var tbody = document.getElementById("product-cont");
        console.log(tbody);
        tbody.innerHTML = "";
        var bookList = yield fetchProducts();
        bookList.forEach((element) => {
            if (element.quantityAvailable > 0) {
                var row = document.createElement("div");
                row.className = "product-card";
                row.innerHTML = `
      
      <img src='${element.image}' alt="">
      <div class="product-info">
          <h2>${element.productName}</h2>
          <h2>${element.pricePerQuantity}</h2>
      </div>
      <button onclick="AddCart('${element.productName}',${element.pricePerQuantity},${element.quantityAvailable},${element.productID})"  >Add To Cart</button>
  
      `;
                tbody.appendChild(row);
            }
        });
    });
}
function AddCart(a, b, c, d) {
    var count = Number(prompt("Enter Quantity"));
    if (count <= c) {
        temporaryCart.push({ id: temporaryCart.length, pid: d, productName: a, purchaseCount: count, priceOfOrder: count * b });
    }
    else {
        alert(`Entered Qunatity Not Available \n Available Count:${c}`);
    }
}
function cart() {
    return __awaiter(this, void 0, void 0, function* () {
        displayNone();
        carts.style.display = "block";
        var tbody = document.getElementById("tbody3");
        tbody.innerHTML = "";
        // var bookList= await fetchProducts();
        temporaryCart.forEach((element) => {
            var row = document.createElement("tr");
            row.innerHTML = `

      <td>${element.productName}</td>
      <td>${element.purchaseCount}</td>
      <td>${element.priceOfOrder}</td>
      <td>
      <button onclick="deleteID(${element.id})">Delete</button>
      </td>
      `;
            tbody.appendChild(row);
        });
    });
}
function buy() {
    return __awaiter(this, void 0, void 0, function* () {
        var total = 0;
        temporaryCart.forEach((val) => {
            total += val.priceOfOrder;
        });
        if (total < currentUser.amount) {
            var book = yield postBooking({
                bookingID: undefined,
                customerID: currentUser.userID,
                totalPrice: total,
                dateOfBooking: new Date().toISOString(),
                bookingStatus: "Booked"
            });
            temporaryCart.forEach((data) => {
                postOrder({
                    orderID: undefined,
                    bookingID: book.bookingID,
                    productName: data.productName,
                    purchaseCount: data.purchaseCount,
                    priceOfOrder: data.priceOfOrder
                });
                updateProductCount(data.pid, data.purchaseCount);
            });
            currentUser = yield updateAmount(currentUser.userID, currentUser.amount - total);
            temporaryCart.splice(0, temporaryCart.length);
            cart();
        }
        else {
            alert("Insufficient Balance");
        }
    });
}
function deleteID(id) {
    var a = temporaryCart.findIndex(value => value.id == id);
    temporaryCart.splice(a, 1);
    cart();
}
function addGrocery() {
    form1.style.display = "block";
}
//------------------
function postOrder(product) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch('http://localhost:5288/order', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(product)
        });
        if (!response.ok) {
            throw new Error('failed to fetch Data');
        }
    });
}
function updateProductCount(id, count) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(`http://localhost:5288/product/${id}/${count}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (!response.ok) {
            throw new Error('failed to fetch Data');
        }
        // return await response.json();
    });
}
function fetchBooking() {
    return __awaiter(this, void 0, void 0, function* () {
        const apiUrl = 'http://localhost:5288/booking';
        const response = yield fetch(apiUrl);
        if (!response.ok) {
            throw new Error('failed to fetch Data');
        }
        return yield response.json();
    });
}
function fetchOrder() {
    return __awaiter(this, void 0, void 0, function* () {
        const apiUrl = 'http://localhost:5288/order';
        const response = yield fetch(apiUrl);
        if (!response.ok) {
            throw new Error('failed to fetch Data');
        }
        return yield response.json();
    });
}
//order history
var tbody = document.getElementById("history");
function historyy() {
    return __awaiter(this, void 0, void 0, function* () {
        displayNone();
        historys.style.display = "block";
        tbody.innerHTML = "";
        var bookingList = yield fetchBooking();
        var bookList = yield fetchOrder();
        bookingList.forEach((bookID) => {
            if (bookID.customerID == currentUser.userID) {
                tbody.innerHTML += `

    <div id="tab">
          <h2>OrderDate:${bookID.dateOfBooking.split("T")[0].split("-").reverse().join("/")}</h2>
          <h2>Price:${bookID.totalPrice}</h2>
          <button onclick="exportData(${bookID.bookingID})">Export</button>
    </div>

    <table id="tb3">
      <thead>
          <tr>
              <th>OrderID</th>
              <th>Name</th>
              <th>Quantity</th>
              <th>Price</th>
          </tr>
      </thead>
      <tbody id="fs${bookID.bookingID}">
      </tbody>
    
`;
                var d = document.getElementById(`fs${bookID.bookingID}`);
                var c = 0;
                bookList.forEach((element) => {
                    if (element.bookingID == bookID.bookingID) {
                        var row = document.createElement("tr");
                        if (c == 0) {
                            row.innerHTML = ` 
      <td rowspan="5">${element.bookingID}</td>
      <td>${element.productName}</td>
      <td>${element.purchaseCount}</td>
      <td>${element.priceOfOrder}</td>
      `;
                        }
                        else {
                            row.innerHTML = ` 
      <td>${element.productName}</td>
      <td>${element.purchaseCount}</td>
      <td>${element.priceOfOrder}</td>
      `;
                        }
                        c = 3;
                        d.appendChild(row);
                    }
                });
            }
        });
    });
}
function exportData(data) {
    return __awaiter(this, void 0, void 0, function* () {
        var bookingList = yield fetchBooking();
        var bookList = yield fetchOrder();
        var csvdata = "BookingID,ProduuctName,Purchasecount,Price\n";
        bookList.forEach((element) => {
            if (element.bookingID == data) {
                csvdata += `${element.bookingID},${element.productName},${element.purchaseCount},${element.priceOfOrder}\n`;
            }
        });
        var a = new Blob([csvdata], { type: 'text/csv' });
        var b = document.createElement('a');
        var url = URL.createObjectURL(a);
        b.href = url;
        b.download = "Bill";
        b.click();
    });
}
