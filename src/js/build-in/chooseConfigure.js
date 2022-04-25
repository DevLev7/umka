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
          chosenEquipmentIsuzu    = configOfUaz.querySelectorAll('.configure__chosen-equipment-wrapper')
          
    
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

    function addInChosen(chosenConfig, arrOfConfig, counter, sign, deleteConfigName) {
        let deleteIndex     = arrOfConfig.indexOf(`${deleteConfigName}`),
            countOEquipment = parseInt(counter.innerText)
        if(sign !== 'plus') {
            // let newArray = arrOfConfig.filter(function(f) { return f !== deleteConfigName })
            if(arrOfConfig.length <= 1) {
                arrOfConfig.splice(deleteIndex, 1)
                chosenConfig[0].querySelector('.configure__chosen-equipment-text').innerText = arrOfConfig[0]
                chosenConfig[0].classList.remove('active')
            } else if (arrOfConfig.length > 1 && arrOfConfig.length <= 2) {
                arrOfConfig.splice(deleteIndex, 1)
                chosenConfig[1].querySelector('.configure__chosen-equipment-text').innerText = arrOfConfig[1]
                chosenConfig[1].classList.remove('active')
            } else {
                arrOfConfig.splice(deleteIndex, 1)
                countOEquipment = arrOfConfig.length - 2
                counter.innerText = countOEquipment
                chosenConfig[0].querySelector('.configure__chosen-equipment-text').innerText = arrOfConfig[0]
                chosenConfig[1].querySelector('.configure__chosen-equipment-text').innerText = arrOfConfig[1]
                console.log(arrOfConfig[0], arrOfConfig[1], arrOfConfig[2]);
            }
        }else {
            if(arrOfConfig.length <= 1){
                chosenConfig[0].querySelector('.configure__chosen-equipment-text').innerText = arrOfConfig[0]
                chosenConfig[0].classList.add('active')
            }else if(arrOfConfig.length > 1 && arrOfConfig.length <= 2) {
                for(let i = 0; i <= arrOfConfig.length; i++) {
                    chosenConfig[1].classList.add('active')
                    chosenConfig[1].querySelector('.configure__chosen-equipment-text').innerText = arrOfConfig[1]
                }
    
            }else {
                countOEquipment = arrOfConfig.length - 2
                counter.innerText = countOEquipment
                chosenConfig[2].style.display = 'flex'
                setTimeout(()=>{
                    chosenConfig[2].classList.add('active')
                },100)
            }
        }
    }
          
    function addOrDeleteEquipment(price, sign, config, countOfConfig, selectedConfig, nameConfig, elementOfSVG) {
        let sum = parseInt(config.innerText.slice(0, config.innerText.length - 4).split(' ').join(''))

        if(sign === 'plus') {
            sum += price
            selectedConfig.push(nameConfig.toLowerCase())
            if(selectedConfig === arrOfUaz) {
                addInChosen(chosenEquipmentUaz, arrOfUaz, countOfConfig, 'plus', nameConfig)
            }else {
                addInChosen(chosenEquipmentIsuzu, arrOfIsuzu, countOfConfig, 'plus', nameConfig)
            }
            
        }else {
            sum -= price
            if(selectedConfig === arrOfUaz) {
                addInChosen(chosenEquipmentUaz, arrOfUaz, countOfConfig, 'minus')
            }else {
                addInChosen(chosenEquipmentIsuzu, arrOfIsuzu, countOfConfig, 'minus')
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

}