import React from "react";

const SearchBar = ({
    handleSubmit,
    query,
    isLoading,
    setQuery
}) => {
    return (
        <form onSubmit={handleSubmit}>
            <input 
                value={query}
                className="form-control"
                placeholder="Search Recipe"
                name="query"
                disabled={isLoading}
                onChange={(event) => setQuery(event.target.value)}
            />   
            <input
                disabled={isLoading || !query}
                type="submit"
                className="relative inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-yellow-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-yellow-500 focus:ring-orange-500"
                value="Search"
            />
        </form>
    )
};

export default SearchBar
