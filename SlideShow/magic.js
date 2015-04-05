var slideShow = {
    images : ['car1.jpg', 'car2.jpg','car3.jpg','car4.jpg'],
    slideBox : document.getElementById('slideshow'),
    currentImageIndex : 0,
    slideImage : function(){
        var self = this;
        this.slideBox.src = this.images[this.currentImageIndex];
        if(this.currentImageIndex < this.images.length-1) this.currentImageIndex++;
        else this.currentImageIndex = 0;
        setTimeout(function(){
            self.slideImage();
        },2000)
    }
};
window.onload=function(){
    slideShow.slideImage();
};