import './foot.css'
import Text from './Text';
import Btn from '../Btns/btn';
import Footd from './Footda';
import Main from './Main';
let Foot=()=>{
    return(
        <>
    <div className='hulk'>
        <div className='tex'>
            <h2>
                Join the Adventure newsletter to receive our best vacation deals.
            </h2>
            <h3>
                You  can unsubscribed at any time.
            </h3>

        </div>
        <div class="bete">
       <Text></Text>
       <Btn Name="Subscribe"></Btn>
       
        </div>
        <div className='fotva'>
        <div>
            <Footd name="About Us" data1="How it works" data2="Careers" data3="investors" data4="Term of service"></Footd>
        </div>
        <div> 
            <Footd name="Contact Us" data1="Contact" data2="Support" data3="Destination" data4="Sponsership"></Footd>
        </div>
        <djv>
            <Footd name="Videos" data1="" data2="Submit Video" data3="Ambassadors" data4="Agency" ></Footd>
        </djv>
        </div>
        <div>
            <Main></Main>
        </div>
    </div>
    </>
    )

}
export default Foot;