// Write your JavaScript code here!

//turns launch status Red
function shuttleNotReady(){
   const pilotStatus = document.getElementById("pilotStatus");
   const copilotStatus = document.getElementById("copilotStatus");

   //changes faulty to items to show and makes mission disappear
   faultyItems.style.visibility = 'visible';
   launchStatus.innerHTML = "Shuttle not ready for launch";
   launchStatus.style.color = "Red";
   missionTarget.innerHTML = "";        
   
   //Changes pilot name
   pilotStatus.innerHTML = `Pilot ${pilotName.value} is ready for launch.`;
   copilotStatus.innerHTML = `Co-Pilot ${copilotName.value} is ready for launch.`;
}


//Turns launch status green
function shuttleReadyStatus(){
   launchStatus.innerHTML = "Shuttle ready for launch";
   launchStatus.style.color = "Green";
   missionTarget.innerHTML.visibility = "visible";
   faultyItems.style.visibility = 'hidden';
}

// handles style if information is changed after being put in corrrectly
function resetStyle(){
   missionTarget.innerHTML = "";
   faultyItems.style.visibility = "hidden";
   launchStatus.style.color = "Black";
   launchStatus.innerHTML = "Awaiting Information Before Launch"
}

//loads page
window.addEventListener("load", function() {
   let form = document.querySelector("form");

      //submit even handler
      form.addEventListener("submit", function(event) {
         event.preventDefault();
         
         //declares all HTML elements
         let pilotName = document.querySelector("input[name=pilotName]");
         let copilotName = document.querySelector("input[name=copilotName]");
         let fuelLevel = document.querySelector("input[name=fuelLevel]");
         let cargoMass = document.querySelector("input[name=cargoMass]");
         const missionTarget = document.getElementById("missionTarget");
         const faultyItems = document.getElementById("faultyItems");
         const launchStatus = document.getElementById("launchStatus");
         const fuelStatus = document.getElementById("fuelStatus");
         const cargoStatus = document.getElementById("cargoStatus");
      
         //validates user entry and creates alerts
         if (pilotName.value === ""  || copilotName.value === "" || 
               fuelLevel.value === ""|| cargoMass.value === "" ) {
            alert("All fields are required!");
            resetStyle();
            
            // stop the form submission
            event.preventDefault();
         
         }else if (!isNaN(pilotName.value) || !isNaN(copilotName.value)) {
            alert("Name is an Invalid Entry!");
            
            resetStyle();
            
            // stop the form submission
            event.preventDefault();
         
         } else if (isNaN(fuelLevel.value) || isNaN(cargoMass.value) ){
            alert(" Fuel and Cargo should be a number");
            
            resetStyle();
            //stop the form submission
            event.preventDefault();
         
         //changes faulty Items based on user entry   
         
         }else if (fuelLevel.value < 10000){
            fuelStatus.innerHTML = "Fuel level too low to launch";
            shuttleNotReady();
            
            
         } else if(cargoMass.value > 10000){
            cargoStatus.innerHTML = "Cargo mass too high to launch";   
            shuttleNotReady();
         
         }else {
            shuttleReadyStatus()
            
            
     

            const missionTarget = document.getElementById("missionTarget");
            const JSON = fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
               response.json().then((JSON) =>{
               let num = 1
               
                let i = Math.floor(Math.random()*7);
               let planet = JSON[i];
               const mission = (planet) => { 
                  return `<div class = "header">
                           <center>  <h2>Mission Destination</h2>
                              <ol>
                                 <li>Name: ${planet.name}</li>
                                 <li>Diameter: ${planet.diameter}</li>
                                 <li>Star: ${planet.star}</li>
                                 <li>Distance from Earth: ${planet.distance}</li>
                                 <li>Number of Moons: ${planet.moons}</li>
                              </ol>
                              <img class = "planetPic" src="${planet.image}"/></center>
                        </div>`;
                     };
               
               missionTarget.innerHTML = mission(planet);
               
            })
         });
      }
   })    
      
});