import React from 'react';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Md } from "../homestyle"


const Pricerangechart=(props)=>{
    const {data}=props
    let data1=[
        {'pricerange':'0-100',
        'noofproducts':0
    },  {'pricerange':'201-300',
    'noofproducts':0
},  {'pricerange':'301-400',
'noofproducts':0
},  {'pricerange':'401-500',
'noofproducts':0
},  {'pricerange':'501-600',
'noofproducts':0
},  {'pricerange':'601-700',
'noofproducts':0
},  {'pricerange':'701-800',
'noofproducts':0
},  {'pricerange':'801-900',
'noofproducts':0
},{'pricerange':'801-900',
'noofproducts':0
},{'pricerange':'901-above',
'noofproducts':0
}
]
    data.map((each)=>{
       if( each.noofproducts>0){
        data1.map((each1)=>{
            if(each.pricerange===each1.pricerange){
                each1.noofproducts=each.noofproducts
            }
        })
        }
        return 0
    })
    console.log(data1)
    return <ResponsiveContainer width="90%" height={400} >
    <BarChart
      width={10}
      height={400}
      data={data1}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    > <Tooltip />
      <XAxis dataKey="pricerange" tick={{
            stroke: "gray",
            strokeWidth: 0,
          }}/>
      <YAxis />
      <Bar dataKey="noofproducts" fill="#8884d8" barSize='10%'/>
    </BarChart>
  </ResponsiveContainer>
}
export default Pricerangechart