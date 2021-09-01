function myFunction(){
    var x = document.getElementById("mobile_click");
    if(x.style.display ==='flex'){
        x.style.display = 'none';
    } else{
        x.style.display = 'flex'
    }
}

function imgChanger(){
    var y = document.getElementById('arrow')
    var a= document.getElementById('arrow2')

  
}


function backgroundChanger(){
    var z = document.getElementById('clickable_arrow')
    if(z.style.backgroundColor==='rgb(114, 128, 167)'){
        z.style.backgroundColor ='rgb(221, 228, 233)'
    } else{
        z.style.backgroundColor ='rgb(114, 128, 167)'
    }
}

function someFunc(){
   
    myFunction();
    backgroundChanger();
}