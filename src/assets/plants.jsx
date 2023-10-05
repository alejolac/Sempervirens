const products = [
    {
        id: 1,
        image: ["img1.jpg", "img2.jpg", "img3.jpg"],
        name: "Anturio",
        category: "Planta, sol",
        price: "$150",
        description: "Un hermoso anturio perfecto para espacios soleados.",
        url: "#",
        relacionados: [
            {
                id: 2,
                image: "img1.jpg",
                name: "Suculenta",
                price: "$25",
                description: "Una hermosa suculenta ideal para tu espacio interior.",
            },
            {
                id: 3,
                image: "img2.jpg",
                name: "Rosa",
                price: "$10",
                description: "Clásicas rosas rojas para añadir elegancia a tu jardín.",
            },
            {
                id: 4,
                image: "img3.jpg",
                name: "Lavanda",
                price: "$12",
                description: "Plantas de lavanda fragantes que traen un aroma relajante a tu entorno.",
            },
        ],
    },
    {
        id: 2,
        image: ["img1.jpg", "img2.jpg", "img3.jpg"],
        name: "Suculenta",
        category: "Planta, interior",
        price: "$25",
        description: "Una hermosa suculenta ideal para tu espacio interior.",
        url: "#",
        relacionados: [
            {
                id: 1,
                image: "img1.jpg",
                name: "Anturio",
                price: "$150",
                description: "Un hermoso anturio perfecto para espacios soleados.",
            },
            {
                id: 3,
                image: "img1.jpg",
                name: "Rosa",
                price: "$10",
                description: "Clásicas rosas rojas para añadir elegancia a tu jardín.",
            },
            {
                id: 4,
                image: "img1.jpg",
                name: "Lavanda",
                price: "$12",
                description: "Plantas de lavanda fragantes que traen un aroma relajante a tu entorno.",
            },
        ],
    },
    {
        id: 3,
        image: ["img1.jpg", "img2.jpg", "img3.jpg"],
        name: "Rosa",
        category: "Flor, jardín",
        price: "$10",
        description: "Clásicas rosas rojas para añadir elegancia a tu jardín.",
        url: "#",
    },
    {
        id: 4,
        image: ["img1.jpg", "img2.jpg", "img3.jpg"],
        name: "Lavanda",
        category: "Planta, aromática",
        price: "$12",
        description: "Plantas de lavanda fragantes que traen un aroma relajante a tu entorno.",
        url: "#",
    },
];


export default products