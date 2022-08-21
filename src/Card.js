import React ,{useState,useEffect}from 'react'
import { Favorite } from "@mui/icons-material"
import './Card.css'
const Card = ({image,name,rating,offerPrice,actualPrice}) => {
    const[index,setindex]=useState(0);
    const[show,setshow]=useState(false);
useEffect(()=>{
    show && carousel();
},[show,index]);
const carousel=()=>{
    setTimeout(()=>{if(index<2)
    {setindex(index+1)}
else{
    setindex(0)
}},1000)
}
  return (
    <div className='card'>
<div className='card__heart'>
    <Favorite/>
</div>
<div className='card__image'>
    <img onMouseOver={()=>setshow(true)} onMouseLeave={()=>setshow(false)} src={image[index]} alt='image' ></img>
</div>
<div className='productDet'>
<div className='card__details'>
    <p className='title'>adidas</p>
    <p>running shoes</p>
    <span className='span1'>{offerPrice}</span>
    <span className='span2'>{actualPrice}</span>
    <span className='span3'>56%</span>
</div>
<div className='card__size'>
    <p>span<span>6,7,8,9</span></p>
</div>
</div>
    </div>
  )
}

export default Card