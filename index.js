function listar(){
    console.log ("List")
}

function openForm(idItem){
    localStorage.setItem("idItem", JSON.stringify(idItem));
    window.location.replace("customer-form.html");
}
