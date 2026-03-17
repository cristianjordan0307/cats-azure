/**
 * useCats.js
 * Hook personalizado: encapsula la lógica de estado de la galería.
 * Separa la lógica de negocio de la capa de presentación (Gallery.jsx).
 * Principio SOLID — S: Single Responsibility
 * Patrón: Observer (useState/useEffect para reactividad)
 */
import { useState, useEffect } from "react";
import { getCats, getImageUrl, getVideoUrl, getPdfUrl } from "../services/catService";

/**
 * @returns {{
 *   cats: Array,
 *   loading: boolean,
 *   liked: object,
 *   errors: object,
 *   selected: object|null,
 *   likedCount: number,
 *   toggleLike: Function,
 *   selectCat: Function,
 *   closeCat: Function,
 *   registerError: Function,
 *   getImageUrl: Function,
 *   getVideoUrl: Function,
 *   getPdfUrl: Function,
 * }}
 */
export function useCats() {
  const [cats, setCats]         = useState([]);
  const [loading, setLoading]   = useState(true);
  const [liked, setLiked]       = useState({});       // { name: boolean }
  const [selected, setSelected] = useState(null);     // raza abierta en modal
  const [errors, setErrors]     = useState({});       // { name: boolean }

  // Carga el catálogo al montar el componente (patrón Repository)
  useEffect(() => {
    getCats().then((data) => {
      setCats(data);
      setLoading(false);
    });
  }, []);

  /** Alterna el "me gusta" de un gato */
  const toggleLike = (name) =>
    setLiked((prev) => ({ ...prev, [name]: !prev[name] }));

  /** Abre el modal de detalle para una raza */
  const selectCat = (cat) => setSelected(cat);

  /** Cierra el modal */
  const closeCat = () => setSelected(null);

  /** Registra que la imagen de una raza falló al cargar */
  const registerError = (name) =>
    setErrors((prev) => ({ ...prev, [name]: true }));

  const likedCount = Object.values(liked).filter(Boolean).length;

  return {
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
    getVideoUrl,
    getPdfUrl,
  };
}
