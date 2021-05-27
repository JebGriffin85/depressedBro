import React, { useState } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { thunk_getPostsSearch } from '../../store/search.js';
const SearchBar = () => {

    const dispatch = useDispatch();
    const history = useHistory();
    const [search, setSearch] = useState('');

    const updateSearch = (e) => {
        setSearch(e.target.value);
    };

    const submitSearch = (e) => {
        e.preventDefault();
        setSearch('')
        dispatch(thunk_getPostsSearch(search))
        return history.push(`/search/${search}`)
    }
    return (
    <form onSubmit={submitSearch} >
        <input 
          type='text'
          onChange={updateSearch}
          value={search}
          placeholder='search for posts'
          ></input>


    </form>
    )
}


export default SearchBar;