class Player {
    constructor(name, team) {
        this.name = name;
        this.score = 0;
        this.attempts = 0;
        this.successfulShots = 0;
    }


    shoot(attempts) {
        this.attempts = attempts;
        this.successfulShots = 0;
        for (let i = 0; i < attempts; i++) {
            if (Math.random() < this.successRate()) {
                this.score++;
                this.successfulShots++;
            }
        }
    }

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
    console.log("\n--- Leaderboard ---");
    players.forEach(player => 
        console.log(`${player.name} : scored ${player.score} points `)
    );
}


function getTopPlayers(players) {
    const highestScore = players[0].score;
    return players.filter(player => player.score === highestScore);
}

//MAIN LOGIC
function mainGame() {
    const attemptsPerRound = 5;

    console.log("--- GAME START ---");
    playRound(players, attemptsPerRound);

    displayRankings(players);

    // Determine top players
    let topPlayers = getTopPlayers(players);

    while (topPlayers.length > 1) {
        console.log("\n---   Tie breaker round!   ---\n");

        // Reset scores for tied players
        topPlayers.forEach(player => {
            player.score = 0;
            player.successfulShots = 0;
        });

        playRound(topPlayers, attemptsPerRound);
        displayRankings(topPlayers);

        topPlayers = getTopPlayers(topPlayers);
    }

    console.log(`\nWinner: ${topPlayers[0].name} with ${topPlayers[0].score} points!`);
}

mainGame();
