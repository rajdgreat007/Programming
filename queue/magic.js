var queue = {
    theQueue: [],
    enqueue: function (item,sizeOfQueue) {
        if(this.theQueue.length<sizeOfQueue) this.theQueue.push(item);
    },
    dequeue: function () {
        if(this.theQueue.length>0) this.theQueue.shift();
    },
    init: function () {
        var lines = document.getElementById('inputText').value.split('\n');
        var sizeOfQueue = parseInt(lines[0]);
        var currentQueueContents = lines[1].split(' ');
        for (var i = 0; i < currentQueueContents.length; i++) {
            if(!isNaN(parseInt(currentQueueContents[i]))) this.enqueue(parseInt(currentQueueContents[i]),sizeOfQueue);
        }
        var thirdLine = parseInt(lines[2]);
        if(thirdLine==1){
            var fourthLine = parseInt(lines[3]);
            if(!isNaN(fourthLine)) this.enqueue(fourthLine,sizeOfQueue);
        }else if(thirdLine == 0) this.dequeue();
        document.getElementById('output').innerHTML = this.theQueue.toString();

    }
};
window.onload = function () {
    queue.init();
    document.getElementById('reprocess').onclick = function(){
        queue.theQueue = [];
        queue.init();
    };
};