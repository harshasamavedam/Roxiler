import React from 'react'

const Paginationcontext=React.createContext({
    present:1,
    ma:2,
    onlefClick:()=>{},
    onrightclick:()=>{},
    resp:()=>{}
});
export default Paginationcontext