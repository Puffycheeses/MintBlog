function Re(ti, bo, im, de) { // Constructor for a post
    this.ti = ti; // Title
    this.bo = bo; // Body
    this.im = im; // Image
    this.de = de; // Destination
    this.dr = function () {$(this.de).append("<div class=\'post-container\'>\n    <div  class=\'post-thumb\'>\n        <img class=\'artwork\' src=\'"+this.im+"\'>\n    </div>\n    <div class=\"post-content\">\n        <h1 class=\"post-title\">"+this.ti+"</h1>\n        <p>"+this.bo+"</p>\n    </div>\n</div>\n<hr>");} // Draw at Destination
}