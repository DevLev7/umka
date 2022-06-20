document.addEventListener('DOMContentLoaded', () => {
    const contactModals = Array.from(document.querySelectorAll('form[data-need-validation]'));

    contactModals.forEach(element => {
        const form = element;
       

        form.addEventListener('submit', event => {
            event.preventDefault();
            if (
                $(form)
                    .parsley()
                    .isValid()
            ) {
                form.querySelectorAll('input').forEach(item => {
                    console.log(item.value);
                })
                form.reset();
                // form.querySelectorAll('input').forEach(item => {
                //     console.log(item.value);
                // })
                form.querySelectorAll('input').forEach(item => {
                    console.log(item.value);
                })
               window.openModal('#success-modal');
            }
        });
    });
});