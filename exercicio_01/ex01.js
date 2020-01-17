function remove(palavra, codigo, substituto) {
    var retorno = new RegExp(codigo, 'g')
    return palavra.replace(retorno, substituto)
}

var palavras = ["Banana", "Coliseu", "Ananás", "Sonic", "Paralelepipedo"]

palavras.forEach(palavra => {
    console.log(remove(palavra, 'a', ''));
})


