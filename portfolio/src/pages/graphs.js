import React from 'react'
import { useRouteData } from 'react-static'
import {Container, Header, Segment} from 'semantic-ui-react'
import Footer from '../components/Footer.js'
import ReactApexChart from 'react-apexcharts'


function Graphs(props) {
    const {big_list} = useRouteData()
    const names = ["Javascript", "HTML/CSS", "Python", "C++"]

    function filter(series_name){
        return big_list.map((item)=>item.diffs[series_name]||0);
    }
    console.log(big_list)
    const series = [];

    for(const name of names){
        if(name=='Data')
            continue;
        const filtered_list = filter(name)
        for(let index=1; index<filtered_list.length; index++){
            filtered_list[index] += filtered_list[index-1]
        }
        for(let index=0; index<filtered_list.length; index++){
            filtered_list[index] = [new Date(big_list[index].day) ,filtered_list[index]]
        }
        series.push({
            name: name,
            data: filtered_list
        })
    }

    console.log(series)

    const options = {
        chart:{
            type: 'area',
            stacked: true,
            zoom: {
              autoScaleYaxis: true
            },
            toolbar:{
                show:false
            }
        },
        stroke: {
            curve: "smooth"
        },

        fill: {
            type: 'gradient',
            gradient: {
                opacityFrom: 0.6,
                opacityTo: 0.8,
              }
          },
        xaxis: {
            type: 'datetime',
            tooltip:{
                show: false
            },
            crosshairs:{
                show:false,
                width: 1,
                position: 'back',
                opacity: 1,        
                stroke: {
                    color: '#000',
                    width: 1,
                },
            },
            tooltip: {
                enabled: false,
            }

        },
        yaxis: {
            forceNiceScale: true,
            title: {
                text: "Lines Modified",
            },
        },
        colors: ['#ff6961', '#77DD77', '#458fd3', '#ffb347'],
        dataLabels: {
            enabled: false
        },
        tooltip: {
            x: {
                format: 'MMM dd yyyy'
            },
            y: {
                formatter: function(value) {
                    if(value>=1000){
                        return Math.round(value/1000 * 10) / 10 + 'k'
                    }
                    return value
                }
            }
        },
        legend: {
            show: true,
            position: "top",
            horizontalAlign: "right"
        },
 

    }


    return (
        <Container textAlign='center'> 
            <h1>Graphs</h1>
            Here are some fun graphs of my stats!

            <Segment>
                <Header>Lines modified by language in my last 1000 Commits</Header>

                <ReactApexChart type="area" series={series} options={options}></ReactApexChart>
            </Segment>
            <Footer/>
        </Container>

    )
}

export default Graphs

