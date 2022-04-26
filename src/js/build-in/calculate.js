export default function calculateConfig() {
    let   equipments              = document.querySelectorAll('[data-choise="equipment"]'),      
          additionalOptions       = document.querySelector('[data-config="additionalOptions"]'),
          chosenEquipment         = document.querySelectorAll('.configure__chosen-equipment-wrapper'),
          counterOfEquipment      = document.querySelector('.configure__chosen-equipment-counter'),
          totalPrice              = document.querySelectorAll('.configure__form-price'),
          checkBox                = document.querySelectorAll('.configure__form-checkbox'),
          choiceOfCar             = document.querySelectorAll('.configure__tab-desktop'),
          choiceOfCarMobile       = document.querySelectorAll('.configure__tab-mobile'),
          configOfUaz             = document.querySelector('[data-config="configUaz"]'),
          configOfIsuzu           = document.querySelector('[data-config="configIsuzu"]'),
          totalPriceUaz           = configOfUaz.querySelector('.configure__form-price'),
          totalPriceIsuzu         = configOfIsuzu .querySelector('.configure__form-price'),
          counterOfEquipmentUaz   = configOfUaz.querySelector('.configure__chosen-equipment-counter'),
          counterOfEquipmentIsuzu = configOfIsuzu.querySelector('.configure__chosen-equipment-counter'),
          chosenEquipmentUaz      = configOfUaz.querySelectorAll('.configure__chosen-equipment-wrapper'),
          chosenEquipmentIsuzu    = configOfIsuzu.querySelectorAll('.configure__chosen-equipment-wrapper'),
          deleteEquipmentUaz      = configOfUaz.querySelectorAll('.configure__chosen-equipment-delete'),
          deleteEquipmentIsuzu    = configOfIsuzu.querySelectorAll('.configure__chosen-equipment-delete'),
          choosedAllConfigUaz     = configOfUaz.querySelector('.configure__chosen-equipmentsAll'),
          choosedAllConfigIsuzu   = configOfIsuzu.querySelector('.configure__chosen-equipmentsAll'),
          carOfUaz                = document.querySelector('[data-car="uaz"]'),
          carOfIsuzu              = document.querySelector('[data-car="isuzu"]'),
          uazElementOfSVG         = document.querySelector('.suazCar'),
          isuzuElementOfSVG       = document.querySelector('.jisuzuCar')
    
    const arrOfUaz   = [],
          arrOfIsuzu = []

    let deleteCheckbox,
    clickEvent = new Event('change')
    
    // Табы
    function showOrHideConfig(show, hide, showSvg, hideSvg) {
        show.classList.add('tab-content_show')
        hide.classList.remove('tab-content_show')
        showSvg.classList.add('tab-content_show')
        hideSvg.classList.remove('tab-content_show')
        equipments.forEach(equipment => {
            if(equipment.classList.contains('active')){
              equipment.classList.remove('active')
            }
        })
    }

    for (let button of choiceOfCarMobile) {
        button.addEventListener('click', function () {
            choiceOfCarMobile.forEach(btn => btn.classList.remove('active'));
            this.classList.toggle('active');
            this.getAttribute('data-carName') === 'isuzu' ? showOrHideConfig(configOfIsuzu, configOfUaz, carOfIsuzu,  carOfUaz) : showOrHideConfig(configOfUaz, configOfIsuzu, carOfUaz, carOfIsuzu)
        });
    }
    
    for (let button of choiceOfCar) {
        button.addEventListener('click', function () {
            choiceOfCar.forEach(btn => btn.classList.remove('active'));
            this.classList.toggle('active');
            this.getAttribute('data-carName') === 'isuzu' ? showOrHideConfig(configOfIsuzu, configOfUaz, carOfIsuzu,  carOfUaz) : showOrHideConfig(configOfUaz, configOfIsuzu, carOfUaz, carOfIsuzu)
        });
    }
    // Табы

    function showOrHideChoice(elem, show) {
        if(show === 'show') {
            elem.style.display = ''
            setTimeout(() => {
                elem.classList.add('active')
            },100)
        }else {
            elem.style.display = 'none'
            setTimeout(() => {
                elem.classList.remove('active')
            },100)
        }
    }

    function addInChosen(chosenConfig, arrOfConfig, counter, sign, deleteConfigName) {
        let countOEquipment = parseInt(counter.innerText)
        if(sign !== 'plus') {
            if(arrOfConfig.length < 1) {
                chosenConfig[0].querySelector('.configure__chosen-equipment-text').innerText = ''
                chosenConfig[0].classList.remove('active')
            } else if (arrOfConfig.length >= 1 && arrOfConfig.length < 2) {
                chosenConfig[0].querySelector('.configure__chosen-equipment-text').innerText = arrOfConfig[0]
                chosenConfig[1].querySelector('.configure__chosen-equipment-text').innerText = ''
                showOrHideChoice(chosenConfig[1])
            } else if(arrOfConfig.length >= 2 && arrOfConfig.length < 3) {
                chosenConfig[0].querySelector('.configure__chosen-equipment-text').innerText = arrOfConfig[0]
                chosenConfig[1].querySelector('.configure__chosen-equipment-text').innerText = arrOfConfig[1]
                showOrHideChoice(chosenConfig[2])
            }else {
                countOEquipment = arrOfConfig.length - 2
                counter.innerText = countOEquipment
                chosenConfig[0].querySelector('.configure__chosen-equipment-text').innerText = arrOfConfig[0]
                chosenConfig[1].querySelector('.configure__chosen-equipment-text').innerText = arrOfConfig[1]
            }
        }else {
            if(arrOfConfig.length <= 1){
                chosenConfig[0].querySelector('.configure__chosen-equipment-text').innerText = arrOfConfig[0]
                chosenConfig[0].classList.add('active')
            }else if(arrOfConfig.length > 1 && arrOfConfig.length <= 2) {
                for(let i = 0; i <= arrOfConfig.length; i++) {
                    chosenConfig[1].querySelector('.configure__chosen-equipment-text').innerText = arrOfConfig[1]
                    showOrHideChoice(chosenConfig[1], 'show')
                }
    
            }else {
                countOEquipment = arrOfConfig.length - 2
                counter.innerText = countOEquipment
                showOrHideChoice(chosenConfig[2], 'show')
            }
        }
    }

    function animateConstruct(config, option, hide) {
        document.querySelector(config).querySelectorAll(`[data-option="${option}"]`).forEach(carElem => {
            if(!carElem.classList.contains(hide)) {
                carElem.classList.add(hide)
                carElem.classList.remove('show')
            }else {
                carElem.classList.remove(hide)
                carElem.classList.add('show')
            }
            
        })
    }
          
    function addOrDeleteEquipment(price, sign, config, countOfConfig, selectedConfig, nameConfig) {
        let sum = parseInt(config.innerText.slice(0, config.innerText.length - 4).split(' ').join(''))

        if(sign === 'plus') {
            sum += price
            selectedConfig.push(nameConfig)
            if(selectedConfig === arrOfUaz) {
                addInChosen(chosenEquipmentUaz, arrOfUaz, countOfConfig, 'plus', nameConfig)
            }else {
                addInChosen(chosenEquipmentIsuzu, arrOfIsuzu, countOfConfig, 'plus', nameConfig)
            }
            
        }else {
            sum -= price
            console.log(selectedConfig.indexOf(nameConfig));
            selectedConfig.splice(selectedConfig.indexOf(nameConfig), 1)
            if(selectedConfig === arrOfUaz) {
                addInChosen(chosenEquipmentUaz, arrOfUaz, countOfConfig, 'minus', nameConfig)
            }else {
                addInChosen(chosenEquipmentIsuzu, arrOfIsuzu, countOfConfig, 'minus', nameConfig)
            }
        }

        if(selectedConfig === arrOfUaz) {
            animateConstruct('.suazCar', nameConfig, 'shide')
        }else {
            animateConstruct('.jisuzuCar', nameConfig, 'jhide')
        }
        
        config.innerText = `${sum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} руб`
    }

    function showOrHideSvgElement(sign, element, whatCarSvg, arrCar, classHide, classHideForMinus) {
        if(sign === 'plus') {
            if(
                element.getAttribute('data-configname') === 'Передняя щетка со смачиванием (необходима навеска)' ||
                element.getAttribute('data-configname') === 'Отвал коммунальный (необходима навеска)' ||
                element.getAttribute('data-configname') === 'Отвал «бабочка» (необходима навеска)' ||
                element.getAttribute('data-configname') === 'Агрегат фронтальной мойки (АФМ)'
            ) {
                for(let i = 0; i< arrCar.length-1; i++){
                    whatCarSvg.querySelectorAll('[data-importantElem="true"]').forEach(svgElem => {
                        if(
                            arrCar[i] === svgElem.getAttribute('data-option') && 
                            svgElem.getAttribute('data-importantelem') === 'true' &&
                            svgElem.classList.contains('show') &&
                            whatCarSvg.querySelectorAll('[data-importantElem="true"].show').length > 1
                        ){
                            svgElem.classList.remove('show')
                            svgElem.classList.add(classHide)
                        }
                    })
                }
            }
        }else {
            if(
                element.getAttribute('data-configname') === 'Передняя щетка со смачиванием (необходима навеска)' ||
                element.getAttribute('data-configname') === 'Отвал коммунальный (необходима навеска)' ||
                element.getAttribute('data-configname') === 'Отвал «бабочка» (необходима навеска)' ||
                element.getAttribute('data-configname') === 'Агрегат фронтальной мойки (АФМ)'
            ) {
                let configSvg =  whatCarSvg.querySelectorAll(`[data-importantElem="true"]${classHideForMinus}`)
                let arrOfSvgElem = []
                for(let i = 0; i< arrCar.length; i++){
                    for(let j = 0; j < configSvg.length; j++){
                        if(
                            arrCar[i] === configSvg[j].getAttribute('data-option')
                        ) {
                            arrOfSvgElem.push(configSvg[j])
                        }
                    }
                }
                if(element.getAttribute('data-configname') !== arrOfSvgElem[arrOfSvgElem.length-1].getAttribute('data-option')){
                    arrOfSvgElem[arrOfSvgElem.length-1].classList.remove(classHide)
                    arrOfSvgElem[arrOfSvgElem.length-1].classList.add('show')
                }
                // else {
                //     console.log(arrOfSvgElem);
                //     uazElementOfSVG.querySelector(`[data-option="${item.getAttribute('data-configname')}"]`).classList.remove('show')
                //     uazElementOfSVG.querySelector(`[data-option="${item.getAttribute('data-configname')}"]`).classList.add('shide')
                // }
            }
        }
    }

    function addOrDeleteImportantElement(sign, item, importantElementFront, importantElementBack, configCar) {
        if(sign === 'plus') {
            if(
                item.getAttribute('data-configname') === 'Передняя щетка со смачиванием (необходима навеска)' && !importantElementFront.classList.contains('added') ||
                item.getAttribute('data-configname') === 'Отвал коммунальный (необходима навеска)' && !importantElementFront.classList.contains('added') ||
                item.getAttribute('data-configname') === 'Отвал «бабочка» (необходима навеска)' && !importantElementFront.classList.contains('added') ||
                item.getAttribute('data-configname') === 'Агрегат фронтальной мойки (АФМ)' && !importantElementFront.classList.contains('added')
            ){
                importantElementFront.dispatchEvent(clickEvent)
                importantElementFront.checked = true;
            }else if(
                item.getAttribute('data-configname') === 'Ледозаливочное оборудование «Умка»' && !importantElementBack.classList.contains('added')
            ){
                importantElementBack.dispatchEvent(clickEvent)
                importantElementBack.checked = true
            }
            if(configOfUaz.classList.contains('tab-content_show')) {
                showOrHideSvgElement('plus', item, uazElementOfSVG, arrOfUaz, 'shide')
            }else {
                showOrHideSvgElement('plus', item, isuzuElementOfSVG, arrOfIsuzu, 'jhide')
            }

        }else {
            if(item.getAttribute('data-configname') === 'Навеска (для отвала и передней щетки)') {
                if(configCar.querySelector('[data-configname="Передняя щетка со смачиванием (необходима навеска)"]').classList.contains('added')) {
                    configCar.querySelector('[data-configname="Передняя щетка со смачиванием (необходима навеска)"]').dispatchEvent(clickEvent)
                    configCar.querySelector('[data-configname="Передняя щетка со смачиванием (необходима навеска)"]').checked = false
                }else if(configCar.querySelector('[data-configname="Отвал коммунальный (необходима навеска)"]').classList.contains('added')) {
                    configCar.querySelector('[data-configname="Отвал коммунальный (необходима навеска)"]').dispatchEvent(clickEvent)
                    configCar.querySelector('[data-configname="Отвал коммунальный (необходима навеска)"]').checked = false
                }else if (configCar.querySelector('[data-configname="Отвал «бабочка» (необходима навеска)"]').classList.contains('added')) {
                    configCar.querySelector('[data-configname="Отвал «бабочка» (необходима навеска)"]').dispatchEvent(clickEvent)
                    configCar.querySelector('[data-configname="Отвал «бабочка» (необходима навеска)"]').checked = false
                }else if(configCar.querySelector('[data-configname="Агрегат фронтальной мойки (АФМ)"]').classList.contains('added')) {
                    configCar.querySelector('[data-configname="Агрегат фронтальной мойки (АФМ)"]').dispatchEvent(clickEvent)
                    configCar.querySelector('[data-configname="Агрегат фронтальной мойки (АФМ)"]').checked = false
                }
            }else if(item.getAttribute('data-configname') === 'Емкость для воды 2,0 куб. м.') {
                if(configCar.querySelector('[data-configname="Ледозаливочное оборудование «Умка»"]').classList.contains('added')) {
                    configCar.querySelector('[data-configname="Ледозаливочное оборудование «Умка»"]').dispatchEvent(clickEvent)
                    configCar.querySelector('[data-configname="Ледозаливочное оборудование «Умка»"]').checked = false
                }
            }
            if(configOfUaz.classList.contains('tab-content_show')) {
                showOrHideSvgElement('minus', item, uazElementOfSVG, arrOfUaz, 'shide', '.shide',)
            }else {
                showOrHideSvgElement('minus', item, isuzuElementOfSVG, arrOfIsuzu, 'jhide', '.jhide')
            }
        }
    }

    function plusOrMinus(element, selectedConfiguration, selectedCount, arrConfigs) {
        let nameOfConfig               = element.parentElement.querySelector('.configure__form-text p').innerText,
            importantElementUazFront   = configOfUaz.querySelector('[data-configname="Навеска (для отвала и передней щетки)"]'),
            importantElementUazBack    = configOfUaz.querySelector('[data-configname="Емкость для воды 2,0 куб. м."]'),
            importantElementIsuzuFront = configOfIsuzu.querySelector('[data-configname="Навеска (для отвала и передней щетки)"]'),
            importantElementIsuzuBack  = configOfIsuzu.querySelector('[data-configname="Емкость для воды 2,0 куб. м."]')

        if(!element.classList.contains('added')) {
            element.classList.add('added')
            addOrDeleteEquipment(parseInt(element.getAttribute('data-price')), 'plus', selectedConfiguration, selectedCount, arrConfigs, nameOfConfig)
            if(configOfUaz.classList.contains('tab-content_show')) {
                addOrDeleteImportantElement('plus', element, importantElementUazFront, importantElementUazBack, configOfUaz)
            }else {
                addOrDeleteImportantElement('plus', element, importantElementIsuzuFront, importantElementIsuzuBack, configOfIsuzu)
            }
            
        }else {
            element.classList.remove('added')
            addOrDeleteEquipment(parseInt(element.getAttribute('data-price')), 'minus', selectedConfiguration, selectedCount, arrConfigs, nameOfConfig)
            if(configOfUaz.classList.contains('tab-content_show')) {
                addOrDeleteImportantElement('minus', element, importantElementUazFront, importantElementUazBack, configOfUaz)
            }else {
                addOrDeleteImportantElement('minus', element, importantElementIsuzuFront, importantElementIsuzuBack, configOfIsuzu)
            }
        }
    }

    checkBox.forEach(item => {
        item.addEventListener('change', ()=> {
            if(configOfUaz.classList.contains('tab-content_show')) {
                plusOrMinus(item, totalPriceUaz, counterOfEquipmentUaz, arrOfUaz )
            }else {
                plusOrMinus(item, totalPriceIsuzu, counterOfEquipmentIsuzu, arrOfIsuzu )
            }
        })
    })

    equipments.forEach(equipment => {
        const btn = equipment.querySelector('.configure__form-group-button')
        btn.addEventListener('click', function(e){
            e.preventDefault()
            if(!equipment.classList.contains('active')){
                equipment.classList.add('active')
            }else {
                equipment.classList.remove('active')
            }
        })
    });

    // Delete choice element

    function whatDelete(deletedElem, listOfElem, config) {
        listOfElem.forEach(elem => {
            // console.log(elem);
            if(
                deletedElem.previousElementSibling.innerText == elem.parentElement.querySelector('.configure__form-text p').innerText
                && elem.getAttribute('data-config') == config
            ) {
                console.log(elem);
                elem.checked = false;
                return deleteCheckbox = elem
            }
        })
    }

    deleteEquipmentUaz.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault()
            whatDelete(item, checkBox, 'uaz')
            console.log(item.previousElementSibling.innerText);
            deleteCheckbox.dispatchEvent(clickEvent)
            // console.log(checkBox);
        })
    })

    deleteEquipmentIsuzu.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault()
            whatDelete(item, checkBox, 'isuzu')
            deleteCheckbox.dispatchEvent(clickEvent)
        })
    })

    // Show more

    function createElement(chooseList, text, dataSet) {
        const newElementsOfConfig = document.createElement('li')
        newElementsOfConfig.classList.add('configure__chosen-equipment-wrapper', 'active')
        newElementsOfConfig.setAttribute('data-config', dataSet)
        newElementsOfConfig.innerHTML = 
        `
            <div class="configure__chosen-equipment">
                <span class="configure__chosen-equipment-text">${text}</span>
                <button class="configure__chosen-equipment-delete">
                    <svg>
                        <use xlink:href="#plus-icon"></use>
                    </svg>
                </button>
            </div>
        `
        chooseList.appendChild(newElementsOfConfig)
    }

    function showMore(choseArray, list, dataAttr) {
        for(let i = 0; i < choseArray.length; i++) {
            createElement(list, choseArray[i], dataAttr)
        }
    }

    function deleteFromMore(arr, configAll, dataConfig, whatHide, whatDeleteArr) {
        showMore(arr, configAll, dataConfig)
        document.querySelectorAll('.configure__chosen-equipments')[whatHide].classList.add('hide')
        configAll.classList.add('active')
        configAll.querySelectorAll('.configure__chosen-equipment-delete').forEach(item => {
            item.addEventListener('click', function(e) {
                e.preventDefault()
                whatDelete(item, checkBox, whatDeleteArr)
                deleteCheckbox.dispatchEvent(clickEvent)
                item.parentElement.parentElement.remove()
                if(configAll.querySelectorAll('.configure__chosen-equipment-delete').length < 1) {
                    configAll.classList.remove('active')
                    document.querySelectorAll('.configure__chosen-equipments')[whatHide].classList.remove('hide')
                }
            })
        })
    }

    chosenEquipmentUaz[2].addEventListener('click', function(e){
        e.preventDefault()
        deleteFromMore(arrOfUaz, choosedAllConfigUaz, 'allConfigUaz', 0, 'uaz')
    })

    chosenEquipmentIsuzu[2].addEventListener('click', function(e){
        e.preventDefault()
        deleteFromMore(arrOfIsuzu, choosedAllConfigIsuzu, 'allConfigIsuzu', 1, 'isuzu')
    })

}