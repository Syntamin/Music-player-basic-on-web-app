(function ($, player) {
    function MusicPlayer(dom) {
        this.dataList = []; // restore the mock data
        this.container = dom; // get which document be used
        this.deg = 0; // record the image's rotate deg
        this.nowIndex = 2; // icurent song's index
        this.timer = null; // record timer which is rotate Img
    }
    MusicPlayer.prototype = {
        init() {
            this.getDom();
            this.getData('../mock/data.json');
        },

        // get documents form DomTree
        getDom() {
            this.img = this.container.querySelector('.songImage img');
            this.contrlList = this.container.querySelectorAll('.songProcess-control li');
        },

        // get data from mockFlie
        getData(url) {
            const _this = this;
            $.ajax({
                method: 'GET',
                url: url,
                success: function (data) {
                    _this.dataList = data;
                    _this.loadSong(_this.nowIndex);
                },
                error: function () {
                    console.log("can't get data");
                }
            });
        },

        // load songs
        loadSong(index) {
            player.render(this.container, this.dataList[index]);
            player.music.load(this.dataList[index].audioSrc);
            this.img.style
            if (player.music.status === 'play') {
                player.music.play();

                // modify the button icon
                this.contrlList[2].className = 'playing';
                this.rotateImg(0);
            }

        },

        // contrl music
        musicContrl() {
            const _this = this;

            // prev music
            this.contrlList[1].addEventListener('touchend', function () {
                player.music.status = 'play';
                _this.loadSong(--_this.nowIndex);
            });

            // after music
            this.contrlList[3].addEventListener('touchend', function () {
                player.music.status = 'play';
                _this.loadSong(++_this.nowIndex);
            });

            // play and pause
            this.contrlList[2].addEventListener('touchend', function () {
                if (player.music.status === 'pause') {
                    player.music.play();
                    this.className = 'playing';
                    _this.rotateImg(_this.deg);
                } else if (player.music.status === 'play') {
                    player.music.pause();
                    this.className = '';
                    _this.stopRotate();
                    console.log(_this.deg);
                }
            });
        },

        // rotate image
        rotateImg(deg) {
            clearInterval(this.timer);
            this.timer = setInterval(() => {
                deg += 0.2;
                this.img.style.transform = `rotate(${deg}deg)`;
                this.deg = deg;
            }, 1000 / 60);
        },

        // stop rotate
        stopRotate() {
            clearInterval(this.timer);
            this.timer = null;
        }

    }

    const musicPlayer = new MusicPlayer(document.querySelector('.container'));
    musicPlayer.init();
    musicPlayer.musicContrl();

})(window.Zepto, window.player);