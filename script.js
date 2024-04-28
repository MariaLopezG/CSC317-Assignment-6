document.addEventListener('DOMContentLoaded', () => {
    // Create textarea and submit button dynamically
    const rootDiv = document.getElementById('root');

    const textarea = document.createElement('textarea');
    textarea.setAttribute('placeholder', 'Enter text...');
    rootDiv.appendChild(textarea);

    const submitBtn = document.createElement('button');
    submitBtn.textContent = 'Submit';
    submitBtn.addEventListener('click', processText);
    rootDiv.appendChild(submitBtn);

    function processText() { 
        const text = textarea.value.trim();
        const words = text.split(/\s+/); // Tokenize text by whitespace
        const frequencyTable = {};

        // Count word frequencies
        words.forEach(word => {
            frequencyTable[word] = (frequencyTable[word] || 0) + 1;
        });

        // Sort by frequency and then by word if frequencies are the same
        const sortedWords = Object.keys(frequencyTable).sort((a, b) => {
            return frequencyTable[b] - frequencyTable[a] || a.localeCompare(b);
        });

        // Display top 5 most frequent words in UI
        const topWords = sortedWords.slice(0, 5);
        renderFrequencyTable(topWords, frequencyTable);
        console.log(frequencyTable); // Output for grading
    }

    function renderFrequencyTable(words, table) {
        const tableDiv = document.createElement('div');
        tableDiv.innerHTML = `
            <h2>Top 5 Most Frequent Words</h2>
            <table>
                <tr>
                    <th>Word Name</th>
                    <th>Word Frequency</th>
                </tr>
                ${words.map(word => `<tr><td>${word}</td><td>${table[word]}</td></tr>`).join('')}
            </table>
        `;
        rootDiv.appendChild(tableDiv);
    }
});
