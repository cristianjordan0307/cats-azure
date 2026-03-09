export default function CatCard({ cat, imageUrl, liked, hasError, onSelect, onToggleLike, onImageError }) {
  
  return (
    <>
{/* ── Imagen ── */}
            <div className="card-img-wrap">
                {hasError ? (
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
                <div className="card-overlay" />
            </div>

{/* ── Texto ── */}
            <div className="card-body">
                <div className="card-name">{cat.name}</div>
                <div className="card-desc">{cat.desc}</div>
            </div>
            
{/* ── Footer: badge + favorito ── */}
      <div className="card-footer">

        {/* 👇 SOLO SE AGREGA onClick */}
        <span className="badge" onClick={onSelect}>
          Ver detalle →
        </span>

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

    </>
  );
}