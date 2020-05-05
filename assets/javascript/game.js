let teamOneshootButton = document.querySelector("#teamone-shoot-button");
let teamoneNumshots = document.querySelector("#teamone-numshots");
let teamTwoshootButton = document.querySelector("#teamtwo-shoot-button");
let teamtwoNumshots = document.querySelector("#teamtwo-numshots");
let resetButton = document.querySelector("#reset-button");
let numResets = document.querySelector("#num-resets");

teamOneshootButton.addEventListener("click", function(){
let x= Number(teamoneNumshots.innerHTML) + 1;
teamoneNumshots.innerHTML = x;
console.log("team one shots scored");
 })

teamTwoshootButton.addEventListener("click", function (){
console.log("team two shots scored")
let y= Number(teamtwoNumshots.innerHTML) + 1;
teamtwoNumshots.innerHTML = y;
    })

    teamoneNumshots.addEventListener("click" , function(){
     let teamoneNumshots=Math.random() *100;
      if (teamoneNumshots <80 ) { sendMessage("Success!");
      }
      else  (z <20) ;{ sendMessage ("Fail!");
    }
    console.log ("attempt one")
    })

    teamtwoNumshots.addEventListener("click", function(){
      
      let teamtwoNumshots=Math.random() *100;

      if (teamtwoNumshots <80) { sendMessage("Second Success!")
      }
else (a <20) ; { sendMessage ("Second Fail")}
console.log ("attempt two")
    } )

    resetButton.addEventListener("click", function () {
      let b= Number(resetButton.innerHTML) +1;
      resetButton.innerHTML =b;
      console.log ("Reset times")

    })

    numResets.addEventListener("click", function () {
      let c= Number(numReset.innerHTML) +0;
      numResets.innerHTML =c
      console.log ("set to zero")

    })  