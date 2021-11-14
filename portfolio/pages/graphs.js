import {Container, Header, Segment} from 'semantic-ui-react'
import Footer from '../components/Footer.js'
import dynamic from 'next/dynamic'
    
const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

function Graphs(props) {
    const big_list = [{"day":"2020-09-06","diffs":{"Javascript":2}},{"day":"2020-09-07","diffs":{"Javascript":305,"Data":2}},{"day":"2020-09-08","diffs":{"Markdown":24,"Javascript":38}},{"day":"2020-09-09","diffs":{"Javascript":15}},{"day":"2020-09-12","diffs":{"Python":15}},{"day":"2020-09-15","diffs":{"Python":51}},{"day":"2020-09-16","diffs":{"Javascript":47}},{"day":"2020-09-17","diffs":{"Javascript":18,"Python":4}},{"day":"2020-09-18","diffs":{"Javascript":14,"Markdown":3}},{"day":"2020-09-19","diffs":{"Javascript":548,"HTML/CSS":449,"Python":18,"Data":80799}},{"day":"2020-09-20","diffs":{"Javascript":111,"Markdown":30,"HTML/CSS":122}},{"day":"2020-09-21","diffs":{"Javascript":116,"Data":7}},{"day":"2020-09-23","diffs":{"Javascript":10}},{"day":"2020-09-24","diffs":{"Javascript":116,"HTML/CSS":89}},{"day":"2020-09-25","diffs":{"HTML/CSS":2}},{"day":"2020-09-26","diffs":{"Python":195}},{"day":"2020-09-28","diffs":{"HTML/CSS":161,"Javascript":121,"Data":3}},{"day":"2020-09-29","diffs":{"HTML/CSS":13}},{"day":"2020-09-30","diffs":{"HTML/CSS":92,"Javascript":99}},{"day":"2020-10-01","diffs":{"Python":179}},{"day":"2020-10-02","diffs":{"Javascript":8,"Data":10}},{"day":"2020-10-03","diffs":{"Python":109}},{"day":"2020-10-04","diffs":{"Python":306,"Data":33}},{"day":"2020-10-05","diffs":{"Javascript":60}},{"day":"2020-10-06","diffs":{"Javascript":40,"Data":130,"Markdown":26}},{"day":"2020-10-07","diffs":{"Data":17}},{"day":"2020-10-08","diffs":{"Data":21}},{"day":"2020-10-09","diffs":{"Markdown":12,"HTML/CSS":6,"Javascript":158}},{"day":"2020-10-10","diffs":{"HTML/CSS":183,"Javascript":8,"Data":3}},{"day":"2020-10-11","diffs":{"HTML/CSS":170,"Markdown":59,"Javascript":236}},{"day":"2020-10-12","diffs":{"HTML/CSS":189,"Data":16,"Javascript":110,"Markdown":333}},{"day":"2020-10-13","diffs":{"Markdown":14}},{"day":"2020-10-14","diffs":{"Data":6}},{"day":"2020-10-17","diffs":{"Javascript":25,"Data":8,"HTML/CSS":15}},{"day":"2020-10-18","diffs":{"Data":4}},{"day":"2020-10-19","diffs":{"Markdown":8,"Data":2}},{"day":"2020-10-20","diffs":{"Javascript":11}},{"day":"2020-10-21","diffs":{"Data":19,"Javascript":54}},{"day":"2020-10-22","diffs":{"Javascript":9,"Data":1}},{"day":"2020-10-23","diffs":{"Data":3}},{"day":"2020-10-24","diffs":{"Data":2}},{"day":"2020-10-26","diffs":{}},{"day":"2020-10-29","diffs":{"Python":210}},{"day":"2020-10-30","diffs":{"Python":16}},{"day":"2020-11-01","diffs":{}},{"day":"2020-11-05","diffs":{"Markdown":28,"HTML/CSS":7,"Data":57,"Javascript":2}},{"day":"2020-11-06","diffs":{}},{"day":"2020-11-07","diffs":{"Python":64}},{"day":"2020-11-08","diffs":{"HTML/CSS":4}},{"day":"2020-11-09","diffs":{"Javascript":126,"Data":17,"HTML/CSS":25}},{"day":"2020-11-11","diffs":{"Javascript":9,"Data":18,"HTML/CSS":4}},{"day":"2020-11-13","diffs":{"Data":1}},{"day":"2020-11-15","diffs":{"HTML/CSS":1,"Javascript":146,"Data":5}},{"day":"2020-11-17","diffs":{"Data":4,"Javascript":6}},{"day":"2020-11-18","diffs":{"Data":5}},{"day":"2020-11-19","diffs":{"HTML/CSS":271,"Javascript":13}},{"day":"2020-11-20","diffs":{"Data":5,"Javascript":1}},{"day":"2020-11-21","diffs":{"Javascript":100,"HTML/CSS":7,"Data":11,"Markdown":11}},{"day":"2020-11-22","diffs":{"Javascript":17,"Data":4}},{"day":"2020-11-23","diffs":{"Data":12,"Javascript":42}},{"day":"2020-11-25","diffs":{"Javascript":98,"HTML/CSS":40,"Data":7}},{"day":"2020-12-01","diffs":{"Markdown":13,"HTML/CSS":33,"Javascript":10}},{"day":"2020-12-03","diffs":{"Python":198}},{"day":"2020-12-04","diffs":{"Javascript":92,"HTML/CSS":280,"Data":2}},{"day":"2020-12-05","diffs":{"Data":3}},{"day":"2020-12-06","diffs":{}},{"day":"2020-12-07","diffs":{"Data":32,"Javascript":7}},{"day":"2020-12-08","diffs":{"Javascript":45,"Data":33}},{"day":"2020-12-09","diffs":{"Javascript":35,"Data":192}},{"day":"2020-12-10","diffs":{"Javascript":6}},{"day":"2021-01-13","diffs":{"Markdown":1,"Javascript":367,"Data":204}},{"day":"2021-01-14","diffs":{"Javascript":420,"HTML/CSS":14,"Data":20246}},{"day":"2021-01-15","diffs":{"Javascript":744,"HTML/CSS":4,"Data":40264}},{"day":"2021-01-16","diffs":{"Javascript":516}},{"day":"2021-01-17","diffs":{"Javascript":188,"HTML/CSS":24}},{"day":"2021-01-18","diffs":{"Javascript":1144,"HTML/CSS":380}},{"day":"2021-01-19","diffs":{"Javascript":272,"C++":30}},{"day":"2021-01-20","diffs":{"C++":132}},{"day":"2021-01-21","diffs":{"Javascript":120}},{"day":"2021-01-22","diffs":{"Javascript":68,"HTML/CSS":4,"C++":8}},{"day":"2021-01-23","diffs":{"C++":52,"Javascript":2}},{"day":"2021-02-04","diffs":{"C++":8}},{"day":"2021-02-05","diffs":{"C++":18}},{"day":"2021-02-06","diffs":{"C++":12,"Markdown":28}},{"day":"2021-02-07","diffs":{"C++":320,"Data":3,"Markdown":24}},{"day":"2021-02-08","diffs":{"Data":12,"C++":85,"Javascript":41}},{"day":"2021-02-09","diffs":{"Javascript":84}},{"day":"2021-02-10","diffs":{"Javascript":3,"C++":39}},{"day":"2021-02-11","diffs":{"Javascript":28,"C++":12}},{"day":"2021-02-16","diffs":{"Javascript":1}},{"day":"2021-02-17","diffs":{"Javascript":2}},{"day":"2021-02-26","diffs":{"Javascript":1}},{"day":"2021-03-13","diffs":{"Javascript":1}},{"day":"2021-03-18","diffs":{"Javascript":27}},{"day":"2021-03-21","diffs":{"Javascript":13,"Data":36}},{"day":"2021-03-25","diffs":{"Javascript":2}},{"day":"2021-04-06","diffs":{"HTML/CSS":1682}},{"day":"2021-05-21","diffs":{"Python":6}},{"day":"2021-05-31","diffs":{"C++":28,"Markdown":25}},{"day":"2021-06-01","diffs":{"Javascript":3}},{"day":"2021-06-02","diffs":{"Javascript":34}},{"day":"2021-06-04","diffs":{"Python":29}},{"day":"2021-06-05","diffs":{"Javascript":15}},{"day":"2021-06-06","diffs":{}},{"day":"2021-06-07","diffs":{}},{"day":"2021-06-08","diffs":{"HTML/CSS":8,"Javascript":17}},{"day":"2021-06-09","diffs":{"HTML/CSS":17,"Javascript":38,"Markdown":21}},{"day":"2021-06-10","diffs":{"Markdown":27}},{"day":"2021-06-11","diffs":{"Markdown":10,"Javascript":60,"HTML/CSS":10,"Data":4}},{"day":"2021-06-12","diffs":{"Javascript":2}},{"day":"2021-06-13","diffs":{}},{"day":"2021-06-14","diffs":{"C++":18}},{"day":"2021-06-15","diffs":{"Data":6614,"Javascript":9}},{"day":"2021-06-17","diffs":{"Javascript":118,"HTML/CSS":9}},{"day":"2021-06-21","diffs":{"Javascript":34,"Data":10681}},{"day":"2021-06-23","diffs":{}},{"day":"2021-06-24","diffs":{"Javascript":2,"Python":6}},{"day":"2021-06-25","diffs":{"Javascript":15}},{"day":"2021-06-27","diffs":{"Data":66,"C++":1,"Python":30,"Javascript":2,"HTML/CSS":27}},{"day":"2021-07-04","diffs":{}},{"day":"2021-07-05","diffs":{"Javascript":14}},{"day":"2021-07-07","diffs":{}},{"day":"2021-07-08","diffs":{"HTML/CSS":7}},{"day":"2021-07-13","diffs":{"Markdown":18,"HTML/CSS":11,"Javascript":2}},{"day":"2021-07-16","diffs":{"Markdown":1}},{"day":"2021-07-17","diffs":{"Javascript":74,"Python":30,"HTML/CSS":1}},{"day":"2021-07-19","diffs":{}},{"day":"2021-07-20","diffs":{"Data":5820,"Javascript":1}},{"day":"2021-07-21","diffs":{"Javascript":79,"HTML/CSS":17,"Data":3931}},{"day":"2021-07-23","diffs":{"Javascript":6}},{"day":"2021-07-28","diffs":{"Javascript":98,"HTML/CSS":90}},{"day":"2021-07-31","diffs":{}},{"day":"2021-08-04","diffs":{"HTML/CSS":3,"Python":21}},{"day":"2021-08-05","diffs":{"Javascript":190,"HTML/CSS":2,"Data":50}},{"day":"2021-08-06","diffs":{"Python":53,"Javascript":31}},{"day":"2021-08-07","diffs":{"Javascript":126,"Data":1,"Python":2,"Markdown":17,"HTML/CSS":3}},{"day":"2021-08-08","diffs":{"Javascript":54}},{"day":"2021-08-09","diffs":{"Javascript":19}},{"day":"2021-08-10","diffs":{"Javascript":13}},{"day":"2021-08-11","diffs":{"Javascript":1}},{"day":"2021-08-12","diffs":{"Javascript":19,"HTML/CSS":5}},{"day":"2021-08-14","diffs":{"Markdown":28,"Data":15223,"Javascript":82,"Python":20}},{"day":"2021-08-16","diffs":{"HTML/CSS":6,"Javascript":12}},{"day":"2021-08-17","diffs":{"Javascript":11,"Python":26,"HTML/CSS":1}},{"day":"2021-08-23","diffs":{"Javascript":58}},{"day":"2021-08-26","diffs":{}},{"day":"2021-08-28","diffs":{}},{"day":"2021-09-06","diffs":{"Javascript":6}},{"day":"2021-09-09","diffs":{"HTML/CSS":8}},{"day":"2021-09-10","diffs":{"HTML/CSS":207}},{"day":"2021-09-11","diffs":{"HTML/CSS":14,"Javascript":8}},{"day":"2021-09-12","diffs":{"HTML/CSS":17,"Javascript":26}},{"day":"2021-09-14","diffs":{"HTML/CSS":297,"Javascript":352}},{"day":"2021-09-15","diffs":{"Javascript":1,"HTML/CSS":1}},{"day":"2021-09-17","diffs":{"HTML/CSS":995,"Javascript":60}},{"day":"2021-09-18","diffs":{"HTML/CSS":243}},{"day":"2021-09-20","diffs":{}},{"day":"2021-09-21","diffs":{"Python":3}},{"day":"2021-09-22","diffs":{"C++":89}},{"day":"2021-09-23","diffs":{"C++":7}},{"day":"2021-09-29","diffs":{"C++":276,"Data":1}},{"day":"2021-09-30","diffs":{"C++":74}},{"day":"2021-10-01","diffs":{"Python":78}},{"day":"2021-10-05","diffs":{"Python":30,"C++":45}},{"day":"2021-10-06","diffs":{"Python":10,"C++":256}},{"day":"2021-10-18","diffs":{}},{"day":"2021-10-19","diffs":{"Python":1}},{"day":"2021-10-20","diffs":{}},{"day":"2021-10-21","diffs":{"HTML/CSS":116,"Javascript":156}},{"day":"2021-10-25","diffs":{}},{"day":"2021-10-26","diffs":{"Markdown":1}},{"day":"2021-10-31","diffs":{"C++":207}},{"day":"2021-11-03","diffs":{}},{"day":"2021-11-05","diffs":{"Javascript":9}},{"day":"2021-11-07","diffs":{"HTML/CSS":16}},{"day":"2021-11-08","diffs":{"C++":48}},{"day":"2021-11-09","diffs":{"Javascript":1}},{"day":"2021-11-10","diffs":{"C++":659}},{"day":"2021-11-11","diffs":{"C++":70,"Markdown":2}}]
    const names = ["Javascript", "HTML/CSS", "Python", "C++"]

    function filter(series_name){
        return big_list.map((item)=>item.diffs[series_name]||0);
    }

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

