import React from 'react'
import { Line, Bar } from 'react-chartjs-2'
import styles from './styles.module.css';
function Charts({ data }) {

    const lineChart = (
        data[0] ? (
            <Line
                options={{ maintainAspectRatio: false }}
                data={{
                    labels: data.map((country) => country.country),
                    datasets: [{
                        data: data.map((country) => country.todayCases),
                        label: "Today Cases",
                        borderColor: '#3333ff',
                        fill: true
                    }, {
                        data: data.map((country) => country.todayRecovered),
                        label: "Today Recovered",
                        borderColor: 'red',
                        backgroundColor: 'rgba(255,0,0,0.5',
                        fill: true
                    }],
                }}
            />
        ) : null
    );
    return (
        <div style={{
            width: '90%',
            height: '65%'
        }}>
            {lineChart}
        </div>
    )
}

export default Charts
