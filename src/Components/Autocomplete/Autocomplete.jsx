const Autocomplete=()=>{
return <div className="w-50 p-5 rounded mx-auto">
<div className="form-floating dropdown">
<input type="text" style={{backgroundColor:"rgba(145, 157, 171, 0.48)"}}
 className="form-control" placeholder="search" id="search" autoComplete="off">
     </input> 
     <label htmlFor="search">search</label>
     <ul className="dropdown-menu ">
        <li>stock1</li>
        <li>stock2</li>
        <li>stock3</li>
     </ul>
</div>
</div>
}
export default Autocomplete;