import React from 'react'



interface InputProps  { // nossa interface que define
    r1: {
        left: number,
        right: number,
        bottom: number,
        top: number,
    },
    r2: {
        left: number,
        right: number,
        bottom: number,
        top: number,
    }
}

const RetangleIntersectionComponent: React.FC<InputProps> = ({ r1, r2 }) => {

    function verificarIntersecao() {


        if (r1.left <= r2.right &&
            r2.left <= r1.right &&
            r1.top <= r2.bottom &&
            r2.top <= r1.bottom) {
            return false;
        }else{
            return true;
        }
    }
    const verifica = verificarIntersecao()
    return (

        <div>
            {verifica ? <div>Não interseção entre os retangulos na matriz</div> : <div> Há interseção entre os retangulos na matriz</div> }
        </div>

    )
}

export default RetangleIntersectionComponent;
