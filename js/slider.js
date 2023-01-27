(function(){

    const sliders = [...document.querySelectorAll('.testimony-body')];
    const buttonNext = document.querySelector('#next');
    const buttonBefore = document.querySelector('#before');
    let value;   

    buttonNext.addEventListener('click', ()=>{
        changePosition(1);
    });

    buttonBefore.addEventListener('click', ()=>{
        changePosition(-1);
    });

    const changePosition = (add)=>{
        const currentTestimony = document.querySelector('.testimony-body--show').dataset.id;
        value = Number (currentTestimony);
        value+= add;

        //3+1 = if(value === sliders.length+1)
        //4+1 (para volver al inicio) = value = value === 0 ' sliders.length

        sliders[Number(currentTestimony)-1].classList.remove('testimony-body--show');
        if(value === sliders.length+1 || value === 0){
            value = value === 0 ? sliders.length : 1;
        }

        sliders[value-1].classList.add('testimony-body--show');
    }

})();