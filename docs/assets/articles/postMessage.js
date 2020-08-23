// addEventListener support for IE8 
function bindEvent(element, eventName, eventHandler) {
    if (element.addEventListener) {
        element.addEventListener(eventName, eventHandler, false);
    } else if (element.attachEvent) {
        element.attachEvent('on' + eventName,
            eventHandler);
    }
} // Send a message to the parent 
var sendMessage = function (msg) {
    window.parent.postMessage(msg, '*');
};
var results = document.getElementById('results');
//var canvas = document.getElementById('results');
bindEvent(window, 'scroll', function (e) {
    var scroll_Y = window.scrollY;
    //console.log(scroll_Y);
    sendMessage(scroll_Y);
});