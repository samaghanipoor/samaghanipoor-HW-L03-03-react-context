import React from 'react'
import { PieChart, Pie, Tooltip, Cell, Legend, LabelList } from 'recharts'

const COLORS = ["#A8D5E2", "#FFB7B2", "#FFDAB9", "#C1E1C1"]

const PieReports = ({ data }) => {
  return (
    <PieChart width={400} height={400}  margin={{ top: 0, right: 30, bottom: 0, left: 40 }}>
      <Pie
        data={data}
        innerRadius={70}
        outerRadius={120}
        paddingAngle={5}
        dataKey="value"
        nameKey="name"
        cornerRadius={10}
        label 
      >
        
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
        
        <LabelList dataKey="value" position="inside" fill="#000000" fontSize={14} />
      </Pie>

      
      <Tooltip formatter={(value, name) => [`${value}`, `${name}`]} />
      <Legend
        layout="vertical"
        verticalAlign="middle"
        align="right"
        wrapperStyle={{
          fontSize: 14,
          lineHeight: "28px",  
          paddingLeft: 0,
        }}
      />


    </PieChart>
  )
}

export default PieReports
