import "./FormInput.css"

const FormInput = (props) => {
  return (
    <div className="forminputs">
        {/* <label>UserName</label> */}
        <input placeholder={props.placeholder}/>   
    </div>
  )
}

export default FormInput
