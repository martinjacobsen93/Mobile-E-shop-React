import React from 'react'
import { useNavigate } from 'react-router-dom'
import error404 from '../img/error404.svg'

const Error404 = () => {

    const navigate = useNavigate();

    return (
        <main className='main'>
            <div>
                <h2 className='pt-2'>Error 404</h2>
                <h3>Página no encontrada</h3>
                <button onClick={()=> navigate("/")} className='botonGenerico'>Volver a Home</button>
            </div>
            <img src={error404} alt='error404-img' className='error404__img'/>
        </main>
    )
}

export default Error404
