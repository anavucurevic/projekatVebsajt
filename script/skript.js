
$(document).ready(function (){
    $("#dugme").click(function(){
    let rezultat = $('input[name="radioPolje"]');
  
    for (let i of rezultat) {
        if (i.checked && i.value === 'poljeDa') {
            alert("Hvala na povratnoj informaciji!");
           break;
        }
        if(i.checked && i.value === 'poljeNe'){
            alert("Potrudicemo se da bude bolje...");
            break;
        }
    
    }
   
    });
  
});

$(".accordion").accordion();



function istampaj(){  
    var name=document.form1.name.value;  
    alert("Dobrodošao: "+name);  
    }  
    
    
    function idi(){  
        open("http://www.bg.ac.rs/");  
        }  



        var danas=new Date(); 
        console.log(danas);
        var dan=danas.getDate();
        var mesec= danas.getMonth() + 1;
        var godina = danas.getFullYear();
        document.getElementById('vreme').innerHTML=dan+"."+mesec+"."+godina+".";


function daLiJeBroj(c){
    return c >= '0' && c <= '9';
}


$("#posalji").click(function validajcijaPodataka() { 


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
  
 



 if(cifre.indexOf(indeks.value[0]) == -1 || cifre.indexOf(indeks.value[1]) == -1 || cifre.indexOf(indeks.value[2]) == -1 || cifre.indexOf(indeks.value[3]) == -1)
     alert('Nije dobar format');
     
 else if(indeks.value[4]!='/')
     alert('Fali Vam /');
     
else  if(cifre.indexOf(indeks.value[5]) == -1 || cifre.indexOf(indeks.value[6]) == -1 || cifre.indexOf(indeks.value[7]) == -1 || cifre.indexOf(indeks.value[8]) == -1)
     alert('Nije dobar format');
     

});


function mojaFunkcija() {
    var myWindow = window.open("", "", "width=400, height=400");
    myWindow.document.write("<p>Stariji kačkavalj isecite na tanke režnjeve. Svaki komad uvaljajte najpre u brašno, zatim zamočite u razmućena jaja, a potom u prezle. Tako pripremljene režnjeve pržite na dobro zagrejanom ulju da poramene s obe strane.</p>");
   
  }

  
  function skroluj() {
    window.scrollTo(0, 1000);
  }