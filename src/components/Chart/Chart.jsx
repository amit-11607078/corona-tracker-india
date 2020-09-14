import React, { useState, useEffect } from 'react' ;
import { Line, Bar } from 'react-chartjs-2';
import styles from './Chart.module.css';
import { fetchDailyData } from '../../api';

const Chart = ({data, lstate}) => {
    var newData = [];
    if(lstate){
    newData = data[0];
    }

    const [dailyData, setDailyData ] = useState([]);

    
   useEffect( () => {
        const fetchAPI = async () => {
            setDailyData( await fetchDailyData());
        } 
        
       fetchAPI();
   }, []);

   
    const lineChart = (
        dailyData.length ?
        <Line 
        data={{
            labels: dailyData.map(({date}) => date),
            datasets: [{
                data: dailyData.map( ({totalconfirmed}) => totalconfirmed),
                label: 'Infected',
                borderColor: '#3333ff',
                fill: true,
            },{
                data: dailyData.map( ({totaldeceased}) =>totaldeceased),
                label: 'Deaths',
                borderColor: 'red',
                backgroundColor: 'rgba(255,0,0,0.5)',
                fill: true,
            },{
                data: dailyData.map( ({totalrecovered}) =>totalrecovered),
                label: 'Recovered',
                borderColor: 'green',
                backgroundColor: 'rgba(0, 255, 0, 0.5)',
                fill: true,
            }
            ]
        }}

        /> : null
    );
    

    const barChart = (
        lstate
        ? (
            <Bar
            data={{
                labels: ['Infected', 'Recovered', 'Active', 'Deaths'],
                datasets: [{
                    labels: 'People',
                    backgroundColor: [
                        'rgba(0,0,255,0.5)',
                        'rgba(0,255,0,0.5)',
                        'rgba(255, 255, 0, 0.521)',
                        'rgba(255,0,0,0.5)',
                    ],
                    data: [ newData.confirmed, newData.recovered, newData.active, newData.deaths ]
                }]
            }}
            options={{
                legend: {display:false},
                title: { display:true, text: `Current state in ${lstate}`},
            }}
            />
        ) : null
        )

    return ( 
        <div className={styles.container}>
            { lstate ? barChart : lineChart }
        </div>
    )
}

export default Chart;