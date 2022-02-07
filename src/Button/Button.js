import './Button.css';

const Button =(props)=>{
    return(
       <button className="btn btn-dark" style={{width:'9rem', borderRadius:'15px'}} onClick={props.customEvent}>
           {props.name}
       </button>

    )
}

export default Button;