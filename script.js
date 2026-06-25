
async function translateText() {
    const text = document.getElementById("inputText").value;
    const source = document.getElementById("sourceLang").value;
    const target = document.getElementById("targetLang").value;

    if (!text.trim()) {
        alert("Please enter text.");
        return;
    }

    try {
        const response = await fetch(
            `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=${source}|${target}`
        );

        const data = await response.json();
        document.getElementById("outputText").value =
            data.responseData.translatedText;
    } catch (error) {
        console.error(error);
        alert("Translation failed. Check your internet connection.");
    }
}

function copyText() {
    navigator.clipboard.writeText(
        document.getElementById("outputText").value
    );
    alert("Copied!");
}

function speakText() {
    const text = document.getElementById("outputText").value;
    if (!text) return;
    speechSynthesis.speak(new SpeechSynthesisUtterance(text));
}
