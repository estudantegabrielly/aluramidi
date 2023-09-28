function tocaSom (seletorAudio) {
    const elemento = document.querySelector(seletorAudio);

    if (elemento && elemento.localName === 'audio'){
        elemento.play();
    }
    else{
        //alert('Elemento nao encontrado');
        console.log('Elemento não encontrado ou seletor inválido');
    }
    
}