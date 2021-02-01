/* eslint-disable no-unused-expressions */
import create from '../modules/createElement'

export default () => {
    
    const ul = document.querySelector('ul')
    const menuVelues : { [key: number]: any } = {
        0: {
            color: '',
            elements: [
                {
                    left: {
                        element: 'startGame',
                    } ,
                    rigth: {
                        text: 'Начать игру',
                        linck: '/'
                    }
                },
                {
                    left: {
                        element: 'about',
                    } ,
                    rigth: {
                        text: 'Описание игры',
                        linck: '/'
                    }
                },
                {
                    left: {
                        element: 'Yeeeeee1',
                    } ,
                    rigth: {
                        text: 'Yeeeeee1',
                        linck: ''
                    }
                },
                {
                    left: {
                        element: 'temirWlan',
                    } ,
                    rigth: {
                        text: 'temirWlan',
                        linck: ''
                    }
                },
                {
                    left: {
                        element: 'KotShiro',
                    } ,
                    rigth: {
                        text: 'KotShiro',
                        linck: ''
                    }
                },{
                    left: {
                        element: 'RSSchool',
                    } ,
                    rigth: {
                        text: '',
                        linck: ''
                    }
                },
            ]
        },
    }

    function renderMenu (value:number) {
        const menu = <HTMLElement> document.querySelector('#menu');
        menu.style.top = `${( document.documentElement.clientHeight / 2 )-( 38 * menuChecker )}px`;
        menuVelues[value].elements.forEach( (element:any) => {
            const li = create('li', null, null, ul)
            if (element.left !== null ) {
                const div = create('div', null, null, li)
                switch (element.left.element) {
                    // Секция главная
                    case 'startGame': {
                        div.dataset.type = 'startGame'
                        break;
                    }
                    case 'about': {
                        const textAbout = 'Это инди-игра в жанре платформера с элементами головоломки. Игрок управляет одним или, что чаще, несколькими прямоугольниками или квадратами разных цветов и размеров. У каждого прямоугольника есть имя и индивидуальные черты характера, включая и Томаса, упоминаемого в названии.'

                        div.dataset.type = 'about'

                        const divAbout = create('div', 'about-block', null , div)
                        divAbout.innerText = textAbout
                        break;
                    }
                    case 'Yeeeeee1': {
                        const img = create('a', 'a-start-menu', null, li)
                        img.innerHTML = '<svg height="24" class="octicon octicon-mark-github d-block mr-2 float-left" viewBox="0 0 16 16" version="1.1" width="24" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg>'
                        div.dataset.type = 'Yeeeeee1'
                        break;
                    }
                    case 'temirWlan': {
                        const img = create('a', 'a-start-menu', null, li)
                        img.innerHTML = '<svg height="24" class="octicon octicon-mark-github d-block mr-2 float-left" viewBox="0 0 16 16" version="1.1" width="24" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg>'
                        
                        div.dataset.type = 'temirWlan'
                        break;
                    }
                    case 'KotShiro': {
                        const img = create('a', 'a-start-menu', null, li)
                        img.innerHTML = '<svg height="24" class="octicon octicon-mark-github d-block mr-2 float-left" viewBox="0 0 16 16" version="1.1" width="24" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg>'
                        
                        div.dataset.type = 'KotShiro'
                        break;
                    }
                    case 'RSSchool': {
                        const img = create('a', null, null, li)
                        img.innerHTML = '<img src="https://rs.school/images/rs_school.svg" height="28"></img>'
                        
                        div.dataset.type = 'RSSchool'
                        break;
                    }

                    default:
                        break;
                }

            }
            create('a', null, element.rigth.text, li)
        });
        document.querySelector('li').classList.add('active')
    }

    renderMenu(0)

    let menuChecker = 0;
    let lvlCecker = 0;
    function eventMenu(event: { keyCode: number; code: string }) {
        const menu = <HTMLElement> document.querySelector('#menu');
        document.querySelectorAll('li.active').forEach(el => el.classList.remove('active'));
        document.querySelectorAll('label.active').forEach(el => el.classList.remove('active'));
        if (event.keyCode === 38 && menuChecker > 0)
            menuChecker -= 1;

        if (event.keyCode === 40 && menuChecker < menu.childElementCount - 1)
            menuChecker += 1;

        if (event.keyCode === 38 || event.keyCode === 40)
            lvlCecker = 0;

        menu.children[menuChecker].classList.add('active');
        menu.style.top = `${( document.documentElement.clientHeight / 2 )-( 38 * menuChecker )}px`;


        if (event.code === 'Enter') {
            menuChecker = 0
            lvlCecker = 0
            const liActiv = document.querySelector('.active')
            liActiv.children[0]
            if(liActiv.querySelector('div')){
                const divActiv = liActiv.querySelector('div')
                if(divActiv.dataset.type === 'startGame') {
                    document.location.href = `${document.location.href}#/start-game`
                } 
                else if (divActiv.dataset.type === 'Yeeeeee1' ) {
                    document.location.href = `https://github.com/Yeeeeee1`
                } 
                else if (divActiv.dataset.type === 'temirWlan' ) {
                    document.location.href = `https://github.com/temirWlan`
                } 
                else if (divActiv.dataset.type === 'KotShiro' ) {
                    document.location.href = `https://github.com/KotShiro`
                }
                else if (divActiv.dataset.type === 'RSSchool' ) {
                    document.location.href = `https://rs.school/`
                }
            } else {
                // console.log(liActiv)
            }
        }

    }


    document.addEventListener("keydown", eventMenu)
}