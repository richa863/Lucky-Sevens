function rollDice() {
	return Math.floor(Math.random() * 6) + 1;
}

function play(){
	var startingBet = Number(document.forms["luckySevens"]["bet"].value);
	var money = startingBet;
	var firstDie;
	var secondDie;
	var diceSum;
	var maxWinnings = 0;
	var rolls = 0;
	var rollsAtMax = 0;

	if(money<=0){
		alert("Starting bet needs to be greater than $0");
	}
	else{
		while(money > 0){
			dieOne = rollDice();
			dieTwo = rollDice();
			diceSum = firstDie + secondDie;
			rolls++;
			if(diceSum != 7){
				money--;
				console.log("lost");
			}
			else{
				money += 4;
				if(money > maxWinnings){
					maxWinnings += (money-maxWinnings);
					rollsAtMax = rolls;
				}
				console.log("win");
			}
		}
	}
	document.getElementById("results").style.display = "block";
	document.getElementById("submitButton").innerText = "Play Again!";
	document.getElementById("start").innerText = startingBet;
	document.getElementById("rollsNum").innerText = rolls;
	document.getElementById("max").innerText = maxWinnings;
	document.getElementById("rollsAtMax").innerText = rollsAtMax;
	return false;
}