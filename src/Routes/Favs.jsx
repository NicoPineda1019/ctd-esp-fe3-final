import React, { useContext } from "react";
import Card from "../Components/Card";
import { ContextGlobal } from "../Components/utils/global.context";
import { useEffect } from "react";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const {users, setFavoriteUsers} = useContext(ContextGlobal)

  useEffect(() => {
    setFavoriteUsers()
  }, [setFavoriteUsers])
  


  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
        { 
        !!users.favUsers &&
          users.favUsers.map((user) => (
            <Card key={user.id}
              id={user.id}
              name={user.name}
              username={user.username}
            />
          ))}
      </div>
    </>
  );
};

export default Favs;
