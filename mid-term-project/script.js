document.getElementById('lastModified').textContent = document.lastModified;

const story = {
    start: {text: "Level 1: You stand at a crossroads. Which path do you take?", choices: [{ text: "The Forest Path", next: "level1_forest" }, { text: "The Mountain Path", next: "level1_mountain" }], image: "https://i.pinimg.com/originals/94/30/1e/94301e7417537542d2a45d0b938f3851.jpg"},
    level1_forest: {text: "Level 2: The forest path leads to a hidden village. Do you interact?", choices: [{ text: "Yes, interact", next: "level2_village" }, { text: "No, continue onward", next: "level2_forest_continue" }], image: "https://i.pinimg.com/736x/87/40/01/874001c9b33a7638927943d0f0196884.jpg"},
    level1_mountain: {text: "Level 2: The mountain path leads to an ancient temple. Do you explore?", choices: [{ text: "Explore the temple", next: "level2_temple" }, { text: "Continue climbing", next: "level2_mountain_continue" }], image: "https://i.pinimg.com/originals/c8/10/58/c81058f9630e23805494d1e2e28a5549.jpg"},
    level2_village: {text: "Level 3: The villagers offer you a choice. Do you accept their gift?", choices: [{text: "Accept the gift", next: "ending_1"},{text: "Decline the gift", next: "ending_2"}], image: "https://i.pinimg.com/originals/aa/89/65/aa89659021e1021487f394f71a97d5a5.jpg"},
    level2_forest_continue: {text: "Level 3: You find a mysterious portal. Do you enter?", choices: [{text: "Enter the portal", next: "ending_3"}, {text: "Ignore the portal", next: "ending_4"}], image: "https://i.pinimg.com/originals/81/81/25/81812563f465c4974972e3913926831d.jpg"},
    level2_temple: {text: "Level 3: The temple grants you ancient knowledge. How do you use it?", choices: [{text: "Share the knowledge", next: "ending_5"}, {text: "Use it for power", next: "ending_6"}], image: "https://i.pinimg.com/originals/a7/63/06/a7630674974972e3913926831d.jpg"},
    level2_mountain_continue: {text: "Level 3: You find a dangerous weapon. What do you do?", choices: [{text: "Destroy the weapon", next: "ending_7"}, {text: "Use the weapon for peace", next: "ending_8"}], image: "https://i.pinimg.com/originals/b5/07/11/b5071174974972e3913926831d.jpg"},
    ending_1: {text: "Ending 1: You become a wise and just leader, guiding your people to prosperity.", choices: [], image: "https://t4.ftcdn.net/jpg/04/00/29/41/240_F_400294106_G6TQ3Ve1VmNvRmrQGWDg8nKAS8pOoqku.jpg"},
    ending_2: {text: "Ending 2: You become a revered sage, offering guidance and wisdom to those who seek it.", choices: [], image: "https://t4.ftcdn.net/jpg/01/10/87/81/240_F_110878129_3R9xOeRpqICsHUHLREQZxOkuktzPMs8G.jpg"},
    ending_3: {text: "Ending 3: You become a pioneer, exploring the wonders of the new dimension.", choices: [], image: "https://t4.ftcdn.net/jpg/01/87/31/97/240_F_187319766_bGMZJRtq00EbVnrj5VcRWDb7XX0ZXkcz.jpg"},
    ending_4: {text: "Ending 4: You return home, sharing tales of your adventure and inspiring others.", choices: [], image: "https://t3.ftcdn.net/jpg/02/59/25/14/240_F_259251436_ajWEVo3iwxWeoDYYwOsWZmAEyal1Xxby.jpg"},
    ending_5: {text: "Ending 5: You become a revered scholar, sharing your knowledge with the world.", choices: [], image: "https://t4.ftcdn.net/jpg/10/08/70/87/240_F_1008708784_fKS7YvnhTo42YWmykKtQ0PBQyAfAsQTU.jpg"},
    ending_6: {text: "Ending 6: You become a powerful tyrant, ruling with an iron fist.", choices: [], image: "https://t4.ftcdn.net/jpg/05/40/94/87/240_F_540948762_3ct2lvoWYNz8yyCdjvhgnVc4b15OioWL.jpg"},
    ending_7: {text: "Ending 7: You sacrifice yourself to destroy the weapon, becoming a martyr.", choices: [], image: "https://t4.ftcdn.net/jpg/01/64/74/31/240_F_164743135_9rSNkcYBxGQlwdpl8UXioxAVb2vdiMfi.jpg"},
    ending_8: {text: "Ending 8: You become a skilled diplomat, bringing peace and understanding to nations.", choices: [], image: "https://t4.ftcdn.net/jpg/10/91/35/49/240_F_1091354970_qmaEBSRYb0hCY8yOIZiJnXiZGr7bK82y.jpg"},
};

let gameStarted = false;

function startGame() {
    gameStarted = true;
    document.getElementById("story").style.display = "block";
    document.getElementById("startBtn").style.display = "none";
    document.getElementById("resetBtn").style.display = "inline-block";
    updateStory("start");
}

function resetGame() {
    gameStarted = false;
    document.getElementById("story").style.display = "none";
    document.getElementById("choices").innerHTML = "";
    document.getElementById("congrats").style.display = "none";
    document.getElementById("resetBtn").style.display = "none";
    document.getElementById("startBtn").style.display = "inline-block";
    document.body.style.backgroundImage = "";
}

function updateStory(level) {
    const scene = story[level];
    document.getElementById("story").textContent = scene.text;
    document.body.style.backgroundImage = `url(${scene.image})`;

    const choicesDiv = document.getElementById("choices");
    choicesDiv.innerHTML = "";
    document.getElementById("congrats").style.display = "none";

    if (scene.choices.length === 0) {
        document.getElementById("congrats").style.display = "block";
        document.getElementById('congrats').textContent = "Ending: " + scene.text.substring(8);
    } else {
        scene.choices.forEach(choice => {
            const button = document.createElement("button");
            button.textContent = choice.text;
            button.classList.add("choice-btn");
            button.onclick = () => updateStory(choice.next);
            choicesDiv.appendChild(button);
        });
    }
}

document.getElementById("startBtn").addEventListener("click", startGame);
document.getElementById("resetBtn").addEventListener("click", resetGame);