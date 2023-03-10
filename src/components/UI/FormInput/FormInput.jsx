import "./FormInput.css";

const FormInput = ({id, labelName, placeholder, inputType, ...rest}) => {
    return(
    <div className="mainContainer">
        <div className="container">
            <label htmlFor={id}>{labelName}</label>
            <input type={inputType} placeholder={placeholder || "..."} id={id} {...rest}/>
        </div>
        </div>
    );
};

export default FormInput;