import React, { useState } from 'react'
import fetchData from '../../api'
import RestClient from '../RestClient'
import './styles.css'
function RestClientService() {
    let dados

    const [currentDateTime, setCurrentDateTime] = useState('-- --')
    const [currentFileTime, setCurrentFileTime] = useState(0)
    const [dayOfTheWeek, setDayOfTheWeek] = useState('-- --')
    const [utcOffset, setUtcOffset] = useState('-- --')

    async function Search() {
        dados = await fetchData()

        setCurrentDateTime(dados?.currentDateTime)
        setCurrentFileTime(dados?.currentFileTime)
        setDayOfTheWeek(dados?.dayOfTheWeek)
        setUtcOffset(dados?.utcOffset)

        var temp = new Date(currentDateTime)
        console.log(temp)



        console.log(dados)
        console.log(dados?.currentDateTime)
        console.log(dados?.currentDateTime)
        console.log(dados?.currentDateTime)
        console.log(dados?.currentDateTime)
    }

    return (
        <div className="container">
            <label htmlFor="">Data</label>
            <p className="data" >{currentDateTime}</p>
            <label>Horário atual</label>
            <p className="data" >{currentFileTime}</p>
            <label htmlFor="Dia da Semana">Dia da semana</label>
            <p className="data" >{dayOfTheWeek}</p>
            <label htmlFor="">UTC</label>
            <p className="data" >{utcOffset}</p>

            <button onClick={() => {Search()}}>Atualizar Horários</button>
        </div>
    )
}

export default RestClientService