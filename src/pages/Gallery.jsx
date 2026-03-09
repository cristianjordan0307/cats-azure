import "../styles/styles/gallery.css"
import CatCard from "../components/catCard.jsx";
import CatDetails from "../components/catDetail.jsx";
import {useCats} from "../hooks/useCats.js";


export default function Gallery() {
    const {
        cats,
        loading,
        liked,
        errors,
        selected,
        likedCount,
        toggleLike,
        selectCat,
        closeCat,
        registerError,
        getImageUrl,
        getVideoURL,
        getPdfUrl,
    } = useCats();

    if (loading) {
        return (
            <div style={{ color: "#8a7060", textAlign: "center", padding: "80px 0", fontFamily: "DM Sans, sans-serif" }}>
                Cargando razas…
            </div>
        );
    }
    return(
        <>
            {/* ── Hero ───────────────────────────────────────────── */}
            <div className="hero">
                {/* Huellitas decorativas animadas */}
                <div className="paw-bg" style={{ top: 20, left: "10%" }}>🐾</div>
                <div className="paw-bg" style={{ top: 60, right: "8%", animationDelay: "3s" }}>🐾</div>

                <div className="hero-tag">Azure Blob Storage · cats</div>
                <h1 className="hero-title">
                    Nuestros<br /><em>Gaticos</em>
                </h1>
                <p className="hero-sub">{cats.length} razas · imágenes servidas desde Azure</p>
                <div className="divider" />
            </div>
            {/* ── Contador de favoritos ──────────────────────────── */}
            {likedCount > 0 && (
                <div className="count-bar">
                    ❤️ Has marcado {likedCount} gato{likedCount > 1 ? "s" : ""} como favorito{likedCount > 1 ? "s" : ""}
                </div>
            )}

            {/* ── Grid de tarjetas ───────────────────────────────── */}
            <div className="grid">
                {cats.map((cat) => (
                    <CatCard
                        key={cat.name}
                        cat={cat}
                        imageUrl={getImageUrl(cat.file)}
                        liked={!!liked[cat.name]}
                        hasError={!!errors[cat.name]}
                        onSelect={selectCat}
                        onToggleLike={() => toggleLike(cat.name)}
                        onImageError={() => registerError(cat.name)}
                    />
                ))}
            </div>

            {/* ── Modal de detalle (solo si hay una raza seleccionada) ── */}
            {selected && (
                <CatDetails
                    cat={selected}
                    imageUrl={getImageUrl(selected.file)}
                    videoUrl={getVideoURL(selected.name)}
                    pdfUrl={getPdfUrl(selected.name)}
                    hasError={!!errors[selected.name]}
                    onClose={closeCat}
                />
            )}
        </>
    );
}