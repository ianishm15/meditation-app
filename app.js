const app = () => {
    const song = document.querySelector('.song');
    const play = document.querySelector('.play')
    const outline = document.querySelector('.moving-outline circle');
    const video = document.querySelector('.vid-container video')
    //sounds
    const sounds = document.querySelector('.sound-picker button');
    //time Display
    const timeDisplay = document.querySelector('.time-display');
    // get length of the outline
    const outlineLength = outline.getTotalLength();
    // duration
    let fakeDuration = 600;
    outline.style.strokeDasharray = outlineLength;
    outline.style.strokeDashoffset = outlineLength;
    //play sound
    play.addEventListener("click", () => {
        checkPlaying(song);

    });

    // create function specfic to stop and play the sound
    const checkPlaying = song => {
        if (song.paused) {
            song.play();
            video.play();
            play.src = './svg/pause.svg';
        } else {
            song.pause();
            video.pause();
            play.src = './svg/play.svg'
        }
    }

};
app();