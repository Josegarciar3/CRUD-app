let tablaCustomer = localStorage.getItem("tablaCustomerStorage");
tablaCustomer = JSON.parse(tablaCustomer);
if(tablaCustomer == null){
   let tablaCustomer = [];
}

listar();
function listar(){
    console.log ("List")

    let dataRow = '';

    if(tablaCustomer.length > 0){
        for(const i in tablaCustomer){
            let varCustomer = JSON.parse(tablaCustomer[i]);
            dataRow += "<tr>";
            dataRow += "<td>"+varCustomer.idCustomer+"</td>";
            dataRow += "<td>"+varCustomer.fullName+"</td>";
            dataRow += "<td>"+varCustomer.description+"</td>";
            dataRow += "<td>"+varCustomer.price+"</td>";
            dataRow += "<td>"+varCustomer.status+"</td>";
            dataRow += "<td>"+
                       "<button type='button' class='btn btn-warning' onclick='openForm("+varCustomer.idCustomer+")'> EDIT</button>"+
                       "<button type='button' class='btn btn-danger m-1' onclick='borrar()'>DELETE</button>";
                       "</td>";

            dataRow += "</tr>";
        }

        document.getElementById("dataRopa").innerHTML = dataRow;
    }
}

function openForm(idItem){
    localStorage.setItem("idItem", JSON.stringify(idItem));
    window.location.replace("customer-form.html");
}
function borrar(idDescription){

    let customers = localStorage.getItem("idCustomer", JSON.stringify());


    console.log('borrado')
    console.log(customers)

}
console.log(BRAYAN)

function suma(a,b){
    let sum = (a+b)
}

suma(5,3)