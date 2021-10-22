<template>
  <div class="form">
  <form>
    <div class="form-row">
      <div class="form-group col-md-4">
        <label>Nome Fantasia</label>
        <input type="text" class="form-control" v-on:input="nomeFantasia = $event.target.value" placeholder="Nome comercial ou nome de fachada">
      </div>
      <div class="form-group col-md-3">
        <label for="inputModalidade">Modalidade</label>
        <select id="inputModalidade" class="form-control" v-on:input="modalidade = $event.target.value">
          <option value="" selected>Escolher...</option>
          <option v-for="element in allModalidades.result" :key="element">{{element.Modalidade}}</option>
        </select>
      </div>
      <div class="form-group col-md-3">
        <label>Razão social</label>
        <input type="text" class="form-control" v-on:input="razaoSocial = $event.target.value" placeholder="Nome de registro">
      </div>
      <div class="form-group col-md-2">
        <label>UF</label>
        <select class="form-control" v-on:input="uf = $event.target.value">
          <option value="" selected>Escolher...</option>
          <option v-for="element in allUf.result" :key="element">{{element.UF}}</option>
        </select>
      </div>
    </div>
    <div class="form-row">
      <div class="form-group col-md-2">
        <label>Registro ANS</label>
        <input  class="form-control"  v-on:input="ans = $event.target.value" placeholder="123456">
      </div>
      <div class="form-group col-md-3">
        <label>CNPJ</label>
        <input class="form-control" v-on:input="cnpj = $event.target.value" placeholder="XXXXXXXX0001XX">
      </div>
      <div class="form-group col-md-2">
        <label for="inputCEP">Cidade</label>
        <input type="text" class="form-control" v-on:input="cidade = $event.target.value" placeholder="" id="inputCEP">
      </div>
      <div class="form-group col-md-2">
        <label for="inputCEP">CEP</label>
        <input type="number" class="form-control" v-on:input="cep = $event.target.value" placeholder="13165000" id="inputCEP">
      </div>
    </div>
  </form>
    <button v-on:click="searchData()" type="submit" class="btn btn-primary">Pesquisar</button>
<table class="table table-bordered">
  <thead>
    <tr>
      <th scope="col">Nome Fantasia</th>
      <th scope="col">Modalidade</th>
      <th scope="col">Razão social</th>
      <th scope="col">UF</th>
      <th scope="col">ANS</th>
      <th scope="col">CNPJ</th>
      <th scope="col">Cidade</th>
      <th scope="col">CEP</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="element in data.result" :key="element">
      <td class="col-md-3">{{element.NomeFantasia}}</td>
      <td class="col-md-3">{{element.Modalidade}}</td>
      <td class="col-md-3">{{element.RazaoSocial}}</td>
      <td class="col-md-1">{{element.UF}}</td>
      <td class="col-md-1">{{element.RegistroANS}}</td>
      <td class="col-md-3">{{element.CNPJ}}</td>
      <td class="col-md-2">{{element.Cidade}}</td>
      <td class="col-md-2">{{element.CEP}}</td>
    </tr>
  </tbody>
</table>
  </div>
</template>

<script>
export default{
  data(){
    return{
      
      nomeFantasia: '',
      modalidade: '',
      razaoSocial: '',
      uf: '',
      ans: '',
      cnpj: '',
      cidade: '',
      cep: '',
    
      data: [],
      allUf: [],
      allModalidades: []

    }
  },

  methods: {
      searchData(){
        this.$http.get(`http://ec2-3-144-13-161.us-east-2.compute.amazonaws.com:3000/search/?RegistroANS=${this.ans}&CNPJ=${this.cnpj}&RazaoSocial=${this.razaoSocial}&NomeFantasia=${this.nomeFantasia}&Modalidade=${this.modalidade}&Logradouro=&Numero=&Complemento=&Bairro=&Cidade=${this.cidade}&UF=${this.uf}&CEP=${this.cep}&DDD=&Telefone=&Fax=&EnderecoEletronico=&Representante=&CargoRepresentante=&DataRegistroANS=`)
        .then(res => res.json())
        .then(data => this.data = data)
      }
  },

  created(){
      this.$http.get('http://ec2-3-144-13-161.us-east-2.compute.amazonaws.com:3000/search/uf')
      .then(res => res.json())
      .then(data => this.allUf = data)
      this.$http.get('http://ec2-3-144-13-161.us-east-2.compute.amazonaws.com:3000/search/modalidades')
      .then(res => res.json())
      .then(data => this.allModalidades = data)
  }
}
</script>

<style scoped>
.form{
  margin: 50px;
}
.table{
  margin-top: 15px;
}
.form-group{
  padding: 10px;
}
</style>
