import "./FormInput.css"

const FormInput = (props) => {
  return (
    <div className="forminputs">
        {/* <label>UserName</label> */}
        <input className="input" placeholder={props.placeholder} onChange={e=>props.setusername(e.target.value)}/> 
          
    </div>
  )
}

export default FormInput
