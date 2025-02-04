let listenButton = document.getElementById('btn');
let speech = new SpeechSynthesisUtterance();

let voices = [];
let voiceSelect = document.getElementById('voice-list');

window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];
    voices.forEach((voic, i) => {
        voiceSelect.options[i] = new Option(voic.name, i)
    });
};

voiceSelect.addEventListener('change', () => {
    speech.voice = voices[voiceSelect.value]
});

listenButton.addEventListener("click", () => {
    speech.text = document.querySelector("#speech-text").value;
    window.speechSynthesis.speak(speech);
});
