import { useEffect, useState } from "react";
import "./InicialPage.css";
import ProductCard from "../components/ProductCard/ProductCard";
import CreateProductModal from "../components/CreateProductModal/CreateProductModal";
import { FiPlus } from "react-icons/fi";
import { GoHome } from "react-icons/go";
import { useNavigate } from "react-router-dom";


const PRODUCTS_KEY = "products";

const INITIAL_PRODUCTS = [
  { id: 1, name: "Login", code: "LOGIN" },
  { id: 2, name: "Pix", code: "PIX" },
  { id: 3, name: "Crédito", code: "CREDITO" },
  { id: 4, name: "Cartões", code: "CARTOES" },
];

function loadProducts() {
  try {
    const data = localStorage.getItem(PRODUCTS_KEY);
    if (!data) return INITIAL_PRODUCTS;
    return JSON.parse(data);
  } catch {
    return INITIAL_PRODUCTS;
  }
}

export default function InicialPage() {
  const [products, setProducts] = useState(loadProducts);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  // salva no localStorage sempre que a lista mudar
  useEffect(() => {
    localStorage.setItem(PRODUCTS_KEY, JSON.stringify(products));
  }, [products]);

  function handleOpenModal() {
    setIsModalOpen(true);
  }

  function handleCloseModal() {
    setIsModalOpen(false);
  }

  function handleCreateProduct({ name, code }) {
    const newProduct = {
      id: Date.now(),
      name,
      code,
    };
    setProducts((prev) => [...prev, newProduct]);
  }

  return (
    <div className="layout">
      {/* SIDEBAR */}
      <aside className="sidebar">

        <div className="sidebar-logo">
          <img src="/imagens/itau-branco.png" alt="Itaú" />
        </div>


        <div className="sidebar-title">
          <img src="/imagens/itau-simbolo.png" alt="Itaú" />
          Portal
        </div>



        <div
          className="sidebar-item"
          onClick={() => navigate("/")}
          style={{ cursor: "pointer" }}
        >
          <span className="sidebar-icon"><GoHome /></span>
          <span>Home</span>
        </div>
      </aside>

      {/* CONTEÚDO PRINCIPAL */}
      <main className="content">
        <header className="content-header">
          <h2>{products.length} produtos criados</h2>

          <button className="btn-create" onClick={handleOpenModal}>
            <div className="btn-create-circle"><FiPlus size={20} /></div>
            <div style={{ color: "#ffffff" }}>Criar</div>
          </button>
        </header>

        {/* GRID DE PRODUTOS */}
        <section className="products-grid">
          {products.map((p) => (
            <div key={p.id} className="product-wrapper">
              <ProductCard title={p.name} />
            </div>
          ))}
        </section>
      </main>

      {/* MODAL CRIAR PRODUTO */}
      <CreateProductModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onCreate={handleCreateProduct}
        existingCodes={products.map((p) => p.code)}
      />
    </div>
  );
}
