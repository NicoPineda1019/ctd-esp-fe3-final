import React, { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const userByIdEndpoint = "https://jsonplaceholder.typicode.com/users/"

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  const {id} = useParams()
  const [dentist, setDentist] = useState({})

  useEffect(() => {
    fetch(`${userByIdEndpoint}${id}`)
      .then((resp) => resp.json())
      .then((data) => setDentist(data))
      .catch(err => console.error(err))
  }, [id])
  
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico

  return (
    <>
      <h1>Detail Dentist {id} </h1>
      <div className='card' style={{textAlign: 'center', margin: 'auto'}}>
        <span>{dentist.name} - {dentist.email}</span>
        <span>{dentist.phone} - {dentist.website}</span>
      </div>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
    </>
  )
}

export default Detail