import React, { useState } from "react";

const Dictionary = ({ data }) => {
  const [search, setSearch] = useState("");
  const [result, setResult] = useState("");
  const [isFound, setIsFound] = useState(false);
  const [error,setError]=useState("");

  const onclickHandler=()=>{
   let res=data.find(el=>el.word.toLowerCase()===search.toLowerCase());
   if(res){
    setResult(res["meaning"]);
    setIsFound(true);
   }else{
    setIsFound(false);
    setError("Word not found in the dictionary.");
   }
  }
  
  return (
    <div>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search for a word..."
      />
      <button onClick={onclickHandler}>Search</button>
      <br/>
      <b>Definition:</b>
      {isFound ? <p>{result}</p> : <p>{error}</p>}
    </div>
  );
};

export default Dictionary;
