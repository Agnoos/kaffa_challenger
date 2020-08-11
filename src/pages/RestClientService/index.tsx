import React, { useState } from 'react'
import fetchData from '../../api'
import RestClient from '../RestClient'
import './styles.css'
function RestClientService() {
    let dados

    const [currentDateTime, setCurrentDateTime] = useState('-- --')
    const [currentFileTime, setCurrentFileTime] = useState('-- --')
    const [dayOfTheWeek, setDayOfTheWeek] = useState('-- --')
    const [utcOffset, setUtcOffset] = useState(0)

    async function Search() {
        dados = await fetchData()

        setCurrentDateTime(dados?.currentDateTime)
        setCurrentFileTime(dados?.currentFileTime)
        setDayOfTheWeek(dados?.dayOfTheWeek)
        setUtcOffset(parseInt(dados?.utcOffset)-3) // 3 horas atras (UTC-03) BRBRBR

        // console.log(currentDateTime.valueOf())


        let test = new Date
            test.setTime(132416350557150950)
            console.log(test)
    //     console.log(dados)
    //     console.log(dados?.currentDateTime)
    //     console.log(dados?.currentDateTime)
    //     console.log(dados?.currentDateTime)
    //     console.log(dados?.currentDateTime)
     }
    return (
        <div className="container">
            <h3 className="margin">Rest Server - World Clock/Client</h3>
            <label htmlFor="">Data Completa</label>
            <p className="data" >{currentDateTime}</p>
            <label>Horário Documento</label>
            <p className="data" >{currentFileTime}</p>
            <label htmlFor="Dia da Semana">Dia da semana</label>
            <p className="data" >{dayOfTheWeek}</p>
            <label htmlFor="">Time Zone Name</label>
            <p className="data" >{utcOffset}</p>

            <button className="button" onClick={() => {Search()}}>Atualizar Horários</button>
        </div>
    )
}

export default RestClientService