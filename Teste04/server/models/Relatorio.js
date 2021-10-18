const { DataTypes } = require('sequelize')
const db = require ('../database/db')

const Relatorio = db.define('Relatorio', {

    RegistroANS: {
        type: DataTypes.STRING
    },
    CNPJ: {
        type: DataTypes.STRING
    },
    RazaoSocial: {
        type: DataTypes.STRING
    },
    NomeFantasia: {
        type: DataTypes.STRING
    },
    Modalidade: {
        type: DataTypes.STRING
    },
    Logradouro: {
        type: DataTypes.STRING
    },
    Numero: {
        type: DataTypes.STRING
    },
    Complemento: {
        type: DataTypes.STRING
    },
    Bairro: {
        type: DataTypes.STRING
    },
    Cidade: {
        type: DataTypes.STRING
    },
    UF: {
        type: DataTypes.STRING
    },
    CEP: {
        type: DataTypes.STRING
    },
    DDD: {
        type: DataTypes.STRING
    },
    Telefone: {
        type: DataTypes.STRING
    },
    Fax: {
        type: DataTypes.STRING
    },
    EnderecoEletronico: {
        type: DataTypes.STRING
    },
    Representante: {
        type: DataTypes.STRING
    },
    CargoRepresentante: {
        type: DataTypes.STRING
    },
    DataRegistroANS: {
        type: DataTypes.STRING
    },
})

// Relatorio.sync({force: true})

module.exports = Relatorio