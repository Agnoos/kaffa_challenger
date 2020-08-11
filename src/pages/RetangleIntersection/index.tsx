import React, { useState } from 'react'
import RetangleIntersectionComponent from '../../components/RetangleIntersectionComponent'

import photoRetangleMatriz from '../../assets/imagens/retangleTest.png'
import './styles.css'
import { strict } from 'assert';


function RetangleIntersection() {
    const [left, setLeft] = useState(0);
    const [right, setRight] = useState(0);
    const [bottom, setBotton] = useState(0);
    const [top, setTop] = useState(0);

    const [estado, setEstado] = useState(false)

    return (


        <div id="RetangleIntersection" >
            <div className="header photo" >
                <img src={photoRetangleMatriz} alt="" />
            </div>

            <div className="result">
                <RetangleIntersectionComponent r1={{ left: 7, top: 13, right: 7, bottom: 2 }} r2={{ left:3 , top: 11, right: 11, bottom: 5 }} />
            </div>

            <div className="form">
                <p>Digite as dimensões de um novo retangulo, para verificar se tem interseção com um retangulo de valores left:   20,
                top:    20,
                right:  50,
                bottom: 50 </p>

                <label htmlFor="left">left:</label>
                <input type="text" value={left} onChange={(e) => { setLeft(parseInt(e.target.value)) }} />
                <label htmlFor="right">right:</label>
                <input type="text" value={right} onChange={(e) => { setRight(parseInt(e.target.value)) }} />
                <label htmlFor="top">top:</label>
                <input type="text" value={top} onChange={(e) => { setTop(parseInt(e.target.value)) }} />
                <label htmlFor="bottom">left:</label>
                <input type="text" value={bottom} onChange={(e) => { setBotton(parseInt(e.target.value)) }} />
                <button >Testar</button>
            </div>
        </div>


    )
}

export default RetangleIntersection