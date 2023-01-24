import { useGlobalContext } from "../Context";
const Favorites=()=>{
    const {favorites,selectMeals, removeFromFavorite} =useGlobalContext();
    return <section className="favorites">
        <div className="favorites-content">
        <h5>Favotite</h5>
        <div className="favorites-container">
{
    favorites.map((item)=>{
        const{idMeal,strMealThumb:image}=item;
        return <div key={idMeal} className="favorites-item">
<img src={image} alt="img" className="favorites-img img" onClick={()=>selectMeals(idMeal,true)}/>
<button className="remove-btn" onClick={()=>removeFromFavorite(idMeal)}>
    Remove
</button>
        </div>
    })
}
        </div>
        </div>
    </section>
    }
    export default Favorites;