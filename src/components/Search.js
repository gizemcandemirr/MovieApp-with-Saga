import React, {useState, useEffect} from 'react';
import {TextField} from "@mui/material";
import {useSelector, useDispatch} from "react-redux";
import {getMovies} from "../redux/feature/movieSlice"

const Search = () => {

    const [name, setName] = useState("spiderman");
     
    const dispatch= useDispatch();
    useEffect(()=>{
        dispatch(getMovies(name));
        console.log("gg",name)
    }, [name])

  return (
    <>
       <h2> burası search</h2>
        <form>
            <TextField type="text" fullWidth value={name} onChange={(e)=> setName(e.target.value)} />
        </form>
    
    </>
  )
}

export default Search