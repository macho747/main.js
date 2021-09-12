while (true) {
    var num = +prompt('Raqam kiriting: ')


    if (!isNaN(num) && num) {
        if (num % 2 == 0) {
            alert('juft')
        } else {
            alert('toq')
        }



    } else {
        alert('son kiriting');
    }
}