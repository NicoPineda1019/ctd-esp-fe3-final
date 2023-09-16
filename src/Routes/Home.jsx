import React, { useContext } from 'react'
import Card from '../Components/Card'
import { useEffect } from 'react'
import { ContextGlobal } from '../Components/utils/global.context';

const usersEndpoint = "https://jsonplaceholder.typicode.com/users";
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const {theme, users, setUsers} = useContext(ContextGlobal)

  useEffect(() => {
    fetch(usersEndpoint)
      .then((resp) => resp.json())
      .then(data => {
        setUsers(data)
      })
      .catch(err => console.error(err))
  }, [setUsers])
  
  return (
    <main className={theme.class} >
      <h1>Home</h1>
      <div className='card-grid'>
        {/* Aqui deberias renderizar las cards */
          !!users.users &&
          users.users.map((user) => (
            <Card key={user.id}
              id={user.id}
              name={user.name}
              username={user.username}
            />
          ))
        }
      </div>
    </main>
  )
}

export default Home