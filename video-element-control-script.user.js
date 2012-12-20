// ==UserScript==
// @name         Video Element Control Script
// @namespace    http://userscripts.org
// @description  control video elements.
// @include      *
// ==/UserScript==

var playbackSpeed = 1.5;
var speedStep = 0.1;
var videoElements;
var i;
var keycode;
var showlog = true;
var message;

function log(message) {
    if (showlog) {
        console.log(message);
    }
}

document.addEventListener('DOMContentLoaded', function() {
    log("'DOMContentLoaded' event fired!");
    videoElements = document.querySelectorAll("video");
    if (videoElements.length === 0) {
        log("Found " + videoElements.length + " video elements. Adding listener for DOMNodeInserted event.");
        document.addEventListener('DOMNodeInserted', function(event) {
            insertedTag = event.target.tagName;
            log("'DOMNodeInserted' event fired. tag " + insertedTag + " inserted.");
            if (insertedTag === "VIDEO") {
                videoElements = document.querySelectorAll("video");   
                log("found " + videoElements.length + " video elements.");
                for (i = 0; i < videoElements.length; i++) {
                    videoElements[i].addEventListener('canplay', function() {
                        log("'canplay' event fired!");    
                        this.playbackRate = playbackSpeed;
                    });
                }
            }
        });
    } else {
        log("Found " + videoElements.length + " video elements.");
        for (i = 0; i < videoElements.length; i++) {
            videoElements[i].addEventListener('canplay', function() {
                log("'canplay' event fired!");    
                this.playbackRate = playbackSpeed;
            });
        }    
    }
});


document.addEventListener('keydown', function(event) {
    keycode = event.charCode || event.keyCode;
    log("'keydown' event fired! keycode " + keycode + " pressed.");    
    
    if (keycode === 93 || keycode === 125 || keycode === 221) {
        playbackSpeed += speedStep;
    }
    else if (keycode === 91 || keycode === 123 || keycode === 219) { 
        playbackSpeed -= speedStep;
    }
    log("playbackSpeed set to " + playbackSpeed);
    videoElements = document.querySelectorAll("video");
    for (i = 0; i < videoElements.length; i++) {
        videoElements[i].playbackRate = playbackSpeed;
    }
});
