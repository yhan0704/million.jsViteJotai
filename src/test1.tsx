import React, { useState } from "react";

function App() {
  const [searchString, setSearchString] = useState("");
  const [result, setResult] = useState("");

  const handleInputChange = (event) => {
    setSearchString(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const a = "my_name_is_young";
    const formattedInput = searchString.replace(/\s/g, "");

    if (a.includes(formattedInput)) {
      setResult(a);
    } else {
      setResult("일치하는 문자열을 찾을 수 없습니다.");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={searchString}
          onChange={handleInputChange}
          placeholder="검색어를 입력하세요"
        />
        <button type="submit">검색</button>
      </form>
      <p>{result}</p>
    </div>
  );
}

export default App;
