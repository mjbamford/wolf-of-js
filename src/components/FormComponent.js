const FormComponent = (function() {
    let submitHandler;

    return function(handleSubmit) {
        if (handleSubmit === submitHandler) return;

        submitHandler = handleSubmit;
        const form = document.querySelector('form')
        form.addEventListener('submit', function(event) {
            let symbol = event.target.elements[0].value;

            event.preventDefault();
            handleSubmit(symbol);
        });
    }
})();