class Player {
    constructor(name) {
        this.name = name;
        this.score = 0;
    }

    // Simulate shooting with a random success rate
    shoot(attempts) {
        for (let i = 0; i < attempts; i++) {
            if (Math.random() < this.successRate()) {
                this.score++;
            }
        }
    }

    // Random success rate between 0.3 and 0.7
    successRate() {
        return Math.random() * 0.4 + 0.3;
    }
}

const players = [
    new Player("Pedro"),
    new Player("Juan"),
    new Player("Kulas"),
    new Player("Abel"),
    new Player("Berto"),
];


function playRound(players, attempts) {
    players.forEach(player => player.shoot(attempts));
}


function displayRankings(players) {
    players.sort((a, b) => b.score - a.score);
    console.log("\n--- Rankings after this round ---");
    players.forEach(player => console.log(`${player.name} : ${player.score}`));
}

function getTopPlayers(players) {
    const highestScore = players[0].score;
    return players.filter(player => player.score === highestScore);
}

// Main game logic
function mainGame() {
    const attemptsPerRound = 5;

    console.log("---  GAME START  ---");
    playRound(players, attemptsPerRound + "points");

    displayRankings(players);

    // Determine top players
    let topPlayers = getTopPlayers(players);

    while (topPlayers.length > 1) {
        console.log("\n🏀 Tie breaker round! 🏀\n");

        // Reset scores for tied players
        topPlayers.forEach(player => (player.score = 0));

        playRound(topPlayers, attemptsPerRound);

        displayRankings(topPlayers);

        topPlayers = getTopPlayers(topPlayers);
    }

    console.log(`\n🎉 Winner: ${topPlayers[0].name} with ${topPlayers[0].score} points! 🎉`);
}

mainGame();
