import React from "react";
type SearchProps = {
  value: string;
  onChange: (e: any) => void;
};
const Search = ({ value, onChange }: SearchProps) => {
  return (
    <div className="relative flex items-center">
      <input
        value={value}
        onChange={onChange}
        type="text"
        className="input search"
      />
      <i className="absolute text-white right-2 ri-search-line"></i>
    </div>
  );
};

export default Search;
