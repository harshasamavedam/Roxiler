import { Component } from 'react'
import {Maindiv,Mainhedcon,Seconcont,Inputype,Divc} from './homestyle'
import {Grid} from 'react-loader-spinner'
import MonthlyAnalysys from './Monthly/Mont'
import Paginationcontext from '../context/context'
import Table from './Table/table'
import Pagination from './Pagination'
import Podctpie from './Distinctproduct/Distinproduct'
import Pricerangechart from './Pricechart/pricechat'
import './tablestyle.css'


const month=[
    {
        name:'January',
        Id:1
    }
    ,{
        name:'February',
        Id:2
    }
    ,{
        name:'March',
        Id:3
    }
    ,{
        name:'April',
        Id:4
    }
    ,{
        name:'May',
        Id:5
    }
    ,{
        name:'June',
        Id:6
    }
    ,{
        name:'July',
        Id:7
    }
    ,{
        name:'August',
        Id:8
    }
    ,{
        name:'September',
        Id:9
    }
    ,{
        name:'October',
        Id:10
    }
    ,{
        name:'November',
        Id:11
    }
    ,{
        name:'December',
        Id:12
    }
    ,
]

export default class Home extends Component{
    state={presentmonth:3,search:'',presentdata:[],filterdata:[],ma:10,present:1,monthlystatus:[],range:[],product:[]}
   

    componentDidMount(){
this.n()}


    fo=async ()=>{
let {presentmonth,search}=this.state
if(presentmonth<=9){
    presentmonth=`0${presentmonth}`
}
        const url=`https://backsql-production.up.railway.app/${presentmonth}`
        console.log(url)
        const m=await fetch(url)
        const data=await m.json()
        console.log(data)
        const la=()=>{const k=data.filter((each)=>each.title.includes(search)||each.description.includes(search)||String(each.price).includes(search))
        this.setState({filterdata:k,presentdata:data})}
        la();
        
    }
    montrepor=async ()=>{
        let {presentmonth}=this.state
        if(presentmonth<=9){
            presentmonth=`0${presentmonth}`
        }
        const url=`https://backsql-production.up.railway.app/monthlyreport/${presentmonth}`
        console.log(url)
        const da=await fetch(url)
        const data=await da.json()
        this.setState({monthlystatus:data})
    }
    pricerange=async ()=>{
        let {presentmonth}=this.state
        if(presentmonth<=9){
            presentmonth=`0${presentmonth}`
        }
        const url=`https://backsql-production.up.railway.app/productrange/${presentmonth}`
        console.log(url)
        const da=await fetch(url)
        const data=await da.json()
        this.setState({range:data})
    }

    pie=async ()=>{
        let {presentmonth}=this.state
        if(presentmonth<=9){
            presentmonth=`0${presentmonth}`
        }
        const url=`https://backsql-production.up.railway.app/distinctproduct/${presentmonth}`
        const da=await fetch(url)
        const data=await da.json()
        this.setState({product:data})

    }

    Fila=()=>{
        const {search,presentdata}=this.state
        const Cs=search.toLowerCase()
        const k=presentdata.filter((each)=>each.title.toLowerCase().includes(Cs)||each.description.toLowerCase().includes(Cs)||String(each.price).includes(search))
        this.setState({filterdata:k})
    }

    n=()=>{
        this.fo();
        this.montrepor();
        this.pricerange();
        this.pie();
    }

    monc=(event)=>{
        this.setState({presentmonth:event.target.value,presentdata:'',present:1},this.n)
    }

    changeInp=(event)=>{
        this.setState({search:event.target.value},this.Fila)

    }
    

    resp=(id)=>{
       this.setState({present:id})
    }

 onrightclick=()=>{
    this.setState((prev)=>({present:prev.present+1}))
 }
 onleftclick=()=>{
    this.setState((prev)=>({present:prev.present-1}))
 }

    render(){
        const {presentmonth,search,presentdata,filterdata,ma,present,monthlystatus,range,product}=this.state

        return <Maindiv>
            <Mainhedcon>
                <h1>Transaction<br/>Dashboard</h1>
            </Mainhedcon>
            <Seconcont>
                <Inputype type='text' onChange={this.changeInp} value={search}/>
                <Inputype as='select' defaultValue={presentmonth} onChange={this.monc}>
                   {month.map((each)=><option key={each.Id} value={each.Id}>{each.name}</option>)}
                </Inputype>
            </Seconcont>

<Paginationcontext.Provider value={{ma,present,onlefClick:this.onleftclick,onrightclick:this.onrightclick,resp:this.resp}}>
    <Table presentdata={presentdata} filterdata={filterdata}/>
    <Pagination presentdata={presentdata} filterdata={filterdata}/>
</Paginationcontext.Provider>
<MonthlyAnalysys data={monthlystatus} mont={month[presentmonth-1].name}/>
< Divc>
    <h1>Sale report for {month[presentmonth-1].name}</h1>
    <Pricerangechart data={range}/></Divc>

    <Divc>
        <h1>salesproduct wis in mont of {month[presentmonth-1].name}</h1>
        <Podctpie data={product} />
    </Divc>
        </Maindiv>
    }
}