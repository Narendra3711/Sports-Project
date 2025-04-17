import { Link } from "react-router-dom";
function Head(){
    return(
        <div className="head">
            <img src="/src/assets/logo1.jpg" alt='new image'/> 
            <h1>Sports <span className="space">Club</span></h1>

            <div className="navbar">
            <Link  className='box'to='/'>Home</Link>
            <Link   className='box' to='/about'>About Us</Link>
            <Link   className='box' to='/services'>Sports <i class="fa-solid fa-caret-down"></i></Link>
            <Link   className='box'to='/contact'>Contact Us</Link>
        </div>
        
            {/* <div className="icon"><i class="fa-regular fa-user"></i>
            <button className="login">Login</button>
            </div>  */}
            
        </div> 

    );
}
export default Head;