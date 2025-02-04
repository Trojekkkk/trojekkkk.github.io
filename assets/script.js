document.addEventListener('DOMContentLoaded', function() {
    const audioPlayer = document.getElementById('audio-player');
    const trackTitle = document.getElementById('track-title');

    const tracks = [
        { src: 'assets/muzyka.mp3', title: 'PRO8L3M - VHS' },
        { src: 'assets/muzyka2.mp3', title: 'A$AP Rocky - I Smoked away my brain' }
    ];

    let currentTrackIndex = 0;

    function changeTrack() {
        audioPlayer.src = tracks[currentTrackIndex].src;
        trackTitle.innerText = tracks[currentTrackIndex].title;
        
        // Spróbuj odtworzyć dźwięk
        audioPlayer.play().catch(error => {
            console.log("Autoplay zablokowane, wymagane kliknięcie użytkownika.");
        });

        audioPlayer.onended = function() {
            currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
            changeTrack();
        };
    }

    // Odblokowanie autoplay po kliknięciu w stronę
    function playAudio() {
        changeTrack(); // Włącz muzykę po kliknięciu
        document.removeEventListener("click", playAudio);
    }

    document.addEventListener("click", playAudio);

    // Obsługa przycisków
    document.getElementById('next-track').addEventListener('click', function() {
        currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
        changeTrack();
    });

    document.getElementById('prev-track').addEventListener('click', function() {
        currentTrackIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length;
        changeTrack();
    });

    document.getElementById('volume-control').addEventListener('input', function() {
        audioPlayer.volume = this.value;
    });

    document.getElementById('pause-track').addEventListener('click', function() {
        if (audioPlayer.paused) {
            audioPlayer.play();
            this.innerHTML = '<i class="fas fa-pause"></i>';
        } else {
            audioPlayer.pause();
            this.innerHTML = '<i class="fas fa-play"></i>';
        }
    });
});
