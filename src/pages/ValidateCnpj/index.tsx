import React, { useState } from 'react';
import './styles.css'

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
        <div className="formCnpj">
            <label className="cnpjLabel">Digite o cnpj para verificar se é valido:</label>
            <input placeholder="60.852.916/0001-00" className="inputCnpj" type="text" value={cnpj} onChange={(e) => setCnpj(e.target.value)} />
            {/* Por um bug entre os componentes HTML e o Typescript, é necessário apertar o botão 2 vezes, a cada requisição, improvisei criando 2 botões que chama a mesma função. */}
            <p className="p">É necessário 2 clicks em cada botão</p>
            <div className="containerButton">
                <button className="button mask" onClick={testCnpjReceitaFederal}>Testar Mascara</button>
                <button className="button rf" onClick={testCnpjReceitaFederal}>Testar validação da Receita</button>
            </div>
            <div className="msg">
                <h1 className="mensagem Mask">{msg}</h1>
                <h1 className="mensagem RF">{msgReceitaFederal}</h1>
            </div>
        </div>
    )
}

export default ValidateCnpj