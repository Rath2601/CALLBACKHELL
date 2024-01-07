let h1 = document.createElement('h1');
document.body.appendChild(h1);

function countdown(number, callback) {
    setTimeout(() => {
        h1.innerHTML = number;
        callback();
    }, 1000);
}

function showMessage(message) {
    setTimeout(() => {
        h1.innerHTML = message;
    }, 1000);
}

countdown(10, function () {
    countdown(9, function () {
        countdown(8, function () {
            countdown(7, function () {
                countdown(6, function () {
                    countdown(5, function () {
                        countdown(4, function () {
                            countdown(3, function () {
                                countdown(2, function () {
                                    countdown(1, function () {
                                        showMessage('Happy Independence Day');
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    });
});
