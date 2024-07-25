document.addEventListener('DOMContentLoaded', function () {
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    function setRandomText() {
        const chars = ["ア", "グ", "グ", "ン"];
        const shuffledChars = shuffleArray(chars).slice(0, 4);
        const result = shuffledChars.join("");
        const rouletteElement = document.getElementById("aggn-roulette");
        rouletteElement.textContent = result;

        if (result === "アググン") {
            const shareButton = document.getElementById('share');
            shareButton.style.display = "flex";
            rouletteElement.textContent = "🎉 アググン 🎉";
        }
    }
    
    document.addEventListener("DOMContentLoaded", setRandomText());
});
