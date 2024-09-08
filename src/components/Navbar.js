import {useState} from 'react'
import { Link } from 'react-router-dom'
import ReorderIcon from '@mui/icons-material/Reorder';
import "../styles/Navbar.css"
function Navbar() {
  const[openLinks,setOpenLinks] = useState(false)
  // const [active,setActive] =useState(false)
  const toggleNavbar =()=>{
    setOpenLinks(!openLinks)
  }
  // const menuClick = ()=>{
  //   setActive(!active)
  // }
  return (
    <div className='navbar'>
      <div className="leftSide" id={openLinks ? "open":"close"}>
        <h1>Foody</h1>
        <div className="hiddenLinks" >
          <Link to="/">Home</Link>
          <Link to='/Menu'>Menu</Link>
          <Link to="/Contact">Contact</Link>
          <Link to="/About">About</Link>
        </div>
      </div>
      <div className="rightSide" >
        <Link to="/">Home</Link>
        <Link to='/Menu'>Menu</Link>
        <Link to="/contact">contact Us</Link>
        <Link to="/About">About Us</Link>
        <button onClick={toggleNavbar}>
          <ReorderIcon/>
        </button>
      </div>
    </div>
  )
}

export default Navbar