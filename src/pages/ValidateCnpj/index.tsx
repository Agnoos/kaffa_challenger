import React, { useState } from 'react';

function ValidateCnpj() {
    const [cnpj, setCnpj] = useState('');
    const [msg, setMsg] = useState('');
    const [msgReceitaFederal, setMsgReceitaFederal] = useState('');
    const [cnpjOnlyNumber, setCnpjOnlyNumber] = useState('');

    function testCnpj() {
        const pureCnpj = cnpj.replace(/[^\d]+/g, '')
        setCnpjOnlyNumber(pureCnpj)
        const regex = /^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$/;
        if (cnpj === '') {
            setMsg('CNPJ VAZIO');
            return true;
        }
        if (pureCnpj.length === 14) {
            setMsg('CNPJ COM MASCÁRA CORRETA');
            return true;
        }
        if (regex.test(cnpj)) {
            setMsg('CNPJ COM MASCÁRA CORRETA');
            return true;
        }
        else {
            setMsg('CNPPJ COM MASCÁRA INVALIDA');
            return true;
        }
    }

    function testCnpjReceitaFederal() {
        testCnpj()
        const cnpjValido = testCnpj()
        console.log(`dentro do test cnpj receita federal ${cnpjOnlyNumber}`)
        if (cnpjValido) {
            let tamanho = cnpjOnlyNumber.length - 2
            let numeros = cnpjOnlyNumber.substring(0, tamanho);
            let digitos = cnpjOnlyNumber.substring(tamanho);
            let soma = 0;
            let pos = tamanho - 7;
            for (let i = tamanho; i >= 1; i--) {
                soma += parseInt(numeros.charAt(tamanho - i)) * pos--;
                if (pos < 2)
                    pos = 9;
            }
            let resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
            if (resultado !== parseInt(digitos.charAt(0))) {
                return false
            }
            tamanho = tamanho + 1;
            numeros = cnpjOnlyNumber.substring(0, tamanho);
            soma = 0;
            pos = tamanho - 7;
            for (let i = tamanho; i >= 1; i--) {
                soma += parseInt(numeros.charAt(tamanho - i)) * pos--;
                if (pos < 2)
                    pos = 9;
            }
            resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
            if (resultado !== parseInt(digitos.charAt(1))) {
                setMsgReceitaFederal('CPF NÃO É VALIDO PARA RECEITA FEDERAL')
                return false;
            } else {

                setMsgReceitaFederal('O CPF É VALIDO PARA RECEITA FEDERAL')
                return true;
            }
        }
    }
    return (
        <div>
            <label>Digite o cnpj para verificar se é valido:</label>
            <input type="text" value={cnpj} onChange={(e) => setCnpj(e.target.value)} />
            <button onClick={testCnpjReceitaFederal}>Testar Mascara</button>
            <button onClick={testCnpjReceitaFederal}>Testar validação da Receita</button>
            {/* Por um bug entre os componentes HTML e o Typescript, é necessário apertar o botão 2 vezes, a cada requisição, improvisei criando 2 botões que chama a mesma função. */}
            <h1>{msg}</h1>
            <hr />
            <h1>{msgReceitaFederal}</h1>
        </div>
    )
}

export default ValidateCnpj