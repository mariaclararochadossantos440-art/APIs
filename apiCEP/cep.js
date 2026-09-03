//Preencher os inputs

let preencherFormulario = (endereco) => {
    document.getElementById("rua").value = endereco.lougradouro
    document.getElementById("bairro").value = endereco.bairro
    document.getElementById("cidade").value = endereco.localidade
    document.getElementById("estado").value = endereco.estado

}

//Autopreenchimento
let cepValido = (cep) => {
    if(cep.lenght == 8){
        return true;
    } else {
        return false;
    }
}

//Buscar a API - Consumir API
let pesquisarCep = async () => {
    let cep = document.getElementById('cep').value
    let url = `https://viacep.com.br/ws/${cep}/json/`

    if(cepValido(cep)){
        let dados = await fetch(url)
        let endereco = await dados.json()
        preencherFormulario(endereco)
    }

}

document.getElementById("cep").addEventListener("focusout", pesquisarCep);