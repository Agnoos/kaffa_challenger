import React from 'react'
import './styles.css'

import kaffa1 from '../../assets/imagens/kaffa1.png'
import kaffa2 from '../../assets/imagens/kaffa2.png'
import kaffa3 from '../../assets/imagens/kaffa3.png'

function Ux() {

    return (
        <div className="mer">
            <div className="images">
                <img className="img" src={kaffa1} alt="" />
                <img className="img" src={kaffa2} alt="" />
                <img className="img" src={kaffa3} alt="" />
            </div>
            <a href="https://www.figma.com/proto/XkVmMpUt23l1DKFSKdjGvO/Kaffa-Mobile?node-id=0%3A2&scaling=scale-down" target="_blank">Acessar Projeto na Web</a>
            <a href="https://github.com/Agnoos/kaffa_challenger/tree/master/src/docs" target="_blank">Baixar PDF do repositório</a>
        </div>

    )
}

export default Ux