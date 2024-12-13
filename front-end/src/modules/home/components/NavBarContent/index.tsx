import { useState } from "react";
import { Carousel } from "../../../../components/Carousel";
import { NavBarItem } from "../NavBarItem";
import { useGetCategories } from "../../hooks/use-getCategories";

export const NavBarContent: React.FC = () => {
  const { data: categories } = useGetCategories();
  const [selected, setSelected] = useState("");

  const items = categories?.map((category) => (
    <NavBarItem
      key={category.id}
      label={category.description}
      selected={selected}
      setSelected={setSelected}
    />
  ));

  return <Carousel>{items ? items : null}</Carousel>;
};
