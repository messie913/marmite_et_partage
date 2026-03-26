import React, { useState } from "react";

const Bannerhead = () => {
  const [searchData, setSearchData] = useState("");
  // console.log(searchData);
  return (
    <div className="banner-container">
      <div className="form-container">
        <form action="">
          <input
            type="text"
            id="searchInput"
            placeholder="Taper le nom d'un aliment (en anglais) ..."
            onChange={(e) => setSearchData(e.target.value)}
          />
        </form>
      </div>
    </div>
  );
};
// export const searchValue = () => {
//   return searchData;
// };
export default Bannerhead;
