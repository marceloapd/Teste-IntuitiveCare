const { JSDOM } = require("jsdom");
const axios = require('axios');
const fs = require('fs')

async function getDom(url){
    const result = await axios.get(url)
    const dom = new JSDOM(result.data);
    return dom;
};


async function getDocument(path){
    let firstDom = await getDom('http://www.ans.gov.br/prestadores/tiss-troca-de-informacao-de-saude-suplementar')
    let pageDocument = firstDom.window.document.querySelector('.alert-link').href

    lastDom = await getDom(pageDocument)
    let documentLink = lastDom.window.document.querySelector('.table-responsive').querySelector('a').href
    
    await axios.get(documentLink, {responseType: "stream"}).then(function (response) {
        response.data.pipe(fs.createWriteStream(path));
    });
}


module.exports = {
    getDocument
}