const data = [
    {
        id: 1,
        imgPortada: "/blogImage1.jpg",
        title: "Lapachos 🌳",
        description: "Si aprecias a la distancia manchas rosadas en el paisaje son ellos, sin duda, los LAPACHOS",
        content: () => (
            <>
                <p>Si aprecias a la distancia manchas rosadas en el paisaje son ellos, sin duda, los LAPACHOS (Handroanthus impetiginosus)!</p>
                <img className="responsive-img mb-3" src="/blogImage1.jpg" alt="Lapacho en flor" />
                <p>Árbol nativo que por estos días nos cautiva con su abundante floración.</p>
                <p>En Bvar Artigas desde el nuevo centro hacia el Prado los podrás apreciar, ya que hay toda una alineación de ellos. ¡Esperemos comenzar a verlo por muchos lugares más!🌸🌿</p>
            </>
        ),
        date: "31-10-2024",
        parseDate: "2024-10-31"
    },
    {
        id: 2,
        imgPortada: "/blogImage3.jpg",
        title: "Suculentas 🌸",
        description: "Las suculentas no escapan a la primavera … sino miren estos granitos de arroz a pura floración.",
        content: () => (
            <>
                <p>🌸Las suculentas no escapan a la primavera … sino miren estos granitos de arroz a pura floración. Su nombre común se debe a la forma de sus pequeñas hojas como granitos de arroz. Como toda suculenta es mínimo su riego y, en este caso, tiene la particularidad de ser una planta sumamente colgante o también como tapizante del suelo. Una belleza verdad?? 🌸🌱🌱</p>
                <img className="mb-3" src="/blogImage3.jpg" alt="Suculentas granitos de arroz" />
            </>
        ),
        date: "31-10-2024",
        parseDate: "2024-10-31"
    },
    {
        id: 3,
        imgPortada: "/blogImage1.jpg",
        title: "Jacarandá 💜",
        description: "En primavera, el jacarandá transforma la ciudad con su explosión de flores violetas. Un árbol que vale la pena conocer.",
        content: () => (
            <>
                <p>💜 En primavera, el jacarandá (Jacaranda mimosifolia) transforma calles y plazas con su llamativa floración violeta.</p>
                <img className="responsive-img mb-3" src="/blogImage1.jpg" alt="Jacarandá en flor" />
                <p>Originario de América del Sur, es uno de los árboles ornamentales más admirados del mundo. Su follaje caduco y sus flores en tonos lilas lo convierten en un espectáculo único que vale la pena disfrutar cada temporada. 🌿</p>
            </>
        ),
        date: "15-09-2024",
        parseDate: "2024-09-15"
    },
]

export default data