/**
 * CatCard.jsx
 * Componente de presentación: muestra la tarjeta de una raza de gato.
 * Recibe todos sus datos por props (no accede a servicios directamente).
 * Principio SOLID — S: Single Responsibility / O: Open-Closed
 *
 * Props:
 *  @prop {object}   cat        - Objeto raza { file, name, desc }
 *  @prop {string}   imageUrl   - URL completa de la imagen en Blob Storage
 *  @prop {boolean}  liked      - Si el gato está marcado como favorito
 *  @prop {boolean}  hasError   - Si la imagen falló al cargar
 *  @prop {Function} onSelect   - Callback al hacer clic en la tarjeta
 *  @prop {Function} onToggleLike  - Callback al hacer clic en el corazón
 *  @prop {Function} onImageError  - Callback cuando la imagen falla
 */
export default function CatCard({
  cat,
  imageUrl,
  liked,
  hasError,
  onSelect,
  onToggleLike,
  onImageError,
}) {
  return (
    /* Clic en la tarjeta → abre el modal de detalle */
    <div className="card" onClick={() => onSelect(cat)}>

      {/* ── Imagen ── */}
      <div className="card-img-wrap">
        {hasError ? (
          /* Placeholder cuando la imagen no carga */
          <div className="img-error">
            🐱
            <span>Imagen no encontrada</span>
          </div>
        ) : (
          <img
            src={imageUrl}
            alt={cat.name}
            onError={onImageError}
          />
        )}
        {/* Overlay oscuro activado por CSS en hover */}
        <div className="card-overlay" />
      </div>

      {/* ── Texto ── */}
      <div className="card-body">
        <div className="card-name">{cat.name}</div>
        <div className="card-desc">{cat.desc}</div>
      </div>

      {/* ── Footer: badge + favorito ── */}
      <div className="card-footer">
        <span className="badge">Ver detalle →</span>
        {/* stopPropagation evita que el clic en el corazón abra el modal */}
        <button
          className="heart-btn"
          onClick={(e) => {
            e.stopPropagation();
            onToggleLike();
          }}
          aria-label={liked ? "Quitar de favoritos" : "Añadir a favoritos"}
        >
          {liked ? "❤️" : "🤍"}
        </button>
      </div>

    </div>
  );
}
