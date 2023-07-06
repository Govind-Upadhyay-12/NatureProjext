import './Main.css'
import img6 from '../images/letter-g-logo-design-template-free-vector.jpg'
import img1 from '../images/icons8-instagram-24.png'
import img2 from '../images/icons8-twitter-24.png'
import img3 from '../images/icons8-facebook-24.png'
import img4 from '../images/icons8-youtube-24.png'
let Main=()=>{
    return(
        <>
        <div className="thehero">
            <div>
                <img src={img6} width={45}></img>


            </div>
            <div className='pri'>
                <h3>TRVL@2023</h3>

            </div>
            <div className='puy'>
            <img src={img1}></img>
            <img src={img2}></img>
            <img src={img3}></img>
            <img src={img4}></img>
            </div>
        </div>
        </>
    )

}
export default Main;