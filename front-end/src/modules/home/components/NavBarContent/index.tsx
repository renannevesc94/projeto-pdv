import { useState } from "react";
import { Carousel } from "../../../../components/Carousel";
import { NavBarItem } from "../NavBarItem";
import { useGetCategories } from "../../hooks/use-getCategories";
import { useSearchParams } from "react-router-dom";

export const NavBarContent: React.FC = () => {
  const { data: categories } = useGetCategories();
  const [selected, setSelected] = useState("Todos");
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [searchParams, setSearchParams] = useSearchParams();

  const items = categories?.map((category) => (
    <NavBarItem
      key={category.id}
      label={category.description}
      selected={selected}
      onClick={() => {
        setSelected(category.description);
        setSearchParams({ categoryId: category.id });
      }}
    />
  ));

  items.unshift(
    <NavBarItem
      id={""}
      label="Todos"
      selected={selected}
      key={999}
      onClick={() => {
        setSelected("Todos");
        setSearchParams({});
      }}
    />
  );

  return <Carousel>{items ? items : null}</Carousel>;
};
