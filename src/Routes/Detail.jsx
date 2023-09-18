import React, { useContext, useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { ContextGlobal } from '../Components/utils/global.context'

const userByIdEndpoint = "https://jsonplaceholder.typicode.com/users/"

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  const {id} = useParams()
  const [dentist, setDentist] = useState({})
  const {theme} = useContext(ContextGlobal)

  useEffect(() => {
    fetch(`${userByIdEndpoint}${id}`)
      .then((resp) => resp.json())
      .then((data) => setDentist(data))
      .catch(err => console.error(err))
  }, [id])
  
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico

  return (
    <>
      <h1 className={`${theme.class}`}>Detail Dentist {id} </h1>
      <table>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Website</th>
        </tr>
        <tr>
          <td>{dentist.name}</td>
          <td>{dentist.email}</td>
          <td>{dentist.phone}</td>
          <td>{dentist.website}</td>
        </tr>
      </table>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
    </>
  )
}

export default Detail