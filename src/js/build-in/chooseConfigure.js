export default function ChooseConfigure() {
    let   equipments         = document.querySelectorAll('[data-choise="equipment"]'),      
          additionalOptions  = document.querySelector('[data-config="additionalOptions"]'),
          chosenEquipment    = document.querySelectorAll('.configure__chosen-equipment-wrapper'),
          counterOfEquipment = document.querySelector('.configure__chosen-equipment-counter'),
          totalPrice         = document.querySelector('.configure__form-price'),
          addEquipmentBtns   = document.querySelectorAll('.configure__form-group-button'),
          checkBox           = document.querySelectorAll('.configure__form-checkbox')
          
    function addOrDeleteEquipment(price, sign, elementOfSVG) {
        let sum             = parseInt(totalPrice.innerText.slice(0, totalPrice.innerText.length - 4).split(' ').join('')),
            countOEquipment = parseInt(counterOfEquipment.innerText)
        if(sign === 'plus') {
            sum += price
            countOEquipment++
        }else {
            sum -= price
            countOEquipment--
        }
        
        totalPrice.innerText = `${sum.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, " ")} руб`
        counterOfEquipment.innerText = countOEquipment
    }

    checkBox.forEach(item => {
        item.addEventListener('change', ()=> {
            if(!item.classList.contains('added')){
                item.classList.add('added')
                addOrDeleteEquipment(parseInt(item.getAttribute('data-price')), 'plus')
                
            }else {
                item.classList.remove('added')
                addOrDeleteEquipment(parseInt(item.getAttribute('data-price')), 'minus')
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