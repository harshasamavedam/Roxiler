import { Md } from "../homestyle"

const MonthlyAnalysys=(props)=>{
    const {data,mont}=props
    console.log(mont)

       let price=null
        let sold=null
        let unsold=null
        let data1={
            sold:0,
            price:0,
            unsold:0,
        }
   const final= data.map((each,)=>{

if(each.sstatus==='sold'){
    data1.price=each.totalpurchase
    data1.sold=each.noofproducts
}
else if(each.sstatus==='notsold'){
    data1.unsold=each.noofproducts
}
return {price,sold,unsold}
    })
    console.log(data1)
    return <div>
        <h1>{`statstics month wise ${mont}`}</h1><Md>
        <p>Products Sold :{data1.sold}</p>
        <p>amount sold:{data1.price}</p>
        <p>unsold Items:{data1.unsold}</p>
    </Md></div>
}

export default MonthlyAnalysys