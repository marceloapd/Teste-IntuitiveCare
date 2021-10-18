const { JSDOM } = require("jsdom");
const axios = require('axios');
const fs = require('fs')

async function getDom(url){
    const result = await axios.get(url)
    const dom = new JSDOM(result.data);
    return dom;
};


async function getDocument(path){
    console.log('Buscando arquivo...')
    let firstDom = await getDom('https://www.gov.br/ans/pt-br/assuntos/prestadores/padrao-para-troca-de-informacao-de-saude-suplementar-2013-tiss')
    let pageDocument = firstDom.window.document.querySelector('.callout').querySelector('a').href

    lastDom = await getDom(pageDocument)
    let documentLink = lastDom.window.document.querySelector('tbody').querySelector('a').href
    console.log('Salvando arquivo...')
    await axios.get(documentLink, {responseType: "stream"}).then(function (response) {
        response.data.pipe(fs.createWriteStream(path));
        console.log('Arquivo salvo!')
    });
}


module.exports = {
    getDocument
}