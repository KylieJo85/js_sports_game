let teamOneshootButton = document.querySelector("#teamone-shoot-button")
let teamoneNumshots = document.querySelector("#teamone-numshots")
let teamoneNumgoals = document.querySelector('#teamone-numgoals')
let teamTwoshootButton = document.querySelector("#teamtwo-shoot-button")
let teamtwoNumshots = document.querySelector("#teamtwo-numshots")
let teamtwoNumgoals = document.querySelector('#teamtwo-numgoals')
let resetButton = document.querySelector("#reset-button")
let numResets = document.querySelector("#num-resets")



teamOneshootButton.addEventListener("click", function () {
console.log("team one scored!")

     let newCount = Number(teamoneNumshots.innerHTML) + 1
     teamoneNumshots.innerHTML = newCount

     let randNum = Math.floor(Math.random() * 100) + 1
     console.log(randNum)


     if (randNum < 50) {
         
          let newCount5 = Number(teamoneNumgoals.innerHTML) + 1
          teamoneNumgoals.innerHTML = newCount5

          console.log((newCount5))

     }

     else {
          teamoneNumshots.innerHTML = newCount
          console.log((newCount))

     }

})




teamTwoshootButton.addEventListener("click", function () {

     console.log("team two  scored!")

     let newCount3 = Number(teamtwoNumshots.innerHTML) + 1
     teamtwoNumshots.innerHTML = newCount3

     let randNum2 = Math.floor(Math.random() * 100) + 1
     console.log(randNum2)


     if (randNum2 < 50) {
         
          let newCount6 = Number(teamtwoNumgoals.innerHTML) + 1
          teamtwoNumgoals.innerHTML = newCount6

          console.log((newCount6))

     }

     else {
          teamtwoNumshots.innerHTML = newCount3
          console.log((newCount3))

     }

})




     

     resetButton.addEventListener("click", function (){
          let resetNewCount = Number(numResets.innerHTML) + 1
          numResets.innerHTML = resetNewCount
     
     

     teamoneNumshots.innerHTML=0
     teamoneNumgoals.innerHTML=0

     teamtwoNumshots.innerHTML=0
     teamtwoNumgoals.innerHTML=0


})
