import React from 'react';
import { Chart } from 'primereact/chart';
import { question1 } from "./chartData";
import { question2 } from "./chartData";
import { question3 } from "./chartData";
import { question4 } from "./chartData";

const PieChartDemo = () => {
    const options = {
        plugins: {
            title: {
                display: false,
                text: 'My Title',
                font: {
                    size: 16
                }
            },
            legend: {
                position: 'bottom'
            }
        }
    }



    return (
        <React.Fragment>

            <h1>Grand Central Terminal, Park Avenue, New York is the world's ? </h1>
            <div>
                <Chart type="pie" data={question1} options={options} style={{ position: 'relative', width: '30%', left: '35%' }} />
            </div>
            <h1>Entomology is the science that studies ? </h1>
            <div className="card flex justify-content-center">
                <Chart type="pie" data={question2} options={options} style={{ position: 'relative', width: '30%', left: '35%' }} />
            </div>
            <h1>Eritrea, which became the 182nd member of the UN in 1993, is in the continent of ? </h1>
            <div className="card flex justify-content-center">
                <Chart type="pie" data={question3} options={options} style={{ position: 'relative', width: '30%', left: '35%' }} />
            </div>
            <h1>Garampani sanctuary is located at ? </h1>
            <div className="card flex justify-content-center">
                <Chart type="pie" data={question4} options={options} style={{ position: 'relative', width: '30%', left: '35%' }} />
            </div>
        </React.Fragment>

    )
}

export default PieChartDemo;