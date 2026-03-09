export const STOREGE_URL= import.meta.env.VITE_AZURE_STORAGE_URL;

/*
* Construye la URL completa de imagen para una raza.
 */
export function getImageUrl(file){
    return  `${STOREGE_URL}/cats-imagenes/${file}`;
}

export function getVideoURL(file){
    return  `${STOREGE_URL}/cats-videos/${file}`;
}

export function getPdfUrl(file){
    return  `${STOREGE_URL}/cats-pdfs/${file}`;

}

export async function getCats() {
// Simula una llamada asíncrona para que el patrón sea reemplazable por fetch()
    return Promise.resolve([
        {
            file: "Bengala.jpg",
            name: "Bengala",
            desc: "Gato activo con apariencia salvaje",
        },
        {
            file: "British Shorthair.jpeg",
            name: "British Shorthair",
            desc: "Gato robusto, calmado y cariñoso",
        },
        {
            file: "Maine Coon.jpeg",
            name: "Maine Coon",
            desc: "Raza grande, amigable y pelaje largo",
        },
        {
            file: "Persa.jpeg",
            name: "Persa",
            desc: "Gato tranquilo de cara achatada y pelo largo",
        },
        {
            file: "Sphynx.jpeg",
            name: "Sphynx",
            desc: "Gato sin pelo, muy afectuoso y curioso",
        },
        {
            file: "Siames.jpeg",
            name: "Siames",
            desc: "Gato elegante, vocal y muy sociable",
        },
    ]);
}

