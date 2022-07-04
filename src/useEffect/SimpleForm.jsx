import { useEffect, useState } from "react"
import { Mensaje } from "./Mensaje";

export const SimpleForm = () => {

  const [state, setState] = useState({
    username: 'gaston',
    email: 'gaston@google.com'
  })

  const {username, email} = state;

  const onInputChange = ({target}) => {
    const {name, value} = target;
    setState({
        ...state,
        [name]: value
    })
  }

  // useEffect(() => {
  //   console.log('use effect!')
  // }, [email]);



  return (
    <>
        <h1>Formulario Simple</h1>
        <hr />
        <input type="text" name="username" className="form-control" value={username} onChange={onInputChange}/>
        <input type="email" name="email" className="form-control mt-2" value={email} onChange={onInputChange}/>


        { (username === 'gaston2') && <Mensaje /> }
        
    </>
  )
}