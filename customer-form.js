
let tablaCustomer = localStorage.getItem("tablaCustomerStorage");
tablaCustomer = JSON.parse(tablaCustomer);
if(tablaCustomer == null){
    tablaCustomer = [];
}







let idItem = localStorage.getItem("idItem");
idItem =JSON.parse(idItem);
if(idItem == null){
    let idItem = 0;
}

cargarPagina();

function save(){
    console.log("Click Save");
    let objCustomer = JSON.stringify({
        idCustomer: idItem,
        fullName: document.getElementById("txtFullName").value,
        description: document.getElementById("txtDescription").value,
        price: document.getElementById("txtPrice").value,
        status: document.getElementById("cboStatus").value
    });
    console.log(objCustomer);

    //NEW CUSTOMERS
    tablaCustomer.push(objCustomer);

    localStorage.setItem("tablaCustomerStorage", JSON.stringify(tablaCustomer));
    window.location.replace("index.html")    

}

function cargarPagina(){
    if(idItem > 0){
        //SACAR DATOS DE LA FILA DE LA TABLA Y PONERLO EN EL FORMULARIO
    }
}