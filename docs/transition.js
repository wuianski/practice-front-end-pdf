// slides
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}

// When the user clicks on bt1, open the popup intro slides.
function popUp1() {
    /*var popup = document.getElementById("popup_slide");
    popup.style.display = "block";*/
}

// When the user clicks on bt2, open the popup share element.
function popUp2() {
    var popup_share = document.getElementById("popup_share");
    popup_share.style.display = "block";
}

// Close share element.
function close_share() {
    var popup_share = document.getElementById("popup_share");
    popup_share.style.display = "none";
}

// Close share element.
function download_pdf() {
    function html2canvasAndMergeAndDownload(canvas) {
        getCanvasBlob(canvas)
            .then(async function (blob) {
                let imgArrayBuffer = await blob.arrayBuffer();
                let coverPdf = 'filehost/imgContainer_bg.pdf';
                let resultPdf = await merge(urls, coverPdf, imgArrayBuffer);
                let pdfBytes = await resultPdf.save();
                download(pdfBytes, "merged.pdf", "application/pdf");
            });
    }

    var popup_share = document.getElementById("popup_share");
    popup_share.style.display = "none";
    document.getElementById('bt1').style.pointerEvents = 'auto';
    document.getElementById('bt2').style.pointerEvents = 'auto';

    let urls = MainData.getPdfUrls();
    let imgContainer = document.getElementById("imgContainer");
    let options = {
        logging: false,
        scale: 1
    };
    html2canvas(imgContainer).then(html2canvasAndMergeAndDownload, options);
}

// Close share element.
function share_img() {
    /*var popup_share = document.getElementById("popup_share");
    popup_share.style.display = "none";
    document.getElementById('bt1').style.pointerEvents = 'auto';
    document.getElementById('bt2').style.pointerEvents = 'auto';*/
}