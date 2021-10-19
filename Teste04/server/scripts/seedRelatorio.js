// const Relatorio = require('../models/Relatorio')
// const fs = require("fs");
// /**
//  * 
//  * @param {string} file path file 
//  * @returns {Array} csv data
//  */
// function readCSV(file) {
//     let fileContent = fs.readFileSync(file, { encoding: "utf-8", flag: "r" })
//     let rows = fileContent.split("\n").slice(3)
//     let { dataTemplate, dataColumns } = getTemplate()
//     const csvContent = getCSVData(rows, dataTemplate, dataColumns)
//     return csvContent
// }

// /**
//  * 
//  * @returns {Object} template and columns for csv data
//  */
// function getTemplate () {
//     const dataTemplate = {
//         'RegistroANS': '',
//         'CNPJ': '',
//         'RazaoSocial': '',
//         'NomeFantasia': '',
//         'Modalidade': '',
//         'Logradouro': '',
//         'Numero': '',
//         'Complemento': '',
//         'Bairro': '',
//         'Cidade': '',
//         'UF': '',
//         'CEP': '',
//         'DDD': '',
//         'Telefone': '',
//         'Fax': '',
//         'EnderecoEletronico': '',
//         'Representante': '',
//         'CargoRepresentante': '',
//         'DataRegistroANS': ''
// } 
// const dataColumns = Object.keys(dataTemplate)
// return {dataTemplate, dataColumns} 
// }

// function getCSVData(rows, dataTemplate, dataColumns) {
//     let allData = []
//     rows.forEach(row => {
//         const cellJson = cellToJson(row, dataTemplate, dataColumns)
//     allData.push(cellJson)
// })
//     return allData
// }

// function cellToJson(row, dataTemplate, dataColumns) {
//     let dataJson = { ...dataTemplate }
//     const cells = row.split(";")
//     cells.forEach((cell, index) => {
//         dataJson[dataColumns[index]] = sanitizeData(cell, '"') 
// })
//     return { ...dataJson }
// }

// function sanitizeData(data, search) {
//     const replacer = new RegExp(search, 'g')
//     return data.replace(replacer, '')
// }

// const csvData = readCSV("../database/Relatorio_cadop.txt")
// Relatorio.bulkCreate(csvData).then((result)=>{
//     console.log(result)
// })
// console.log(csvData)


