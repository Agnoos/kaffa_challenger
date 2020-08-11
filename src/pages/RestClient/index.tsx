import React, { useState } from 'react'
import './styles.css'
import fetchData from '../../api/index'
import { Console } from 'console'

interface dados {
    currentDateTime: string;
    utcOffset: string;
    dayOfTheWeek: string;
    currentFileTime: number;
};


const RestClient: React.FC<dados> = ({ currentDateTime, utcOffset, dayOfTheWeek, currentFileTime }) =>{

        return (
            <div className="RestApi">
                <p className="dado">{}</p>
                <p className="dado"></p>
                <button>Testando</button>
            </div>
        )
    }
export default RestClient

