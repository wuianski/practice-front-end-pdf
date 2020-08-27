let MainData = {
    pdf: {},

    getPdfUrls: function () {
        let filtered = Object.values(this.pdf)
            .filter(x => x.value > 0);

        return filtered.map(x => `filehost/${x.id.toUpperCase()}.pdf`);
    }
};

(function () {
    /* Create the imgContainer  */
    var imgContainer = document.createElement("div");
    imgContainer.setAttribute('id', 'imgContainer');
    document.body.appendChild(imgContainer);
    var img0 = document.createElement("IMG");
    img0.setAttribute('id', 'img0');
    img0.setAttribute("src", "assets/imgs/container0.png");
    img0.setAttribute("alt", "img0");
    imgContainer.appendChild(img0);
    /* Create the imgContainer  */

    /* Animation after click All_iframe_div */
    const ContainerAni = anime({
        targets: '#imgContainer',
        width: ['35%', '49%'],
        height: ['75%', '100%'],
        top: ['13%', '0%'],
        left: ['100px', '0px'],
        zIndex: {
            value: [1, 99],
            round: true
        },
        loop: false,
        delay: 200,
        duration: 500,
        autoplay: false,
        easing: "easeInOutSine"
    })
    /* Animation after click All_iframe_div */

    /* Slide in imgContainer */
    const SlideContainerAni = anime({
        targets: '#imgContainer',
        width: ['35%', '35%'],
        height: ['75%', '75%'],
        top: ['13%', '13%'],
        left: ['-800px', '100px'],
        zIndex: {
            value: [1, 1],
            round: true
        },
        loop: false,
        delay: 2700,
        duration: 500,
        autoplay: false,
        easing: "easeInOutSine"
    })
    /* Slide in aimgContainer */

    /* Create the RandomPosition for imgs in imgContainer */
    function getRandomPosition(element) {
        var x = imgContainer.clientHeight - element.clientHeight;
        var y = imgContainer.clientWidth - element.clientWidth;
        var randomX = Math.floor(Math.random() * x);
        var randomY = Math.floor(Math.random() * y);
        return [randomX, randomY];
    }
    /* Create the RandomPosition for imgs in imgContainer */

    /* Create the imgA1 */
    var imgA1 = document.createElement("IMG");
    imgA1.setAttribute('id', 'imgA1');
    imgA1.setAttribute("src", "assets/imgs/A1.png");
    imgA1.setAttribute("alt", "imgA1");
    imgContainer.appendChild(imgA1);
    var xy = getRandomPosition(imgA1);
    imgA1.style.top = xy[0] + 'px';
    imgA1.style.left = xy[1] + 'px';
    /* Create the imgA1 */

    /* set up the Anime the imgA1 */
    var Animation_A1 = anime.timeline({
        easing: 'easeInOutSine',
        autoplay: false,
    });

    Animation_A1
        .add({
            targets: '#imgA1',
            translateX: function () { return anime.random(10, 14) + 'rem'; },
            translateY: function () { return anime.random(10, 14) + 'rem'; },
            scale: function () { return anime.random(10, 20) / 10; },
            rotate: function () { return anime.random(-360, 360); },
            duration: function () { return anime.random(200, 500); },
        });
    /* set up the Anime the imgA1 */

    /* Create the imgA2 */
    var imgA2 = document.createElement("IMG");
    imgA2.setAttribute('id', 'imgA2');
    imgA2.setAttribute("src", "assets/imgs/A2.png");
    imgA2.setAttribute("alt", "imgA2");
    imgContainer.appendChild(imgA2);
    var xy = getRandomPosition(imgA2);
    imgA2.style.top = xy[0] + 'px';
    imgA2.style.left = xy[1] + 'px';
    /* Create the imgA2 */

    /* set up the Anime the imgA2 */
    var Animation_A2 = anime.timeline({
        easing: 'easeInOutSine',
        autoplay: false,
    });

    Animation_A2
        .add({
            targets: '#imgA2',
            translateX: function () { return anime.random(33, 10) + 'rem'; },
            translateY: function () { return anime.random(13, 30) + 'rem'; },
            scale: function () { return anime.random(8, 15) / 10; },
            rotate: function () { return anime.random(-360, 360); },
            duration: function () { return anime.random(300, 600); },
        });
    /* set up the Anime the imgA2 */

    /* Create the imgA3 */
    var imgA3 = document.createElement("IMG");
    imgA3.setAttribute('id', 'imgA3');
    imgA3.setAttribute("src", "assets/imgs/A3.png");
    imgA3.setAttribute("alt", "imgA3");
    imgContainer.appendChild(imgA3);
    var xy = getRandomPosition(imgA3);
    imgA3.style.top = xy[0] + 'px';
    imgA3.style.left = xy[1] + 'px';
    /* Create the imgA3 */

    /* set up the Anime the imgA3 */
    var Animation_A3 = anime.timeline({
        easing: 'easeInOutSine',
        autoplay: false,
    });

    Animation_A3
        .add({
            targets: '#imgA3',
            translateX: function () { return anime.random(-13, 10) + 'rem'; },
            translateY: function () { return anime.random(-13, 10) + 'rem'; },
            scale: function () { return anime.random(8, 10) / 10; },
            rotate: function () { return anime.random(-360, 360); },
            duration: function () { return anime.random(300, 500); },
        });
    /* set up the Anime the imgA3 */

    /* Create the imgB1 */
    var imgB1 = document.createElement("IMG");
    imgB1.setAttribute('id', 'imgB1');
    imgB1.setAttribute("src", "assets/imgs/B1.png");
    imgB1.setAttribute("alt", "imgB1");
    imgContainer.appendChild(imgB1);
    var xy = getRandomPosition(imgB1);
    imgB1.style.top = xy[0] + 'px';
    imgB1.style.left = xy[1] + 'px';
    /* Create the imgB1 */

    /* set up the Anime the imgB1 */
    var Animation_B1 = anime.timeline({
        easing: 'easeInOutSine',
        autoplay: false,
    });

    Animation_B1
        .add({
            targets: '#imgB1',
            translateX: function () { return anime.random(-13, 10) + 'rem'; },
            translateY: function () { return anime.random(-13, 10) + 'rem'; },
            scale: function () { return anime.random(8, 10) / 10; },
            rotate: function () { return anime.random(-360, 360); },
            duration: function () { return anime.random(300, 500); },
        });
    /* set up the Anime the imgB1 */

    /* Create the imgB2 */
    var imgB2 = document.createElement("IMG");
    imgB2.setAttribute('id', 'imgB2');
    imgB2.setAttribute("src", "assets/imgs/B2.png");
    imgB2.setAttribute("alt", "imgB2");
    imgContainer.appendChild(imgB2);
    var xy = getRandomPosition(imgB2);
    imgB2.style.top = xy[0] + 'px';
    imgB2.style.left = xy[1] + 'px';
    /* Create the imgB2 */

    /* set up the Anime the imgB2 */
    var Animation_B2 = anime.timeline({
        easing: 'easeInOutSine',
        autoplay: false,
    });

    Animation_B2
        .add({
            targets: '#imgB2',
            translateX: function () { return anime.random(33, 10) + 'rem'; },
            translateY: function () { return anime.random(13, 30) + 'rem'; },
            scale: function () { return anime.random(8, 15) / 10; },
            rotate: function () { return anime.random(-360, 360); },
            duration: function () { return anime.random(300, 600); },
        });
    /* set up the Anime the imgB2 */

    /* Create the imgB3 */
    var imgB3 = document.createElement("IMG");
    imgB3.setAttribute('id', 'imgB3');
    imgB3.setAttribute("src", "assets/imgs/B3.png");
    imgB3.setAttribute("alt", "imgB3");
    imgContainer.appendChild(imgB3);
    var xy = getRandomPosition(imgB3);
    imgB3.style.top = xy[0] + 'px';
    imgB3.style.left = xy[1] + 'px';
    /* Create the imgB3 */

    /* set up the Anime the imgB3 */
    var Animation_B3 = anime.timeline({
        easing: 'easeInOutSine',
        autoplay: false,
    });

    Animation_B3
        .add({
            targets: '#imgB3',
            translateX: function () { return anime.random(10, 14) + 'rem'; },
            translateY: function () { return anime.random(10, 14) + 'rem'; },
            scale: function () { return anime.random(10, 20) / 10; },
            rotate: function () { return anime.random(-360, 360); },
            duration: function () { return anime.random(200, 500); },
        });
    /* set up the Anime the imgB3 */

    /* Create the imgC1 */
    var imgC1 = document.createElement("IMG");
    imgC1.setAttribute('id', 'imgC1');
    imgC1.setAttribute("src", "assets/imgs/C1.png");
    imgC1.setAttribute("alt", "imgC1");
    imgContainer.appendChild(imgC1);
    var xy = getRandomPosition(imgC1);
    imgC1.style.top = xy[0] + 'px';
    imgC1.style.left = xy[1] + 'px';
    /* Create the imgC1 */

    /* set up the Anime the imgC1 */
    var Animation_C1 = anime.timeline({
        easing: 'easeInOutSine',
        autoplay: false,
    });

    Animation_C1
        .add({
            targets: '#imgC1',
            translateX: function () { return anime.random(-13, 10) + 'rem'; },
            translateY: function () { return anime.random(-13, 10) + 'rem'; },
            scale: function () { return anime.random(8, 10) / 10; },
            rotate: function () { return anime.random(-360, 360); },
            duration: function () { return anime.random(300, 500); },
        });
    /* set up the Anime the imgC1 */

    /* Create the imgC2 */
    var imgC2 = document.createElement("IMG");
    imgC2.setAttribute('id', 'imgC2');
    imgC2.setAttribute("src", "assets/imgs/C2.png");
    imgC2.setAttribute("alt", "imgC2");
    imgContainer.appendChild(imgC2);
    var xy = getRandomPosition(imgC2);
    imgC2.style.top = xy[0] + 'px';
    imgC2.style.left = xy[1] + 'px';
    /* Create the imgC2 */

    /* Create the imgC3 */
    var imgC3 = document.createElement("IMG");
    imgC3.setAttribute('id', 'imgC3');
    imgC3.setAttribute("src", "assets/imgs/C3.png");
    imgC3.setAttribute("alt", "imgC3");
    imgContainer.appendChild(imgC3);
    var xy = getRandomPosition(imgC3);
    imgC3.style.top = xy[0] + 'px';
    imgC3.style.left = xy[1] + 'px';
    /* Create the imgC3 */

    /* set up the Anime the imgC2 */
    var Animation_C2 = anime.timeline({
        easing: 'easeInOutSine',
        autoplay: false,
    });

    Animation_C2
        .add({
            targets: '#imgC2',
            translateX: function () { return anime.random(33, 10) + 'rem'; },
            translateY: function () { return anime.random(13, 30) + 'rem'; },
            scale: function () { return anime.random(8, 15) / 10; },
            rotate: function () { return anime.random(-360, 360); },
            duration: function () { return anime.random(300, 600); },
        });
    /* set up the Anime the imgC2 */

    /* set up the Anime the imgC3 */
    var Animation_C3 = anime.timeline({
        easing: 'easeInOutSine',
        autoplay: false,
    });

    Animation_C3
        .add({
            targets: '#imgC3',
            translateX: function () { return anime.random(10, 14) + 'rem'; },
            translateY: function () { return anime.random(10, 14) + 'rem'; },
            scale: function () { return anime.random(10, 20) / 10; },
            rotate: function () { return anime.random(-360, 360); },
            duration: function () { return anime.random(200, 500); },
        });
    /* set up the Anime the imgC3 */

    /* ****************************************
     * Create the div which contain A1_iframe *
     */
    var A1_iframe_div = document.createElement('div');
    A1_iframe_div.setAttribute('id', 'A1_iframe_div');
    A1_iframe_div.setAttribute('class', 'A1_iframe_div');
    document.body.appendChild(A1_iframe_div);
    var A1_iframe_title = document.createElement('img');
    A1_iframe_title.src = "assets/imgs/keywordA1.png";
    A1_iframe_title.setAttribute('id', 'A1_iframe_title');
    A1_iframe_div.appendChild(A1_iframe_title);
    var A1_iframe_scale = document.createElement('img');
    A1_iframe_scale.src = "assets/imgs/scaleUp.png";
    A1_iframe_scale.setAttribute('id', 'A1_iframe_scale');
    A1_iframe_div.appendChild(A1_iframe_scale);
    /* Create the div which contain A1_iframe */

    /* Create the A1_iframe */
    var iframeSource_A1 = 'assets/articles/A1.html';
    var A1_iframe = document.createElement('iframe');
    A1_iframe.setAttribute('src', iframeSource_A1);
    A1_iframe.setAttribute('id', 'A1_iframe');
    A1_iframe_div.appendChild(A1_iframe);
    /* Create the A1_iframe */

    /* Scale up after click A1_iframe_scale */
    const A1zindexAni = anime({
        targets: '#A1_iframe_div',
        width: ['23%', '50%'],
        height: ['46%', '100%'],
        top: ['45%', '0%'],
        right: ['375px', '0px'],
        zIndex: {
            value: [10, 99],
            round: true
        },
        loop: false,
        delay: 200,
        duration: 500,
        autoplay: false,
        easing: "easeInOutSine"
    })

    document.querySelector('#A1_iframe_scale').onclick = function () {
        A1zindexAni.play();
        ContainerAni.play();
        A1zindexAni.finished.then(() => {
            A1zindexAni.reverse();
            ContainerAni.reverse();
        })

        var img = document.getElementById('A1_iframe_scale').src;
        if (img.indexOf('scaleDown.png') != -1) {
            document.getElementById('A1_iframe_scale').src = 'assets/imgs/scaleUp.png';
        }
        else {
            document.getElementById('A1_iframe_scale').src = 'assets/imgs/scaleDown.png';
        }
    }
    /* Scale up after click A1_iframe_scale */

    /* Slide in after click A1_iframe_div */
    const A1startAni = anime({
        targets: '#A1_iframe_div',
        width: ['23%', '23%'],
        height: ['46%', '46%'],
        top: ['45%', '45%'],
        right: ['-410px', '375px'],
        zIndex: {
            value: [10, 10],
            round: true
        },
        loop: false,
        delay: 2400,
        duration: 500,
        autoplay: false,
        easing: "easeInOutSine"
    })

    /* A1_iframe_div can only click once */
    document.querySelector('#A1_iframe_div').onclick = function () {
        C3startAni.play();
        C2startAni.play();
        C1startAni.play();
        B3startAni.play();
        B2startAni.play();
        B1startAni.play();
        A3startAni.play();
        A2startAni.play();
        A1startAni.play();
        SlideContainerAni.play();
        SlideContainerAni.finished.then(() => {
            C3startAni.reverse();
            C2startAni.reverse();
            C1startAni.reverse();
            B3startAni.reverse();
            B2startAni.reverse();
            B1startAni.reverse();
            A3startAni.reverse();
            A2startAni.reverse();
            A1startAni.reverse();
            SlideContainerAni.reverse();
        })
        /* var popup = document.getElementById("popup_slide");
        popup.style.display = "none"; */
        document.getElementById('C3_iframe_div').onclick = () => false;
        document.getElementById('C2_iframe_div').onclick = () => false;
        document.getElementById('C1_iframe_div').onclick = () => false;
        document.getElementById('B3_iframe_div').onclick = () => false;
        document.getElementById('B2_iframe_div').onclick = () => false;
        document.getElementById('B1_iframe_div').onclick = () => false;
        document.getElementById('A3_iframe_div').onclick = () => false;
        document.getElementById('A2_iframe_div').onclick = () => false;
        document.getElementById('A1_iframe_div').onclick = () => false;
    }
    /* Slide in after click A1_iframe_div */

    /* Create the div which contain A2_iframe */
    var A2_iframe_div = document.createElement('div');
    A2_iframe_div.setAttribute('id', 'A2_iframe_div');
    document.body.appendChild(A2_iframe_div);
    var A2_iframe_title = document.createElement('img');
    A2_iframe_title.src = "assets/imgs/keywordA2.png";
    A2_iframe_title.setAttribute('id', 'A2_iframe_title');
    A2_iframe_div.appendChild(A2_iframe_title);
    var A2_iframe_scale = document.createElement('img');
    A2_iframe_scale.src = "assets/imgs/scaleUp.png";
    A2_iframe_scale.setAttribute('id', 'A2_iframe_scale');
    A2_iframe_div.appendChild(A2_iframe_scale);
    /* Create the div which contain A2_iframe */

    /* Create the A2_iframe */
    var iframeSource_A2 = 'assets/articles/A2.html';
    var A2_iframe = document.createElement('iframe');
    A2_iframe.setAttribute('src', iframeSource_A2);
    A2_iframe.setAttribute('id', 'A2_iframe');
    A2_iframe_div.appendChild(A2_iframe);
    /* Create the A2_iframe */

    /* Scale up after click A2_iframe_scale */
    const A2zindexAni = anime({
        targets: '#A2_iframe_div',
        width: ['23%', '50%'],
        height: ['46%', '100%'],
        top: ['40%', '0%'],
        right: ['230px', '0px'],
        zIndex: {
            value: [9, 99],
            round: true
        },
        loop: false,
        delay: 200,
        duration: 500,
        autoplay: false,
        easing: "easeInOutSine"
    })

    document.querySelector('#A2_iframe_scale').onclick = function () {
        A2zindexAni.play();
        ContainerAni.play();
        A2zindexAni.finished.then(() => {
            A2zindexAni.reverse();
            ContainerAni.reverse();
        })

        var img = document.getElementById('A2_iframe_scale').src;
        if (img.indexOf('scaleDown.png') != -1) {
            document.getElementById('A2_iframe_scale').src = 'assets/imgs/scaleUp.png';
        }
        else {
            document.getElementById('A2_iframe_scale').src = 'assets/imgs/scaleDown.png';
        }
    }
    /* Scale up after click A2_iframe_scale */

    /* Slide in after click A2_iframe_div */
    const A2startAni = anime({
        targets: '#A2_iframe_div',
        width: ['23%', '23%'],
        height: ['46%', '46%'],
        top: ['40%', '40%'],
        right: ['-410px', '230px'],
        zIndex: {
            value: [9, 9],
            round: true
        },
        loop: false,
        delay: 2100,
        duration: 500,
        autoplay: false,
        easing: "easeInOutSine"
    })
    // A2_iframe_div can only click once //
    document.querySelector('#A2_iframe_div').onclick = function () {
        C3startAni.play();
        C2startAni.play();
        C1startAni.play();
        B3startAni.play();
        B2startAni.play();
        B1startAni.play();
        A3startAni.play();
        A2startAni.play();
        A1startAni.play();
        SlideContainerAni.play();
        SlideContainerAni.finished.then(() => {
            C3startAni.reverse();
            C2startAni.reverse();
            C1startAni.reverse();
            B3startAni.reverse();
            B2startAni.reverse();
            B1startAni.reverse();
            A3startAni.reverse();
            A2startAni.reverse();
            A1startAni.reverse();
            SlideContainerAni.reverse();
        })
        /*var popup = document.getElementById("popup_slide");
        popup.style.display = "none";*/
        document.getElementById('C3_iframe_div').onclick = () => false;
        document.getElementById('C2_iframe_div').onclick = () => false;
        document.getElementById('C1_iframe_div').onclick = () => false;
        document.getElementById('B3_iframe_div').onclick = () => false;
        document.getElementById('B2_iframe_div').onclick = () => false;
        document.getElementById('B1_iframe_div').onclick = () => false;
        document.getElementById('A3_iframe_div').onclick = () => false;
        document.getElementById('A2_iframe_div').onclick = () => false;
        document.getElementById('A1_iframe_div').onclick = () => false;
    }
    /* Slide in after click A2_iframe_div */

    /* Create the div which contain A3_iframe */
    var A3_iframe_div = document.createElement('div');
    A3_iframe_div.setAttribute('id', 'A3_iframe_div');
    document.body.appendChild(A3_iframe_div);
    var A3_iframe_title = document.createElement('img');
    A3_iframe_title.src = "assets/imgs/keywordA3.png";
    A3_iframe_title.setAttribute('id', 'A3_iframe_title');
    A3_iframe_div.appendChild(A3_iframe_title);
    var A3_iframe_scale = document.createElement('img');
    A3_iframe_scale.src = "assets/imgs/scaleUp.png";
    A3_iframe_scale.setAttribute('id', 'A3_iframe_scale');
    A3_iframe_div.appendChild(A3_iframe_scale);
    /* Create the div which contain A3_iframe */

    /* Create the A3_iframe */
    var iframeSource_A3 = 'assets/articles/A3.html';
    var A3_iframe = document.createElement('iframe');
    A3_iframe.setAttribute('src', iframeSource_A3);
    A3_iframe.setAttribute('id', 'A3_iframe');
    A3_iframe_div.appendChild(A3_iframe);
    /* Create the A3_iframe */

    /* Scale up after click A3_iframe_scale */
    const A3zindexAni = anime({
        targets: '#A3_iframe_div',
        width: ['23%', '50%'],
        height: ['46%', '100%'],
        top: ['35%', '0%'],
        right: ['85px', '0px'],
        zIndex: {
            value: [8, 99],
            round: true
        },
        loop: false,
        delay: 200,
        duration: 500,
        autoplay: false,
        easing: "easeInOutSine"
    })

    document.querySelector('#A3_iframe_scale').onclick = function () {
        A3zindexAni.play();
        ContainerAni.play();
        A3zindexAni.finished.then(() => {
            A3zindexAni.reverse();
            ContainerAni.reverse();
        })

        var img = document.getElementById('A3_iframe_scale').src;
        if (img.indexOf('scaleDown.png') != -1) {
            document.getElementById('A3_iframe_scale').src = 'assets/imgs/scaleUp.png';
        }
        else {
            document.getElementById('A3_iframe_scale').src = 'assets/imgs/scaleDown.png';
        }
    }
    /* Scale up after click A3_iframe_scale */

    /* Slide in after click A3_iframe_div */
    const A3startAni = anime({
        targets: '#A3_iframe_div',
        width: ['23%', '23%'],
        height: ['46%', '46%'],
        top: ['35%', '35%'],
        right: ['-410px', '85px'],
        zIndex: {
            value: [8, 8],
            round: true
        },
        loop: false,
        delay: 1800,
        duration: 500,
        autoplay: false,
        easing: "easeInOutSine"
    })
    // A3_iframe_div can only click once //
    document.querySelector('#A3_iframe_div').onclick = function () {
        C3startAni.play();
        C2startAni.play();
        C1startAni.play();
        B3startAni.play();
        B2startAni.play();
        B1startAni.play();
        A3startAni.play();
        A2startAni.play();
        A1startAni.play();
        SlideContainerAni.play();
        SlideContainerAni.finished.then(() => {
            C3startAni.reverse();
            C2startAni.reverse();
            C1startAni.reverse();
            B3startAni.reverse();
            B2startAni.reverse();
            B1startAni.reverse();
            A3startAni.reverse();
            A2startAni.reverse();
            A1startAni.reverse();
            SlideContainerAni.reverse();
        })
        /*var popup = document.getElementById("popup_slide");
        popup.style.display = "none";*/
        document.getElementById('C3_iframe_div').onclick = () => false;
        document.getElementById('C2_iframe_div').onclick = () => false;
        document.getElementById('C1_iframe_div').onclick = () => false;
        document.getElementById('B3_iframe_div').onclick = () => false;
        document.getElementById('B2_iframe_div').onclick = () => false;
        document.getElementById('B1_iframe_div').onclick = () => false;
        document.getElementById('A3_iframe_div').onclick = () => false;
        document.getElementById('A2_iframe_div').onclick = () => false;
        document.getElementById('A1_iframe_div').onclick = () => false;
    }
    /* Slide in after click A3_iframe_div */

    /* Create the div which contain B1_iframe */
    var B1_iframe_div = document.createElement('div');
    B1_iframe_div.setAttribute('id', 'B1_iframe_div');
    document.body.appendChild(B1_iframe_div);
    var B1_iframe_title = document.createElement('img');
    B1_iframe_title.src = "assets/imgs/keywordB1.png";
    B1_iframe_title.setAttribute('id', 'B1_iframe_title');
    B1_iframe_div.appendChild(B1_iframe_title);
    var B1_iframe_scale = document.createElement('img');
    B1_iframe_scale.src = "assets/imgs/scaleUp.png";
    B1_iframe_scale.setAttribute('id', 'B1_iframe_scale');
    B1_iframe_div.appendChild(B1_iframe_scale);
    /* Create the div which contain B1_iframe */

    /* Create the B1_iframe */
    var iframeSource_B1 = 'assets/articles/B1.html';
    var B1_iframe = document.createElement('iframe');
    B1_iframe.setAttribute('src', iframeSource_B1);
    B1_iframe.setAttribute('id', 'B1_iframe');
    B1_iframe_div.appendChild(B1_iframe);
    /* Create the B1_iframe */

    /* Scale up after click B1_iframe_scale */
    const B1zindexAni = anime({
        targets: '#B1_iframe_div',
        width: ['23%', '50%'],
        height: ['46%', '100%'],
        top: ['30%', '0%'],
        right: ['165px', '0px'],
        zIndex: {
            value: [7, 99],
            round: true
        },
        loop: false,
        delay: 200,
        duration: 500,
        autoplay: false,
        easing: "easeInOutSine"
    })

    document.querySelector('#B1_iframe_scale').onclick = function () {
        B1zindexAni.play();
        ContainerAni.play();
        B1zindexAni.finished.then(() => {
            B1zindexAni.reverse();
            ContainerAni.reverse();
        })

        var img = document.getElementById('B1_iframe_scale').src;
        if (img.indexOf('scaleDown.png') != -1) {
            document.getElementById('B1_iframe_scale').src = 'assets/imgs/scaleUp.png';
        }
        else {
            document.getElementById('B1_iframe_scale').src = 'assets/imgs/scaleDown.png';
        }
    }
    /* Scale up after click B1_iframe_scale */

    /* Slide in after click B1_iframe_div */
    const B1startAni = anime({
        targets: '#B1_iframe_div',
        width: ['23%', '23%'],
        height: ['46%', '46%'],
        top: ['30%', '30%'],
        right: ['-410px', '165px'],
        zIndex: {
            value: [7, 7],
            round: true
        },
        loop: false,
        delay: 1500,
        duration: 500,
        autoplay: false,
        easing: "easeInOutSine"
    })
    // B1_iframe_div can only click once //
    document.querySelector('#B1_iframe_div').onclick = function () {
        C3startAni.play();
        C2startAni.play();
        C1startAni.play();
        B3startAni.play();
        B2startAni.play();
        B1startAni.play();
        A3startAni.play();
        A2startAni.play();
        A1startAni.play();
        SlideContainerAni.play();
        SlideContainerAni.finished.then(() => {
            C3startAni.reverse();
            C2startAni.reverse();
            C1startAni.reverse();
            B3startAni.reverse();
            B2startAni.reverse();
            B1startAni.reverse();
            A3startAni.reverse();
            A2startAni.reverse();
            A1startAni.reverse();
            SlideContainerAni.reverse();
        })
        /*var popup = document.getElementById("popup_slide");
        popup.style.display = "none";*/
        document.getElementById('C3_iframe_div').onclick = () => false;
        document.getElementById('C2_iframe_div').onclick = () => false;
        document.getElementById('C1_iframe_div').onclick = () => false;
        document.getElementById('B3_iframe_div').onclick = () => false;
        document.getElementById('B2_iframe_div').onclick = () => false;
        document.getElementById('B1_iframe_div').onclick = () => false;
        document.getElementById('A3_iframe_div').onclick = () => false;
        document.getElementById('A2_iframe_div').onclick = () => false;
        document.getElementById('A1_iframe_div').onclick = () => false;
    }
    /* Slide in after click B1_iframe_div */

    /* Create the div which contain B2_iframe */
    var B2_iframe_div = document.createElement('div');
    B2_iframe_div.setAttribute('id', 'B2_iframe_div');
    document.body.appendChild(B2_iframe_div);
    var B2_iframe_title = document.createElement('img');
    B2_iframe_title.src = "assets/imgs/keywordB2.png";
    B2_iframe_title.setAttribute('id', 'B2_iframe_title');
    B2_iframe_div.appendChild(B2_iframe_title);
    var B2_iframe_scale = document.createElement('img');
    B2_iframe_scale.src = "assets/imgs/scaleUp.png";
    B2_iframe_scale.setAttribute('id', 'B2_iframe_scale');
    B2_iframe_div.appendChild(B2_iframe_scale);
    /* Create the div which contain B2_iframe */

    /* Create the B2_iframe */
    var iframeSource_B2 = 'assets/articles/B2.html';
    var B2_iframe = document.createElement('iframe');
    B2_iframe.setAttribute('src', iframeSource_B2);
    B2_iframe.setAttribute('id', 'B2_iframe');
    B2_iframe_div.appendChild(B2_iframe);
    /* Create the B2_iframe */

    /* Scale up after click B2_iframe_scale */
    const B2zindexAni = anime({
        targets: '#B2_iframe_div',
        width: ['23%', '50%'],
        height: ['46%', '100%'],
        top: ['25%', '0%'],
        right: ['215px', '0px'],
        zIndex: {
            value: [6, 99],
            round: true
        },
        loop: false,
        delay: 200,
        duration: 500,
        autoplay: false,
        easing: "easeInOutSine"
    })

    document.querySelector('#B2_iframe_scale').onclick = function () {
        B2zindexAni.play();
        ContainerAni.play();
        B2zindexAni.finished.then(() => {
            B2zindexAni.reverse();
            ContainerAni.reverse();
        })

        var img = document.getElementById('B2_iframe_scale').src;
        if (img.indexOf('scaleDown.png') != -1) {
            document.getElementById('B2_iframe_scale').src = 'assets/imgs/scaleUp.png';
        }
        else {
            document.getElementById('B2_iframe_scale').src = 'assets/imgs/scaleDown.png';
        }
    }
    /* Scale up after click B2_iframe_scale */

    /* Slide in after click B2_iframe_div */
    const B2startAni = anime({
        targets: '#B2_iframe_div',
        width: ['23%', '23%'],
        height: ['46%', '46%'],
        top: ['25%', '25%'],
        right: ['-410px', '215px'],
        zIndex: {
            value: [6, 6],
            round: true
        },
        loop: false,
        delay: 1200,
        duration: 500,
        autoplay: false,
        easing: "easeInOutSine"
    })
    // B2_iframe_div can only click once //
    document.querySelector('#B2_iframe_div').onclick = function () {
        C3startAni.play();
        C2startAni.play();
        C1startAni.play();
        B3startAni.play();
        B2startAni.play();
        B1startAni.play();
        A3startAni.play();
        A2startAni.play();
        A1startAni.play();
        SlideContainerAni.play();
        SlideContainerAni.finished.then(() => {
            C3startAni.reverse();
            C2startAni.reverse();
            C1startAni.reverse();
            B3startAni.reverse();
            B2startAni.reverse();
            B1startAni.reverse();
            A3startAni.reverse();
            A2startAni.reverse();
            A1startAni.reverse();
            SlideContainerAni.reverse();
        })
        /*var popup = document.getElementById("popup_slide");
        popup.style.display = "none";*/
        document.getElementById('C3_iframe_div').onclick = () => false;
        document.getElementById('C2_iframe_div').onclick = () => false;
        document.getElementById('C1_iframe_div').onclick = () => false;
        document.getElementById('B3_iframe_div').onclick = () => false;
        document.getElementById('B2_iframe_div').onclick = () => false;
        document.getElementById('B1_iframe_div').onclick = () => false;
        document.getElementById('A3_iframe_div').onclick = () => false;
        document.getElementById('A2_iframe_div').onclick = () => false;
        document.getElementById('A1_iframe_div').onclick = () => false;
    }
    /* Slide in after click B2_iframe_div */

    /* Create the div which contain B3_iframe */
    var B3_iframe_div = document.createElement('div');
    B3_iframe_div.setAttribute('id', 'B3_iframe_div');
    document.body.appendChild(B3_iframe_div);
    var B3_iframe_title = document.createElement('img');
    B3_iframe_title.src = "assets/imgs/keywordB3.png";
    B3_iframe_title.setAttribute('id', 'B3_iframe_title');
    B3_iframe_div.appendChild(B3_iframe_title);
    var B3_iframe_scale = document.createElement('img');
    B3_iframe_scale.src = "assets/imgs/scaleUp.png";
    B3_iframe_scale.setAttribute('id', 'B3_iframe_scale');
    B3_iframe_div.appendChild(B3_iframe_scale);
    /* Create the div which contain B3_iframe */

    /* Create the B3_iframe */
    var iframeSource_B3 = 'assets/articles/B3.html';
    var B3_iframe = document.createElement('iframe');
    B3_iframe.setAttribute('src', iframeSource_B3);
    B3_iframe.setAttribute('id', 'B3_iframe');
    B3_iframe_div.appendChild(B3_iframe);
    /* Create the B3_iframe */

    /* Scale up after click B3_iframe_scale */
    const B3zindexAni = anime({
        targets: '#B3_iframe_div',
        width: ['23%', '50%'],
        height: ['46%', '100%'],
        top: ['20%', '0%'],
        right: ['300px', '0px'],
        zIndex: {
            value: [5, 99],
            round: true
        },
        loop: false,
        delay: 200,
        duration: 500,
        autoplay: false,
        easing: "easeInOutSine"
    })

    document.querySelector('#B3_iframe_scale').onclick = function () {
        B3zindexAni.play();
        ContainerAni.play();
        B3zindexAni.finished.then(() => {
            B3zindexAni.reverse();
            ContainerAni.reverse();
        })

        var img = document.getElementById('B3_iframe_scale').src;
        if (img.indexOf('scaleDown.png') != -1) {
            document.getElementById('B3_iframe_scale').src = 'assets/imgs/scaleUp.png';
        }
        else {
            document.getElementById('B3_iframe_scale').src = 'assets/imgs/scaleDown.png';
        }
    }
    /* Scale up after click B3_iframe_scale */

    /* Slide in after click B3_iframe_div */
    const B3startAni = anime({
        targets: '#B3_iframe_div',
        width: ['23%', '23%'],
        height: ['46%', '46%'],
        top: ['20%', '20%'],
        right: ['-410px', '300px'],
        zIndex: {
            value: [5, 5],
            round: true
        },
        loop: false,
        delay: 900,
        duration: 500,
        autoplay: false,
        easing: "easeInOutSine"
    })
    // B3_iframe_div can only click once //
    document.querySelector('#B3_iframe_div').onclick = function () {
        C3startAni.play();
        C2startAni.play();
        C1startAni.play();
        B3startAni.play();
        B2startAni.play();
        B1startAni.play();
        A3startAni.play();
        A2startAni.play();
        A1startAni.play();
        SlideContainerAni.play();
        SlideContainerAni.finished.then(() => {
            C3startAni.reverse();
            C2startAni.reverse();
            C1startAni.reverse();
            B3startAni.reverse();
            B2startAni.reverse();
            B1startAni.reverse();
            A3startAni.reverse();
            A2startAni.reverse();
            A1startAni.reverse();
            SlideContainerAni.reverse();
        })
        /*var popup = document.getElementById("popup_slide");
        popup.style.display = "none";*/
        document.getElementById('C3_iframe_div').onclick = () => false;
        document.getElementById('C2_iframe_div').onclick = () => false;
        document.getElementById('C1_iframe_div').onclick = () => false;
        document.getElementById('B3_iframe_div').onclick = () => false;
        document.getElementById('B2_iframe_div').onclick = () => false;
        document.getElementById('B1_iframe_div').onclick = () => false;
        document.getElementById('A3_iframe_div').onclick = () => false;
        document.getElementById('A2_iframe_div').onclick = () => false;
        document.getElementById('A1_iframe_div').onclick = () => false;
    }
    /* Slide in after click B3_iframe_div */

    /* Create the div which contain C1_iframe */
    var C1_iframe_div = document.createElement('div');
    C1_iframe_div.setAttribute('id', 'C1_iframe_div');
    document.body.appendChild(C1_iframe_div);
    var C1_iframe_title = document.createElement('img');
    C1_iframe_title.src = "assets/imgs/keywordC1.png";
    C1_iframe_title.setAttribute('id', 'C1_iframe_title');
    C1_iframe_div.appendChild(C1_iframe_title);
    var C1_iframe_scale = document.createElement('img');
    C1_iframe_scale.src = "assets/imgs/scaleUp.png";
    C1_iframe_scale.setAttribute('id', 'C1_iframe_scale');
    C1_iframe_div.appendChild(C1_iframe_scale);
    /* Create the div which contain C1_iframe */

    /* Create the C1_iframe */
    var iframeSource_C1 = 'assets/articles/C1.html';
    var C1_iframe = document.createElement('iframe');
    C1_iframe.setAttribute('src', iframeSource_C1);
    C1_iframe.setAttribute('id', 'C1_iframe');
    C1_iframe_div.appendChild(C1_iframe);
    /* Create the C1_iframe */

    /* Scale up after click C1_iframe_scale */
    const C1zindexAni = anime({
        targets: '#C1_iframe_div',
        width: ['23%', '50%'],
        height: ['46%', '100%'],
        top: ['15%', '0%'],
        right: ['250px', '0px'],
        zIndex: {
            value: [4, 99],
            round: true
        },
        loop: false,
        delay: 200,
        duration: 500,
        autoplay: false,
        easing: "easeInOutSine"
    })

    document.querySelector('#C1_iframe_scale').onclick = function () {
        C1zindexAni.play();
        ContainerAni.play();
        C1zindexAni.finished.then(() => {
            C1zindexAni.reverse();
            ContainerAni.reverse();
        })

        var img = document.getElementById('C1_iframe_scale').src;
        if (img.indexOf('scaleDown.png') != -1) {
            document.getElementById('C1_iframe_scale').src = 'assets/imgs/scaleUp.png';
        }
        else {
            document.getElementById('C1_iframe_scale').src = 'assets/imgs/scaleDown.png';
        }
    }
    /* Scale up after click C1_iframe_scale */

    /* Slide in after click C1_iframe_div */
    const C1startAni = anime({
        targets: '#C1_iframe_div',
        width: ['23%', '23%'],
        height: ['46%', '46%'],
        top: ['15%', '15%'],
        right: ['-410', '250px'],
        zIndex: {
            value: [4, 4],
            round: true
        },
        loop: false,
        delay: 600,
        duration: 500,
        autoplay: false,
        easing: "easeInOutSine"
    })
    // C1_iframe_div can only click once //
    document.querySelector('#C1_iframe_div').onclick = function () {
        C3startAni.play();
        C2startAni.play();
        C1startAni.play();
        B3startAni.play();
        B2startAni.play();
        B1startAni.play();
        A3startAni.play();
        A2startAni.play();
        A1startAni.play();
        SlideContainerAni.play();
        SlideContainerAni.finished.then(() => {
            C3startAni.reverse();
            C2startAni.reverse();
            C1startAni.reverse();
            B3startAni.reverse();
            B2startAni.reverse();
            B1startAni.reverse();
            A3startAni.reverse();
            A2startAni.reverse();
            A1startAni.reverse();
            SlideContainerAni.reverse();
        })
        /*var popup = document.getElementById("popup_slide");
        popup.style.display = "none";*/
        document.getElementById('C3_iframe_div').onclick = () => false;
        document.getElementById('C2_iframe_div').onclick = () => false;
        document.getElementById('C1_iframe_div').onclick = () => false;
        document.getElementById('B3_iframe_div').onclick = () => false;
        document.getElementById('B2_iframe_div').onclick = () => false;
        document.getElementById('B1_iframe_div').onclick = () => false;
        document.getElementById('A3_iframe_div').onclick = () => false;
        document.getElementById('A2_iframe_div').onclick = () => false;
        document.getElementById('A1_iframe_div').onclick = () => false;
    }
    /* Slide in after click C1_iframe_div */

    /* Create the div which contain C2_iframe */
    var C2_iframe_div = document.createElement('div');
    C2_iframe_div.setAttribute('id', 'C2_iframe_div');
    document.body.appendChild(C2_iframe_div);
    var C2_iframe_title = document.createElement('img');
    C2_iframe_title.src = "assets/imgs/keywordC2.png";
    C2_iframe_title.setAttribute('id', 'C2_iframe_title');
    C2_iframe_div.appendChild(C2_iframe_title);
    var C2_iframe_scale = document.createElement('img');
    C2_iframe_scale.src = "assets/imgs/scaleUp.png";
    C2_iframe_scale.setAttribute('id', 'C2_iframe_scale');
    C2_iframe_div.appendChild(C2_iframe_scale);
    /* Create the div which contain C2_iframe */

    /* Create the C2_iframe */
    var iframeSource_C2 = 'assets/articles/C2.html';
    var C2_iframe = document.createElement('iframe');
    C2_iframe.setAttribute('src', iframeSource_C2);
    C2_iframe.setAttribute('id', 'C2_iframe');
    C2_iframe_div.appendChild(C2_iframe);
    /* Create the C2_iframe */

    /* Scale up after click C2_iframe_scale */
    const C2zindexAni = anime({
        targets: '#C2_iframe_div',
        width: ['23%', '50%'],
        height: ['46%', '100%'],
        top: ['10%', '0%'],
        right: ['100px', '0px'],
        zIndex: {
            value: [3, 99],
            round: true
        },
        loop: false,
        delay: 200,
        duration: 500,
        autoplay: false,
        easing: "easeInOutSine"
    })

    document.querySelector('#C2_iframe_scale').onclick = function () {
        C2zindexAni.play();
        ContainerAni.play();
        C2zindexAni.finished.then(() => {
            C2zindexAni.reverse();
            ContainerAni.reverse();
        })

        var img = document.getElementById('C2_iframe_scale').src;
        if (img.indexOf('scaleDown.png') != -1) {
            document.getElementById('C2_iframe_scale').src = 'assets/imgs/scaleUp.png';
        }
        else {
            document.getElementById('C2_iframe_scale').src = 'assets/imgs/scaleDown.png';
        }
    }
    /* Scale up after click C2_iframe_scale */

    /* Slide in after click C2_iframe_div */
    const C2startAni = anime({
        targets: '#C2_iframe_div',
        width: ['23%', '23%'],
        height: ['46%', '46%'],
        top: ['10%', '10%'],
        right: ['-410px', '100px'],
        zIndex: {
            value: [3, 3],
            round: true
        },
        loop: false,
        delay: 300,
        duration: 500,
        autoplay: false,
        easing: "easeInOutSine"
    })
    // C2_iframe_div can only click once //
    document.querySelector('#C2_iframe_div').onclick = function () {
        C3startAni.play();
        C2startAni.play();
        C1startAni.play();
        B3startAni.play();
        B2startAni.play();
        B1startAni.play();
        A3startAni.play();
        A2startAni.play();
        A1startAni.play();
        SlideContainerAni.play();
        SlideContainerAni.finished.then(() => {
            C3startAni.reverse();
            C2startAni.reverse();
            C1startAni.reverse();
            B3startAni.reverse();
            B2startAni.reverse();
            B1startAni.reverse();
            A3startAni.reverse();
            A2startAni.reverse();
            A1startAni.reverse();
            SlideContainerAni.reverse();
        })
        /*var popup = document.getElementById("popup_slide");
        popup.style.display = "none";*/
        document.getElementById('C3_iframe_div').onclick = () => false;
        document.getElementById('C2_iframe_div').onclick = () => false;
        document.getElementById('C1_iframe_div').onclick = () => false;
        document.getElementById('B3_iframe_div').onclick = () => false;
        document.getElementById('B2_iframe_div').onclick = () => false;
        document.getElementById('B1_iframe_div').onclick = () => false;
        document.getElementById('A3_iframe_div').onclick = () => false;
        document.getElementById('A2_iframe_div').onclick = () => false;
        document.getElementById('A1_iframe_div').onclick = () => false;
    }
    /* Slide in after click C2_iframe_div */

    /* Create the div which contain C3_iframe */
    var C3_iframe_div = document.createElement('div');
    C3_iframe_div.setAttribute('id', 'C3_iframe_div');
    document.body.appendChild(C3_iframe_div);
    var C3_iframe_title = document.createElement('img');
    C3_iframe_title.src = "assets/imgs/keywordC3.png";
    C3_iframe_title.setAttribute('id', 'C3_iframe_title');
    C3_iframe_div.appendChild(C3_iframe_title);
    var C3_iframe_scale = document.createElement('img');
    C3_iframe_scale.src = "assets/imgs/scaleUp.png";
    C3_iframe_scale.setAttribute('id', 'C3_iframe_scale');
    C3_iframe_div.appendChild(C3_iframe_scale);
    /* Create the div which contain C3_iframe */

    /* Create the C3_iframe */
    var iframeSource_C3 = 'assets/articles/C3.html';
    var C3_iframe = document.createElement('iframe');
    C3_iframe.setAttribute('src', iframeSource_C3);
    C3_iframe.setAttribute('id', 'C3_iframe');
    C3_iframe_div.appendChild(C3_iframe);
    /* Create the C3_iframe */

    /* Scale up after click C3_iframe_scale */
    const C3zindexAni = anime({
        targets: '#C3_iframe_div',
        width: ['23%', '50%'],
        height: ['46%', '100%'],
        top: ['5%', '0%'],
        right: ['50px', '0px'],
        zIndex: {
            value: [2, 99],
            round: true
        },
        loop: false,
        delay: 200,
        duration: 500,
        autoplay: false,
        easing: "easeInOutSine"
    })

    document.querySelector('#C3_iframe_scale').onclick = function () {
        C3zindexAni.play();
        ContainerAni.play();
        C3zindexAni.finished.then(() => {
            C3zindexAni.reverse();
            ContainerAni.reverse();
        })

        var img = document.getElementById('C3_iframe_scale').src;
        if (img.indexOf('scaleDown.png') != -1) {
            document.getElementById('C3_iframe_scale').src = 'assets/imgs/scaleUp.png';
        }
        else {
            document.getElementById('C3_iframe_scale').src = 'assets/imgs/scaleDown.png';
        }
    }
    /* Scale up after click C3_iframe_scale */

    /* Slide in after click C3_iframe_div */
    const C3startAni = anime({
        targets: '#C3_iframe_div',
        width: ['23%', '23%'],
        height: ['46%', '46%'],
        top: ['5%', '5%'],
        right: ['-410px', '50px'],
        zIndex: {
            value: [2, 2],
            round: true
        },
        loop: false,
        duration: 500,
        autoplay: false,
        easing: "easeInOutSine"
    })
    // C3_iframe_div can only click once //
    document.querySelector('#C3_iframe_div').onclick = function () {
        C3startAni.play();
        C2startAni.play();
        C1startAni.play();
        B3startAni.play();
        B2startAni.play();
        B1startAni.play();
        A3startAni.play();
        A2startAni.play();
        A1startAni.play();
        SlideContainerAni.play();
        SlideContainerAni.finished.then(() => {
            C3startAni.reverse();
            C2startAni.reverse();
            C1startAni.reverse();
            B3startAni.reverse();
            B2startAni.reverse();
            B1startAni.reverse();
            A3startAni.reverse();
            A2startAni.reverse();
            A1startAni.reverse();
            SlideContainerAni.reverse();
        })
        /*var popup = document.getElementById("popup_slide");
        popup.style.display = "none";*/
        document.getElementById('C3_iframe_div').onclick = () => false;
        document.getElementById('C2_iframe_div').onclick = () => false;
        document.getElementById('C1_iframe_div').onclick = () => false;
        document.getElementById('B3_iframe_div').onclick = () => false;
        document.getElementById('B2_iframe_div').onclick = () => false;
        document.getElementById('B1_iframe_div').onclick = () => false;
        document.getElementById('A3_iframe_div').onclick = () => false;
        document.getElementById('A2_iframe_div').onclick = () => false;
        document.getElementById('A1_iframe_div').onclick = () => false;
    }
    /* Slide in after click C3_iframe_div */

    /* toggle all element slide in-out */
    document.querySelector('#bt1').onclick = function () {
        //disable the click event
        document.getElementById('bt1').style.pointerEvents = 'none';
        C3startAni.play();
        C2startAni.play();
        C1startAni.play();
        B3startAni.play();
        B2startAni.play();
        B1startAni.play();
        A3startAni.play();
        A2startAni.play();
        A1startAni.play();
        SlideContainerAni.play();
        SlideContainerAni.finished.then(() => {
            C3startAni.reverse();
            C2startAni.reverse();
            C1startAni.reverse();
            B3startAni.reverse();
            B2startAni.reverse();
            B1startAni.reverse();
            A3startAni.reverse();
            A2startAni.reverse();
            A1startAni.reverse();
            SlideContainerAni.reverse();
            //enable the click event
            document.getElementById('bt1').style.pointerEvents = 'auto';
        })
    }
    /* toggle all element slide in-out */

    /* Receive postMessage from iframe */
    // addEventListener support for IE8
    function bindEvent(element, eventName, eventHandler) {
        if (element.addEventListener) {
            element.addEventListener(eventName, eventHandler, false);
        } else if (element.attachEvent) {
            element.attachEvent('on' + eventName, eventHandler);
        }
    }
    // Listen to message from child window
    bindEvent(window, 'message', function (e) {
        if (e.data.id) {
            MainData.pdf[e.data.id] = e.data;
        }
        switch (e.data.id) {

            case 'a1':
                // console.log(e.data.id);
                // console.log(e.data.value);
                s1 = e.data.value;
                Animation_A1.seek(s1);
                break;

            case 'a2':
                // console.log(e.data.id);
                // console.log(e.data.value);
                s2 = e.data.value;
                Animation_A2.seek(s2);
                break;

            case 'a3':
                // console.log(e.data.id);
                // console.log(e.data.value);
                s3 = e.data.value;
                Animation_A3.seek(s3);
                break;

            case 'b1':
                // console.log(e.data.id);
                // console.log(e.data.value);
                sb1 = e.data.value;
                Animation_B1.seek(sb1);
                break;

            case 'b2':
                // console.log(e.data.id);
                // console.log(e.data.value);
                sb2 = e.data.value;
                Animation_B2.seek(sb2);
                break;

            case 'b3':
                // console.log(e.data.id);
                // console.log(e.data.value);
                sb3 = e.data.value;
                Animation_B3.seek(sb3);
                break;

            case 'c1':
                // console.log(e.data.id);
                // console.log(e.data.value);
                sc1 = e.data.value;
                Animation_C1.seek(sc1);
                break;

            case 'c2':
                // console.log(e.data.id);
                // console.log(e.data.value);
                sc2 = e.data.value;
                Animation_C2.seek(sc2);
                break;

            case 'c3':
                // console.log(e.data.id);
                // console.log(e.data.value);
                sc3 = e.data.value;
                Animation_C3.seek(sc3);
                break;
        }
    });
    /* Receive postMessage from iframe */

    /* js media query test */
    /*function RPFunction(x) {
        if (x.matches) { // If media query matches
            document.querySelector('#C3_iframe_div').style.display = "none";
        } else {
            document.querySelector('#C3_iframe_div').style.display = "block";
        }
    }

    var x = window.matchMedia("(max-width: 700px)")
    RPFunction(x) // Call listener function at run time
    x.addListener(RPFunction) // Attach listener function on state changes*/
    /* js media query test */
})();