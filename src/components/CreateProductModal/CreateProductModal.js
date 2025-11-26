import { useEffect, useState } from "react";
import "./CreateProductModal.css";
import FormMessage from "../FormMessage/FormMessage";

export default function CreateProductModal({
    isOpen,
    onClose,
    onCreate,
    existingCodes = [],
}) {
    const [form, setForm] = useState({ id: "", name: "", code: "" });
    const [formError, setFormError] = useState("");

    useEffect(() => {
        if (isOpen) {
            setForm({ name: "", code: "" });
            setFormError("");
        }
    }, [isOpen]);

    if (!isOpen) return null;

    function handleChange(e) {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
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

        if (existingCodes.some(c => c.toLowerCase() === code.toLowerCase())) {
            setFormError("Já existe um produto com esse código.");
            return;
        }

        onCreate({ name, code });
        onClose();
    }
    return (
        <div className="modal-overlay">
            <div className="modal">
                <button className="modal-close" onClick={onClose}>
                    ×
                </button>

                <h3 className="modal-title">Criar novo produto</h3>

                <form onSubmit={handleSubmit} className="modal-form">
                    <div className="modal-field">
                        <label className="modal-label">Nome do produto</label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Insira o nome do produto"
                            value={form.name}
                            onChange={handleChange}
                            className="modal-input"
                        />
                    </div>

                    <div className="modal-field">
                        <label className="modal-label">Código do produto</label>
                        <input
                            type="text"
                            name="code"
                            placeholder="Insira o código do produto"
                            value={form.code}
                            onChange={handleChange}
                            className="modal-input"
                        />
                    </div>

                    <FormMessage type="error">{formError}</FormMessage>

                    <div className="modal-actions">
                        <button
                            type="button"
                            className="btn-secondary"
                            onClick={onClose}
                        >
                            Cancelar
                        </button>
                        <button type="submit" className="btn-primary">
                            Salvar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
