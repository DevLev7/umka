export default function calculateConfig() {
    if(document.querySelector('.configure') !== null){
        let equipments              = document.querySelectorAll('[data-choise="equipment"]'),      
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
            uazElementOfSVG         = document.querySelector('.tuazCar'),
            isuzuElementOfSVG       = document.querySelector('.kisuzuCar')
        
        const arrOfUaz   = [],
            arrOfIsuzu = []

        let deleteCheckbox,
        clickEvent = new Event('change'),
        cloneClick = new Event('change')

        document.querySelectorAll('[data-configName="Ледозаливочное оборудование «Умка»"]').forEach(item => {
            item.removeAttribute('data-importantCheck')
        })
        
        document.querySelectorAll('[data-configName="Емкость для воды 2,0 куб. м."]').forEach(item => {
            item.removeAttribute('data-importantCheck')
        })
        
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

        function changeTabAll(target, car) {
            target.forEach(item=>{
                item.classList.remove('active')
            })
            target[car].classList.add('active')
        }

        for (let button of choiceOfCarMobile) {
            button.addEventListener('click', function () {
                choiceOfCarMobile.forEach(btn => btn.classList.remove('active'));
                this.classList.toggle('active');
                if(this.getAttribute('data-carName') === 'isuzu'){
                    changeTabAll(choiceOfCar, 1)
                    showOrHideConfig(configOfIsuzu, configOfUaz, carOfIsuzu,  carOfUaz)
                } else {
                    changeTabAll(choiceOfCar, 0)
                    showOrHideConfig(configOfUaz, configOfIsuzu, carOfUaz, carOfIsuzu)
                }
                
            });
        }
        
        for (let button of choiceOfCar) {
            button.addEventListener('click', function () {
                choiceOfCar.forEach(btn => btn.classList.remove('active'));
                this.classList.toggle('active');
                if(this.getAttribute('data-carName') === 'isuzu'){
                    changeTabAll(choiceOfCarMobile, 1)
                    showOrHideConfig(configOfIsuzu, configOfUaz, carOfIsuzu,  carOfUaz)
                }else {
                    changeTabAll(choiceOfCarMobile, 0)
                    showOrHideConfig(configOfUaz, configOfIsuzu, carOfUaz, carOfIsuzu)
                }
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
                    addInChosen(chosenEquipmentUaz, arrOfUaz, countOfConfig, 'plus', nameConfig,)
                }else {
                    addInChosen(chosenEquipmentIsuzu, arrOfIsuzu, countOfConfig, 'plus', nameConfig)
                }
                
            }else {
                sum -= price
                selectedConfig.splice(selectedConfig.indexOf(nameConfig), 1)
                if(selectedConfig === arrOfUaz) {
                    addInChosen(chosenEquipmentUaz, arrOfUaz, countOfConfig, 'minus', nameConfig)
                }else {
                    addInChosen(chosenEquipmentIsuzu, arrOfIsuzu, countOfConfig, 'minus', nameConfig)
                }
            }

            if(selectedConfig === arrOfUaz) {
                animateConstruct('.tuazCar', nameConfig, 'thide')
            }else {
                animateConstruct('.kisuzuCar', nameConfig, 'khide')
            }
            
            config.innerText = `${sum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} руб.`
        }

        function showOrHideSvgElement(sign, element, whatCarSvg, arrCar, classHide, whatCar, classHideForMinus) {
            if(
                element.getAttribute('data-configname') === 'Передняя щетка со смачиванием (необходима навеска)' && whatCar.querySelector('[data-configname="Навеска (для отвала и передней щетки)"]').checked ||
                element.getAttribute('data-configname') === 'Отвал коммунальный (необходима навеска)' && whatCar.querySelector('[data-configname="Навеска (для отвала и передней щетки)"]').checked ||
                element.getAttribute('data-configname') === 'Отвал «бабочка» (необходима навеска)' && whatCar.querySelector('[data-configname="Навеска (для отвала и передней щетки)"]').checked ||
                element.getAttribute('data-configname') === 'Агрегат фронтальной мойки (АФМ)' && whatCar.querySelector('[data-configname="Навеска (для отвала и передней щетки)"]').checked ||
                element.getAttribute('data-configname') === 'Шнекороторное снегоуборочное оборудование' && whatCar.querySelector('[data-configname="Навеска (для отвала и передней щетки)"]').checked
            ) {
                if(sign === 'plus') { 
                    for(let i = 0; i< arrCar.length-1; i++){
                        whatCarSvg.querySelectorAll('g[data-importantelem="true"]').forEach(svgElem => {
                            if(
                                arrCar[i] === svgElem.getAttribute('data-option') && 
                                svgElem.getAttribute('data-importantelem') === 'true' &&
                                svgElem.classList.contains('show') &&
                                whatCarSvg.querySelectorAll('g[data-importantelem="true"].show').length > 1
                            ){
                                svgElem.classList.remove('show')
                                svgElem.classList.add(classHide)
                            }
                        })
                    }
                }else { 
                    let configSvg =  whatCarSvg.querySelectorAll(`[data-importantelem="true"]${classHideForMinus}`)
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
                    if(
                        whatCarSvg.querySelector(`[data-option="${element.getAttribute('data-configname')}"]`).classList.contains('show') &&
                        !element.checked
                    ){
                        whatCarSvg.querySelector(`[data-option="${element.getAttribute('data-configname')}"]`).classList.add(classHide)
                        whatCarSvg.querySelector(`[data-option="${element.getAttribute('data-configname')}"]`).classList.remove('show')
                    }else {
                        arrOfSvgElem[arrOfSvgElem.length-1].classList.remove(classHide)
                        arrOfSvgElem[arrOfSvgElem.length-1].classList.add('show')
                    }
                }
            }
        }

        function addOrDeleteImportantElement(sign, item, importantElementFront, importantElementBack, configCar) {
            if(sign === 'plus') {
                if(
                    item.getAttribute('data-configname') === 'Передняя щетка со смачиванием (необходима навеска)' && !importantElementFront.classList.contains('added') ||
                    item.getAttribute('data-configname') === 'Отвал коммунальный (необходима навеска)' && !importantElementFront.classList.contains('added') ||
                    item.getAttribute('data-configname') === 'Отвал «бабочка» (необходима навеска)' && !importantElementFront.classList.contains('added') ||
                    item.getAttribute('data-configname') === 'Шнекороторное снегоуборочное оборудование' && !importantElementFront.classList.contains('added')
                ){
                    setTimeout(()=>{importantElementFront.dispatchEvent(clickEvent)},100)
                    importantElementFront.checked = true;
                }else if(
                    item.getAttribute('data-configname') === 'Агрегат фронтальной мойки (АФМ)' && !importantElementFront.classList.contains('added') && !importantElementBack.classList.contains('added')
                ){
                    setTimeout(()=>{importantElementFront.dispatchEvent(clickEvent)},100)
                    setTimeout(()=>{importantElementBack.dispatchEvent(cloneClick)},100)
                    importantElementBack.checked = true
                    importantElementFront.checked = true;
                }else if (item.getAttribute('data-configname') === 'Агрегат фронтальной мойки (АФМ)' && !importantElementFront.classList.contains('added') && importantElementBack.classList.contains('added')) {
                    setTimeout(()=>{importantElementFront.dispatchEvent(clickEvent)},100)
                    importantElementFront.checked = true;
                }else if (item.getAttribute('data-configname') === 'Агрегат фронтальной мойки (АФМ)' && importantElementFront.classList.contains('added') && !importantElementBack.classList.contains('added')) {
                    setTimeout(()=>{importantElementBack.dispatchEvent(clickEvent)},100)
                    importantElementBack.checked = true
                }else if (
                    item.getAttribute('data-configname') === 'Ледозаливочное оборудование «Умка»' && 
                    document.querySelector('[data-carName="uaz"]').classList.contains('active') &&
                    document.querySelector('.tuazCar').querySelector('[data-option="Емкость для воды 2,0 куб. м."]').classList.contains('show')
                ) {
                    document.querySelector('.tuazCar').querySelector('[data-option="Емкость для воды 2,0 куб. м."]').classList.remove('show')
                    document.querySelector('.tuazCar').querySelector('[data-option="Емкость для воды 2,0 куб. м."]').classList.add('thide')
                }
                else if (
                    item.getAttribute('data-configname') === 'Ледозаливочное оборудование «Умка»' && 
                    document.querySelector('[data-carName="isuzu"]').classList.contains('active') &&
                    document.querySelector('.kisuzuCar').querySelector('[data-option="Емкость для воды 2,0 куб. м."]').classList.contains('show')
                ) {
                    document.querySelector('.kisuzuCar').querySelector('[data-option="Емкость для воды 2,0 куб. м."]').classList.remove('show')
                    document.querySelector('.kisuzuCar').querySelector('[data-option="Емкость для воды 2,0 куб. м."]').classList.add('khide')
                }
                else if (
                    item.getAttribute('data-configname') === 'Емкость для воды 2,0 куб. м.' && 
                    document.querySelector('[data-carName="uaz"]').classList.contains('active') &&
                    document.querySelector('.tuazCar').querySelector('[data-option="Ледозаливочное оборудование «Умка»"]').classList.contains('show')
                ) {
                    document.querySelector('.tuazCar').querySelector('[data-option="Ледозаливочное оборудование «Умка»"]').classList.remove('show')
                    document.querySelector('.tuazCar').querySelector('[data-option="Ледозаливочное оборудование «Умка»"]').classList.add('thide')
                }
                else if (
                    item.getAttribute('data-configname') === 'Емкость для воды 2,0 куб. м.' && 
                    document.querySelector('[data-carName="isuzu"]').classList.contains('active') &&
                    document.querySelector('.kisuzuCar').querySelector('[data-option="Ледозаливочное оборудование «Умка»"]').classList.contains('show')
                ) {
                    document.querySelector('.kisuzuCar').querySelector('[data-option="Ледозаливочное оборудование «Умка»"]').classList.remove('show')
                    document.querySelector('.kisuzuCar').querySelector('[data-option="Ледозаливочное оборудование «Умка»"]').classList.add('khide')
                }
                if(configOfUaz.classList.contains('tab-content_show')) {
                    showOrHideSvgElement('plus', item, uazElementOfSVG, arrOfUaz, 'thide', configOfUaz)
                }else {
                    showOrHideSvgElement('plus', item, isuzuElementOfSVG, arrOfIsuzu, 'khide', configOfIsuzu)
                }

            }else {
                if(item.getAttribute('data-configname') === 'Навеска (для отвала и передней щетки)') {
                    configCar.querySelectorAll('[data-importantCheck="true"]').forEach(elemHide => {
                        if(elemHide.checked){
                            elemHide.dispatchEvent(clickEvent)
                            elemHide.checked = false
                            if(configCar == configOfUaz && uazElementOfSVG.querySelector(`[data-option="${elemHide.getAttribute('data-configname')}"]`).classList.contains('show')) {
                                uazElementOfSVG.querySelector(`[data-option="${elemHide.getAttribute('data-configname')}"]`).classList.remove('show')
                                uazElementOfSVG.querySelector(`[data-option="${elemHide.getAttribute('data-configname')}"]`).classList.add('thide')
                            }else if(configCar == configOfIsuzu && isuzuElementOfSVG.querySelector(`[data-option="${elemHide.getAttribute('data-configname')}"]`).classList.contains('show')) {
                                isuzuElementOfSVG.querySelector(`[data-option="${elemHide.getAttribute('data-configname')}"]`).classList.remove('show')
                                isuzuElementOfSVG.querySelector(`[data-option="${elemHide.getAttribute('data-configname')}"]`).classList.add('thide')
                            }
                        }
                    })
                }else if(item.getAttribute('data-configname') === 'Емкость для воды 2,0 куб. м.') {
                    if(configCar.querySelector('[data-configname="Агрегат фронтальной мойки (АФМ)"]').classList.contains('added')) {
                        configCar.querySelector('[data-configname="Агрегат фронтальной мойки (АФМ)"]').dispatchEvent(clickEvent)
                        configCar.querySelector('[data-configname="Агрегат фронтальной мойки (АФМ)"]').checked = false
                        if(
                            document.querySelector('[data-carName="uaz"]').classList.contains('active') &&
                            document.querySelector('.tuazCar').querySelector('[data-option="Ледозаливочное оборудование «Умка»"]').classList.contains('thide') &&
                            configCar.querySelector('[data-configname="Ледозаливочное оборудование «Умка»"]').checked == true
                        ) {
                            document.querySelector('.tuazCar').querySelector('[data-option="Ледозаливочное оборудование «Умка»"]').classList.remove('thide')
                            document.querySelector('.tuazCar').querySelector('[data-option="Ледозаливочное оборудование «Умка»"]').classList.add('show')
                        }
                        if(
                            document.querySelector('[data-carName="isuzu"]').classList.contains('active') &&
                            document.querySelector('.kisuzuCar').querySelector('[data-option="Ледозаливочное оборудование «Умка»"]').classList.contains('khide') &&
                            configCar.querySelector('[data-configname="Ледозаливочное оборудование «Умка»"]').checked == true
                        ) {
                            document.querySelector('.kisuzuCar').querySelector('[data-option="Ледозаливочное оборудование «Умка»"]').classList.remove('khide')
                            document.querySelector('.kisuzuCar').querySelector('[data-option="Ледозаливочное оборудование «Умка»"]').classList.add('show')
                        }
                    }else if (
                        document.querySelector('[data-carName="uaz"]').classList.contains('active') &&
                        document.querySelector('.tuazCar').querySelector('[data-option="Ледозаливочное оборудование «Умка»"]').classList.contains('thide') &&
                        configCar.querySelector('[data-configname="Ледозаливочное оборудование «Умка»"]').checked == true
                    ) {
                        document.querySelector('.tuazCar').querySelector('[data-option="Ледозаливочное оборудование «Умка»"]').classList.remove('thide')
                        document.querySelector('.tuazCar').querySelector('[data-option="Ледозаливочное оборудование «Умка»"]').classList.add('show')
                    }
                    else if (
                        document.querySelector('[data-carName="isuzu"]').classList.contains('active') &&
                        document.querySelector('.kisuzuCar').querySelector('[data-option="Ледозаливочное оборудование «Умка»"]').classList.contains('khide') &&
                        configCar.querySelector('[data-configname="Ледозаливочное оборудование «Умка»"]').checked == true
                    ) {
                        document.querySelector('.kisuzuCar').querySelector('[data-option="Ледозаливочное оборудование «Умка»"]').classList.remove('khide')
                        document.querySelector('.kisuzuCar').querySelector('[data-option="Ледозаливочное оборудование «Умка»"]').classList.add('show')
                    }
                }else if(
                    item.getAttribute('data-configname') === 'Ледозаливочное оборудование «Умка»' &&
                    document.querySelector('[data-carName="uaz"]').classList.contains('active') &&
                    document.querySelector('.tuazCar').querySelector('[data-option="Емкость для воды 2,0 куб. м."]').classList.contains('thide') &&
                    configCar.querySelector('[data-configname="Емкость для воды 2,0 куб. м."]').checked == true
                ) {
                    document.querySelector('.tuazCar').querySelector('[data-option="Емкость для воды 2,0 куб. м."]').classList.remove('thide')
                    document.querySelector('.tuazCar').querySelector('[data-option="Емкость для воды 2,0 куб. м."]').classList.add('show')
                }
                else if(
                    item.getAttribute('data-configname') === 'Ледозаливочное оборудование «Умка»' &&
                    document.querySelector('[data-carName="isuzu"]').classList.contains('active') &&
                    document.querySelector('.kisuzuCar').querySelector('[data-option="Емкость для воды 2,0 куб. м."]').classList.contains('khide') &&
                    configCar.querySelector('[data-configname="Емкость для воды 2,0 куб. м."]').checked == true
                ) {
                    document.querySelector('.kisuzuCar').querySelector('[data-option="Емкость для воды 2,0 куб. м."]').classList.remove('khide')
                    document.querySelector('.kisuzuCar').querySelector('[data-option="Емкость для воды 2,0 куб. м."]').classList.add('show')
                }
                if(configOfUaz.classList.contains('tab-content_show')) {
                    showOrHideSvgElement('minus', item, uazElementOfSVG, arrOfUaz, 'thide', configOfUaz, '.thide',)
                }else {
                    showOrHideSvgElement('minus', item, isuzuElementOfSVG, arrOfIsuzu, 'khide', configOfIsuzu, '.khide')
                }
            }
        }

        function plusOrMinus(element, selectedConfiguration, selectedCount, arrConfigs) {
            let nameOfConfig               = element.parentElement.querySelector('.configure__form-text p').innerText,
                importantElementUazFront   = configOfUaz.querySelector('[data-configname="Навеска (для отвала и передней щетки)"]'),
                importantElementUazBack    = configOfUaz.querySelector('[data-configname="Емкость для воды 2,0 куб. м."]'),
                importantElementIsuzuFront = configOfIsuzu.querySelector('[data-configname="Навеска (для отвала и передней щетки)"]'),
                importantElementIsuzuBack  = configOfIsuzu.querySelector('[data-configname="Емкость для воды 2,0 куб. м."]'),
                nodeListUaz                = choosedAllConfigUaz.querySelectorAll('li'),
                nodeListIsuzu              = choosedAllConfigIsuzu.querySelectorAll('li'),
                resultConfigUaz            = [],
                resultConfigIsuzu          = []
                

            if(!element.classList.contains('added')) {
                element.classList.add('added')
                addOrDeleteEquipment(parseInt(element.getAttribute('data-price')), 'plus', selectedConfiguration, selectedCount, arrConfigs, nameOfConfig)
                if(configOfUaz.classList.contains('tab-content_show')) {
                    addOrDeleteImportantElement('plus', element, importantElementUazFront, importantElementUazBack, configOfUaz)
                    if(choosedAllConfigUaz.classList.contains('active')) {
                        nodeListUaz.forEach((node) => {
                            resultConfigUaz.push(node.querySelector('.configure__chosen-equipment-text').innerText);
                        })
                        let newArrUaz = arrOfUaz.filter(i => resultConfigUaz.indexOf(i) < 0)
                        showMore(newArrUaz, choosedAllConfigUaz, 'allConfigUaz')
                    }
                }else {
                    addOrDeleteImportantElement('plus', element, importantElementIsuzuFront, importantElementIsuzuBack, configOfIsuzu)
                    if(choosedAllConfigIsuzu.classList.contains('active')) {
                        nodeListIsuzu.forEach((node) => {
                            resultConfigIsuzu.push(node.querySelector('.configure__chosen-equipment-text').innerText);
                        })
                        let newArrIsuzu = arrOfIsuzu.filter(i => resultConfigIsuzu.indexOf(i) < 0)
                        showMore(newArrIsuzu, choosedAllConfigIsuzu, 'allConfigIsuzu')
                    }
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
                    equipments.forEach(item=>{
                        item.classList.remove('active')
                    })
                    equipment.classList.add('active')
                }else {
                    equipment.classList.remove('active')
                }
            })
        });

        document.addEventListener('click', function(e){ 
            if(
                e.target.className === 'configure__form-group-list' ||
                e.target.className === 'configure__form-group-item' ||
                e.target.className === 'configure__form-checkbox' ||
                e.target.className === 'configure__form-checkbox added' ||
                e.target.className === 'configure__form-group-button' ||
                e.target.className === ''
            ) {
                return
            }else {
                equipments.forEach(equipment => {
                    equipment.classList.remove('active')
                })
            }
        })

        // Delete choice element

        function whatDelete(deletedElem, listOfElem, config) {
            listOfElem.forEach(elem => {
                if(
                    deletedElem.previousElementSibling.innerText == elem.parentElement.querySelector('.configure__form-text p').innerText
                    && elem.getAttribute('data-config') == config
                ) {
                    elem.checked = false 
                    return deleteCheckbox = elem
                }
            })
        }

        deleteEquipmentUaz.forEach(item => {
            item.addEventListener('click', function(e) {
                e.preventDefault()
                whatDelete(item, checkBox, 'uaz')
                deleteCheckbox.dispatchEvent(cloneClick)
            })
        })

        deleteEquipmentIsuzu.forEach(item => {
            item.addEventListener('click', function(e) {
                e.preventDefault()
                whatDelete(item, checkBox, 'isuzu')
                deleteCheckbox.dispatchEvent(cloneClick)
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

        function showMore(choseArray, list, dataAttr, uazOrIsuzuList) {
            for(let i = 0; i < choseArray.length; i++) {
                createElement(list, choseArray[i], dataAttr)
            }
            document.querySelectorAll('.configure__chosen-equipments')[uazOrIsuzuList].classList.add('hide')
            list.classList.add('active')
        }

        function deleteFromMore(choiseConfig, whatCar, whatArray, whatData, uazOrIsuzu){
            choiseConfig.querySelectorAll('.configure__chosen-equipment-delete').forEach(item => {
                item.addEventListener('click', function(e){
                    e.preventDefault()
                    whatDelete(item, checkBox, whatCar)
                    deleteCheckbox.dispatchEvent(cloneClick)
                    choiseConfig.innerHTML = ''
                    showMore(whatArray, choiseConfig, whatData, uazOrIsuzu)
                    if(choiseConfig.querySelectorAll('.configure__chosen-equipment-delete').length < 1) {
                        choiseConfig.classList.remove('active')
                        document.querySelectorAll('.configure__chosen-equipments')[uazOrIsuzu].classList.remove('hide')
                    }else {
                        deleteFromMore(choiseConfig, whatCar, whatArray, whatData, uazOrIsuzu)
                    }
                })
            })
        }

        chosenEquipmentUaz[2].addEventListener('click', function(e){
            showMore(arrOfUaz, choosedAllConfigUaz, 'allConfigUaz', 0)
            deleteFromMore(choosedAllConfigUaz, 'uaz', arrOfUaz, 'allConfigUaz', 0)
            e.preventDefault()
        })

        chosenEquipmentIsuzu[2].addEventListener('click', function(e){
            showMore(arrOfIsuzu, choosedAllConfigIsuzu, 'allConfigIsuzu', 1)
            e.preventDefault()
            deleteFromMore(choosedAllConfigIsuzu, 'isuzu', arrOfIsuzu, 'allConfigIsuzu', 1)
        })
    }
}