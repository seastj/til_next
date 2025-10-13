import styles from "@/app/(with-search)/search/page.module.css";
import GoodItem from "@/components/GoodItem";
import goods from "@/mock/good.json";

interface PageProps {
  searchParams: Promise<{ keyword: string }>;
}

async function Page({ searchParams }: PageProps) {
  const { keyword } = await searchParams;

  return (
    <div className={styles.container}>
      <h4>
        <strong>{keyword}</strong> : 검색페이지
      </h4>
      <div>
        {goods.map((item) => (
          <GoodItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}

export default Page;
