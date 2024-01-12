import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer,Legend } from 'recharts';

const Podctpie=(props)=>{
    const {data}=props
    console.log(data)
    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042','#FFBB48'];
    return <ResponsiveContainer width="100%" height={300}>
    <PieChart>
      <Pie
        cx="70%"
        cy="40%"
        data={data}
        startAngle={0}
        endAngle={360}
        outerRadius="70%"
        dataKey="no_of_product"
      >
        {data.map((each)=><Cell name={`${each.category}`} fill={`${COLORS[Math.floor(Math.random()*5)]}`}/>)}
      </Pie>
      <Legend
        iconType="circle"
        layout="vertical"
        verticalAlign="middle"
        align="right"
      />
    </PieChart>
  </ResponsiveContainer>
}

export default Podctpie