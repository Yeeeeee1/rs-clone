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
                    left: {
                        element: 'proceed-game',
                    } ,
                    rigth: {
                        text: 'Продолжить',
                        linck: '/'
                    }
                },
                {
                    left: {
                        element: 'new-game',
                    } ,
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
                    left: {
                        element: 's-anime',
                    } ,
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
        const menu = <HTMLElement> document.querySelector('#menu');
        menu.style.top = `${( document.documentElement.clientHeight / 2 )-( 38 * menuChecker )}px`;
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
                    case 'new-game': {
                        div.dataset.type = 'newGame'
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
                        ], div, ['id', 'switch'])
                        break;
                    }

                    case 's-anime': {
                        div.classList.add('switch-block')
                        div.dataset.type = 'anime'
                        create('label', 'switch', [
                            create('input', 'switch-anime', null, null, ['type', 'checkbox']),
                            create('span', 'slider', null, null)
                        ], div, ['id', 'switch'])
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
        // Обрабока влево-вправо уровни
        if (menu.children[menuChecker].querySelector('[type="radio"]')) {
            menu.children[menuChecker].children[0].children[lvlCecker*2+1].classList.remove('active')
            if (event.keyCode === 39 && lvlCecker < menu.children[menuChecker].children[0].childElementCount/2-1)
                lvlCecker += 1

            if (event.keyCode === 37 && lvlCecker > 0)
                lvlCecker -= 1

            menu.children[menuChecker].children[0].children[lvlCecker*2+1].classList.add('active');
            const menuLevl = menu.children[menuChecker].children[0].children[lvlCecker*2] as HTMLInputElement
            menuLevl.checked = true;
        }
        // Обрабока влево-вправо "тумблер" 
        if (menu.children[menuChecker].querySelector('[type="checkbox"]')) {
            const menuCheckbox = menu.children[menuChecker].querySelector('[type="checkbox"]') as HTMLInputElement
            if (event.keyCode === 39 && menuCheckbox.checked === false)
                menuCheckbox.checked = true

            if (event.keyCode === 37 && menuCheckbox.checked === true)
                menuCheckbox.checked = false
        }
        // Обрабока влево-вправо range 
        if (menu.children[menuChecker].querySelector('[type="range"]')) {
            const menuRange = menu.children[menuChecker].querySelector('[type="range"]') as HTMLInputElement
            if (event.keyCode === 39 && +menuRange.value <= 100)
                menuRange.value = String(+menuRange.value + +menuRange.step)

            if (event.keyCode === 37 && +menuRange.value >= 0)
                menuRange.value = String(+menuRange.value - +menuRange.step)
        }

        if (menu.children[menuChecker].querySelector('[type="range"]')) {
            const inputRange = menu.children[menuChecker].querySelector('[type="range"]') as HTMLInputElement
            inputRange.style.display = 'block'
        }

        function timeOutMenu (value:number) {
            setTimeout(() => {
                clerMenu()
                renderMenu(value)
                menu.classList.remove('r-hidden')
            }, 600)
        }
        if (event.code === 'Enter') {
            menuChecker = 0
            lvlCecker = 0
            const liActiv = document.querySelector('.active')
            liActiv.children[0]
            if(liActiv.querySelector('div')){
                const divActiv = liActiv.querySelector('div')
                if(divActiv.dataset.type === 'radio') {
                    const currentRadio = divActiv.querySelector('[type="radio"]:checked') as HTMLInputElement
                    console.log(currentRadio)
                    document.location.href = `${document.location.origin}/#/level-${+currentRadio.value + 1}`
                } else if (divActiv.dataset.type === 'beck' ) {
                    menu.classList.add('r-hidden')
                    timeOutMenu(0)
                } else if (divActiv.dataset.type === 'level' ) {
                    menu.classList.add('r-hidden')
                    timeOutMenu(1)
                } else if (divActiv.dataset.type === 'setting' ) {
                    menu.classList.add('r-hidden')
                    timeOutMenu(2)
                } else if (divActiv.dataset.type === '' ) {
                    clerMenu()
                    renderMenu(2)
                } else if (divActiv.dataset.type === 'newGame' ) {
                    document.location.href = document.location.origin + '/#/level-1'
                }
            } else {
                // console.log(liActiv)
            }
        }

    }


    document.addEventListener("keydown", eventMenu)
}