// image singer'info loving
(function (root) {
    
    // render the image which includes bg and prev-image
    function renderImage(dom, src) {
        root.blurImg(src);

        const img = dom.querySelector('.songImage img');
        img.src = src;
    }

    // render singer'info
    function renderInfo(dom, data) {
        let songName = dom.querySelector('.songInfo h2');
        let singer = dom.querySelector('.songInfo .songInfo-singer');
        let album = dom.querySelector('.songInfo .songInfo-album');
        songName.textContent = data.name;
        singer.textContent = data.singer;
        album.textContent = data.album;
    }

    // render isLoving
    function renderIsLoving(dom, isLike) {
        let loving = dom.querySelector('.songProcess-control li:nth-of-type(1)');
        if (isLike) {
            loving.className = 'liking';
        }
    }

    root.render = function (dom, data) {
        renderImage(dom, data.image);
        renderInfo(dom, data);
        renderIsLoving(dom, data.isLike);
    };

})(window.player || (window.player = {}));