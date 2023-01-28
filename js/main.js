//Global Declaration of Variable
const provinces = ["NCR", "Pampanga", "Nueva Ecija"];

//Will Get / Set Customer Records from Database (e.g MySQL / SQl Server / Firebase (Google))
let orders = [];

function addTwoNumbers() {
    //Local Variables
    let num1 = 0;
    let num2 = 0;
    let sum = 0;

    num1 = document.getElementById('txt-num1').value;
    num2 = document.getElementById('txt-num2').value;

    //Input Validation
    if (num1 == "" || num2 == "") {
        document.getElementById('h2-sum').innerHTML = "<div style='color:red'><b>Please Check Your Inputs</b><div>";
    }
    else {
        sum = parseInt(num1) + parseInt(num2);
        document.getElementById('h2-sum').innerHTML = "Sum : " + sum;
    }

    console.log("num1 : " + num1);
    console.log("num2 : " + num2);
    // console.log("sum : " + parseInt(sum));
}

function showProvinces() {
    document.getElementById('h2-provinces').innerHTML = provinces;
}

//JS function with parameter(s)
function showProvince(index) {
    //0,1,2 Index
    let x = parseInt(index);
    //provinces[2] = "Nueva Ecija";
    document.getElementById('h2-provinces').innerHTML = provinces[x];
}

function showProvince() {
    let x = parseInt(document.getElementById('txt-index').value);
    document.getElementById('h2-provinces').innerHTML = provinces[x];

    //Calling Another JS Function
    findDelicacy(x);

}

function findDelicacy(i) {
    switch (i) {
        case 0:
            document.getElementById('h2-delicacy').innerHTML = "Adobo";
            break;
        case 1:
            document.getElementById('h2-delicacy').innerHTML = "Sisig";
            break;
        case 2:
            document.getElementById('h2-delicacy').innerHTML = "Tinumis";
            break;
        default:
            document.getElementById('h2-delicacy').innerHTML = "No Delicacy";
            break;
    }
}

function showAll() {
    //For Loop
    let text = "";

    for (let i = 0; i < provinces.length; i++) {
        text += "Province : " + provinces[i] + "<br>";
    }
    document.getElementById("h2-all").innerHTML = text;
}

function showOrders() {
    //Call Lazada API
    //httpGet /orders/get
    //customers = JSON

    // const xhttp = new XMLHttpRequest();
    // xhttp.onload = function() {
    // document.getElementById("demo").innerHTML = this.responseText;
    // }
    // xhttp.open("GET", "https://api.lazada.com.ph/rest/orders/get", true);
    // xhttp.send();

    console.log("Customer :" + orders)
}