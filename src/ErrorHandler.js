import React from 'react'
const ErrorHandler = ({err})=>{
return (<>
    <h1 className="error">{err.message}</h1></>)


}
export default ErrorHandler