(function(){
    const titleQuestions = [...document.querySelectorAll('.questions-title')];
    
    titleQuestions.forEach(question =>{
        question.addEventListener('click', ()=>{
            let hight = 0;
            let answer = question.nextElementSibling;
            let addPadding = question.parentElement.parentElement;

            addPadding.classList.toggle('questions-padding--add');

            question.children[0].classList.toggle('questions-arrow--rotate')

            if(answer.clientHeight === 0){
                hight = answer.scrollHeight;
            }

            answer.style.height = `${hight}px`; 
        });
    });

})();