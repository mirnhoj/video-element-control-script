// ==UserScript==
// @name       YouTube Speed Changer
// @namespace  http://userscripts.org
// @version    0.1
// @description  Changes the default playback speed in YouTube and adds hotkeys to easily increase or decrease playback speed.
// @include   *youtube.com*
// @include   *vimeo.com*
// @copyright  2012+, You
// ==/UserScript==
var playbackSpeed = 1.5;
var speedStep = 0.1;

function increasePlaybackSpeed(){
  playbackSpeed += speedStep;
  document.querySelectorAll("video")[0].playbackRate = playbackSpeed;
}

function decreasePlaybackSpeed(){
  playbackSpeed -= speedStep;
  document.querySelectorAll("video")[0].playbackRate = playbackSpeed;
}

document.addEventListener('DOMContentLoaded',function(){
  document.querySelectorAll("video")[0].playbackRate = playbackSpeed;
});

document.addEventListener('keydown',function(event){
  var keycode = event.charCode || event.keyCode;
  if (keycode == 93 || keycode == 125 || keycode == 221){
    increasePlaybackSpeed();
  }
  else if (keycode == 91 || keycode == 123 || keycode == 219){ 
    decreasePlaybackSpeed();
  }
});
                        
