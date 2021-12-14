function StockComponent({ symbol }) {
    const symbolDiv = document.getElementById('symbol');

    if (_state.symbol) {
        symbolDiv.textContent = _state.symbol;
    }
}