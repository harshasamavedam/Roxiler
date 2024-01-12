import { Component } from "react";
import Paginationcontext from "../context/context";
import {PButton,PGdiv} from './homestyle'

const Pagination=(props)=>{
    const {presentdata,filterdata}=props

return <Paginationcontext.Consumer>
    {value=>{
        const {ma,present,onlefClick,onrightclick,resp}=value
        const inc=()=>{
            console.log('increase')
            onrightclick()
        }

        const dec=()=>{
            onlefClick()
        }
        const lis=[]
        const npage=Math.ceil(filterdata.length/ma)
        for(let i=1;i<npage+1;i++){
            lis.push(i)
        }

        const res=(event)=>{
            resp(event.target.value)
        }

      const k=  present*ma<filterdata.length?true:false
      const m=present>1?true:false
      
        return <PGdiv>
            <p>pg No : {present}</p>
            <div><PButton type={m?'button':null} onClick={m?dec:null} k={m}>Previous</PButton>
            <PButton type={k?'button':null} onClick={k?inc:null} k={k} >Next</PButton></div>
            <p>per page:{ma}</p>
            </PGdiv>

    }}
</Paginationcontext.Consumer>}



export default Pagination