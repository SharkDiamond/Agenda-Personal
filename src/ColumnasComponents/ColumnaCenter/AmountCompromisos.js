import React, { useEffect,useState } from 'react';
import {Bar} from 'react-chartjs-2';
import {Chart, registerables} from "chart.js";
import ipPeticiones from '../../Ip';
import axios from 'axios';

Chart.register(...registerables);


export default function AmountCompromisos() {



  const [datos,setData]=useState([20,21,21]);

  //CICLO DE VIDA CUANDO SE MONTA EL COMPONENTE
  useEffect(async()=>{

    const datos=await axios.get(`${ipPeticiones}/Note/AmounthNotes`,{ "headers":{

      "acceso":sessionStorage.getItem('acceso')

      }});
      console.log(datos);
  

  },[]);

  const data={
    labels:["Hoy","Este Mes","Ano"],
    datasets:[
      {
        label:"Cantidades Compromisos",
        data:datos,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 1




      }

    ]


  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  return (
    <div className='mt-4 bg-white p-4 border rounded'>
      
      <Bar  options={options} data={data} />



    </div>
  )
}
