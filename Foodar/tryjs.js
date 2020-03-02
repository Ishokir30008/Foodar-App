var tips = new Array();
tips["ten"] = 1;
tips["five"] = 5;
tips["two"] = 2;

function getTips(){
    var tipTypePrice=0;
    var theForm = document.forms["foodform"];
    var tip = theForm.elements["tip"];

    for (var i = 0; i < tip.length; i++) {
        
        if (tip[i].checked){
            tipTypePrice = tips[tip[i].value];
            break;
            
        }
        
    }
    return tipTypePrice;
}
function calculateTotal(){
    var foodPrice = getTips();

    var abc = document.getElementById("totalPrice");
    abc.style.display="block";
    abc.innerHTML="total price for the food type $"+foodPrice;
}

function hideTotal(){
    var abc = document.getElementById("totalPrice");
    abc.style.display="none";
}