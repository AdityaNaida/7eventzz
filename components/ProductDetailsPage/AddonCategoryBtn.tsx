//style
import style from "@/components/ProductDetailsPage/AddonCategoryBtn.module.css";

export default function AddonCategoryBtn({
  value,
  isActive,
}: {
  value: string;
  isActive: boolean;
}) {
  return (
    <>
      <button className={`${style.btn} ${isActive ? style.active : ""}`}>
        {value}
      </button>
    </>
  );
}
