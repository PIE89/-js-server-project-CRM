const ProductSelect = ({ filter, setFilter }) => {
  return (
    <div className="col">
      <select
        className="custom-select"
        onChange={(e) => {
          setFilter({
            ...filter,
            product: e.target.value,
          });
        }}
      >
        <option value="all">Все продукты</option>
        <option value="course-html">Курс по верстке</option>
        <option value="course-js">Курс по JavaScript</option>
        <option value="course-vue">Курс по VUE JS</option>
        <option value="course-php">Курс по PHP</option>
        <option value="course-wordpress">Курс по WordPress</option>
      </select>
    </div>
  );
};

export default ProductSelect;
