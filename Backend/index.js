const express=require('express')
const app=express()
const cors=require('cors')
app.use(express.json())
const mysql=require('mysql2')
app.use(cors())

const connection=mysql.createConnection({
    host:'localhost',
    password:'19B91a02i3@',
    database:'roxiler',
    user:'root'

},(err)=>{
    if(err) throw err
    console.log('database connected')
})

app.post('/post', async (req,resp)=>{
const k=function(){ 
    console.log('entered post')
    req.body.map((each)=>{ const id=each.id
        const title=each.title
        const price=each.price
        const description=each.description
        const category=each.category
        const image=each.image
        const sold=each.sold
        const dateOfSale=each.dateOfSale

        const quer=` insert into roxilerdata (id,title,price,description,category,image,sold,dateOfSale) values (?,?,?,?,?,?,?,?)`
    
        connection.query(quer,[id,title,price,description,category,image,sold,dateOfSale],(err,result)=>{
            if(err) throw err
        })
        return 0
    })}
const l=await k()
resp.send('done')
})

app.get('/:Id',async (req,resp)=>{
    const {Id}=req.params
    console.log(Id)
   const quer= `select * from roxiler.roxilerdata where month((dateofsale))=(?)`
    connection.query(quer,[Id],(err,result)=>{
        if(err) throw err
        console.log(result)
       resp.send(result)
    })
})

app.get('/monthlyreport/:id',async(req,resp)=>{
const {id}=req.params
    const quer=`select sum(price) totalpurchase,count(id) as noofproducts,case 
    when sold=0 then 'notsold'
    else 'sold'
    end as sstatus
    from roxiler.roxilerdata where month(dateOfSale)=(?) group by sold`
    connection.query(quer,[id],(err,result)=>{
if (err) throw err
resp.send(result)
    })
})


app.get('/productrange/:month',async (req,resp)=>{
    let {month}=req.params
    let quer=`select sum(price) totalpurchase,count(id) as noofproducts,case 
    when price>0 and price <=100 then '0-100'
    when price>100 and price<=200 then '101-200'
    when price>200 and price<=300 then '201-300'
    when price>300 and price<=300 then '301-400'
    when price>400 and price<=500 then '401-500'
    when price>500 and price<=600 then '501-600'
    when price>600 and price<=700 then '601-700'
    when price>700 and price<=800 then '701-800'
    when price>800 and price<=900 then '801-900'
    else '901-above'
    end as pricerange
    from roxiler.roxilerdata where month(dateOfSale)=(?) group by pricerange`

connection.query(quer,[month],(err,result)=>{
    if(err) throw err
    resp.send(result)
})
})

app.get('/distinctproduct/:month',async(req,resp)=>{
    let {month}=req.params
    let quer='select distinct category as category , count(id) as no_of_product from roxiler.roxilerdata where month(dateOfSale)=(?) group by category'
    connection.query(quer,[month],(err,result)=>{
        if(err) throw err
        resp.send(result)
    })
})

app.listen(3010,()=>console.log('http://localhost:3010'))

