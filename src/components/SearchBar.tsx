"use client";
import styles from "@/components/SearchBar.module.css";
import { useRouter, useSearchParams } from "next/navigation";
import { ChangeEvent, KeyboardEvent, useEffect, useState } from "react";
const SearchBar = () => {
  // 동적 라우팅
  const router = useRouter(); // "next/navigation"
  const searchParams = useSearchParams();
  const q = searchParams.get("keyword");
  useEffect(() => {
    setSearch(q || "");
  }, [q]);

  const [search, setSearch] = useState("");
  const onChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleSearch = () => {
    // 같은 검색어를 다시 검색 요청할 필요는 없다.
    if (!search.trim() || q === search) {
      return;
    }

    router.push(`/search?keyword=jewelery`);
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
