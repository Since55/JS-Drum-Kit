//keycodes for a-l buttons
let keycodes = {
    65: "a",
    83: "s",
    68: "d",
    70: "f",
    71: "g",
    72: "h",
    74: "j",
    75: "k",
    76: "l"
}

//buttons to audio map
let audio = {
    "a": new Audio("sounds/clap.wav"),
    "s": new Audio("sounds/hihat.wav"),
    "d": new Audio("sounds/kick.wav"),
    "f": new Audio("sounds/openhat.wav"),
    "g": new Audio("sounds/boom.wav"),
    "h": new Audio("sounds/ride.wav"),
    "j": new Audio("sounds/snare.wav"),
    "k": new Audio("sounds/tom.wav"),
    "l": new Audio("sounds/tink.wav")
}

//key listener (jQuery)
$(document).ready(function(){
    $("body").keydown(function(event){
        let sound = keycodes[event.keyCode];
        if(sound !== undefined){
            play(sound);
        }

    });
});

//playing sound & css styling
function play(sound){
    audio[sound].currentTime = 0;
    $(`#${sound}`).addClass("playing");
    audio[sound].play();
    setTimeout(function(){
        $(`#${sound}`).removeClass("playing");
    }, 70);
}