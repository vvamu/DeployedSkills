var texts = document.getElementsByClassName('foo');
var texts1 = document.getElementsByClassName('foo1');
var texts2 = document.getElementsByClassName('foo2');
var texts3 = document.getElementsByClassName('foo3');

function flash() {

    for (var i = 0; i < texts.length; i++) {
        var text = texts[i];
        text.style.color = (text.style.color === 'rgb(255, 1, 132)') ? 'deepskyblue' : 'rgb(255, 1, 132)';
    }
    for (var i = 0; i < texts1.length; i++) {
        var text = texts1[i];

        text.style.color = (text.style.color === 'rgb(156, 8, 255)') ? 'deepskyblue' : 'rgb(156, 8, 255)';
    }
    for (var i = 0; i < texts2.length; i++) {
        var text = texts2[i];

        text.style.color = (text.style.color === 'rgb(85, 255, 0)') ? 'deepskyblue' : 'rgb(85, 255, 0)';
    }
    for (var i = 0; i < texts3.length; i++) {
        var text = texts3[i];

        text.style.color = (text.style.color === 'rgb(255, 238, 0)') ? 'deepskyblue' : 'rgb(255, 238, 0)';
    }

}
var clr = setInterval(flash, 1500);