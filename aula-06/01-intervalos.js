function dizOi(nome) {
    console.log('Oi', nome);
}

function ola () {
    dizOi('Dannyel')
}

const abc = setInterval(ola, 1000)

clearInterval(abc)
