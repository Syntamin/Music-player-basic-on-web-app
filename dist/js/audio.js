(function (root) {
    function AudioManage() {
        this.audio = new Audio();
        this.status = 'pause';
        this.muted = "muted";
        this.preload = 'auto';
    }

    AudioManage.prototype = {

        // load song
        load(src) {
            this.audio.src = src;
            this.audio.load();
        },

        // play music
        play() {
            this.audio.play();
            this.status = 'play';
        },

        // stop music
        pause() {
            this.audio.pause();
            this.status = 'pause';
        },

    }

    // export the class to window.player
    root.music = new AudioManage();
})(window.player || (window.player = {}));