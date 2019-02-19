/* Set the width of the side navigation to 200px */
function openNav() {
  document.getElementById("mySidenav").style.width = "200px";
  document.getElementById("opacity").style.display = "block";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("opacity").style.display = "none";
}

function showHide(){
  var x=document.getElementById("content");
  var y=document.getElementById("closecontent");
  var z = document.getElementsByClassName("videoTutorials");
  if (x.style.display == "none") {
    x.style.display = "inline-block";
	y.style.display = "block";
  } else {
    x.style.display = "none";
	y.style.display = "none";
	for(var i=0; i<z.length; i++) { 
		z[i].pause();
	}
	
  }
}

document.getElementById('htmlvideo').addEventListener('ended',myHandler,false);
    function myHandler(e) {
        document.getElementById('subject1').style.backgroundColor="green";
    }
	
var video = document.getElementById('htmlvideo');
var supposedCurrentTime = 0;
video.addEventListener('timeupdate', function() {
  if (!video.seeking) {
	if(supposedCurrentTime<video.currentTime){
	supposedCurrentTime = video.currentTime;
	}
}});
// prevent user from seeking
video.addEventListener('seeking', function() {
  // guard agains infinite recursion:
  // user seeks, seeking is fired, currentTime is modified, seeking is fired, current time is modified, ....
  var delta = video.currentTime - supposedCurrentTime;
  if (delta> 0.01) {
    console.log("Seeking is disabled");
	 video.currentTime = supposedCurrentTime;
  }
});
// delete the following event handler if rewind is not required
video.addEventListener('ended', function() {
  // reset state in order to allow for rewind
    supposedCurrentTime = 0;
});