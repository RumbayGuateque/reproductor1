let audioPlayer = document.getElementById('audioPlayer');
let playButton = document.getElementById('playButton');
let playText = document.getElementById('playText');

function togglePlayPause() {
    if (audioPlayer.paused) {
        audioPlayer.play();
        playText.textContent = '⏸ Pause';
    } else {
        audioPlayer.pause();
        playText.textContent = '▶ Play';
    }
}

function adjustVolume(volume) {
    audioPlayer.volume = volume;
}