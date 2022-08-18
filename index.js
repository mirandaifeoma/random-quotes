const newQuoteButton = document.getElementById('newQuote');
newQuoteButton.addEventListener('click', getQuote);
const endpoint = 'https://api.whatdoestrumpthink.com/api/v1/quotes/random';
const textSection = document.getElementById('textSection');

async function getQuote() {
    try {
        const response = await fetch (endpoint);
        if (!response.ok) {
            throw Error(response.statusText);
        }
        const json = await response.json();
        textSection.textContent = JSON.stringify(json.message);
    } catch (err) {
        console.log(err);
        alert("failed to fetch new quote!");
    }
}
