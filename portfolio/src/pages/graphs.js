import React from 'react'
import { useRouteData } from 'react-static'
import {SegmentGroup, Segment, Container} from 'semantic-ui-react'
import Footer from '../components/Footer.js'
import ReactApexChart from 'react-apexcharts'


function Graphs(props) {
    const {big_list} = useRouteData()
    const names = ["Data", "Python", "Javascript", "CSS", "HTML", "Markdown"]

    function filter(series_name){
        return big_list.map((item)=>item.diffs[series_name]||0);
    }

    const series = [];

    for(const name of names){
        const filtered_list = filter(name)
        for(let index=1; index<filtered_list.length; index++){
            filtered_list[index] += filtered_list[index-1]
        }
        console.log(filtered_list)
        // break;
        series.push({
            name: name,
            data: filtered_list
        })
    }

    const options = {
        chart:{
            type: 'area',
            height: 350,
            stacked: true,
        },
        // stroke: {
        //     curve: 'smooth'
        // }
    }


    return (
        <Container className="very padded">

          <p>{JSON.stringify(big_list[0])}</p>
          { 
            big_list.map((item)=>
                <Segment.Group horizontal>
                    <Segment>{item.day.toString()}</Segment>
                    <Segment>{JSON.stringify(item.diffs)}</Segment>
                </Segment.Group>
            )

          }
          <ReactApexChart series={series} options={options}></ReactApexChart>

        
          <Footer/>
        

        </Container>
    )
}

export default Graphs

