let MainData = {
    pdf: {},

    defaultPdf: ['A.pdf', 'B.pdf', 'C.pdf'],

    getPdfUrls: function () {
        let filtered = Object.values(this.pdf)
            .filter(x => x.value > 0);

        let result = filtered.map(x => x.file);
        if (result.length == 0) {
            result = this.defaultPdf;
        } else {
            result = [...new Set(result)];
            //result = result.sort();
        }

        return result.map(x => `filehost/${x}`);
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

    /* Scale up imgContainer */
    const ContainerAni = anime({
        targets: '#imgContainer',
        width: ['35%', '49%'],//from this real default value to 0%
        height: ['75%', '100%'],//from this real default value to 0%
        top: ['13%', '0%'],//from this real default value to 0%
        left: ['8%', '0%'],//from this real default value to 0%
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
    /* Scale up imgContainer */

    /* first setting of imgContainer */
    anime({
        targets: '#imgContainer',
        left: '-80%', //this is a fist instant value
        loop: false,
        duration: 0,
        autoplay: true,
        easing: "easeInOutSine"
    })
    /* first setting of imgContainer */

    /* Slide in after click #bt1 */
    const SlideContainerAni = anime({
        targets: '#imgContainer',
        width: '35%',//this is a real default value
        height: '75%',//this is a real default value
        top: '13%',//this is a real default value
        left: '8%',//this is a real default value
        /*zIndex: {
            value: [10, 10],
            round: true
        },*/
        loop: false,
        delay: 2000,
        duration: 500,
        autoplay: false,
        easing: "easeInOutSine"
    })
    /* Slide in after click #bt1 */

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
            translateX: function () { return anime.random(-10, -14) + 'rem'; },
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
            translateY: function () { return anime.random(-13, -30) + 'rem'; },
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
            translateX: function () { return anime.random(13, -20) + 'rem'; },
            translateY: function () { return anime.random(-13, 20) + 'rem'; },
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
            translateY: function () { return anime.random(-10, -14) + 'rem'; },
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
            translateX: function () { return anime.random(-33, 10) + 'rem'; },
            translateY: function () { return anime.random(-13, -30) + 'rem'; },
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


    /* 
     * Create the div which contain A1_iframe *
     */
    var A1_iframe_div = document.createElement('div');
    A1_iframe_div.setAttribute('id', 'A1_iframe_div');
    A1_iframe_div.setAttribute('class', 'iframe_div');
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
        width: ['23%', '50%'],//from this real default value to 0%
        height: ['46%', '100%'],//from this real default value to 0%
        top: ['45%', '0%'],//from this real default value to 0%
        right: ['25%', '0%'],//from this real default value to 0%
        //zIndex: 99,
        /*zIndex: {
            value: 99,//from this real default value to 99
            round: true
        },*/
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

    /* first setting of A1_iframe_div */
    anime({
        targets: '#A1_iframe_div',
        loop: false,
        duration: 0,
        autoplay: true,
        easing: "easeInOutSine",
        zIndex: {
            value: [9, 9],//this is a real default value
            round: true
        },
    })
    /* first setting of A1_iframe_div */

    /* Slide setting of A1_iframe_div */
    const A1startAni = anime({
        targets: '#A1_iframe_div',
        width: '23%',//this is a real default value
        height: '46%',//this is a real default value
        top: '45%',//this is a real default value
        right: ['-20%', '25%'],//this is a real default value
        /*zIndex: {
            value: [9, 9],//this is a real default value
            round: true
        },*/
        loop: false,
        delay: 1800,
        duration: 500,
        autoplay: false,
        easing: "easeInOutSine"
    })
    /* Slide setting of A1_iframe_div */

    /* 
     * Create the div which contain A2_iframe *
     */
    var A2_iframe_div = document.createElement('div');
    A2_iframe_div.setAttribute('id', 'A2_iframe_div');
    A2_iframe_div.setAttribute('class', 'iframe_div');
    document.body.appendChild(A2_iframe_div);
    var A2_iframe_title = document.createElement('img');
    A2_iframe_title.src = "assets/imgs/keywordA2.png";
    A2_iframe_title.setAttribute('id', 'A2_iframe_title');
    A2_iframe_div.appendChild(A2_iframe_title);
    var A2_iframe_scale = document.createElement('img');
    A2_iframe_scale.src = "assets/imgs/scaleUp.png";
    A2_iframe_scale.setAttribute('id', 'A2_iframe_scale');
    A2_iframe_div.appendChild(A2_iframe_scale);
    /* Create the div which contain A1_iframe */

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
        width: ['23%', '50%'],//from this real default value to 0%
        height: ['46%', '100%'],//from this real default value to 0%
        top: ['40%', '0%'],//from this real default value to 0%
        right: ['15%', '0%'],//from this real default value to 0%
        //
        //zIndex: 99,
        /*zIndex: {
            value: 99,//from this real default value to 99
            round: true
        },*/
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

    /* first setting of A2_iframe_div */
    anime({
        targets: '#A2_iframe_div',
        loop: false,
        duration: 0,
        autoplay: true,
        easing: "easeInOutSine",
        zIndex: {
            value: [8, 8],//this is a real default value
            round: true
        },
    })
    /* first setting of A2_iframe_div */

    /* Slide setting of A2_iframe_div */
    const A2startAni = anime({
        targets: '#A2_iframe_div',
        width: '23%',//this is a real default value
        height: '46%',//this is a real default value
        top: '40%',//this is a real default value
        right: ['-20%', '15%'],//this is a real default value
        /*zIndex: {
            value: [8, 8],//this is a real default value
            round: true
        },*/
        loop: false,
        delay: 1600,
        duration: 500,
        autoplay: false,
        easing: "easeInOutSine"
    })
    /* Slide setting of A2_iframe_div */

    /* 
     * Create the div which contain A3_iframe *
     */
    var A3_iframe_div = document.createElement('div');
    A3_iframe_div.setAttribute('id', 'A3_iframe_div');
    A3_iframe_div.setAttribute('class', 'iframe_div');
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
        width: ['23%', '50%'],//from this real default value to 0%
        height: ['46%', '100%'],//from this real default value to 0%
        top: ['35%', '0%'],//from this real default value to 0%
        right: ['5%', '0%'],//from this real default value to 0%
        //zIndex: 99,
        /*zIndex: {
            value: 99,//from this real default value to 99
            round: true
        },*/
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

    /* first setting of A3_iframe_div */
    anime({
        targets: '#A3_iframe_div',
        loop: false,
        duration: 0,
        autoplay: true,
        easing: "easeInOutSine",
        zIndex: {
            value: [7, 7],//this is a real default value
            round: true
        },
    })
    /* first setting of A3_iframe_div */

    /* Slide setting of A3_iframe_div */
    const A3startAni = anime({
        targets: '#A3_iframe_div',
        width: '23%',//this is a real default value
        height: '46%',//this is a real default value
        top: '35%',//this is a real default value
        right: ['-20%', '5%'],//this is a real default value
        /*zIndex: {
            value: [7, 7],//this is a real default value
            round: true
        },*/
        loop: false,
        delay: 1400,
        duration: 500,
        autoplay: false,
        easing: "easeInOutSine"
    })
    /* Slide setting of A3_iframe_div */

    /* 
     * Create the div which contain B1_iframe *
     */
    var B1_iframe_div = document.createElement('div');
    B1_iframe_div.setAttribute('id', 'B1_iframe_div');
    B1_iframe_div.setAttribute('class', 'iframe_div');
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
        width: ['23%', '50%'],//from this real default value to 0%
        height: ['46%', '100%'],//from this real default value to 0%
        top: ['30%', '0%'],//from this real default value to 0%
        right: ['10%', '0%'],//from this real default value to 0%
        //zIndex: 99,
        /*zIndex: {
            value: 99,//from this real default value to 99
            round: true
        },*/
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

    /* first setting of B1_iframe_div */
    anime({
        targets: '#B1_iframe_div',
        loop: false,
        duration: 0,
        autoplay: true,
        easing: "easeInOutSine",
        zIndex: {
            value: [6, 6],//this is a real default value
            round: true
        },
    })
    /* first setting of B1_iframe_div */

    /* Slide setting of B1_iframe_div */
    const B1startAni = anime({
        targets: '#B1_iframe_div',
        width: '23%',//this is a real default value
        height: '46%',//this is a real default value
        top: '30%',//this is a real default value
        right: ['-20%', '10%'],//this is a real default value
        /*zIndex: {
            value: [6, 6],//this is a real default value
            round: true
        },*/
        loop: false,
        delay: 1200,
        duration: 500,
        autoplay: false,
        easing: "easeInOutSine"
    })
    /* Slide setting of B1_iframe_div */

    /* 
     * Create the div which contain B2_iframe *
     */
    var B2_iframe_div = document.createElement('div');
    B2_iframe_div.setAttribute('id', 'B2_iframe_div');
    B2_iframe_div.setAttribute('class', 'iframe_div');
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
        width: ['23%', '50%'],//from this real default value to 0%
        height: ['46%', '100%'],//from this real default value to 0%
        top: ['25%', '0%'],//from this real default value to 0%
        right: ['12%', '0%'],//from this real default value to 0%
        //zIndex: 99,
        /*zIndex: {
            value: 99,//from this real default value to 99
            round: true
        },*/
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

    /* first setting of B2_iframe_div */
    anime({
        targets: '#B2_iframe_div',
        loop: false,
        duration: 0,
        autoplay: true,
        easing: "easeInOutSine",
        zIndex: {
            value: [5, 5],//this is a real default value
            round: true
        },
    })
    /* first setting of B2_iframe_div */

    /* Slide setting of B2_iframe_div */
    const B2startAni = anime({
        targets: '#B2_iframe_div',
        width: '23%',//this is a real default value
        height: '46%',//this is a real default value
        top: '25%',//this is a real default value
        right: ['-20%', '12%'],//this is a real default value
        /*zIndex: {
            value: [5, 5],//this is a real default value
            round: true
        },*/
        loop: false,
        delay: 1000,
        duration: 500,
        autoplay: false,
        easing: "easeInOutSine"
    })
    /* Slide setting of B2_iframe_div */

    /* 
     * Create the div which contain B3_iframe *
     */
    var B3_iframe_div = document.createElement('div');
    B3_iframe_div.setAttribute('id', 'B3_iframe_div');
    B3_iframe_div.setAttribute('class', 'iframe_div');
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
        width: ['23%', '50%'],//from this real default value to 0%
        height: ['46%', '100%'],//from this real default value to 0%
        top: ['20%', '0%'],//from this real default value to 0%
        right: ['20%', '0%'],//from this real default value to 0%
        //zIndex: 99,
        /*zIndex: {
            value: 99,//from this real default value to 99
            round: true
        },*/
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

    /* first setting of B3_iframe_div */
    anime({
        targets: '#B3_iframe_div',
        loop: false,
        duration: 0,
        autoplay: true,
        easing: "easeInOutSine",
        zIndex: {
            value: [4, 4],//this is a real default value
            round: true
        },
    })
    /* first setting of B3_iframe_div */

    /* Slide setting of B3_iframe_div */
    const B3startAni = anime({
        targets: '#B3_iframe_div',
        width: '23%',//this is a real default value
        height: '46%',//this is a real default value
        top: '20%',//this is a real default value
        right: ['-20%', '20%'],//this is a real default value
        /*zIndex: {
            value: [4, 4],//this is a real default value
            round: true
        },*/
        loop: false,
        delay: 800,
        duration: 500,
        autoplay: false,
        easing: "easeInOutSine"
    })
    /* Slide setting of B3_iframe_div */

    /* 
     * Create the div which contain C1_iframe *
     */
    var C1_iframe_div = document.createElement('div');
    C1_iframe_div.setAttribute('id', 'C1_iframe_div');
    C1_iframe_div.setAttribute('class', 'iframe_div');
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
        width: ['23%', '50%'],//from this real default value to 0%
        height: ['46%', '100%'],//from this real default value to 0%
        top: ['15%', '0%'],//from this real default value to 0%
        right: ['15%', '0%'],//from this real default value to 0%
        //zIndex: 99,
        /*zIndex: {
            value: 99,//from this real default value to 99
            round: true
        },*/
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

    /* first setting of C1_iframe_div */
    anime({
        targets: '#C1_iframe_div',
        loop: false,
        duration: 0,
        autoplay: true,
        easing: "easeInOutSine",
        zIndex: {
            value: [3, 3],//this is a real default value
            round: true
        },
    })
    /* first setting of C1_iframe_div */

    /* Slide setting of C1_iframe_div */
    const C1startAni = anime({
        targets: '#C1_iframe_div',
        width: '23%',//this is a real default value
        height: '46%',//this is a real default value
        top: '15%',//this is a real default value
        right: ['-20%', '15%'],//this is a real default value
        /*zIndex: {
            value: [3, 3],//this is a real default value
            round: true
        },*/
        loop: false,
        delay: 600,
        duration: 500,
        autoplay: false,
        easing: "easeInOutSine"
    })
    /* Slide setting of C1_iframe_div */

    /* 
     * Create the div which contain C2_iframe *
     */
    var C2_iframe_div = document.createElement('div');
    C2_iframe_div.setAttribute('id', 'C2_iframe_div');
    C2_iframe_div.setAttribute('class', 'iframe_div');
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
        width: ['23%', '50%'],//from this real default value to 0%
        height: ['46%', '100%'],//from this real default value to 0%
        top: ['10%', '0%'],//from this real default value to 0%
        right: ['6%', '0%'],//from this real default value to 0%
        //zIndex: 99,
        /*zIndex: {
            value: 99,//from this real default value to 99
            round: true
        },*/
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

    /* first setting of C2_iframe_div */
    anime({
        targets: '#C2_iframe_div',
        loop: false,
        duration: 0,
        autoplay: true,
        easing: "easeInOutSine",
        zIndex: {
            value: [2, 2],//this is a real default value
            round: true
        },
    })
    /* first setting of C2_iframe_div */

    /* Slide setting of C2_iframe_div */
    const C2startAni = anime({
        targets: '#C2_iframe_div',
        width: '23%',//this is a real default value
        height: '46%',//this is a real default value
        top: '10%',//this is a real default value
        right: ['-20%', '6%'],//this is a real default value
        /*zIndex: {
            value: [2, 2],//this is a real default value
            round: true
        },*/
        loop: false,
        delay: 400,
        duration: 500,
        autoplay: false,
        easing: "easeInOutSine"
    })
    /* Slide setting of C2_iframe_div */

    /* 
     * Create the div which contain C3_iframe *
     */
    var C3_iframe_div = document.createElement('div');
    C3_iframe_div.setAttribute('id', 'C3_iframe_div');
    C3_iframe_div.setAttribute('class', 'iframe_div');
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

    /*var C3_prev = document.createElement('div');
    C3_prev.setAttribute('id', 'C3_prev');
    var C3_prevText = document.createTextNode("< prev");
    C3_prev.appendChild(C3_prevText);
    C3_iframe_div.appendChild(C3_prev);*/


    /* Scale up after click C3_iframe_scale */
    const C3zindexAni = anime({
        targets: '#C3_iframe_div',
        width: ['23%', '50%'],//from this real default value to 0%
        height: ['46%', '100%'],//from this real default value to 0%
        top: ['5%', '0%'],//from this real default value to 0%
        right: ['3%', '0%'],//from this real default value to 0%
        //zIndex: 99,
        /*zIndex: {
            value: 99,//from this real default value to 99
            round: true
        },*/
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

    /*document.querySelector('#C3_prev').onclick = function () {
       
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
        checkZ_index("C2_iframe_div");
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
    }*/

    /* first setting of C3_iframe_div */
    anime({
        targets: '#C3_iframe_div',
        loop: false,
        duration: 0,
        autoplay: true,
        easing: "easeInOutSine",
        zIndex: {
            value: [1, 1],//this is a real default value
            round: true
        },
    })
    /* first setting of C3_iframe_div */

    /* Slide setting of C3_iframe_div */
    const C3startAni = anime({
        targets: '#C3_iframe_div',
        width: '23%',//this is a real default value
        height: '46%',//this is a real default value
        top: '5%',//this is a real default value
        right: ['-20%', '3%'],//this is a real default value
        /*zIndex: {
            value: [1, 1],//this is a real default value
            round: true
        },*/
        loop: false,
        delay: 200,
        duration: 500,
        autoplay: false,
        easing: "easeInOutSine"
    })
    /* Slide setting of C3_iframe_div */

    document.querySelector('.slides_container').style.display = 'block';
    /*
     * Trigger all frames slide in-out after click #bt1 
     */
    document.querySelector('#bt1').onclick = function () {
        //disable the click event
        document.getElementById('bt1').style.pointerEvents = 'none';
        A1startAni.play();
        A2startAni.play();
        A3startAni.play();
        B1startAni.play();
        B2startAni.play();
        B3startAni.play();
        C1startAni.play();
        C2startAni.play();
        C3startAni.play();
        SlideContainerAni.play();
        SlideContainerAni.finished.then(() => {
            A1startAni.reverse();
            A2startAni.reverse();
            A3startAni.reverse();
            B1startAni.reverse();
            B2startAni.reverse();
            B3startAni.reverse();
            C1startAni.reverse();
            C2startAni.reverse();
            C3startAni.reverse();
            SlideContainerAni.reverse();
            //re-enable the click event
            document.getElementById('bt1').style.pointerEvents = 'auto';
        })
        var xslide = document.querySelector(".slides_container");
        if (xslide.style.display === "block") {
            xslide.style.transitionDuration = "1.5s";
            xslide.style.display = "none";
        } else {
            xslide.style.display = "block";
        }

    }
    /* Trigger all frames slide in-out after click #bt1 */

    /*
     *  #bt1, #bt2, close_btn setting
     */
    document.querySelector('#bt2').onclick = function () {
        var popup_share = document.getElementById("popup_share");
        popup_share.style.display = "block";

        document.getElementById('bt1').style.pointerEvents = 'none';
        document.getElementById('bt2').style.pointerEvents = 'none';
    }
    // Close share element.
    document.querySelector('#close_btn').onclick = function () {
        document.getElementById('bt1').style.pointerEvents = 'auto';
        document.getElementById('bt2').style.pointerEvents = 'auto';
    }
    /* #bt1, #bt2, close_btn setting */


    /*
     * Receive postMessage from iframe 
     */
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
                //console.log(e.data.value);
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
                //console.log(e.data.value);
                sc2 = e.data.value;
                Animation_C2.seek(sc2);
                break;

            case 'c3':
                // console.log(e.data.id);
                //console.log(e.data.value);
                sc3 = e.data.value;
                Animation_C3.seek(sc3);
                /*if (sc3 >= 275) {
                    console.log('max');
                    C3_prev.style.display = "block";
                }*/
                break;
        }
    });
    /* Receive postMessage from iframe */

    /*
     * Change iframe's z-index by clicking itself
     */
    function checkZ_index(id) {
        var class_elements = document.getElementsByClassName("iframe_div");
        var maxi_zIndex_num = 10;
        for (var i = 0, len = class_elements.length; i < len; i++) {
            // elements[i].style ...
            var id_element = document.getElementById(id);
            //console.log(`click element ${id} z-index:`, id_element.style.zIndex);
            //console.log(`click class_index ${class_elements[i].id} z-index:`, class_elements[i].style.zIndex);
            if (id_element.style.zIndex < maxi_zIndex_num) {
                id_element.style.zIndex = maxi_zIndex_num;
            } else if (class_elements[i].id != id) {
                class_elements[i].style.zIndex = id_element.style.zIndex - i;
                //console.log(`click class_index ${class_elements[i].id} z-index:`, class_elements[i].style.zIndex);
            }
        }
    }

    document.querySelector('#A1_iframe_div').onclick = function () {
        checkZ_index("A1_iframe_div");
    }
    document.querySelector('#A2_iframe_div').onclick = function () {
        checkZ_index("A2_iframe_div");
    }
    document.querySelector('#A3_iframe_div').onclick = function () {
        checkZ_index("A3_iframe_div");
    }
    document.querySelector('#B1_iframe_div').onclick = function () {
        checkZ_index("B1_iframe_div");
    }
    document.querySelector('#B2_iframe_div').onclick = function () {
        checkZ_index("B2_iframe_div");
    }
    document.querySelector('#B3_iframe_div').onclick = function () {
        checkZ_index("B3_iframe_div");
    }
    document.querySelector('#C1_iframe_div').onclick = function () {
        checkZ_index("C1_iframe_div");
    }
    document.querySelector('#C2_iframe_div').onclick = function () {
        checkZ_index("C2_iframe_div");
    }
    document.querySelector('#C3_iframe_div').onclick = function () {
        checkZ_index("C3_iframe_div");
    }
    /* Change iframe's z-index by clicking itself*/

})();