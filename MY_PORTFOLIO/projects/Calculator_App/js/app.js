

    let output = document.querySelector('#output1');
    let button = document.querySelectorAll('.btn');
    let clear = document.querySelector('#all-clear');
    let equal = document.querySelector('.equal-sign');

    button.forEach(function(button){
        button.addEventListener('click', function(e) {
            let value = e.target.dataset.num;
            output.value += value;
        })
    });

    equal.addEventListener('click', function(){
        if (output.value === '') {
            output.value = '';
        }

        else {
            let answer = eval(output.value);
            output.value = answer;
        }
    });

    clear.addEventListener('click', function() {
        output.value = '';
    });

