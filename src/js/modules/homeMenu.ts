/* eslint-disable no-unused-expressions */
import create from '../modules/createElement'

export default () => {
    const ul = document.querySelector('ul')
    let currentSection = 0
    const levelList = ['/','/','/','/','/','/','/','/','/']
    const menuVelues : { [key: number]: any } = {
        0: {
            color: '',
            elements: [
                {
                    left: null,
                    rigth: {
                        text: 'Продолжить',
                        linck: '/'
                    }
                },
                {
                    left: null,
                    rigth: {
                        text: 'Новая игра',
                        linck: '/'
                    }
                },
                {
                    left: {
                        element: 'level',
                    } ,
                    rigth: {
                        text: 'Выбрать уровень',
                        linck: ''
                    }
                },
                {
                    left: {
                        element: 'setting',
                    } ,
                    rigth: {
                        text: 'Настройки',
                        linck: ''
                    }
                }
            ]
        },
        1: {
            color: '',
            elements: [
                {
                    left: {
                        element: 'beck',
                    } ,
                    rigth: {
                        text: 'Назад',
                        linck: ''
                    }
                },
                {
                    left: {
                        element: 'lvl1',
                    } ,
                    rigth: {
                        text: 'Глава 1',
                        linck: ''
                    }
                }
            ]
        },
        2: {
            color: '',
            elements: [
                {
                    left: {
                        element: 'beck',
                    } ,
                    rigth: {
                        text: 'Назад',
                        linck: ''
                    }
                },
                {
                    left: {
                        element: 's-music',
                    } ,
                    rigth: {
                        text: 'Громкость музыки',
                        linck: ''
                    }
                },
                {
                    left: {
                        element: 's-volume',
                    } ,
                    rigth: {
                        text: 'Громкость действий',
                        linck: ''
                    }
                },
                {
                    left: {
                        element: 's-shadow',
                    } ,
                    rigth: {
                        text: 'Тени',
                        linck: ''
                    }
                },
                {
                    left: null,
                    rigth: {
                        text: 'Анимация',
                        linck: ''
                    }
                }
            ]
        },
    }
    function clerMenu () {
        while (ul.childNodes.length > 0) {
            ul.removeChild(ul.firstChild)
        }
    }

    function renderMenu (value:number) {
        menuVelues[value].elements.forEach( (element:any) => {
            const li = create('li', null, null, ul)
            if (element.left !== null ) {
                const div = create('div', null, null, li)
                switch (element.left.element) {
                    // Секция уровней
                    case 'lvl1': {
                        levelList.forEach((level, id) => {
                            div.dataset.type = 'radio'
                            create('input', null, null, div, ['type', 'radio'], ['id', `0.${id}`], ['name', 'lvl1'], ['value', `${id}`] )
                            create('label', null, null, div, ['for', `0.${id}`])
                        })
                        break;
                    }
                    // Общие
                    case 'beck': {
                        div.dataset.type = 'beck'
                        break;
                    }
                    // Секция главная
                    case 'level': {
                        div.dataset.type = 'level'
                        break;
                    }
                    case 'setting': {
                        div.dataset.type = 'setting'
                        break;
                    }
                    // Секция настройки
                    case 's-music': {
                        div.dataset.type = 'music'
                        div.classList.add('range-block')
                        create('input', 'range-setting range-music', null, div, ['type', 'range'], ['min', '0'], ['max', '100'], ['step','10'])
                        break;
                    }
                    case 's-volume': {
                        div.classList.add('range-block')
                        div.dataset.type = 'volume'
                        create('input', 'range-setting range-volume', null, div, ['type', 'range'], ['min', '0'], ['max', '100'], ['step','10'])
                        break;
                    }

                    case 's-shadow': {
                        div.classList.add('switch-block')
                        div.dataset.type = 'shadow'
                        create('label', 'switch', [
                            create('input', 'switch-shadow', null, null, ['type', 'checkbox']),
                            create('span', 'slider', null, null)
                        ], div)
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

    renderMenu(currentSection)

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

        if (menu.children[menuChecker].querySelector('[type="radio"]')) {
            menu.children[menuChecker].children[0].children[lvlCecker*2+1].classList.remove('active')
            if (event.keyCode === 39 && lvlCecker < menu.children[menuChecker].children[0].childElementCount/2-1)
                lvlCecker += 1

            if (event.keyCode === 37 && lvlCecker > 0)
                lvlCecker -= 1

            menu.children[menuChecker].children[0].children[lvlCecker*2+1].classList.add('active');
            menu.children[menuChecker].children[0].children[lvlCecker*2].checked = true;
        }
        if (menu.children[menuChecker].querySelector('[type="range"]')) {
            menu.children[menuChecker].querySelector('[type="range"]').style.display = 'block'
        }

        if (event.code === 'Enter') {
            menuChecker = 0
            lvlCecker = 0
            const liActiv = document.querySelector('.active')
            liActiv.children[0]
            if(liActiv.querySelector('div')){
                const divActiv = liActiv.querySelector('div')
                if(divActiv.dataset.type === 'radio') {
                    const currentRadio = divActiv.querySelector('[type="radio"]:checked')
                    console.log(currentRadio)
                } else if (divActiv.dataset.type === 'beck' ) {
                    clerMenu()
                    renderMenu(0)
                } else if (divActiv.dataset.type === 'level' ) {
                    clerMenu()
                    renderMenu(1)
                } else if (divActiv.dataset.type === 'setting' ) {
                    clerMenu()
                    renderMenu(2)
                }
            } else {
                // console.log(liActiv)
            }
        }

    }


    document.addEventListener("keydown", eventMenu)

    // const ul = document.querySelector('ul')
    // let current = 0
    // let currentMenu = 0
    // const levelList = ['/','/','/','/','/','/','/']
    // const menu = [
    //     [
    //         ['Продолжить', 0],
    //         ['Новая игра', 1],
    //         ['Выбрать уровень', 2],
    //         ['Насройка', 3],
    //         ['Создатели', 4],
    //         ['Выйти', 5]
    //     ],
    //     [
    //         ['Назад', 99],
    //         ['Громкость музыки', 6],
    //         ['Громкость дейсвий', 7],
    //         ['Анимация', 8],
    //         ['Тени', 9],
    //     ],
    //     [
    //         ['Назад', 99],
    //         ['Глава 1', 10],
    //     ]
    // ]

    // const creatMenu = (menuEl, currentEl) => {

    //     menuEl[currentEl].forEach( (el, i) => {
    //         const li = create('li', null, null, ul, ['pose', el[1]])
    //         if ( i > 0 ) {
    //             create('div', 'arrow-top', null, li)
    //         }

    //         const liContent = create('div', 'li-content', null, li)
    //         // if( el[1] === 2) {
    //         //     const rangeLevel = create('div', 'range-level', null, liContent)
    //         //     create('div', 'number-level', '1', rangeLevel)
    //         //     levelList.forEach(level => {
    //         //         create('label', 'sq-radio', [
    //         //             create('input', null, null, null, ['type', 'radio'], ['name', 'radio'],['checked','checked'], ['value', level]),
    //         //             create('span', 'checkmark', null)
    //         //         ], rangeLevel)
    //         //     });
    //         // }
    //         create('a', null, el[0], liContent)
    //         if ( i < menu[current].length - 1) {
    //             create('div', 'arrow-bottom', null, li)
    //         }
    //     })
    //     const list = document.querySelectorAll('li')
    //     ul.style.top = '0px';
    //     list[current].classList.add('li-activ')
    //     // create('input', 'range-setting', null, ul, ['type', 'range'], ['min', '0'], ['max', '100'], ['step','10'])

    // }

    // const animation = (obj, direction) => {
    //     const start = Date.now(); // запомнить время начала
    //     // в то время как timePassed идёт от 0 до 2000
    //     // left изменяет значение от 0px до 400px
    //     const draw = () =>  {
    //         if (direction) {
    //             obj.style.top = +ul.style.top.slice(0,-2) + 0.7 + 'px';
    //         } else {
    //             obj.style.top = +ul.style.top.slice(0,-2) - 0.7 + 'px';
    //         }
    //     }
    //     const timer = setInterval(() => {
    //     // сколько времени прошло с начала анимации?
    //     const timePassed = Date.now() - start;

    //     if (timePassed >= 500) {
    //         clearInterval(timer); // закончить анимацию через 2 секунды
    //         return;
    //     }
    //     draw();
    //     }, 20);
    // }

    // const checkArrow = (el) => {
    //     if (el.children[0].className === 'arrow-top') {
    //         el.children[0].style.display = 'none'
    //     }
    //     if (el.children[el.children.length - 1].className === 'arrow-bottom') {
    //         el.children[el.children.length - 1].style.display = 'none'
    //     }
    // }

    // const activArrow = (el) => {
    //     if (el.children[0].className === 'arrow-top') {
    //         el.children[0].style.display = 'block'
    //     }
    //     if (el.children[el.children.length - 1].className === 'arrow-bottom') {
    //         el.children[el.children.length - 1].style.display = 'block'
    //     }
    // }

    // creatMenu(menu,currentMenu)


    // const list = document.querySelectorAll('li')
    // ul.style.top = '0px';
    // list[current].classList.add('li-activ')
    // activArrow(list[current])

    // document.addEventListener('keydown', (event)=>{
    //     const list = document.querySelectorAll('li')
    //     current
    //     ul.style.top = '0px';
    //     list[current].classList.add('li-activ')

    //     if (event.code === 'KeyW' || event.code === 'ArrowUp' ) {
    //         if(current === 0) {
    //             current = 0
    //         } else
    //         {
    //             current -= 1
    //             animation(ul, true)
    //         }
    //     } else if (event.code === 'KeyS' || event.code === 'ArrowDown') {
    //         if(current === list.length - 1) {
    //             current = list.length - 1
    //         } else
    //         {
    //             current += 1
    //             animation(ul)
    //         }
    //     } else if (event.code === 'Enter') {
    //         ul.classList.toggle('r-hidden')
    //         setTimeout(()=>{
    //             const liActiv = document.querySelector('.li-activ')
    //             console.log(+document.querySelector('.li-activ').dataset.pose)
    //             while (ul.children.length > 0) {
    //                 ul.removeChild(ul.lastChild);
    //             }
    //             creatMenu(menu, liActiv.dataset.pose)
    //             ul.classList.toggle('r-hidden')

    //         }, 1100)
    //     }

    //     try {
    //         list.forEach(el => {
    //             el.classList.remove('li-activ')
    //             checkArrow(el)
    //         })
    //         list[current].classList.add('li-activ')
    //         if( list[current].querySelector('input') ) {
    //             list[current].querySelector('input').focus()
    //         } else {
    //             document.querySelectorAll('input').forEach(inputEl => {
    //                 inputEl.blur()
    //             })
    //         }
    //         //
    //         activArrow(list[current])
    //     } catch (error) {
    //         console.log(list)
    //         console.error('Не удалось отоброзить',error)
    //     }
    // })
}