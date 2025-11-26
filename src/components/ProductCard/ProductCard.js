import "./ProductCard.css";

export default function ProductCard({
  title = "Título",
  background = "var(--color-card-bg)",
  width = 200,
  height = 200,
  borderRadius = 18,
}) {
  return (
    <div
      className="product-card"
      style={{ background, width, height, borderRadius }}
    >
      <img className="product-card-icon" alt="icon" src="/imagens/itau-simbolo.png"></img>
      <span className="product-card-title">{title}</span>
    </div>
  );
}