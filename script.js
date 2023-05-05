let musics = ["bruh", "amongus", "emotionalDamage", "desenho", "peidu", "dragonBall"]
let audio = document.querySelector('.audio')
let label = document.querySelector('.musicName')
let iconPlay = document.querySelector('#playIcon')
let playButton = document.querySelector('#play')
let range = document.querySelector('.range')
let cover = document.querySelector('.img')

audio.src = `Musics/${musics[0]}.mp3`
label.innerText = `${musics[0]}`
cover.style.backgroundImage = `url(Images/${musics[0]}.png)`
let a = 1;


function nextName() {
    a++
    if (a > musics.length - 1) {
        a = musics.length - 1;
    }
    audio.src = `Musics/${musics[a]}.mp3`
    cover.style.backgroundImage = `url(Images/${musics[a]}.png)`
    label.innerText = `${musics[a]}`
    playIcon.innerText = "play_arrow"

}
function prevName() {
    a--
    if (a == -1) {
        a = 0;
    }
    audio.src = `Musics/${musics[a]}.mp3`
    cover.style.backgroundImage = `url(Images/${musics[a]}.png)`
    label.innerText = `${musics[a]}`
    playIcon.innerText = "play_arrow"
}

function playAudio() {
    if (playIcon.innerText == "pause") {
        playIcon.innerText = "play_arrow"
        audio.pause()
    } else {
        playIcon.innerText = "pause"
        audio.play()
    }
}
