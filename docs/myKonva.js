var elmnt = document.getElementById("canvas");
var width = elmnt.offsetWidth;
var height = elmnt.offsetHeight;
//var width = window.innerWidth;
//var height = window.innerHeight;

var stage = new Konva.Stage({
    container: '.container',
    width: width,
    height: height,
});

var layer = new Konva.Layer();
stage.add(layer);

// A1
var A1Img = new Konva.Image({
    x: Math.random() * stage.width(),
    y: Math.random() * stage.height(),
    rotation: Math.random() * 360,
    width: 200,
    height: 137,
    draggable: true,
});
layer.add(A1Img);

// B1
var B1Img = new Konva.Image({
    x: Math.random() * stage.width(),
    y: Math.random() * stage.height(),
    rotation: Math.random() * 360,
    width: 200,
    height: 137,
    draggable: true,
});
layer.add(B1Img);

var imageObj1 = new Image();
imageObj1.onload = function () {
    A1Img.image(imageObj1);
    layer.draw();
};
imageObj1.src = 'assets/imgs/A1.png';

var imageObj2 = new Image();
imageObj2.onload = function () {
    B1Img.image(imageObj2);
    layer.draw();
};
imageObj2.src = 'assets/imgs/B1.png';

// use event delegation to update pointer style
// and apply borders
layer.on('mouseover', function (evt) {
    var shape = evt.target;
    document.body.style.cursor = 'pointer';
    layer.draw();
});
layer.on('mouseout', function (evt) {
    var shape = evt.target;
    document.body.style.cursor = 'default';
    layer.draw();
});