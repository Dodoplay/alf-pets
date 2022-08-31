const heroBg = document.querySelector('.hero');
let tukar = 1;

setInterval(() => {
    heroBg.style.backgroundImage = `url(img/bg/bg-${tukar}.jpg)`;
    tukar += 1
    if(tukar >= 4){
        tukar = 1
    }
},3000)

