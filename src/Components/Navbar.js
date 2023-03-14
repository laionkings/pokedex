import React, { useContext } from "react";
import FavoriteContext from "../Contexts/favoritesContexts";

const Navbar = () => {
  const { favoritePokemons } = useContext(FavoriteContext);
  const logoImg =
    "https://logodownload.org/wp-content/uploads/2017/08/pokemon-logo-8.png";
  return (
    <nav>
      <div>
        <img alt="pokeapi-logo" src={logoImg} className="navbar-img" />
      </div>
      <div>{favoritePokemons.length} ❤️</div>
    </nav>
  );
};

export default Navbar;