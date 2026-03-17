/**
 * catService.js
 * Capa de datos: abstrae el acceso a las razas y a las URLs del Blob Storage.
 * La UI no necesita saber de dónde vienen los datos (Blob directo o API).
 * Principio SOLID — D: Dependency Inversion / S: Single Responsibility
 */

// URL base del contenedor público de Azure Blob Storage
export const STORAGE_URL = import.meta.env.VITE_AZURE_STORAGE_URL;


/**
 * Catálogo de razas.
 * En una versión con backend, esta función haría fetch() a la API REST.
 * Por ahora retorna los datos estáticos directamente desde Blob Storage.
 * @returns {Promise<Array>} Lista de objetos raza
 */
export async function getCats() {
  // Simula una llamada asíncrona para que el patrón sea reemplazable por fetch()
  return Promise.resolve([
    {
      file: "Bengala.jpg",
      name: "Bengala",
      desc: "Ágil y curioso, siempre en movimiento",
    },
    {
      file: "British Shorthair.jpeg",
      name: "British Shorthair",
      desc: "Salvaje por fuera, tierno por dentro",
    },
    {
      file: "Maine Coon.jpeg",
      name: "Maine Coon",
      desc: "El gigante gentil de los gatos",
    },
    {
      file: "Persa.jpeg",
      name: "Persa",
      desc: "Elegante y de bajo mantenimiento",
    },
    {
      file: "Sphynx.jpeg",
      name: "Sphynx",
      desc: "Majestuoso y tranquilo como un rey",
    },
    {
      file: "Siames.jpeg",
      name: "Siames",
      desc: "Lindo y negro como yo",
    },
  ]);
}

/**
 * Construye la URL completa de imagen para una raza.
 * @param {string} file - Nombre del archivo (ej. "Persa.jpg")
 * @returns {string} URL pública del Blob Storage
 */
export function getImageUrl(file) {
  return `${STORAGE_URL}/cats-imagenes/${file}`;
}

/**
 * Construye la URL del video de una raza.
 * @param {string} name - Nombre de la raza (ej. "Persa")
 * @returns {string} URL pública del video en Blob Storage
 */
export function getVideoUrl(name) {
  return `${STORAGE_URL}/cats-videos/${name}.mp4`;
}

/**
 * Construye la URL del PDF de ficha técnica de una raza.
 * @param {string} name - Nombre de la raza (ej. "Persa")
 * @returns {string} URL pública del PDF en Blob Storage
 */
export function getPdfUrl(name) {
  return `${STORAGE_URL}/cats-pdfs/${name}.pdf`;
}
