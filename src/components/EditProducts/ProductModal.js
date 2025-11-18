import { useEffect, useState } from "react";
import FormMessage from "../../components/FormMessage/FormMessage";

function ProductModal({ isOpen, onClose, product, products, setProducts }) {
  const [isEditing, setIsEditing] = useState(false);
  const [form, setForm] = useState({ name: "", code: "" });
  const [formError, setFormError] = useState("");

  // sempre que abrir ou mudar o produto, reseta o estado interno
  useEffect(() => {
    if (isOpen && product) {
      setForm({
        name: product.name || "",
        code: product.code || "",
      });
      setFormError("");
      setIsEditing(false);
    }
  }, [isOpen, product]);

  if (!isOpen || !product) return null;

  // códigos usados por OUTROS produtos (pra validar duplicidade)
  const otherCodes = products
    .filter((p) => p.id !== product.id)
    .map((p) => p.code);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleStartEdit() {
    setIsEditing(true);
    setFormError("");
  }

  function handleCancelEdit() {
    setIsEditing(false);
    setForm({
      name: product.name || "",
      code: product.code || "",
    });
    setFormError("");
  }

  function handleSubmit(e) {
    e.preventDefault();
    setFormError("");

    const name = form.name.trim();
    const code = form.code.trim();

    if (!name || !code) {
      setFormError("Preencha todos os campos.");
      return;
    }

    const exists = otherCodes.some(
      (c) => c.toLowerCase() === code.toLowerCase()
    );

    if (exists) {
      setFormError("Já existe um produto com esse código.");
      return;
    }

    const updatedProduct = { ...product, name, code };

    // aqui atualiza a lista inteira, usando o setProducts vindo do Home
    setProducts((prev) =>
      prev.map((p) => (p.id === updatedProduct.id ? updatedProduct : p))
    );

    // mantém o modal aberto, só sai do modo edição
    setIsEditing(false);
  }

  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="modal-close" onClick={onClose}>
          ×
        </button>

        <h3 className="modal-title">Detalhes do produto</h3>

        {/* MODO VISUALIZAÇÃO */}
        {!isEditing && (
          <div className="modal-form">
            <div className="modal-field">
              <span className="modal-label">ID</span>
              <span>{product.id}</span>
            </div>

            <div className="modal-field">
              <span className="modal-label">Nome</span>
              <span>{product.name}</span>
            </div>

            <div className="modal-field">
              <span className="modal-label">Código</span>
              <span>{product.code}</span>
            </div>

            <FormMessage type="info"></FormMessage>

            <div className="modal-actions">
              <button
                type="button"
                className="btn-secondary"
                onClick={onClose}
              >
                Fechar
              </button>
              <button
                type="button"
                className="btn-primary"
                onClick={handleStartEdit}
              >
                Editar
              </button>
            </div>
          </div>
        )}

        {/* MODO EDIÇÃO */}
        {isEditing && (
          <form onSubmit={handleSubmit} className="modal-form">
            <div className="modal-field">
              <span className="modal-label">ID (não editável)</span>
              <span>{product.id}</span>
            </div>

            <div className="modal-field">
              <label className="modal-label">Nome do produto</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="modal-input"
                placeholder="Insira o nome do produto"
              />
            </div>

            <div className="modal-field">
              <label className="modal-label">Código do produto</label>
              <input
                type="text"
                name="code"
                value={form.code}
                onChange={handleChange}
                className="modal-input"
                placeholder="Insira o código do produto"
              />
            </div>

            <FormMessage type="error">{formError}</FormMessage>

            <div className="modal-actions">
              <button
                type="button"
                className="btn-secondary"
                onClick={handleCancelEdit}
              >
                Cancelar edição
              </button>
              <button type="submit" className="btn-primary">
                Salvar alterações
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

export default ProductModal;
