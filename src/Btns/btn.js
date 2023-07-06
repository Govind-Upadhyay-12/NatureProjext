import './btn.css';
export default function Btn(props){
    return(
        <div className='br'>
            <button className='bt'>{props.Name}  {props.em}</button>
        </div>
    )
}