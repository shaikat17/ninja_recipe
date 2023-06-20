import { useFetch } from "../../hooks/useFetch";

const Home = () => {
  const { data, isPending, error } = useFetch("./db.json");
  console.log(isPending);

  if (isPending) return <h1>Loading...</h1>;

  return (
    <div className="home">
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {data && data.recipes.map((recipe) => <h2 key={recipe.id}>{recipe.title}</h2>)}
    </div>
  );
};

export default Home;
