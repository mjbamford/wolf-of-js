function QuoteComponent({ quote }) {
    const quoteDiv = document.getElementById('quote')
    if (quote) {
        quoteDiv.textContent = _state.quote.latestPrice;
    } else {
        quoteDiv.textContent = "Loading...";
    }
}