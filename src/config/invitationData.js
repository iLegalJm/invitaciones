/**
 * Configuración Maestra de la Invitación (Senior Version)
 * Centraliza diseño, contenido y metadatos para SEO/Accesibilidad.
 */

export const invitationData = {
    // Ajustes de diseño global (Inyectados vía CSS Variables o Tailwind)
    settings: {
        theme: {
            primary: '#c5a059', // Oro
            secondary: '#f9f7f2', // Crema
            accent: '#2c2c2c', // Oscuro
            fonts: {
                titles: "'Playfair Display', serif",
                body: "'Montserrat', sans-serif"
            }
        },
        language: 'es',
        seo: {
            title: "Invitación de Boda - Juan & María",
            description: "Acompáñanos a celebrar nuestra unión matrimonial el 31 de diciembre.",
            ogImage: "/assets/og-image.jpg"
        }
    },

    event: {
        groom: {
            name: "Juan",
            lastName: "Pérez",
            parents: "Padres de Juan"
        },
        bride: {
            name: "María",
            lastName: "García",
            parents: "Padres de María"
        },
        date: {
            iso: "2026-07-18T18:00:00",
            display: "Sabado, 18 de Julio",
            year: "2026",
            time: "18:00 hs"
        },
        location: {
            ceremony: {
                name: "Parroquia San Francisco de Asís",
                address: "Jirón Colón 324, Barranco 15063",
                googleMaps: "https://maps.app.goo.gl/B1SpPxk2mWRAvL59A",
                time: "18:00 hs"
            },
            party: {
                name: "Salón de Eventos Hoross",
                address: "Avenida, Av. Pedro de Osma 152, Barranco 15063",
                googleMaps: "https://maps.app.goo.gl/Ss37i9m6Jha1kmAb6",
                time: "21:00 hs"
            }
        }
    },

    features: {
        countdown: {
            enabled: true,
            labels: { d: "Días", h: "Hs", m: "Min", s: "Seg" }
        },
        music: {
            url: "/assets/music/Goo Goo Dolls Iris.mp3",
            title: "Perfect - Ed Sheeran"
        },
        rsvp: {
            deadline: "2026-07-18",
            phone: "51933095596",
            fields: {
                name: "Nombre y Apellido",
                guests: "Acompañantes",
                diet: "Restricciones alimentarias (ej. Celíaco, Vegano)",
                message: "Mensaje especial"
            },
            whatsappTemplate: "¡Hola {groom} y {bride}! Confirmo m asistencia.\n\n👤 *Nombre:* {name}\n👥 *Lugar/es:* {guests}\n🍽️ *Dieta:* {diet}\n💌 *Nota:* {message}"
        },
        dressCode: {
            title: "Código de Vestimenta",
            type: "Elegante Sport",
            description: "Queremos que estés cómodo para bailar toda la noche."
        },
        gift: {
            title: "Regalo",
            description: "Tu presencia es nuestro mejor regalo, pero si deseas hacernos un presente...",
            bankData: {
                bank: "Banco Global",
                alias: "BODA.JUAN.MARIA",
                cbu: "12345678901234567890"
            }
        },
        gallery: [
            { url: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc", caption: "Nuestro primer viaje" },
            { url: "https://images.unsplash.com/photo-1519741497674-611481863552", caption: "El compromiso" },
            { url: "https://images.unsplash.com/photo-1519225421980-715bd0215aed", caption: "Un día especial" }
        ],
        story: [
            { date: "Enero 2021", title: "El primer café", description: "Donde todo comenzó, entre risas y nervios." },
            { date: "Marzo 2023", title: "El gran sí", description: "Bajo las estrellas, prometimos un camino juntos." },
            { date: "Hoy", title: "Nuestra Boda", description: "El comienzo de nuestro 'para siempre'." }
        ]
    }
};
