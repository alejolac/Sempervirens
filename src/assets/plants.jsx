const categorys = {
    "kits": "Kits",
    "cajoncito": "Cajoncito",
    "plantas": "Plantas",
    "terrarios": "Terrarios",
}

const products = [
    {
        id: 1,
        image: ["1-1.webp", "1-2.webp", "1-3.webp", "1-4.webp",],
        name: "Mini Kit De Huerta Orgánica Para Niños",
        price: "330",
        category: [categorys.kits],
        description: `Una manera de acercar a los niños a la naturaleza, de una forma sencilla y en el hogar
        Incluye:
        
        - Macetas Biodegradables
        - 2 variedades de Semillas (pueden ser aromáticas, hortalizas, combinadas)
        - Tierra preparada
        - Instructivo
        - Tutores
        `,
        url: "https://articulo.mercadolibre.com.uy/MLU-608616080-mini-kit-de-huerta-organica-para-ninos-_JM",
        relacionados: [1, 1, 1] // Solo IDs
    },
    {
        id: 2,
        image: ["2-1.webp", "2-2.webp", "2-3.webp", "2-4.webp",],
        name: "Cajón Para Plantas Con Tres Divisiones En Madera Rustica",
        price: "500",
        category: [categorys.cajoncito],
        description: `Cajón en madera rustica o multiplaca con tres divisiones...
        Ideal para aromáticas o florales con el tamaño justo para la cocina o ventana.
        Cada división cuenta con una pequeña pizarra para indicar el nombre de la planta o dejar un lindo mensaje.`,
        url: "https://articulo.mercadolibre.com.uy/MLU-454968896-cajon-para-plantas-con-tres-divisiones-en-madera-rustica-_JM",
        relacionados: [2, 2, 2] // Solo IDs
    },
    {
        id: 3,
        image: ["3-1.webp", "3-2.webp", "3-3.webp", "3-4.webp",],
        name: "Cajón Para Huerta Orgánica En Casa",
        price: "700",
        category: [categorys.cajoncito, categorys.plantas],
        description: `Cajón para cultivo de aromáticas, florales.
        Con tres divisiones y pizarra en cada una de ellas.
        Tamaño aproximado de 30cmx10cmx10cm. Ideal para la cocina o la ventana.
        Incluye 3 plantas y se acompaña con su ficha de cuidados.
        Cajoncito con una sola división.
        Medidas aproximadas 10x10x10 cm.`,
        url: "https://articulo.mercadolibre.com.uy/MLU-609349599-cajon-para-huerta-organica-en-casa-_JM",
        relacionados: [2, 2, 2] // Solo IDs
    },
    {
        id: 4,
        image: ["4-1.webp", "4-2.webp", "4-3.webp", "4-4.webp",],
        name: "Kit De Huerta Orgánica Para Niños",
        price: "790",
        category: [categorys.cajoncito,],
        description: `En Sempervirens nos preparamos para iniciar a los niños
        en la pasión por lo natural....

        Por ese motivo, ofrecemos Kit de Huerta Orgánica para Niños

        Incluye:

        - Dos variedades de semillas aromáticas y/o hortalizas
        - Tierra preparada
        - 2 Macetas biodegradables y 2 de plástico
        - Set de herramientas
        - Cajoncito en madera con semillero biodegradable
        - Etiquetadores
        - Instructivo

        La mejor manera de vincular y acercar a los niños a la Naturaleza!!!`,
        url: "https://articulo.mercadolibre.com.uy/MLU-448110244-kit-de-huerta-organica-para-ninos-_JM",
        relacionados: [2, 2, 2] // Solo IDs
    },
    {
        id: 5,
        image: ["5-1.webp", "5-2.webp", "5-3.webp", "5-4.webp",],
        name: "Hermosa Planta Espatifilo lirio De La Paz",
        price: "450",
        category: [categorys.plantas,],
        description: `Bonita planta de interior llamada Espatifilo, a las que comúnmente le dicen Lirios de la Paz.

        Su altura aproximada ronda entre los 40-50 cm.
        Todas nuestras plantas incluyen su ficha de cuidados.`,
        url: "https://articulo.mercadolibre.com.uy/MLU-455029439-hermosa-planta-espatifilo-lirio-de-la-paz-_JM",
        relacionados: [2, 2, 2] // Solo IDs
    },
    {
        id: 6,
        image: ["6-1.webp", "6-2.webp", "6-3.webp", "6-4.webp",],
        name: "Palmera Chamaedorea",
        price: "450",
        category: [categorys.plantas,],
        description: `Elegante palmera para interior.
        Su altura aproximada ronda los 45-50 cm.


        Todas nuestras plantas incluyen su ficha de cuidados.`,
        url: "https://articulo.mercadolibre.com.uy/MLU-455029538-palmera-chamaedorea-_JM",
        relacionados: [2, 2, 2] // Solo IDs
    },
    {
        id: 7,
        image: ["7-1.webp", "7-2.webp", "7-3.webp", "7-4.webp",],
        name: "Planta Bulbosa Hippeastrum",
        price: "480",
        category: [categorys.plantas,],
        description: `Hippeastrum papilio. Es una planta bulbosa muy resistente que en invierno - comienzos de primavera, nos regala una bellísima floración. Debemos ubicarla a media sombra o con el solcito de la mañana.`,
        url: "https://articulo.mercadolibre.com.uy/MLU-463229427-planta-bulbosa-hippeastrum-_JM",
        relacionados: [2, 2, 2] // Solo IDs
    },
    {
        id: 8,
        image: ["8-1.webp", "8-2.webp", "8-3.webp", "8-4.webp",],
        name: "Terrarios En Caja Decorativa",
        price: "490",
        category: [categorys.terrarios, categorys.plantas,],
        description: `Terrarios coloridos y contenedores de vida con plantas suculentas y/o cactus.

        Diámetro aproximado a los 8 cm

        Para hacer un bonito regalo bien presentado van contenidos en una caja decorativa.

        TAMAÑOS MAS GRANDES:
        Medidas:

        13 cm de diámetro
        Tiene diferencias de altura:
        Va de 3 cm a 5 cm
        $ 880

        20 cm de diámetro
        6 cm de altura
        $ 990`,
        url: "https://articulo.mercadolibre.com.uy/MLU-472606142-terrarios-en-caja-decorativa-_JM",
        relacionados: [2, 2, 2] // Solo IDs
    },
    {
        id: 9,
        image: ["9-1.webp", "9-2.webp", "9-3.webp",],
        name: "Troncos Naturales Con Suculentas",
        price: "250",
        category: [categorys.plantas,],
        description: `Troncos naturales aprovechados como pequeñas macetas con plantas variadas de suculentas.
        Un detalle rústico y natural como souvenir o centro de mesa para diferentes ocasiones.`,
        url: "https://articulo.mercadolibre.com.uy/MLU-602639008-troncos-naturales-con-suculentas-_JM",
        relacionados: [2, 2, 2] // Solo IDs
    },
    {
        id: 10,
        image: ["10-1.webp", "10-2.webp", "10-3.webp", "10-4.webp",],
        name: "Anturios - Varios Tamaños",
        price: "550",
        category: [categorys.plantas,],
        description: `Hermosos Anturios.
        Planta para interior muy llamativa y decorativa por sus hojas y flores!!

        Altura aproximada : 35-40 cm
        Incluye tarjeta de saludo.

        Todas nuestras plantas incluyen su ficha de cuidados.`,
        url: "https://articulo.mercadolibre.com.uy/MLU-446329600-anturios-varios-tamanos-_JM",
        relacionados: [2, 2, 2] // Solo IDs
    },
    // Otros productos
];

export default products;