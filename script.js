// Write your JavaScript code here!
function statusOfLaunch(){

faultyItems.style.visibility = 'visible';
launchStatus.innerHTML = "Shuttle not ready for launch";
launchStatus.style.color = "Red";
}

function shuttleReadyStatus(){
   launchStatus.innerHTML = "Shuttle ready for launch";
   launchStatus.style.color = "Green";
}

window.addEventListener("load", function() {
   let form = document.querySelector("form");
  
   form.addEventListener("submit", function(event) {
      event.preventDefault();
      
      let pilotName = document.querySelector("input[name=pilotName]");
      let copilotName = document.querySelector("input[name=copilotName]");
      let fuelLevel = document.querySelector("input[name=fuelLevel]");
      let cargoMass = document.querySelector("input[name=cargoMass]");
      const faultyItems = document.getElementById("faultyItems");
      const launchStatus = document.getElementById("launchStatus");
      const fuelStatus = document.getElementById("fuelStatus");
      const cargoStatus = document.getElementById("cargoStatus");
     
      //validates user entry and creates alerts
      if (pilotName.value === ""  || copilotName.value === "" || 
            fuelLevel.value === ""|| cargoMass.value === "" ) {
         alert("All fields are required!");
         // stop the form submission
         event.preventDefault();
      
      }else if (!isNaN(pilotName.value) || !isNaN(copilotName.value)) {
         alert("Name is an Invalid Entry!");
         // stop the form submission
         event.preventDefault();
      
      } else if (isNaN(fuelLevel.value) || isNaN(cargoMass.value) ){
         alert(" Fuel and Cargo should be a number");
         //stop the form submission
         event.preventDefault();
      
      //changes faulty Items based on user entry   
      
      }else if (fuelLevel.value < 10000){
         fuelStatus.innerHTML = "Fuel level too low to launch";
         statusOfLaunch();
      
      } else if(cargoMass.value > 10000){
      cargoStatus.innerHTML = "Cargo mass too high to launch";   
      statusOfLaunch();
      
      }else {
         shuttleReadyStatus()
      }
      
      //Changes pilot name
      const pilotStatus = document.getElementById("pilotStatus");
      const copilotStatus = document.getElementById("copilotStatus");
      pilotStatus.innerHTML = `Pilot ${pilotName.value} is ready for launch.`;
      copilotStatus.innerHTML = `Co-pilot ${copilotName.value} is ready for launch.`;
   
   })
   
     
      
});
   
  

      




/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
