import React, { Component } from 'react';
import '../adminCss/usermanagement.css';
import count from '../adminUtils/userstaticusAdmin';
import { Radio } from 'antd';
import { Bar} from "react-chartjs-2";
const d=count.map(function(t){
   return t
});
const chartDA=[{
      value:1,
     labels:['week1','week2','week3','week4'],
     datasets:[
       {
    label:'Daily',
 
    data:[d[0]],
     backgroundColor:[
         'rgba(255,99,132,0.6)',
         'rgba(75, 192, 192, 0.2)',
         'rgba(255,206,86,0.6)',
     ],
     borderColor: 'rgba(75, 192, 192, 1)',
       },
      
    ]
 },{
   value:2,
  labels:['January' ,'February' ,'March' ,'April','May' 	,'June' ,'July','August ','September','October'	,'November ','December'],
     datasets:[
       {
    label:'Monthly',
    data:[count[1].January,count[1].February,count[1].March,count[1].April,count[1].May,count[1].June,
    count[1].August,count[1].September,count[1].Octobe,count[1].November,count[1].December],
     backgroundColor:[
         'rgba(255,99,132,0.6)',
         'rgba(255,206,86,0.6)',
         'rgba(75, 192, 192, 0.2)',

     ],
     borderColor: 'rgba(75, 192, 192, 1)',
       },
      
    ]
 },{
    value:3,
     labels:['year 1','year 2','year 3','year 4'],
     datasets:[
       {
    label:'Year',
    data:[count[2].year1,count[2].year2,count[2].year3,count[2].year4],
     backgroundColor:
     [
         'rgba(255,99,132,0.6)',
         'rgba(255,206,86,0.6)',
         'rgba(75, 192, 192, 0.2)',
     ],
     borderColor: 'rgba(7, 19, 12, 1)',
       },
      
    ]
 }]
class StatisticsUsermanagement extends Component{
     constructor(props){
         super(props);
         this.state={
        chartData:chartDA[0]
             
         }
     }
     onChange = e => {
        console.log('radio checked', e.target.value);
        this.setState({
          chartData:chartDA[e.target.value-1],
          value:e.target.value
        });
      };

    render(){
       return (
           
       <div className="chart">
           <Bar
           data={this.state.chartData}
           options={{
               legendPostion:"bottom"
            }}
           />
           
           <Radio.Group style={{paddingLeft:'20%'}}onChange={this.onChange} value={this.state.value}>
            <Radio  value={1}>Daily</Radio>
            <Radio value={2}>monthly</Radio>
            <Radio  value={3}>Year</Radio>
         
        </Radio.Group>
        <h2 style={{color:'#f57b25',padding:'5% 10%'}}>Total number of users {count[3].totalnumber}</h2>
       </div>
            
       )
    }
}
export default StatisticsUsermanagement;





