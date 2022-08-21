import React from 'react'
import './App.css'
import SearchIcon from '@mui/icons-material/Search';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css'; 
import Tool from './Tool.js'
const header = () => {
  return (
    <div><header>
    <nav className="nav">
     <img src="http://img1a.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png" className="logo"></img>
     <div><a href="#"className="a" >Explore</a><b><a href="#" className="p">Plus</a></b></div>
     <img src="//img1a.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png" className="plus"/>
     <input type="text"className="text" placeholder='Search for products ,brands and more'></input>
   <h5>< SearchIcon /></h5>
  <div className="list"><Tippy content="vinay" theme="light"><button type="button" className='button'><b>Login</b></button></Tippy>
    <div className='l'>
      <a href="#">Become a seller</a>  
    </div>
    <div className='l2'><Tippy theme="white-light" content={<Tool></Tool>} interactive={true} ><lable>More</lable></Tippy><h6><ExpandMoreIcon /></h6></div>
    <div className='cart'><ShoppingCartIcon /></div>
    <div className='span'>Cart</div>
 </div>
     </nav>
  </header>
  </div>
  )
}

export default header