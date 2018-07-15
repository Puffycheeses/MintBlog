function Re(ti, bo, im, de) { // Constructor for a post
    this.ti = ti; // Title
    this.bo = bo; // Body
    this.im = im; // Image
    this.de = de; // Destination
    this.dr = function () {$(this.de).append("" +
            "<div class=\'row\'>" +
                "<div class=\'col-md-3\'>" +
                    "<img class=\"img-responsive artwork\" src=\'"+this.im+"\'>" +
                "</div>" +
                "<div class=\'col-md-9\'>" +
                    "<h1 class=\"heading\">"+this.ti+"</h1>" +
                    "<p class=\"body\">"+this.bo+"</p>" +
                "</div>" +
            "</div>" +
            "<hr>"
        );
    }
}