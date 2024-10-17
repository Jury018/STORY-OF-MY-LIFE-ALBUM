new Vue({
    el: "#app",
    data() {
        return {
            isOpenedTop: true,
            items: [
                {
                    img1: "personal1.jpg",
                    img2: "personal2.jpg",
                    img3: "personal3.jpg",
                    title: "PERSONAL",
                    isOpen: false,
                },
                {
                    img1: "peer1.jpg",
                    img2: "peer2.jpg",
                    img3: "peer3.jpg",
                    title: "PEERS",
                    isOpen: false,
                },
                {
                    img1: "bro1.jpg",
                    img2: "bro2.jpg",
                    img3: "bro3.jpg",
                    title: "BRO'S'",
                    isOpen: false,
                },
                {
                    img1: "gbf1.jpg",
                    img2: "gbf2.jpg",
                    img3: "gbf3.jpg",
                    title: "GBF'S'",
                    isOpen: false,
                },
                {
                    img1: "fam1.jpg",
                    img2: "fam2.jpg",
                    img3: "fam3.jpg",
                    title: "FAMILY",
                    isOpen: false,
                },
            ],
        };
    },
    methods: {
        topOpen() {
            this.isOpenedTop = !this.isOpenedTop;
        },
        open(idx, isOpen) {
            if (this.isOpenedTop) {
                this.items[idx].isOpen = !isOpen;
            }
        },
        reset() {
            this.items.forEach((item) => (item.isOpen = false));
            this.isOpenedTop = false;
        },
    },
});

// Music control functions
const audio = document.getElementById('audio');

// Function to play the music
function playMusic() {
    audio.play().catch(error => {
        console.log("Playback failed: ", error);
    });
}

// Function to stop the music
function stopMusic() {
    audio.pause();
}

// Stop music when the user leaves the page
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        stopMusic();
    } else {
        if (audio.paused) {
            playMusic();
        }
    }
});

// Start music on click
document.body.addEventListener('click', () => {
    if (audio.paused) {
        playMusic();
    }
});

