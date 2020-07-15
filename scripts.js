// Write your JavaScript code here.
// Remember to pay attention to page loading!

let takeoffButton = null;
let landingButton = null;
let abourtMissionButton = null;
let up = null;
let down = null;
let right = null;
let left = null;


function init(){
    takeoffButton = document.getElementById("takeoff");
    landingButton = document.getElementById("landing");
    abourtMissionButton = document.getElementById("missionAbort");
    up = document.getElementById("up");
    down = document.getElementById("down");
    right = document.getElementById("right");
    left = document.getElementById("left");

    let flightStatus = document.getElementById("flightStatus");
    let shuttleBackground = document.getElementById("shuttleBackground");
    let spaceShuttleHeight = document.getElementById('spaceShuttleHeight');
    let rocket = document.getElementById("rocket");
    rocket.style.position = "relative";

    takeoffButton.addEventListener("click", function(){
        let isShuttleReady = window.confirm("Confirm that the shuttle is ready for takeoff.");

        if(isShuttleReady){
            flightStatus.innerHTML = "Shuttle in flight.";
            shuttleBackground.style.backgroundColor = "blue";
            spaceShuttleHeight.innerHTML = Number(spaceShuttleHeight.innerHTML) + 10000;
        }

    });

    landingButton.addEventListener("click", function(){

        window.alert("The shuttle is landing. Landing gear engaged.");
        flightStatus.innerHTML = "The shuttle has landed.";
        shuttleBackground.style.backgroundColor = "green";
        spaceShuttleHeight.innerHTML = 0;

    });

    abourtMissionButton.addEventListener("click", function(){
        let missionAborted = window.confirm("Confirm that you want to abort the mission.");

        if(missionAborted){
            flightStatus.innerHTML = "Mission aborted.";
            shuttleBackground.style.backgroundColor = "green";
            spaceShuttleHeight.innerHTML = 0;
        }

    });

    up.addEventListener("click", function(){
        rocket.style.top = updatePosition(rocket.style.top, false);
    });

    down.addEventListener("click", function(){
        rocket.style.top = updatePosition(rocket.style.top, true);
    });

    right.addEventListener("click", function(){
        rocket.style.left = updatePosition(rocket.style.left, true);
    });

    left.addEventListener("click", function(){
        rocket.style.left = updatePosition(rocket.style.left, false);
    });


    function updatePosition(positionString, positive){
        let position = positionString.slice(0, positionString.length - 2);
        if(positive){
            return Number(position) + 10 + "px";
        }else{
            return Number(position) - 10 + "px";
        }
    }

}



window.onload = init;