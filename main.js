document.addEventListener('DOMContentLoaded', () => {

    function animateText(elem, timing = 0) {
        elem.style.opacity = 0;

        const keyframes = [
            {
                opacity: 0,
                transform: 'translateY(-30px)'
            },
            {
                opacity: 1,
                transform: 'translateY(0px)'
            }
        ];

        const options = {
            delay: 200 + timing,
            duration: 2000
        }

        elem.animate(keyframes, options).onfinish = () => {
            elem.style.opacity = 1;
        }
    }

    function fadeOut(elem) {

        const keyframes = [
            {
                opacity: 0,
            },
            {
                opacity: 1,
            }
        ];

        const options = {
            duration: 2000
        }

        elem.animate(keyframes, options)
    }

    const mainTitle = document.querySelector('.main__title');  //Заголовк на главном экране
    animateText(mainTitle)

    const mainDescr = document.querySelector('.main__descr'); //Подзагаловок на главном экране
    const arrayLettersMainDescr = mainDescr.textContent.trim().split('');

    mainDescr.textContent = '';
    arrayLettersMainDescr.forEach(letter => {
        let letterSpan = document.createElement('span');
        letterSpan.classList = 'main__descr-letter';
        letterSpan.textContent = letter;

        if (letterSpan.textContent.match(/\s/)) {
            letterSpan.style.marginRight = '5px';
        }

        letterSpan.style.display = 'inline-block';
        mainDescr.appendChild(letterSpan);
    });

    const arrayLettersTag = document.querySelectorAll('.main__descr-letter');
    arrayLettersTag.forEach(letterTag => {
        animateText(letterTag, 1800);
    });

    // Навигация
    const arrayNavList = document.querySelectorAll('.nav__link');
    arrayNavList.forEach((navItem, i, array) => {
        navItem.addEventListener('click', function() {
            for ( let element of array) {
                element.classList.remove('nav__link--active');
            }
            this.classList.add('nav__link--active');
        })
    });

    // Создание указания на скролл вниз
    const scroll = document.createElement('div');
    scroll.style.width = '30px';
    scroll.style.height = '50px';
    scroll.style.border = '5px solid white';
    scroll.style.borderRadius = '45%';
    scroll.style.margin = '300px auto 0 auto';
    scroll.classList = 'main__scroll';
    scroll.style.display = 'flex';
    scroll.style.justifyContent = 'center';
    scroll.style.alignItems = 'center';

    // Создание шарика внутри указания
    const circle = document.createElement('div');
    circle.style.width = '13px';
    circle.style.height = '13px';
    circle.style.borderRadius = '100%';
    circle.style.display = 'block';
    circle.style.backgroundColor = 'white';
    circle.classList = 'main__circle'


    const mainSection = document.querySelector('.main');

    mainSection.appendChild(scroll);
    scroll.appendChild(circle);

    fadeOut(scroll)
    fadeOut(document.querySelector('.header'))


    //Фнимация при скроле
    function titleAnimationScroll() {
        const arrayOftitle = document.querySelectorAll('.title__middle');

        function showWhenScroll(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting && entry.intersectionRatio == 1) {
                    animateText(entry.target);
                    console.log('hi')
                }
            })
        };

        const options = {
            threshold: 1.0
        };

        const observer = new IntersectionObserver(showWhenScroll, options);

        arrayOftitle.forEach(title => {
            title.style.opacity = 0;
            observer.observe(title);
        })
    }

    titleAnimationScroll();


    

    
    

})