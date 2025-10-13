"use client";
import styles from "@/components/SearchBar.module.css";
import { useRouter } from "next/navigation";
import { ChangeEvent, KeyboardEvent, useState } from "react";
const SearchBar = () => {
  const [search, setSearch] = useState("");
  const onChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  // 동적 라우팅
  const router = useRouter(); // "next/navigation"
  const handleSearch = () => {
    if (!search.trim()) {
      return;
    }

    router.push(`/search?keyword=${search}`);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };
  return (
    <div className={styles.container}>
      <input
        type="text"
        value={search}
        onChange={(e) => onChangeSearch(e)}
        onKeyDown={(e) => handleKeyDown(e)}
      />
      <button onClick={handleSearch}>검색</button>
    </div>
  );
};

export default SearchBar;
