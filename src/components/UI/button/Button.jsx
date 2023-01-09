import './Button.css';

const Button = (props, {width,height}) =>{
    return(
        <button className="btn" onClick={props.onClick}>{props.title}</button>
    )
};
export default Button;