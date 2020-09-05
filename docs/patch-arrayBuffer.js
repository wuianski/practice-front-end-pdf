(function () {
    if ('File' in self) {
        File.prototype.arrayBuffer = File.prototype.arrayBuffer || myArrayBuffer
    }
    Blob.prototype.arrayBuffer = Blob.prototype.arrayBuffer || myArrayBuffer;

    function myArrayBuffer() {
        return new Promise((resolve) => {
            let fr = new FileReader();
            fr.onload = () => {
                resolve(fr.result);
            };
            fr.readAsArrayBuffer(this);
        });
    }
})();