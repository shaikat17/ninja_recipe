import { useParams } from "react-router-dom";
import "./Recipe.css";
import { useEffect, useState } from "react";
import recipes from "../../../public/db.json";

const Recipe = () => {
  const { id } = useParams();
  const [singleRecipe, setSingleRecipe] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    setError("")
    setLoading(true);
    const newData = recipes.recipes.filter((recipe) => recipe.id === id);
    if(newData){

        setSingleRecipe(newData[0]);
    } else {
        setError("Data not found.")
    }
    setLoading(false);
  }, [id]);

  if (loading) return <h1>Loading...</h1>;

  return (
    <div className="recipe">
        {error && <p className="error">{error}</p>}
      {singleRecipe && (
        <>
          <h2 className="page-title">{singleRecipe.title}</h2>
          <p>Takes {singleRecipe.cookingTime} to cook.</p>
          <ul>
            {singleRecipe.ingredients.map((ing) => (
              <li key={ing}>{ing}</li>
            ))}
          </ul>
          <p className="method">{singleRecipe.method}</p>
        </>
      )}
    </div>
  );
};

export default Recipe;
