window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{
  function zeros(i) {
    return i < 10 ? "0" + i : i;
}

var counter = setInterval(timer, 1000);
var fin = "Done";
var player = GetPlayer();
var count = player.GetVar("Countdown_Duration") || 120; 
// Default to 5 minutes (300s)

function timer() {

	var taskCompleted = player.GetVar("active"); // Variable from Storyline

    if (taskCompleted === true) {
        clearInterval(counter); // Stop the timer
        return;
    }


	// Decrease count first
	count--;
	
	// Stop at exactly 00:00
    if (count <= 0) {
        player.SetVar("timer", "00:00"); // Ensure 00:00 is displayed
        player.SetVar("Countdown_Finished", fin);
        clearInterval(counter);
        return;
    }
    
    // Format time and update variable
    let minutes = zeros(Math.floor(count / 60));
    let seconds = zeros(count % 60);
    let totalTime = minutes + ':' + seconds;

    player.SetVar("timer", totalTime);
}

    
// Initialize the display
let minutes = zeros(Math.floor(count / 60));
let seconds = zeros(count % 60);
player.SetVar("timer", minutes + ':' + seconds);
}

};
