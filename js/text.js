var words = ['Optimizer', 'Analyzer', 'Debugger', 'Builder', 'Developer'];

textSequence(0);

function textSequence(i) {

    if (words.length > i) {

        setTimeout(function () {
            document.getElementById("sequence").innerHTML = words[i]
            textSequence(++i);

        }, 1000); // 1 second (in milliseconds)



    } else if (words.length == i) { // Loop
        textSequence(0);
    }

}