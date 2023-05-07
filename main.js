let toggleBtn = document.querySelector('#toggleBtn'),
    tabs = document.querySelector('#tabs'),
    tabsLis = document.querySelectorAll('#tabs li a'),
    filterLi = document.querySelectorAll('.filter li'),
    profileBox = document.querySelectorAll('.portfolio-container .box'),
    sections = document.querySelectorAll('.section'),
    home = document.querySelector('[data-sec="home"]'),
    settings = document.querySelector('#settings'),
    settingsBtn = document.querySelector('#settings .icon'),
    colorBtn = document.querySelectorAll('#settings ul li'),
    reset = document.querySelector('#reset'),
    preloader = document.querySelector('#preloader'),
    homeid = document.querySelector('#home');

toggleBtn.addEventListener('click', () => {
    tabs.classList.toggle('active');
});


// homeid =document.body.style.height='100vh';
filterLi.forEach((li) => {
    li.addEventListener('click', (e) => {
        filterLi.forEach((li) => {
            li.classList.remove('active');
        });
        li.classList.add('active');
        profileBox.forEach((box) => {
            box.classList.remove('active');
        });
        if (e.currentTarget.dataset.profile === 'react-application'){
            document.body.style.height='150vh'
        }
        if (e.currentTarget.dataset.profile === 'Vanilla-javascript'){
            document.body.style.height='150vh'
        }
        
        if (e.currentTarget.dataset.profile === 'Next-js'){
            document.body.style.height='150vh'
        }
        if (e.currentTarget.dataset.profile === 'TypeScript'){
            document.body.style.height='150vh'
        }

        if (e.currentTarget.dataset.profile === 'all') {
            profileBox.forEach((box) => {
                box.classList.add('active');
                document.body.style.height='150vh'
                
                
            });
        } else {
            document.querySelectorAll('.' + e.currentTarget.dataset.profile).forEach((el) => {
                el.classList.add('active');
                
            });
        }
    });
});

tabsLis.forEach((tab) => {
    tab.addEventListener('click', (e) => {
        tabsLis.forEach((tab) => {
            tab.classList.remove('active');
            document.body.style.height='150vh'
        });
        tab.classList.add('active');
        sections.forEach((section) => {
            section.classList.remove('active');
        });
        document.querySelector('#' + e.currentTarget.dataset.sec).classList.add('active');
    });
});

home.addEventListener('click', (e) => {
    sections.forEach((section) => {
        section.classList.remove('active');
    });
    document.querySelector('#' + e.currentTarget.dataset.sec).classList.add('active');
    
});

settingsBtn.addEventListener('click', () => {
    settings.classList.toggle('show');
});

colorBtn.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        //set Color on root
        document.documentElement.style.setProperty('--primaryColor', e.target.dataset.color);
        document.documentElement.style.setProperty('--hoverColor', e.target.dataset.color);
    });
});

reset.addEventListener('click', () => {
    document.documentElement.style.setProperty('--primaryColor', '#ffc500');
    document.documentElement.style.setProperty('--hoverColor', '#ffb10');
})

window.addEventListener('load', () => {
    const fadeOutEffect = setInterval(() => {
        preloader.classList.add('hide');
        clearInterval(fadeOutEffect);
    }, 1000);
});