import styled from 'styled-components'

export const Maindiv=styled.div`
color:red;
min-height:100vh;
width:100vw;
display:flex;
flex-direction:column;
align-items:center;
background:skyblue;
padding:1%
`
export const Mainhedcon=styled.div`
background-color: #F5F5F5;
color:black;
border-radius:50%;
padding:1%;
margin-bottom:5%;
`
export const Seconcont=styled.div`
background-color:transparent;
display:flex;
flex-direction:row;
justify-content: space-between;
width:90vw;
color:white
margin-bottom:30px;
`

export const Inputype=styled.input`
background-color:orange;
`
export const Tab=styled.table`
width:80vw;
margin-top:2%;
border:solid;
color:black;
border-color: black;
border-collapse: collapse;
`
export const Row=styled.tr`
border:solid;
border-bottom:2px;
border-color:black;
padding:2px;
`
export const body=styled.tbody`
width:90vw;
color:black;
min-height:30vh;
`
export const Data=styled.td`
border:solid
`
export const HeD=styled.th`
border:solid`

export const PButton=styled.button`
background-color:${(props)=>props.k?'green':'red'}
`

export const PGdiv=styled.button`
display:flex;
flex-direction:row;
justify-content:space-between;
width:90vw;
background-color:transparent;
border:transparent;
margin-top:20px`

export const Md=styled.div`
background-color:orange;
color:black;
padding:15px;
`

export const Divc=styled.div`
width:90vw;
padding:2%;
margin-top:2%;
text-align:center;
display:flex;
flex-direction:column;
align-items:center
`

