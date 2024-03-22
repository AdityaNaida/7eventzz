"use client";
//libraries
import { useState } from "react";
//style
import style from "@/components/Navbar/Search.module.css";

const Search: React.FC = () => {
  const [searchAnimation, setSearchAnimation] = useState<boolean>(true);

  //Search input Focus
  const onFocusHandler = (e: React.FocusEvent<HTMLInputElement>) => {
    setSearchAnimation(false);
  };

  //Search input blur for restart text animation
  const onBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > 0) {
      setSearchAnimation(false);
    } else {
      setSearchAnimation(true);
    }
  };
  return (
    <div className={style.container}>
      <input
        type="text"
        placeholder=""
        required
        onFocus={onFocusHandler}
        onBlur={onBlur}
      />
      {searchAnimation && (
        <div className={style.animatedText}>
          Search for
          <div className={style.animation}>
            <div className={style.first}>
              <div>Decorations</div>
            </div>
            <div className={style.second}>
              <div>Flowers</div>
            </div>
            <div className={style.third}>
              <div>Cakes</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;
