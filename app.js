$("input[type=submit]").attr('disabled', 'disabled');

$("form").keyup(function () {
    $("input[type=submit]").removeAttr('disabled');
});

$('#submit').click(function (event) {
    event.preventDefault();
    $('body').append('<ul></ul>');
    let input = $('#random').val();
    $('ul').append('<li>' + input + '</li>');
    
})

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


$('li').click(function(){
    let $li = $('li')
    console.log($li);
    $('li').css('color', getRandomColor());
})