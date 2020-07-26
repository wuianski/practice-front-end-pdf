const { degrees, PDFDocument, rgb, StandardFonts } = PDFLib

async function main() {
    // Create a new PDFDocument
    const pdfDoc = await PDFDocument.create()

    // Fetch an existing PDF document
    const url1 = 'http://127.0.0.1:8080/page_1.pdf';
    const url2 = 'http://127.0.0.1:8080/page_2.pdf';

    const existingPdfBytes1 = await fetch(url1).then(res => res.arrayBuffer());
    const existingPdfBytes2 = await fetch(url2).then(res => res.arrayBuffer());

    // Load a PDFDocument from each of the existing PDFs
    const firstPdfDoc = await PDFDocument.load(existingPdfBytes1)
    const secondPdfDoc = await PDFDocument.load(existingPdfBytes2)


    const [firstPage] = await pdfDoc.copyPages(firstPdfDoc, [0]);
    const [secondPage] = await pdfDoc.copyPages(secondPdfDoc, [0]);

    pdfDoc.addPage(firstPage);
    pdfDoc.addPage(secondPage);

    // Serialize the PDFDocument to bytes (a Uint8Array)
    const pdfBytes = await pdfDoc.save();

    // Trigger the browser to download the PDF document
    download(pdfBytes, "merged.pdf", "application/pdf");
}

main();