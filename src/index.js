const { degrees, PDFDocument, rgb, StandardFonts } = PDFLib;

function generatePageArray(pageCount) {
    if (pageCount < 0) { return []; }
    if (!Number.isInteger(pageCount)) { return []; }

    return [...Array.from(Array(pageCount), (_, i) => i)];
}

async function mergePdf() {
    // Create a new PDFDocument
    const pdfDoc = await PDFDocument.create()

    // Fetch an existing PDF document
    const url1 = 'http://127.0.0.1:8080/page_1.pdf';
    const url2 = 'http://127.0.0.1:8080/page_2.pdf';
    const url3 = 'http://127.0.0.1:8080/page_3.pdf';

    let resultPdf = await merge([url1, url2, url3]);
    const pdfBytes = await resultPdf.save();
    download(pdfBytes, "merged.pdf", "application/pdf");
}

/**
 * Merge the all pdf
 * @param {Array<string>} urls
 * @returns {PDFDocument}
 */
async function merge(urls) {
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