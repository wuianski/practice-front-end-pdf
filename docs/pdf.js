const { PageSizes, degrees, PDFDocument, rgb, StandardFonts } = PDFLib;

/* sample
let canvas = document.getElementById("cover");
getCanvasBlob(canvas)
    .then(async function (blob) {
        // console.log(blob);
        let buffer = await blob.arrayBuffer();
        // console.log(buffer);
        let resultPdf = await merge([url1, url2, url3], buffer);


        if (callback) { callback(resultPdf); }
    });
*/
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

/**
 * Merge the all pdf
 * @param {Array<string>} urls
 * @param {ArrayBuffer} imgArrayBuffer
 *
 * @returns {PDFDocument}
 */
async function merge(urls, imgArrayBuffer) {
    let pdfDocs = [];
    if (!(!urls || !Array.isArray(urls) || urls.length == 0)) {
        for (let i = 0; i < urls.length; i++) {
            const url = urls[i];
            let bytes = await fetch(url).then(res => res.arrayBuffer());
            let pdfDoc = await PDFDocument.load(bytes, {
                updateMetadata: false
            });
            pdfDocs.push(pdfDoc);
        }
    }

    let resultPdf = await PDFDocument.create();
    // Make cover
    if (imgArrayBuffer) {
        const img = await resultPdf.embedPng(imgArrayBuffer);
        const page = resultPdf.addPage(PageSizes.A4);

        // Scale to fit
        let scaleW = page.getWidth() / img.width;
        let scaleH = page.getHeight() / img.height;
        const dimsW = img.scale(scaleW);
        const dimsH = img.scale(scaleH);

        // Draw the image in the center of the page
        page.drawImage(img, {
            x: page.getWidth() / 2 - dimsW.width / 2,
            y: page.getHeight() / 2 - dimsH.height / 2,
            width: dimsW.width,
            height: dimsH.height,
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

// async function downloadPdf() {
//     await mergePdf(async (pdf) => {
//         const pdfBytes = await pdf.save();
//         download(pdfBytes, "merged.pdf", "application/pdf");
//     });
// }

// async function previewPdf() {
//     await mergePdf(async (pdf) => {
//         const base64 = await pdf.saveAsBase64({ dataUri: true });
//         let embed = document.querySelector('div[name=pdf-preview] embed');
//         embed.setAttribute('src', base64);
//     });
// }