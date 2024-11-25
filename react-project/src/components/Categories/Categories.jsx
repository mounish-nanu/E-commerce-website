import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { loadCategories } from "../../stores/categories";

function Categories() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadCategories());
  }, [dispatch]);

  const categories = useSelector((state) => state.categories.categories);

  if (!categories || !Array.isArray(categories)) {
    return <p>Loading or no categories available...</p>;
  }

  return (
    <div>
      <ul>
        {categories.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
