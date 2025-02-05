document.addEventListener('DOMContentLoaded', function() {
    const audioPlayer = document.getElementById('audio-player');
    const trackTitle = document.getElementById('track-title');
    const profileCard = document.querySelector(".profile-card");

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
        changeTrack();
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

    // 🔹 Efekt dynamicznego ruchu karty profilu z **lustrzanym odbiciem przechylenia** 🔹
    document.addEventListener("mousemove", (event) => {
        const x = (event.pageX - window.innerWidth / 2) / 30; // Odwrócone rotateY
        const y = (event.pageY - window.innerHeight / 2) / 30; // Odwrócone rotateX

        profileCard.style.transform = `translate(-50%, -50%) perspective(800px) rotateY(${x}deg) rotateX(${y}deg)`;
    });

    document.addEventListener("mouseleave", () => {
        profileCard.style.transform = "translate(-50%, -50%) perspective(800px) rotateY(0deg) rotateX(0deg)";
    });
});
