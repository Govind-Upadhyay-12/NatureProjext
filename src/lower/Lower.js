import Foot from '../Footer/Foot';
import List from './List';
import List1 from './List1';
import './Lower.css'
let Lower=()=>{
    return(<>
    <div className="mainn">
    <div className="hea">
     <h1> Check Out these Epic Destination!</h1>
     </div>
     <div>
        <List></List>
     </div>
     <div>
        <List1></List1>
     </div>
     </div>
     <div>
        <Foot></Foot>
     </div>
    </>



    )

}
export default Lower;