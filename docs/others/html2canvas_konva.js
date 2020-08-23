var width = window.innerWidth;
var height = window.innerHeight;

var stage = new Konva.Stage({
    container: 'container',
    width: width,
    height: height,
    draggable: true,
});

const layer = new Konva.Layer();
stage.add(layer);

const shape = new Konva.Image({
    x: 10,
    y: 10,
    draggable: true,
    stroke: 'red',
    scaleX: 1 / window.devicePixelRatio,
    scaleY: 1 / window.devicePixelRatio,
});
layer.add(shape);

layer.draw();

function renderText() {
    var iframe = document.getElementById('editor-container');
    //var iframeDocument = iframe.contentDocument || iframe.contentWindow;
    /*if (!iframeDocument) {
        throw "iframe couldn't be found in DOM.";
    }*/
    //var iframeContent = iframeDocument.getElementById('test');
    // var i = document.getElementById('a1').contentWindow.document.write('content');
    /*var frameObj = document.getElementById('a1');

    var frameContent = frameObj.contentWindow.document.getElementsByTagName('body')[0].innerHTML;*/

    // convert DOM into image
    html2canvas(iframe, {
        backgroundColor: 'rgba(0,0,0,0)',
    }).then((canvas) => {
        // show it inside Konva.Image
        shape.image(canvas);
        layer.batchDraw();
    });
}

// make initial rendering
renderText();
