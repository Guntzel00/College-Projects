const message = document.querySelector(".message");
        const score = document.querySelector(".score");
        const buttons = document.querySelectorAll("button");
        console.log(buttons)

        for (let i = 0; i < buttons.length; i++) {
            buttons[i].addEventListener('click', playGame)
        }

        let counter = [0,0];

       function playGame(e) {

        // Create the player and computer decision and display it on the Screen
        let computerSelection = Math.random();
        let playerSelection = e.target.innerText;

        // player
        if (playerSelection == "Rock") {
            document.getElementById("player").innerHTML = '<img src="img/icons8-hand-rock-96.png" alt="rock"><p>Player</p>';
        }
        else if (playerSelection == "Paper") {
            document.getElementById("player").innerHTML = '<img src="img/icons8-hand-96.png" alt="rock"><p>Player</p>';
        }
        else {
            document.getElementById("player").innerHTML = '<img src="img/icons8-hand-scissors-96.png" alt="Scissor"><p>Player</p>'
        }
        

        // computer
            if (computerSelection < 0.34) {
                computerSelection = "Rock";
                computer.innerHTML = '<img src="img/icons8-hand-rock-96.png" alt="rock"><br><p>Computer</p>';
            }
            else if (computerSelection > 0.34 && computerSelection < 0.66) {
                computerSelection = "Scissor";
                document.getElementById("computer").innerHTML = '<img src="img/icons8-hand-scissors-96.png" alt="Scissor"><p>Computer</p>';
            }
            else {
                computerSelection = "Paper";
                document.getElementById("computer").innerHTML = '<img src="img/icons8-hand-96.png" alt="rock"><p>Computer</p>';
            }
        
        
        // Call the function to check the winner + debbug
        let result = checkWinner(playerSelection, computerSelection);
            console.log(result);
            console.log(playerSelection, computerSelection);

        
        // Update the counter
        if (result == "player") {
            counter[0] += 1;
        }
        else if (result == "computer"){
            counter[1] += 1;
        }
        score.innerHTML = "Player "+ counter[0] +" - Computer "+ counter[1] +"";
        
        }


        // Function to check the winner

        function checkWinner(player, computer) {
            if (player === computer) {
                return "Draw"
            }
            else if (player === "Rock") {
                if (computer === "Paper") {
                    return "computer";
                }
                else {
                    return "player";
                }
            }

            else if (player === "Paper") {
                if(computer === "Scissor") {
                    return "computer";
                }
                else {
                    return "player";
                }
            }

            else if (player === "Scissor") {
                if (computer === "Rock") {
                    return "computer";
                }
                else {
                    return "player";
                }

            }
        }