import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Search = ({ handleSearchText }) => {
    // const handleSearch = (e) =>{
    //     handleSearchText(e.target.value);
    //     console.log(e.target.value)
    // }
    return(
        <>
        <div className="search">
            <span title="search">
                <FontAwesomeIcon className="search-icon" icon={faSearch} size="1.3rem"></FontAwesomeIcon>
                <input 
                 className="search-input" 
                 type="text" 
                 placeholder="Search for notes here..."
                 onChange={(e)=> handleSearchText(e.target.value)}/>
            </span>
        </div>
        </>
    )
}

export default Search;