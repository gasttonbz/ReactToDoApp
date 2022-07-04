import { useEffect } from "react"


export const Mensaje = () => {


  useEffect(() => {

    const onMouseMove = () => {
      console.log('moviendo')
    }
    
    window.addEventListener('mousemove', onMouseMove)
  
    return () => {
      window.removeEventListener('mousemove', onMouseMove)
    }
  }, [])
  


  return (
    <>
        <h5>Usuario ya existe</h5>
    </>
  )
}
