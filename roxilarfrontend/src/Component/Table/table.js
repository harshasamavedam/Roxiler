import {Tab,Row,Data,HeD} from '../homestyle'
import Paginationcontext from '../../context/context'

const Table=(props)=>{
    const {presentdata,filterdata}=props
    console.log(`${filterdata} data in table`)
    return <Paginationcontext.Consumer>
{value=>{
    const{present,ma}=value
    console.log(Paginationcontext)
    const last=present*ma
    const start=last-ma
    const data=filterdata.slice(start,last)
    console.log(start,last)
    return <Tab>
    <thead>
        <tr>
        <HeD>ID</HeD>
        <HeD>Title</HeD>
        <HeD>Description</HeD>
        <HeD>Price</HeD>
        <HeD>Category</HeD>
        <HeD>Sold</HeD>
        <HeD>Image</HeD>
        </tr>
    </thead>
    <tbody>
    {presentdata.length===0?"":data.map((each)=><Row> 
    <Data>{each.id}</Data>
    <Data>{each.title}</Data>
    <Data>{each.description}</Data>
    <Data>{each.price}</Data>
    <Data>{each.category}</Data>
    <Data>{each.sold?'sold':'notsold'}</Data>
    <Data><img src={`${each.Image}`} alt={each.title}/></Data>
    </Row>)}
    </tbody>
    </Tab>
    
}}
    </Paginationcontext.Consumer>

}

export default Table