// import Button from '../button/Button';
import Btn from '../Btns/btn';
import './Adventure.css'
import Vid from '../Video/pexels-vimeo-857136-1280x720-24fps.mp4'
function Adventure(){
    return(
        <>
        <div className='adv'>
      
        <div className='advv'>
        <h1>ADVENTURE AWAITS</h1>
        </div>
        <div className='da'>
         <h3>What are you waiting for ?</h3>
        </div>
        <div className='butto'>
        <Btn Name="Get Started"></Btn>
        <Btn Name="Watch Trailer" em="▶" style="color"></Btn>
        </div>
        </div>
        </>
    )
}
export default Adventure;