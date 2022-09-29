import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarGraph = ({ report }) => {
  let wordFrequency = {};
  for (let student of report) {
    for (let word of student.glossary) {
      wordFrequency[word] = (wordFrequency[word] || 0) + 1;
    }
  }
  wordFrequency = Object.entries(wordFrequency).sort((a, b) => b[1] - a[1]);
  console.log(wordFrequency)

  let words = [];
  let count = [];

  for (let [key, value] of wordFrequency.slice(0, 10)) {
    words.push(key);
    count.push(value);
  }

  const options = {
    indexAxis: 'y',
    elements: {
      bar: {
        borderWidth: 0
      }
    },
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Top 10 searched words'
      }
    }
  };

  const data = {
    labels: words,
    datasets: [
      {
        label: 'count',
        data: count,
        borderColor: 'hsl(210,79%,46%)',
        backgroundColor: 'hsl(210,79%,46%)'
      }
    ]
  }
  return (
    <>
      {/* <Bar options={options} data={data} /> */}
      <Bar data={data} options={options}/>
    </>
  )
}

export default BarGraph;