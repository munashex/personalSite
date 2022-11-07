import React from 'react' 
import {useNavigate} from 'react-router-dom' 


const NotFound = () => {

    let navigate = useNavigate()  

    React.useEffect(() => {
        navigate('/home')
    })

    return (
        <div>

        </div>
    )
}

export default NotFound