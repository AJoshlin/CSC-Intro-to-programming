 function displayalert(alerttext){
   alert(alerttext);
   //alert text shows thers an alert//
 }

var intervalIds = new Array();

function startbuttonclick(){
    document.getElementById("btnStart").disabled = true;
    document.getElementById("btnStop").disabled = false;

    runtimer(document.getElementById("Showcountdown"));

}
 function stopbuttonclick(){
    document.getElementById("btnStart").disabled = false;
    document.getElementById("btnStop").disabled = true;
    

    for(i=0;i<11;i++){
        clearTimeout(intervalIds[i]);


    }
    
 }


 function runtimer(pageelement){
    currtime=50;
   var timeout=1000;
    
    for(i=0;i<11;i++){

    intervalIds[i] = setTimeout(function(){
        if(currtime==0){
            displayalert("BLASTOFF");
            pageelement.innerHTML=currtime;
        } else if(currtime<25){
            pageelement.innerHTML="Warning Less than 1/2 way to launch, time left"+currtime;

        }
        else{
            pageelement.innerHTML=currtime;
        }
        currtime=currtime-5;
        },timeout);
        timeout=timeout+1000;


    }
 }

