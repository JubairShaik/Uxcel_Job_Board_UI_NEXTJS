"use client" 


import {
    ResponsiveContainer,
    PieChart,
    Pie,
    Cell,
  } from "recharts";





import React from 'react'


const pieData = [{ name: " Group5", value: 400 }];

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const Chart = () => {
  return (
    <div className="relative w-full  ">
    <div className="w-full h-[200px] sm:h-[240px]">
      <ResponsiveContainer>
        <PieChart width={800} height={400}>
          <Pie
            data={pieData}
            innerRadius={80}
            outerRadius={100}
            fill="#00C49F"
            paddingAngle={5}
            dataKey="value"
          >
            {pieData.map((entry, index) => (
              <Cell
              
                key={`cell-${index}`}
                fill="#48bb79"
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  
    <div className="absolute  mb-5  flex items-center justify-center flex-col h-[80px] sm:h-[100px] w-[150px] top-[30%] sm:top-[35%] left-[28%]  sm:left-[42%] transform translate(-50%,-50%)">
      <span className="text-2xl  md:text-4xl font-bold text-green-500">95 %</span>
      <p className="text-green-500 mt-2 font-bold"> Match</p>
    </div>

     


  </div>
  


  )
}

export default Chart



 
