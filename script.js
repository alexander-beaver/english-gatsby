var circle = document.getElementById("circle");
var runs = 0;
window.onload = function(){

    opacityChange();

}

function opacityChange(){
    runs += 1;
    anime({
        targets: '#circle',
        value: [0, 1000],
        opacity: 1,
        easing: 'easeInOutExpo',
        duration: 2000,
        complete:function(){
            anime({
                targets: '#circle',
                value: [0, 1000],
                opacity: 0,
                easing: 'easeInOutExpo',
                duration: 2000,
                complete:function(){
                    if(runs < 2){
                        opacityChange()
                    }
                    else{
                        window.location="./main/index.html";
                    }
                }
            });
        }
    });

}
