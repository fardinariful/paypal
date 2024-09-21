
function addmoney(){
    showelement('ADDmoney');
    hiddenelement('Payments');
    
}

function 


function hiddenelement(elementID){
    const hiddne=document.getElementById(elementID);
    hiddne.classList.add('hidden');
}



function showelement(elementID){
    const show=document.getElementById(elementID);
    show.classList.remove('hidden');
}




