import React from "react"
import ReactApexCharts from 'react-apexcharts'

const data = [
    {
      name: 'You',
      data: [31, 40, 28, 51, 42, 109, 100]
    }, 
    {
      name: 'Winner',
      data: [11, 32, 45, 32, 34, 52, 41]
    },
    {
      name: 'Average',
      data: [26.5, 52, 50.5, 57.5, 106.5, 53, 70]
    }
]

const options = {
    legend: {
        show: true,
        markers: {
            fillColors: ["#7027CE", "#ffffff", "#000000"]
        },
        labels: {
            colors: ["#7027CE", "#ffffff", "#1f1f1f"]
        },
        position: "top",
        horizontalAlign: "left"
    },
    chart: {
      height: 185,
      type: 'area'
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth',
      colors: ["#7027CE", "#ffffff", "#000000"]
    },
    fill: {
      colors: ["#7027CE", "#ffffff", "#1f1f1f"]
    },
    xaxis: {
        labels: {
            show: false
        },  
        title: {
            text: "Time",
            style: {
                color: "#ffffff",
                fontWeight: 300
            },
            offsetX: 340
        },
        type: 'datetime',
        categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
    },
    tooltip: {
        enabled: false
    },
    yaxis: {
        labels: {
            show: false
        },
        title: {
            text: "Score",
            style: {
                color: "#ffffff",
                fontWeight: 300,
            },
            offsetY: -40,
            offsetX: 10
        }
    }
}

const StatsGraph = () => {
    return (
        <div style={{ }}>
            <ReactApexCharts 
                options={options}
                series={data}
                type="area"
                height={185}                
            />
        </div>
    )
}

export default StatsGraph
