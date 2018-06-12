function Re(ti, bo, im, de) { // Constructor for a post
    this.ti = ti; // Title
    this.bo = bo; // Body
    this.im = im; // Image
    this.de = de; // Destination
    this.dr = function () {$(this.de).append("<div class=\'row\'>\n        <div class=\'col-md-3\'>\n            <img class=\"img-responsive artwork\" src=\'"+this.im+"\'>\n        </div>\n        <div class=\'col-md-9\'>\n            <h1 class=\"heading\">"+this.ti+"</h1>\n            <p class=\"body\">"+this.bo+"</p>\n        </div>\n    </div>\n</div>\n<hr>");} // Draw at Destination
}