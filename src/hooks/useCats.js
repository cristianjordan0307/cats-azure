import { useState, useEffect } from 'react';
import{getCats, getImageUrl, getVideoURL, getPdfUrl} from "../services/catService";

export const useCats = () => {
    // Hook useState
    const [cats, setCats] = useState([]);
    const [loading, setLoading] = useState({});
    const [liked, setLiked]       = useState({});
    const [selected, setSelected] = useState(null);
    const [errors, setErrors]     = useState({});

    // hook useEfect. Carga el catálogo al montar el componente (patrón Repository)
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
    /** Cuantos gatos fueron marcados con me gusta*/
    const likedCount = Object.values(liked).filter(Boolean).length;

    return{
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

    }
}
