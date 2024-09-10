const preencherFormulario = (endereco) => {
    document.getElementById('rua').innerHTML = endereco.logradouro;
    document.getElementById('bairro').innerHTML = endereco.bairro;
    document.getElementById('cidade').innerHTML = endereco.localidade;
    document.getElementById('estado').innerHTML = endereco.uf
}
//Autopreenchimento
const cepValido = (cep) => {
    if (cep.length == 8) {
        return true;
    }else{
        return false;
    }
}

const pesquisarCep = async () => {
    const cep = document.getElementById(cep).innerHTML
    const url = `https://viacep.com.br/ws/${cep}/json/`
    if (cepValido(cep)) {
        const dados = await fetch(url);
        const endereco =await dados.json();
            preencherFormulario(endereco);
    }
}
document.getElementById('cep').addEventListener('focusout', pesquisarCep)