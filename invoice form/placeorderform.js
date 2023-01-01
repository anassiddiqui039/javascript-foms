document.getElementById("recipt").style.visibility = "hidden";
function orderplaced() {
    
    var name = document.getElementById("fname").value;
    var mail = document.getElementById("fmail").value;
    var phone = document.getElementById("fphone").value;
    var address = document.getElementById("faddress").value;
    var city = document.getElementById("fcity").value;
    var postcode = document.getElementById("fpostcode").value;
    var prd1 = document.getElementById("fprd1").value;
    var prd2 = document.getElementById("fprd2").value;
    var prd3 = document.getElementById("fprd3").value;
    var price1=prd1*10;
    var price2=prd2*20;
    var price3=prd3*30;
    var subtotal=price1+price2+price3+20;
    var tax=(subtotal*13)/100;
    var total=subtotal+tax;
    var nameregx = /[A-Z][^\s]*/;
    var mailregx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    flag=0;
    
    if (!name.match(nameregx) || name.length > 25) {
        document.getElementById("sname").innerHTML = "**name should be in proper case**";
        flag=1;
    }
    else {
        document.getElementById("sname").innerHTML = "";
        
    }
    if (!mail.match(mailregx)) {
        document.getElementById("smail").innerHTML = "**invalid e-mail**"
        flag=1;
    }
    else {
        document.getElementById("smail").innerHTML = "";

    }
    if (phone == "" || phone.length < 10) {
        document.getElementById("sphone").innerHTML = "**must contain 10 digits**"
        flag=1;
    }
    else {
        document.getElementById("sphone").innerHTML = "";
    }
    if (address == "") {
        document.getElementById("saddress").innerHTML = "**invalid address**"
        flag=1;
    }
    else {
        document.getElementById("saddress").innerHTML = "";
    }
    if (city == "") {
        document.getElementById("scity").innerHTML = "**city required**"
        flag=1;
    }
    else {
        document.getElementById("scity").innerHTML = "";
    }
    if (postcode == "" || postcode.length < 6) {
        document.getElementById("spostcode").innerHTML = "**postcode required**"
        flag=1;
    }
    else {
        document.getElementById("spostcode").innerHTML = "";
    }
    if (prd1 == "") {
        document.getElementById("sprd1").innerHTML = "**product required**"
        flag=1;
    }
    else {
        document.getElementById("sprd1").innerHTML = "";
    }
    if (prd2 == "") {
        document.getElementById("sprd2").innerHTML = "**product required**"
        flag=1;
    }
    else {
        document.getElementById("sprd2").innerHTML = "";
    }
    if (prd3 == "") {
        document.getElementById("sprd3").innerHTML = "**product required**"
        flag=1;
    }
    else {
        document.getElementById("sprd3").innerHTML = "";
    }

    if(flag==0){
    var array = { name: name, mail: mail, phone: phone, addr: address, product1: prd1, product2: prd2, product3: prd3, subtotal: subtotal,tax:tax,total:total }
    document.getElementById("name").innerHTML = array.name;
    document.getElementById("email").innerHTML = array.mail;
    document.getElementById("phone").innerHTML = array.phone;
    document.getElementById("address").innerHTML = array.addr;
    document.getElementById("shipcharges").innerHTML = "$20";
    document.getElementById("subtotal").innerHTML = array.subtotal;
    document.getElementById("taxes").innerHTML = array.tax;
    document.getElementById("prd1").innerHTML = array.product1;
    document.getElementById("prdtotal").innerHTML = array.product1*10;
    document.getElementById("prd2").innerHTML = array.product1;
    document.getElementById("prdtotal2").innerHTML = array.product2*20;
    document.getElementById("prd3").innerHTML = array.product1;
    document.getElementById("prdtotal3").innerHTML = array.product3*30;
    document.getElementById("total").innerHTML = array.total;
    document.getElementById("myform").reset();
    document.getElementById("recipt").style.visibility = "visible";
}
}
 
    
       


   
    


