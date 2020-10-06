    //User choose
    const paper = document.getElementById("paper");
    const scissor = document.getElementById("scissor");
    const rock = document.getElementById("rock");

    //Computer choose
    const comp = document.getElementById("compChoose");

    const play = function(weapon) {
        let computerPlay = ["paper","scissor","rock"];
        let compSel = computerPlay[Math.floor(Math.random() * 2)];

        //Show computer choose
        

        //Check who won the game
        //Draw
        if(compSel == weapon){
            draw();
        }


        //userChoose paper
        if(weapon == "paper"){
            if(compSel == "rock"){
                userWin();
            }
            if(compSel == "scissor"){
                compWin();
            }
        }

        //userChoose rock
        if(weapon == "rock"){
            if(compSel == "scissor"){
                userWin();
            }
            if(compSel == "paper"){
                compWin();
            }
        }

        //userChoose scissor
        if(weapon == "scissor"){
            if(compSel == "paper"){
                userWin();
            }
            if(compSel == "rock"){
                compWin();
            }
        }
    }
    
    //Play onClick
    paper.onclick = function(){
        play("paper");
    }

    scissor.onclick = function(){
        play("scissor");
    }

    rock.onclick = function(){
        play("rock");
    }


    //Results
    const userWin = function() {
        alert("user win");
    }

    const compWin = function() {
        alert("comp win");
    }

    const draw = function() {
        alert("draw");
    }

