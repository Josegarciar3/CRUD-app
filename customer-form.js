
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

    Swal.fire({
        title: 'SAVE',
        html: 'SAVE UPDATE?',
        showDenyButton: true,
        confirmButtonText: 'YES',
        denyButtonText:'NO'

    }).then(
        (result) => {
            if(result.isConfirmed){
                console.log("Click Save");
                let objCustomer = JSON.stringify({
                    idCustomer: (idItem>0) ? idItem: (tablaCustomer.length + 1),
                    fullName: document.getElementById("txtFullName").value,
                    description: document.getElementById("txtDescription").value,
                    price: document.getElementById("txtPrice").value,
                    status: document.getElementById("cboStatus").value
                });
                console.log(objCustomer);
            
                //EDIT
            
                if (idItem > 0){
                    for (const i in tablaCustomer ){
                        let varCustomer = JSON.parse(tablaCustomer[i]);
                        if(varCustomer.idCustomer == idItem){
                            tablaCustomer[i] = objCustomer;
                            break;
                        }
            
                    }
                }else{
            
                    //NEW CUSTOMERS
                tablaCustomer.push(objCustomer);
                }

                localStorage.setItem("tablaCustomerStorage", JSON.stringify(tablaCustomer));

            
                Swal.fire('UPDATED SAVED','','success').then(
                    (result) =>{
                        window.location.replace("index.html")  
                    }
                );
            
                 

            }else {
                Swal.fire('UPDATED NO SAVED','','error');
            }
     
        }
    );

}

function cargarPagina(){
    if(idItem > 0){
        //SACAR DATOS DE LA FILA DE LA TABLA Y PONERLO EN EL FORMULARIO
        for (const i in tablaCustomer ){
            let varCustomer = JSON.parse(tablaCustomer[i]);
            if(varCustomer.idCustomer == idItem){
                document.getElementById("txtIdCustomer").value = varCustomer.idCustomer;
                document.getElementById("txtFullName").value = varCustomer.fullName;
                document.getElementById("txtDescription").value = varCustomer.description;
                document.getElementById("txtPrice").value = varCustomer.price;
                document.getElementById("cboStatus").value = varCustomer.status;
                break;
            }
        }
    }
}