
(function () {
    _state = { symbol: '', quote: null }

    function setState(newState) {
        _state = Object.assign({}, _state, newState);
        render();
    }
    
    function handleStockChange(symbol) {
        loadQuoteForStock(symbol);
    }

    function render() {
        FormComponent(handleStockChange)
        StockComponent(_state);
        QuoteComponent(_state);
    }

    function loadQuoteForStock(symbol) {
        const token = 'pk_914ffe207b8f47d291a96a223f51a4ad';
        const url = `https://cloud.iexapis.com/stable/stock/${symbol}/quote?token=${token}`

        setState({ symbol: symbol, quote: null });

        fetch(url).
            then(resp => { console.dir(resp); return resp; }).
            then(resp => resp.json()).
            then(json => { console.dir(json); return json; }).
            then(json => {
                // Purposefully delay 3.5 seconds
                return new Promise(resolve => {
                    setTimeout(() => resolve(json), 3500)
                });
            }).
            then(json => setState({ quote: json }));
    }

    document.addEventListener('DOMContentLoaded', function () {
        loadQuoteForStock('AAPL');
    });
})();