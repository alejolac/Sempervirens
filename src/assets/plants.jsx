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
        relacionados: [3, 4, 11] // Solo IDs
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
        relacionados: [3, 23, 18] // Solo IDs
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
        relacionados: [2, 23, 18] // Solo IDs
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
        relacionados: [1, 11, 15] // Solo IDs
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
        relacionados: [6, 7, 19] // Solo IDs
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
        relacionados: [5, 7, 10] // Solo IDs
    },
    {
        id: 7,
        image: ["7-1.webp", "7-2.webp", "7-3.webp", "7-4.webp",],
        name: "Planta Bulbosa Hippeastrum",
        price: "480",
        category: [categorys.plantas,],
        description: `Hippeastrum papilio. Es una planta bulbosa muy resistente que en invierno - comienzos de primavera, nos regala una bellísima floración. Debemos ubicarla a media sombra o con el solcito de la mañana.`,
        url: "https://articulo.mercadolibre.com.uy/MLU-463229427-planta-bulbosa-hippeastrum-_JM",
        relacionados: [6, 5, 21] // Solo IDs
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
        relacionados: [12, 9, 17] // Solo IDs
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
        relacionados: [12, 9, 17] // Solo IDs
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
        relacionados: [12, 17, 16] // Solo IDs
    },
    {
        id: 11,
        image: ["11-1.webp", "11-2.webp", "11-3.webp", "11-4.webp"],
        name: "Kit De Huerta - Para Ensalada",
        price: "450",
        category: [categorys.kits,],
        description: `Kit de Huerta para ensalada para regalar o tener en la cocina para
        preparar tus comidas mas sanas y ricas!

        Ideal para pequeños espacios. También gracias a los semilleros biodegradables,
        es posible, luego de su germinación, ubicarlas directo a tierra sin necesidad de
        transplantar, para lograr plantas mas grandes, cuidando sus raíces.

        Incluye:
        Semilleros biodegradables
        Tierra preparada
        Semillas de hortalizas dos variedades a elección ( puede ser lechuga y tomate por ejemplo)
        Señalizadores
        Instructivo`,
        url: "https://articulo.mercadolibre.com.uy/MLU-455473841-kit-de-huerta-para-ensalada-_JM",
        relacionados: [4, 1, 23] // Solo IDs
    },
    {
        id: 12,
        image: ["12-1.webp", "12-2.webp"],
        name: "Suculentas En Bolloncitos Para Regalar",
        price: "250",
        category: [categorys.plantas,],
        description: `Suculentas coloridas en bollones de vidrio que vienen con su tarjeta de dedicatoria`,
        url: "https://articulo.mercadolibre.com.uy/MLU-468757143-suculentas-en-bolloncitos-para-regalar-_JM",
        relacionados: [18, 22, 21] // Solo IDs
    },
    {
        id: 13,
        image: ["13-1.webp", "13-2.webp", "13-3.webp"],
        name: "Maceta De Barro Colgante Con Pequeñas Plantas",
        price: "290",
        category: [categorys.plantas,],
        description: `Macetitas de barro en diferentes colores con porta maceta colgante y suculentas.`,
        url: "https://articulo.mercadolibre.com.uy/MLU-471503617-maceta-de-barro-colgante-con-pequenas-plantas-_JM",
        relacionados: [6, 9, 2] // Solo IDs
    },
    {
        id: 14,
        image: ["14-1.webp"],
        name: "Colgante En Macramé",
        price: "450",
        category: [categorys.plantas,],
        description: `Colgante en macramé hecho en cordón de algodón con argolla de madera de 5 cm.
        Incluye maceta de barro pintada a mano o natural (a elección) y planta suculenta y/ o cactus. Largo aproximado 40 cm.

        Maceta de barro 7 cm de diámetro y 6 cm de altura
        Si se quisiera en maceta más grande no dude en consultarnos`,
        url: "https://articulo.mercadolibre.com.uy/MLU-475110664-colgante-en-macrame-_JM",
        relacionados: [17, 18, 21] // Solo IDs
    },
    {
        id: 15,
        image: ["15-1.webp", "15-2.webp", "15-3.webp"],
        name: "Cajoncito En Madera Con Suculentas Y/o Cactus",
        price: "1100",
        category: [categorys.plantas, categorys.cajoncito],
        description: `Cajoncito en madera con suculentas y/o cactus.
        Sus medidas son: 20x10x8 cm de altura.
        Un obsequio original y lleno de vida.

        Se pueden realizar en otras medidas:

        Cajoncito cuadrado
        Medidas: 10x10x10 cm
        $ 500

        Cajoncito rectangular
        Medidas: 15x10x7 cm
        $ 700`,
        url: "https://articulo.mercadolibre.com.uy/MLU-623865691-cajoncito-en-madera-con-suculentas-yo-cactus-_JM",
        relacionados: [23, 2, 3] // Solo IDs
    },
    {
        id: 16,
        image: ["16-1.webp", "16-2.webp"],
        name: "Pequeño Kit Con Semillas Para Regalar",
        price: "350",
        category: [categorys.kits],
        description: `Ideal para regalar!!!

        Pequeño kit de maceta, tierra y semillas. Lo acompaña un breve instructivo de siembra y cuidados.

        Lo mejor para un regalo, souvenir o simplemente comenzar con una pequeña huerta en casa.`,
        url: "https://articulo.mercadolibre.com.uy/MLU-455380094-pequeno-kit-con-semillas-para-regalar-_JM",
        relacionados: [22, 23, 1] // Solo IDs
    },
    {
        id: 17,
        image: ["17-1.webp", "17-2.webp", "17-3.webp"],
        name: "Cactus",
        price: "250",
        category: [categorys.plantas],
        description: `Variedad de cactus para elegir en macetas de barro pintadas.

        Los presentamos en dos medidas de macetas:

        6.5 cm de diámetro / 6 cm de altura $ 250
        8 cm de diámetro / 8 cm de altura $ 350

        Un bonito detalle para regalar o regalarse.
        Nuestras plantas se acompañan de su ficha de cuidados.`,
        url: "https://articulo.mercadolibre.com.uy/MLU-472737776-cactus-_JM",
        relacionados: [20, 6, 5] // Solo IDs
    },
    {
        id: 18,
        image: ["18-1.webp", "18-2.webp", "18-3.webp", "18-4.webp"],
        name: "Suculentas En Maceta Corazón",
        price: "500",
        category: [categorys.plantas],
        description: `Suculentas en maceta con forma de corazón realizada en material ecológico en impresora 3 D. Un suculento y cariñoso regalo!!!

        Opcional: Con caja decorativa. $ 50`,
        url: "https://articulo.mercadolibre.com.uy/MLU-479218426-suculentas-en-maceta-corazon-_JM",
        relacionados: [21, 12, 9] // Solo IDs
    },
    {
        id: 19,
        image: ["19-1.webp", "19-2.webp"],
        name: "Neomarica Gracilis Conocida Como Falsa Orquídea",
        price: "480",
        category: [categorys.plantas],
        description: `Planta nativa herbácea perenne que se la confunde con una Orquídea o un Lirio por la forma de su flor y de sus hojas. Floración muy llamativa. Florece en primavera`,
        url: "https://articulo.mercadolibre.com.uy/MLU-604697226-neomarica-gracilis-conocida-como-falsa-orquidea-_JM",
        relacionados: [10, 7, 6] // Solo IDs
    },
    {
        id: 20,
        image: ["20-1.webp", "20-2.webp", "20-3.webp", "20-4.webp"],
        name: "Cactus Para Regalo En Caja",
        price: "450",
        category: [categorys.plantas],
        description: `Diferentes variedades de cactus para regalar. Presentados en una decorativa caja. Un bonito regalo para los amantes de los cactus.`,
        url: "https://articulo.mercadolibre.com.uy/MLU-473331103-cactus-para-regalo-en-caja-_JM",
        relacionados: [17, 6, 5] // Solo IDs
    },
    {
        id: 21,
        image: ["21-1.webp", "21-2.webp", "21-3.webp", "21-4.webp"],
        name: "Suculentas En Macetas De Cemento",
        price: "100",
        category: [categorys.plantas],
        description: `Macetas pequeñas en cemento en variadas formas con suculentas. Desde $100.
        Pueden ser al natural o pintadas.
        Todo un detalle.
        Las suculentas son plantas muy adecuadas para regalar dada su rusticidad y mínimas exigencias. Ideales como souvenirs en cumpleaños, casamientos, aniversarios. Se acompañan con su ficha de cuidados.

        Al natural $ 100
        Pintadas $ 110

        Otra opción que ofrecemos es en macetas de barro:

        Medidas: 6.5 cm de diámetro y 6 cm de altura: $ 150
        7.5 cm de diámetro y 8 cm de altura $ 170`,
        url: "https://articulo.mercadolibre.com.uy/MLU-601805493-suculentas-en-macetas-de-cemento-_JM",
        relacionados: [18, 15, 12] // Solo IDs
    },
    {
        id: 22,
        image: ["22-1.webp", "22-2.webp", "22-3.webp"],
        name: "Kit De Reproducción De Suculentas",
        price: "450",
        category: [categorys.kits],
        description: `Kit de reproducción de suculentas para niños
        Una manera diferente de estimular a los niños a vincularse con las plantas y la naturaleza. A través de hojitas de suculentas, de nombres comunes muy originales, podrán ir viendo el proceso y formación de una nueva planta. Las suculentas son ideales ya que en su inmensa mayoría se reproducen fácilmente a través de sus hojas. Son de gran resistencia y minimas exigencias. Una bonita propuesta para realizar con nuestros niños.

        Contiene:
        3 sobres con 4 hojitas c/u de diferentes suculentas
        Semillero biodegradable
        Tierra preparada
        Set de herramientas
        3 Macetitas biodegradables
        3 Macetitas de plástico
        Instructivo`,
        url: "https://articulo.mercadolibre.com.uy/MLU-616658886-kit-de-reproduccion-de-suculentas-_JM",
        relacionados: [21, 18, 15] // Solo IDs
    },
    {
        id: 23,
        image: ["23-1.webp", "23-2.webp", "23-3.webp"],
        name: "Cajón De Huerta Para Niños",
        price: "1.100",
        category: [categorys.kits, categorys.cajoncito],
        description: `Cajoncito de Huerta para los pequeños de la casa para acercarles a las plantas y sus cuidados.

        Incluye:
        Cajoncito de madera (30x30x10 cm)
        Tierra preparada
        3 plantines de aromáticas y/o hortalizas
        Set de herramientas
        Pulverizador
        Molinete
        Instructivo de cuidados`,
        url: "https://articulo.mercadolibre.com.uy/MLU-643743959-cajon-de-huerta-para-ninos-_JM",
        relacionados: [2, 3, 18] // Solo IDs
    },
    // Otros productos
];

export default products;