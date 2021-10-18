const Relatorio = require('../models/Relatorio')
const { QueryTypes } = require('sequelize');
const sequelize = require('../database/db.js');

module.exports = {
    async searchDb(query){

        let search = await sequelize.query(

            `SELECT * FROM Relatorios 
            WHERE RegistroANS LIKE :RegistroANS AND
            CNPJ LIKE :CNPJ AND 
            RazaoSocial LIKE :RazaoSocial AND
            NomeFantasia LIKE :NomeFantasia AND
            Modalidade LIKE :Modalidade AND
            Logradouro LIKE :Logradouro AND
            Numero LIKE :Numero AND
            Complemento LIKE :Complemento AND
            Bairro LIKE :Bairro AND
            Cidade LIKE :Cidade AND
            UF LIKE :UF AND
            CEP LIKE :CEP AND
            DDD LIKE :DDD AND
            Telefone LIKE :Telefone AND
            Fax LIKE :Fax AND
            EnderecoEletronico LIKE :EnderecoEletronico AND
            Representante LIKE :Representante AND
            CargoRepresentante LIKE :CargoRepresentante AND
            DataRegistroANS LIKE :DataRegistroANS
            `,

            {
                replacements: {
                    RegistroANS: `${query.RegistroANS}%`,
                    CNPJ: `${query.CNPJ}%`,
                    RazaoSocial: `${query.RazaoSocial}%`,
                    NomeFantasia: `${query.NomeFantasia}%`,
                    Modalidade: `${query.Modalidade}%`,
                    Logradouro: `${query.Logradouro}%`,
                    Numero: `${query.Numero}%`,
                    Complemento: `${query.Complemento}%`,
                    Bairro: `${query.Bairro}%`,
                    Cidade: `${query.Cidade}%`,
                    UF: `${query.UF}%`,
                    CEP: `${query.CEP}%`,
                    DDD: `${query.DDD}%`,
                    Telefone: `${query.Telefone}%`,
                    Fax: `${query.Fax}%`,
                    EnderecoEletronico: `${query.EnderecoEletronico}%`,
                    Representante: `${query.Representante}%`,
                    CargoRepresentante: `${query.CargoRepresentante}%`,
                    DataRegistroANS: `${query.DataRegistroANS}%`      
                },
                type: QueryTypes.SELECT
            }
        );
        return search
    }
}
// http://localhost:3000/search/?RegistroANS=&CNPJ=&RazaoSocial=&NomeFantasia=&Modalidade=&Logradouro=&Numero=&Complemento=&Bairro=&Cidade=&UF=&CEP=&DDD=&Telefone=&Fax=&EnderecoEletronico=&Representante=&CargoRepresentante=&DataRegistroANS=
