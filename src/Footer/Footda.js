import './Footda.css'
let Footd=(props)=>{
    return(
        <>
        <div>
            <div class="contentva">
                <h2> {props.name}</h2>
                <h3>{props.data1}</h3>
                <h3>{props.data2}</h3>
                <h3>{props.data3}</h3>
                <h3>{props.data4}</h3>
                <h3>{props.data5}</h3>
            </div>
        </div>
        </>
    )
}
export default Footd;