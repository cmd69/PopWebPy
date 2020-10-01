let userScore = 0;
let pcScore = 0;
const userScore_span = document.getElementById("userScore");
const pcScore_span = document.getElementById("pcScore");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");

const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

main();

function  main(){
    rock_div.addEventListener('click', () => {
        game("r")
    })
    paper_div.addEventListener('click', () => {
        game("p")
    })
    scissors_div.addEventListener('click', () => {
        game("s")
    })
}

function game(userChoice){
    const computerChoice = getComputerChoice();
    vs(userChoice, computerChoice);
    switch(userChoice + computerChoice){
        case "rs":
        case "sp":
        case "pr":
            win(userChoice, computerChoice);
            break;
        case "ps":
        case "rp":
        case "sr":
            lose(userChoice, computerChoice);
            break;
        case "pp":
        case "ss":
        case "rr":
            tie(userChoice, computerChoice);
            break;
    }
}

function getComputerChoice(){
    const choices = ["r", "p", "s"];
    return choices[Math.floor(Math.random()*3)];
}

function win(userChoice, computerChoice){
    userScore++;
    userScore_span.innerHTML = userScore;
    result_p.innerHTML = `${convert(userChoice)} beats ${convert(computerChoice)}, You win ;)`;
    //document.getElementById(userChoice).classList.add('green-glow');
    glow(userChoice, 'green-glow');
}

function lose(userChoice, computerChoice){
    pcScore++;
    pcScore_span.innerHTML = pcScore;
    result_p.innerHTML = `${convert(computerChoice)} beats ${convert(userChoice)}, You lose :(`;
    //document.getElementById(userChoice).classList.add('red-glow');
    glow(userChoice, 'red-glow');
}

function tie(userChoice, computerChoice){
    result_p.innerHTML = "It's a TIE :0";
    // document.getElementById(userChoice).classList.add('gray-glow');
    glow(userChoice, 'gray-glow');
}

function convert(letter){
    if(letter == "r"){
        return "Rock";
    }else{
        if(letter == "p"){
            return "Paper";
        }else{
            return "Scissors";
        }
    }
}

function pngName(letter){
    if(letter == "r"){
        return "../static/media/images/rock.png";
    }else{
        if(letter == "p"){
            return "../static/media/images/paper.png";
        }else{
            return "../static/media/images/scissors.png";
        }
    }
}

function glow(userChoice, glow){
    document.getElementById(userChoice).classList.add(glow);
    setTimeout(function(){
        document.getElementById(userChoice).classList.remove(glow)
    }, 700)
}

function vs(userChoice, pcChoice){
    document.getElementById("img1").src = pngName(userChoice);
    document.getElementById("img2").src = pngName(pcChoice);
}

