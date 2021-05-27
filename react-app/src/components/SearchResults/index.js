import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { thunk_getPostsSearch } from '../../store/search.js';
import { useParams } from 'react-router-dom';

const ShowSearchResults = () => {
    
    const posts = useSelector((state) => state.searchReducer);
   

    return (
        <>
        <h2>here</h2>
        </>
    )
}

export default ShowSearchResults;