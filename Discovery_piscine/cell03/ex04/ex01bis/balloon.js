$(document).ready(function () {
    const colors = ['red', 'green', 'blue'];
    let colorIndex = 0;
    let size = 200;

    const $balloon = $('#balloon');

    function updateBalloon() {
        $balloon.css({
            'width': size + 'px',
            'height': size + 'px',
            'background-color': colors[colorIndex]
        });
    }

    $balloon.on('click', function () {
        size += 10;
        if (size > 420) {
            size = 200;
            colorIndex = 0;
        } else {
            colorIndex = (colorIndex + 1) % colors.length;
        }
        updateBalloon();
    });

    $balloon.on('mouseleave', function () {
        if (size > 200) {
            size -= 5;
            colorIndex = (colorIndex - 1 + colors.length) % colors.length;
            updateBalloon();
        }
    });
});