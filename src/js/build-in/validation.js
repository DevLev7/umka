/* ######

Как пользоваться:

Пример:

###### */

import 'parsleyjs';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';

dayjs.extend(customParseFormat);

export default function validation() {
    $(function () {

        $('span').text(Parsley.version)
        
        window.Parsley.addValidator('test', {
            validate: function(value) {
                return value === "test";
            },
            messages: {
                en: 'Wrong input'
            }
        })    
        
        window.Parsley.addValidator('dateformat', {
            validate: function(value, id) {
            var isValid = moment(value, "DD/MM/YYYY", true).isValid();
                return isValid;
            },
            messages: {
                en: 'Please provide date in given format'
            }
        })  
          
        $('form').parsley();
        
        $('form').submit(function (e) {
          e.preventDefault();
          console.log("form is sent");
        });  
        
      });
}
