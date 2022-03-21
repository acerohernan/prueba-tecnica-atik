import React, { useState } from "react";
import { IoMdCloudDownload as DownloadIcon } from "react-icons/io";
import productImg from "../assets/product.jpg";
import Dropdown from "./dropdown";

/* Category */
interface CategoryProps {
  name: string;
  active?: boolean;
  changeCategory: () => void;
}

const Category: React.FC<CategoryProps> = ({
  name,
  active,
  changeCategory,
}) => {
  return (
    <button
      className={`app__products_category ${
        active ? "app__products_category-active" : ""
      }`}
      onClick={changeCategory}
    >
      {name}
    </button>
  );
};

/* ProductItem */

const ProductItem = () => {
  return (
    <div className="app__products_item">
      <div className="app__products_item_main">
        <div className="app__products_item_button" />
        <img src={productImg} alt="" />
        <div className="app__products_item_info">
          <h3>Nombre</h3>
          <span>Zapatos elegantes para caballeros</span>
          <span>
            <b>SKU: 0212221212021012221</b>
          </span>
        </div>
      </div>
      <div className="app__products_item_detail">
        <h3>Fecha de vencimiento</h3>
        <span>No aplica</span>
      </div>
      <div className="app__products_item_detail">
        <h3>Categoría de producto</h3>
        <span>Zapatos para caballero</span>
      </div>
      <div className="app__products_item_detail">
        <h3>Cantidad de existencias</h3>
        <span>255 / unidades</span>
      </div>
      <div className="app__products_item_detail">
        <h3>Precio</h3>
        <span>Q. 1,233.25</span>
      </div>
      <div className="app__products_item_actions">
        <Dropdown
          options={["Ver detalles", "Descargar Excel", "Eliminar"]}
          selectedOption="Acciones"
          width="130px"
        />
      </div>
    </div>
  );
};

/* Products */
function Products() {
  const [category, setCategory] = useState("Todos");

  const handleChangeCategory = (category: string) => () => {
    setCategory(category);
  };

  return (
    <div className="app__products">
      <div className="app__products_header">
        <div>
          <h1>Productos</h1>
          <span>Consulte y gestione su inventario.</span>
        </div>
        <Dropdown
          options={["Añadir individualmente", "Carga masiva de productos"]}
          selectedOption="Añadir Producto"
          width="150px"
          blue
        />
      </div>
      <div className="app__products_detail_container">
        <div className="app__products_detail">
          <h3>Total de productos</h3>
          <span>152</span>
        </div>
        <div className="app__products_detail">
          <h3>Productos sin stock</h3>
          <span>22</span>
        </div>
        <div className="app__products_detail">
          <h3>Productos a vencer</h3>
          <span>12</span>
        </div>
        <div className="app__products_detail">
          <h3>Productos con bajo inventario</h3>
          <span>38</span>
        </div>
      </div>
      <div className="app__products_body">
        <div className="app__products_categories_container">
          <div className="app__products_categories">
            {[
              "Todos",
              "Más vendidos",
              "Bajo de inventario",
              "Próximo a vender",
              "Productos con bajo inventario",
            ].map((item, index) => {
              return (
                <Category
                  key={index}
                  name={item}
                  active={item === category}
                  changeCategory={handleChangeCategory(item)}
                />
              );
            })}
          </div>
          <button className="app__products_download-button">
            Descargar seleccionado
            <DownloadIcon />
          </button>
        </div>

        <div className="app__products_actions">
          <div>
            <div className="app__products_actions_button" />
            <Dropdown
              options={["Ver Detalles", "Descargar Excel", "Eliminar"]}
              selectedOption="Acciones"
              width="150px"
            />
          </div>
          <Dropdown
            options={[
              "Ver todos",
              "Mayor precio primero",
              "Menor precio primero",
              "Mayor stock primero",
              "Menor stock primero",
              "Fecha de vencimiento",
            ]}
            selectedOption="Ordenar Por"
            width="170px"
          />
        </div>
        <div className="app__products_product_container">
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
        </div>
      </div>
    </div>
  );
}

export default Products;
