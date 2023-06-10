const hiddenElemets = document.querySelectorAll('.hidden');

const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        console.log(entry); //funkcija se non stop pokrece!
        if (entry.isIntersecting){
            entry.target.classList.add('show');

        } else{
            entry.target.classList.remove('show');
        }
    })
})

hiddenElemets.forEach((el)=> observer.observe(el));


//btns

const btnsList = document.querySelectorAll('.btn');
const paragraphs = document.querySelectorAll('.active');

btnsList.forEach((btnEl, btnIndex) => {
    btnEl.addEventListener('click', () => {
        document.querySelector('.special')?.classList.remove('special');
        btnEl.classList.add('special');

        paragraphs.forEach((paragraph, paragraphIndex) => {
            if(paragraphIndex === btnIndex){
                paragraph.style.opacity = '1'
            }else {
                paragraph.style.opacity = '0'
            }
        })
    })
})
