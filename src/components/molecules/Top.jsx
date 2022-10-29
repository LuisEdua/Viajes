import Card from '../molecules/Card'
function Top() {
    const top = [
        {
            key: "1",
            img: '/img/Destinos/NuevaYork.jpg',
            nombre: "Nueva York, USA",
            precio: "$15,000.00",
            info: "Viaje redondo. Vuelo desde ciudad de México"
        },
        {
            key: "2",
            img: '/img/Destinos/Alaska.jpg',
            nombre: "Alaska, USA",
            precio: "$15,000.00",
            info: "Vuelo para una persona, viaje redondo. Vuelo desde ciudad de México"
        },
        {
            key: "3",
            img: '/img/Destinos/CruceroCancun.jpg',
            nombre: "Crucero Cancun-La Habana",
            precio: "$3,000.00/persona",
            info: "Crucero de 4 noches, Cancun- La Habana"
        },
        {
            key: "4",
            img: '/img/Destinos/Islandia.jpg',
            nombre: "Islandia",
            precio: "$20,000.00",
            info: "Viaje redondo. Vuelo desde ciudad de México"
        },
        {
            key: "5",
            img: '/img/Destinos/Tahíti.jpg',
            nombre: "Tahíti, Francia",
            precio: "$32,000.00",
            info: "Vuelo y crucero para cuatro personas, viaje redondo. Vuelo desde ciudad de Mexico"
        },
        {
            key: "6",
            img: '/img/Destinos/Paris.jpg',
            nombre: "Paris, Francia",
            precio: "$35,000.00",
            info: "Vuelo para dos personas, viaje redondo. Vuelo desde ciudad de México"
        },
        {
            key: "7",
            img: '/img/Destinos/Grecia.jpg',
            nombre: "Grecia",
            precio: "$20,000.00",
            info: "Viaje redondo. Vuelo desde ciudad de México"
        },
        {
            key: "8",
            img: '/img/Destinos/Roma.jpg',
            nombre: "Roma, Italia",
            precio: "$60,000.00",
            info: "Vuelo para 4 personas, viaje redondo. Vuelo desde ciudad de México"
        },
        {
            key: "9",
            img: '/img/Destinos/Tokio.jpg',
            nombre: "Tokio, Japon",
            precio: "$60,000.00",
            info: "Vuelo para 3 personas, viaje redondo. Vuelo desde ciudad de México"
        }
    ]
    return (
        <>
            <h2>Más Buscados</h2>
            <div className="top_container">
                {top.map((top) => (
                    <Card
                        key={top.key}
                        img={top.img}
                        nombre={top.nombre}
                        precio={top.precio}
                        info={top.info}
                    />
                ))
                }
            </div>
        </>
    )
}
export default Top;