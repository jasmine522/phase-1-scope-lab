var customerName = "bob";
function upperCaseCustomerName (){
    customerName = customerName.toUpperCase();
}
customerName();

function setBestCustomer (){
    bestCustomer = "not bob";
}

function overwriteBestCustomer (){
    bestCustomer = "maybe bob";
}

const leastFavoriteCustomer = "bill";
function changeLeastFavoriteCustomer(){
    leastFavoriteCustomer = "will";
}