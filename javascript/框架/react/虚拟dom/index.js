function test() {
    const div = document.createElement('li');
    div.innerText = 3;
    document.getElementById('ul').appendChild(div)
}


$(document).ready(function () {
    $("#jq").click(function () {
        $("#ul").append(" <b>Hello world!<img src='666' alt='666'></b>");
    });
});