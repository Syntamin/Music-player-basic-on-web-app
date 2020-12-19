(function ($, player) {
    function MusicPlayer(dom) {
        this.dataList = []; // restore the mock data
        this.container = dom; // get which document be used
    }
    MusicPlayer.prototype = {
        init() {
            this.getDom();
            this.getData('../mock/data.json');
        },

        // get documents form DomTree
        getDom() {
            const img = this.container.querySelector('.songImage img');
            const contrlList = this.container.querySelectorAll('.songProcess-control li');
        },

        // get data from mockFlie
        getData(url) {
            const _this = this;
            $.ajax({
                method: 'GET',
                url: url,
                success: function (data) {
                    _this.dataList = data;
                    player.render(_this.container ,_this.dataList[0]);
                },
                error: function () {
                    console.log("can't get data");
                }
            });
        },

    }

    const musicPlayer = new MusicPlayer(document.querySelector('.container'));
    musicPlayer.init();

})(window.Zepto, window.player);