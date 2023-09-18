import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ContextGlobal } from "./utils/global.context";
const Card = ({ name, username, id }) => {
  const {theme} = useContext(ContextGlobal)

  const navigate = useNavigate()

  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
    const saved = JSON.parse(localStorage.getItem("favorites")) ?? []
    const favorites = [...saved]
    favorites.push({name, username, id})
    const index = saved.findIndex(fav => fav.id === id)
    if (index === -1) localStorage.setItem("favorites", JSON.stringify(favorites))
  }

  return (
    <div className={`card ${theme.class}`}>
      <div className="link" onClick={() => navigate(`/dentist/${id}`)}>
        <div className="img"></div>
        <span className={`${theme.class}`}>{id} - {name} - {username}</span>
      </div>
        {/* En cada card deberan mostrar en name - username y el id */}

        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button onClick={addFav} className={`favButton ${theme.class}`}>Add fav</button>
    </div>
  );
};

export default Card;
