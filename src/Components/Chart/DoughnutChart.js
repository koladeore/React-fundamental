import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import './LineChart.css';

function DoughnutChart() {
    const data = {
        labels: ['Jan','Feb','Mar','Apr','May'],
        datasets: [
            {
                label: 'Sales for 2020 (M)',
                data: [3, 2, 2, 1, 5],
                backgroundColor:[
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 205, 86, 1)',
                    'rgba(255, 162, 235, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(153, 102, 255, 1)'
                ]
            },
            {
                label: 'Sales for 2019 (M)',
                data: [1 , 3, 2, 2, 3],
                backgroundColor:[
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 205, 86, 1)',
                    'rgba(255, 162, 235, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(153, 102, 255, 1)'
                ]    
            }
        ]
    }
    const options = {
        title: {
            display: true,
            text: 'Bar Chart'
        }
    }
    return (
        <div className='chart'>
            <div className='line'>
                <Doughnut data={data} options={options}/>
            </div>          
        </div>    
    )
}
export default DoughnutChart;
