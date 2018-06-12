function getText(text) {
    return $.get({
        url: text,
        async: false
    }).responseText.replace(/(?:\r\n|\r|\n)/g, '<br>');
}