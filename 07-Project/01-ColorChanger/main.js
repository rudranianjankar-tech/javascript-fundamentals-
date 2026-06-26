const buttons = document.querySelectorAll('.button')
//console.log(button);
const body = document.querySelector("body")

buttons.forEach(function (button){
    console.log(button);
    button.addEventListener('click',function(e){
        console.log(e)
        console.log(e.target)
        if(e.target.id==='pink'){
            body.style.backgroundColor =e.target.id
        }
        if(e.target.id==='blue'){
            body.style.backgroundColor ='#87CEEB';
        }
        if(e.target.id==='green'){
            body.style.backgroundColor ='#C1E1C1';
        }
        if(e.target.id==='purple'){
            body.style.backgroundColor ='#8A2BE2';
        }

    });
});