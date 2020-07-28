const { degrees, PDFDocument, rgb, StandardFonts } = PDFLib;

function generatePageArray(pageCount) {
    return [...Array.from(Array(pageCount), (_, i) => i)];
}

async function mergePdf() {
    // Create a new PDFDocument
    const pdfDoc = await PDFDocument.create()

    // Fetch an existing PDF document
    const url1 = 'http://127.0.0.1:8080/page_1.pdf';
    const url2 = 'http://127.0.0.1:8080/page_2.pdf';
    const url3 = 'http://127.0.0.1:8080/page_3.pdf';

    await merge([url1, url2, url3]);

    // const existingPdfBytes1 = await fetch(url1).then(res => res.arrayBuffer());
    // const existingPdfBytes2 = await fetch(url2).then(res => res.arrayBuffer());

    // // Load a PDFDocument from each of the existing PDFs
    // const firstPdfDoc = await PDFDocument.load(existingPdfBytes1)
    // const secondPdfDoc = await PDFDocument.load(existingPdfBytes2)


    // const [firstPage] = await pdfDoc.copyPages(firstPdfDoc, [0]);
    // const [secondPage] = await pdfDoc.copyPages(secondPdfDoc, [0]);

    // pdfDoc.addPage(firstPage);
    // pdfDoc.addPage(secondPage);

    // // Serialize the PDFDocument to bytes (a Uint8Array)
    // const pdfBytes = await pdfDoc.save();

    // // Trigger the browser to download the PDF document
    // download(pdfBytes, "merged.pdf", "application/pdf");
}

/**
 *
 * @param {Array<string>} urls
 */
async function merge(urls) {
    console.log(urls);
    if (!urls ||
        !Array.isArray(urls) ||
        urls.length == 0) {
        return null;
    }

    let pdfDocs = [];
    for (let i = 0; i < urls.length; i++) {
        const url = urls[i];
        console.log(url);
        let bytes = await fetch(url).then(res => res.arrayBuffer());
        let pdfDoc = await PDFDocument.load(bytes, {
            updateMetadata: false
        });
        pdfDocs.push(pdfDoc);
    }

    pdfDocs.forEach(pdfDoc => {
        // Print all available metadata fields
        console.log('Page:', generatePageArray(pdfDoc.getPageCount()));
    });

    // Create a new PDFDocument
    const resultPdf = await PDFDocument.create();

    // TODO: copy all doc pages to resultPdf
}