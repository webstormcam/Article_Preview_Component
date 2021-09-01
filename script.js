function myFunction(){
    var x = document.getElementById("mobile_click");
    if(x.style.display ==='flex'){
        x.style.display = 'none';
    } else{
        x.style.display = 'flex'
    }
}

function imgChanger(){
    var y = document.getElementById('arrow');
    var z = document.getElementById('clickable_arrow')
    if (y.src ==='imgs/icon-share.svg'){
        y.src ='imgs/icon-share-dark.svg';
        z.style.backgroundColor = 'red'
        

    } else{
        y.src = 'imgs/icon-share.svg';
    }
}

function someFunc(){
    imgChanger();
    myFunction();
}