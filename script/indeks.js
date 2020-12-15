
$(document).ready(function (){
    $("#dugme").click(function(){
    let rezultat = $('input[name="radioPolje"]');
    let odabraneVrednosti;
    for (let i of rezultat) {
        if (i.checked && i.value === 'poljeDa') {
            alert("Hvala na povratnoj informaciji!");
            break;
        }
        else if(i.checked && i.value === 'poljeNe'){
            alert("Potrudicemo se da bude bolje...");
            break;
        }
        else {
            alert("Odaberite opciju!");
            break;
        }
    }
   
    });
    console.log(dugme);
});

$(".accordion").accordion();

/* 

$("#posalji").click(function(){
let poljeimeiprezime = document.querySelector('#imeiprezime');
required: true;
const imePrezime = poljeimeiprezime.value;

if(imePrezime==='')
for(let c in imePrezim ){
    if(isAlpha(c)===false){
        alert("ddd");
       
    }
}

});*/
/*
$("#posalji").click(function(){
    let poljeimeiprezime = document.querySelector('#imeiprezime');
    required: true;
    let imePrezime = poljeimeiprezime.value;
    if(imePrezime.legth>40){
        alert("sss");
    }

});
*/

function istampaj(){  
    var name=document.form1.name.value;  
    alert("Dobrodošao: "+name);  
    }  
    
    
    function idi(){  
        open("http://www.bg.ac.rs/");  
        }  



var danas=new Date(); 
var dan=danas.getDay();
var mesec= danas.getMonth();
var godina = danas.getFullYear();
document.getElementById('vreme').innerHTML=dan+"."+mesec+"."+godina+".";


function daLiJeBroj(c){
    return c >= '0' && c <= '9';
}


$(".dugmad").click(function validajcijaPodataka() { 


    let ime = document.getElementById("imeiprezime");
    let email =  document.getElementById("email");
    let indeks = document.getElementById("indeks");

    
    


    if (ime.value == "") { 
       alert("Molimo Vas unesite ime i prezime"); 
       
    } 
 if(email.value==""){
    alert("Molimo Vas unesite email"); 
 }
 if(indeks.value==""){
    alert("Molimo Vas unesite indeks"); 
 }

 if(!daLiJeBroj(indeks.value)){
    alert("uneli ste nesto sto nije broj"); 

 }

 let cifre = '0123456789';
 let slash = '/';
  
 
  
 
 if(cifre.indexOf(indeks[0]) == -1 || cifre.indexOf(indeks[1]) == -1 || cifre.indexOf(indeks[2]) == -1 || cifre.indexOf(indeks[3]) == -1)
     alert('Nije dobar format');
     
 else if(slash.indexOf(indeks[4]) == -1)
     alert('Nije dobar format ');
     
else  if(cifre.indexOf(indeks[5]) == -1 || cifre.indexOf(indeks[6]) == -1 || cifre.indexOf(indeks[7]) == -1 || cifre.indexOf(indeks[8]) == -1)
     alert('Nije dobar format');
     

 
 

    
});