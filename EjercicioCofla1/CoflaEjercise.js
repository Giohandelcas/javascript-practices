dineroCofla = prompt("Cuanto dinero tiene Cofla?")
dineroRoberto = prompt("Cuanto dinero tiene Roberto?")
dineroPedro = prompt("Cuanto dinero tiene Pedro?")

//transformamos el texto en numero con la funcion

dineroCofla = parseInt(dineroCofla);
dineroRoberto = parseInt(dineroRoberto);
dineroPedro = parseInt(dineroPedro);

// Cofla

if (dineroCofla >= 0.6 && dineroCofla < 1) {
    alert("Cofla Comprate el helado de agua")
    alert("Y te sobran" + (dineroCofla - 0.6))
}

else if(dineroCofla >= 1 && dineroCofla < 1.6){
    alert("Cofla Comprate un helado de crema")
    alert("Y te sobran" + (dineroCofla - 1))

}

else if(dineroCofla >= 1.6 && dineroCofla < 1.7){
    alert("Cofla comprate un helado heladix")
    alert("Y te sobran" + (dineroCofla - 1.6))

}

else if(dineroCofla >= 1.7 && dineroCofla < 1.8){
    alert("Cofla Comprate helado marca heladovich")
    alert("Y te sobran" + (dineroCofla - 1.7))

}

else if(dineroCofla >= 1.8 && dineroCofla < 2.9){
    alert("Cofla Comprate helado marca helardo")
    alert("Y te sobran" + (dineroCofla - 1.8))

}

else if(dineroCofla > 2.9){
    alert("Cofla Puedes comprar helado con confites o pote ed 1/4kg")
    alert("Y te sobran" + (dineroCofla - 2.9))
}

else{
    alert("Cofla Pobre de mierda, no te alcanza para nada")
}

// Roberto 

if (dineroRoberto >= 0.6 && dineroRoberto < 1) {
    alert("Compraste el helado de agua")
    alert("Y te sobran" + (dineroRoberto - 0.6))
}

else if(dineroRoberto >= 1 && dineroRoberto < 1.6){
    alert("Compraste un helado de crema")
    alert("Y te sobran" + (dineroRoberto - 1))
}

else if(dineroRoberto >= 1.6 && dineroRoberto < 1.7){
    alert("compraste un helado heladix")
    alert("Y te sobran" + (dineroRoberto - 1.6))
}

else if(dineroRoberto >= 1.7 && dineroRoberto < 1.8){
    alert("Compraste helado marca heladovich")
    alert("Y te sobran" + (dineroRoberto - 1.7))
}

else if(dineroRoberto >= 1.8 && dineroRoberto < 2.9){
    alert("Compraste helado marca helardo")
    alert("Y te sobran" + (dineroRoberto - 1.8))
}

else if(dineroRoberto > 2.9){
    alert("Puedes comprar helado con confites o pote ed 1/4kg")
    alert("Y te sobran" + (dineroRoberto - 2.9))
}

else{
    alert("Pobre de mierda no te alcanza para nada")
}

// Pedro

if (dineroPedro >= 0.6 && dineroPedro < 1) {
    alert("Compraste el helado de agua")
    alert("Y te sobran" + (dineroPedro - 0.6))
}

else if(dineroPedro >= 1 && dineroPedro < 1.6){
    alert("Compraste un helado de crema")
    alert("Y te sobran" + (dineroPedro - 1))
}

else if(dineroPedro >= 1.6 && dineroPedro < 1.7){
    alert("compraste un helado heladix")
    alert("Y te sobran" + (dineroPedro - 1.6))
}

else if(dineroPedro >= 1.7 && dineroPedro < 1.8){
    alert("Compraste helado marca heladovich")
    alert("Y te sobran" + (dineroPedro - 1.7))
}

else if(dineroPedro >= 1.8 && dineroPedro < 2.9){
    alert("Compraste helado marca helardo")
    alert("Y te sobran" + (dineroPedro - 1.8))
}

else if(dineroPedro > 2.9) {
    alert("Puedes comprar helado con confites o pote ed 1/4kg")
    alert("Y te sobran" + (dineroPedro - 2.9))
}

else{
    alert("Pobre de mierda no te alcanza para nada")
}