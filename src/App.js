import React,{useEffect,useState} from 'react'
import Header from './Header'
import Modal from './Modal'
import Card from './Card'
import { Data } from './Data'
import alanBtn from '@alan-ai/alan-sdk-web'
const App = () => {
  const[type,settype]=useState([]);
  useEffect(()=>{
    alanBtn({
      key:'0395e120ec2e8558e8f67016e90ecdad2e956eca572e1d8b807a3e2338fdd0dc/stage',
      onCommand:({ command } )=>
      {if(command==='firstcommand')
    {console.log("firstcommand")}
   if(command ==='shoe')
    {filter("shoe")}
    if(command==='shirt')
    {filter("shirt")}
    if(command==='pant')
    {filter("pant")}
    if(command==='skirt')
    {filter("skirt")}
    if(command==='sandal')
    {filter("sandal")}
    if(command==='short')
    {filter("short")}
 }});
 filter('') },[]);
  const filter=(names)=>{
    const filtered=Data.filter(function(item)
    {
      if(item.name.includes(names))
      {
        return true;
      }
      else{
        return null;
      }
    })
    console.log(filtered);
    settype(filtered);
  }
  return (
    <div>
      <Header />
      <div style={{display:'flex',flexWrap:'wrap'}}>
      {type.map(item=>(<Card image={item.image} name={item.name} rating={item.rating} actualPrice={item.actualPrice} offerPrice={item.offerPrice}/>))}
      </div>
       </div>
  )
}

export default App