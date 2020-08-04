const { PageSizes, degrees, PDFDocument, rgb, StandardFonts } = PDFLib;

function getCanvasBlob(canvas) {
    return new Promise(function (resolve, reject) {
        canvas.toBlob(function (blob) {
            resolve(blob)
        })
    })
}

function generatePageArray(pageCount) {
    if (pageCount < 0) { return []; }
    if (!Number.isInteger(pageCount)) { return []; }

    return [...Array.from(Array(pageCount), (_, i) => i)];
}

function draw() {
    let canvas = document.getElementById("cover");
    if (canvas.getContext) {
        let ctx = canvas.getContext("2d");

        ctx.fillStyle = "rgb(200,0,0)";
        ctx.fillRect(10, 10, 55, 50);

        ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
        ctx.fillRect(30, 30, 55, 50);
    }
}

async function mergePdf(callback) {
    // Fetch an existing PDF document
    const url1 = 'https://raw.githubusercontent.com/seanmars/practice-front-end-pdf/master/filehost/page_1.pdf';
    const url2 = 'https://raw.githubusercontent.com/seanmars/practice-front-end-pdf/master/filehost/page_2.pdf';
    const url3 = 'https://raw.githubusercontent.com/seanmars/practice-front-end-pdf/master/filehost/page_3.pdf';

    /** @type {HTMLCanvasElement} */
    let canvas = document.getElementById("cover");
    getCanvasBlob(canvas)
        .then(async function (blob) {
            // console.log(blob);
            let buffer = await blob.arrayBuffer();
            // console.log(buffer);
            let resultPdf = await merge([url1, url2, url3], buffer);


            if (callback) { callback(resultPdf); }
        });
}

async function downloadPdf() {
    await mergePdf(async (pdf) => {
        const pdfBytes = await pdf.save();
        download(pdfBytes, "merged.pdf", "application/pdf");
    });
}

async function previewPdf() {
    await mergePdf(async (pdf) => {
        const base64 = await pdf.saveAsBase64({ dataUri: true });
        let embed = document.querySelector('div[name=pdf-preview] embed');
        embed.setAttribute('src', base64);
    });
}

/**
 * Merge the all pdf
 * @param {Array<string>} urls
 * @param {ArrayBuffer} imgArrayBuffer
 *
 * @returns {PDFDocument}
 */
async function merge(urls, imgArrayBuffer) {
    if (!urls ||
        !Array.isArray(urls) ||
        urls.length == 0) {
        return null;
    }

    let pdfDocs = [];
    for (let i = 0; i < urls.length; i++) {
        const url = urls[i];
        let bytes = await fetch(url).then(res => res.arrayBuffer());
        let pdfDoc = await PDFDocument.load(bytes, {
            updateMetadata: false
        });
        pdfDocs.push(pdfDoc);
    }

    let resultPdf = await PDFDocument.create();
    // Make cover
    if (imgArrayBuffer) {
        const img = await resultPdf.embedPng(imgArrayBuffer);
        const page = resultPdf.addPage(PageSizes.A4);
        // Draw the image in the center of the page
        page.drawImage(img, {
            x: page.getWidth() / 2 - img.width / 2,
            y: page.getHeight() / 2 - img.height / 2,
            width: img.width,
            height: img.height,
        });
    }

    // Make content
    for (let i = 0; i < pdfDocs.length; i++) {
        const pdfDoc = pdfDocs[i];

        let pages = generatePageArray(pdfDoc.getPageCount());
        if (!pages) { return; }
        const pdfPages = await resultPdf.copyPages(pdfDoc, pages);
        [...pdfPages].forEach(p => {
            resultPdf.addPage(p);
        });
    }

    return resultPdf;
}

draw();