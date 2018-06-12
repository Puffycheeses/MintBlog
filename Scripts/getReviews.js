$.getJSON("Data/posts.json", function (json) {
    var re = [];
    for (var id in json.posts) {
        var rev = json.posts[id];
        re.unshift(new Re(rev.Album, getText(rev.Body), rev.Image, ".reviewSpace"));
    }
    drawReviews(re)
});
