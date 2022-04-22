export default function ChooseConfigure() {
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
          deleteEquipmentIsuzu    = configOfIsuzu.querySelectorAll('.configure__chosen-equipment-delete')
    
    const arrOfUaz   = [],
          arrOfIsuzu = []
    
    // Табы
    function showOrHideConfig(show, hide) {
        show.classList.add('tab-content_show')
        hide.classList.remove('tab-content_show')
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
            this.getAttribute('data-carName') === 'isuzu' ? showOrHideConfig(configOfIsuzu, configOfUaz) : showOrHideConfig(configOfUaz, configOfIsuzu)
        });
    }
    
    for (let button of choiceOfCar) {
        button.addEventListener('click', function () {
            choiceOfCar.forEach(btn => btn.classList.remove('active'));
            this.classList.toggle('active');
            this.getAttribute('data-carName') === 'isuzu' ? showOrHideConfig(configOfIsuzu, configOfUaz) : showOrHideConfig(configOfUaz, configOfIsuzu)
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
          
    function addOrDeleteEquipment(price, sign, config, countOfConfig, selectedConfig, nameConfig, elementOfSVG) {
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
            console.log(selectedConfig);
            if(selectedConfig === arrOfUaz) {
                addInChosen(chosenEquipmentUaz, arrOfUaz, countOfConfig, 'minus', nameConfig)
            }else {
                addInChosen(chosenEquipmentIsuzu, arrOfIsuzu, countOfConfig, 'minus', nameConfig)
            }
        }
        
        config.innerText = `${sum.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, " ")} руб`
    }

    function plusOrMinus(element, selectedConfiguration, selectedCount, arrConfigs) {
        let nameOfConfig = element.parentElement.querySelector('.configure__form-text p').innerText

        if(!element.classList.contains('added')) {
            element.classList.add('added')
            addOrDeleteEquipment(parseInt(element.getAttribute('data-price')), 'plus', selectedConfiguration, selectedCount, arrConfigs, nameOfConfig)
        }else {
            element.classList.remove('added')
            addOrDeleteEquipment(parseInt(element.getAttribute('data-price')), 'minus', selectedConfiguration, selectedCount, arrConfigs, nameOfConfig)
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

    let deleteCheckbox,
    clickEvent = new Event('change')
    function whatDelete(deletedElem, listOfElem, config) {
        listOfElem.forEach(elem => {
            if(
                deletedElem.previousElementSibling.innerText == elem.parentElement.querySelector('.configure__form-text p').innerText
                && elem.getAttribute('data-config') === config
            ) {
                elem.checked = false;
                return deleteCheckbox = elem
            }
        })
    }

    deleteEquipmentUaz.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault()
            whatDelete(item, checkBox, 'uaz')
            deleteCheckbox.dispatchEvent(clickEvent)
            console.log(deleteCheckbox);
        })
    })

    deleteEquipmentIsuzu.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault()
            whatDelete(item, checkBox, 'isuzu')
            deleteCheckbox.dispatchEvent(clickEvent)
            console.log(deleteCheckbox);
        })
    })

    // Show more

    // function showMore(choseArray) {
    //     for(let i = 0; i < choseArray.length; i++) {
    //         console.log(choseArray[i]);
    //     }
    // }

    // chosenEquipmentUaz[2].addEventListener('click', function(e){
    //     e.preventDefault()
    //     showMore(arrOfUaz)
    // })
    // chosenEquipmentIsuzu[2].addEventListener('click', function(e){
    //     e.preventDefault()
    //     showMore(arrOfIsuzu)
    // })

}