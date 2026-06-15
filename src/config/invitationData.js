/**
 * Configuración Maestra de la Invitación (Senior Version)
 * Centraliza diseño, contenido y metadatos para SEO/Accesibilidad.
 */

/**
 * Configuración Maestra de la Invitación: Xiomy-lu & Carlos
 */

export const invitationData = {
    settings: {
        theme: {
            primary: '#5E1929',
            secondary: '#8F5260',
            cream: '#FAF3E0',
            accent: '#EBD9D9',
            fonts: {
                titles: "'Playfair Display', serif",
                body: "'Montserrat', sans-serif"
            }
        },
        language: 'es',
        seo: {
            title: "Xiomy-lu & Carlos - ¡Nuestra Boda!",
            description: "Acompáñanos a celebrar nuestra unión el 8 de agosto de 2026.",
            ogImage: "./assets/og-image.jpg"
        }
    },

    event: {
        quote: {
            text: "El amor no tiene que ser perfecto, solo tiene que ser real.",
            verse: "Nuestra Historia"
        },
        family: {
            bride: {
                label: "Padres de la Novia",
                parents: ["Luisa Antezana Gutarra", "Carlos Valderrama Delgadillo"]
            },
            groom: {
                label: "Padres del Novio",
                parents: ["Lily Nieto de Mamani", "Eusebio Mamani Cárdenas"]
            },
            godparents: {
                label: "Padrinos de Boda",
                people: ["Berta Ramos Meneses", "Jaime Puycón Panta"]
            }
        },
        itinerary: [
            { time: "11:30 am", event: "Ceremonia Religiosa", location: "Parroquia San Antonio de Padua", icono: "iglesia" },
            {
                time: "01:15 pm", // Hora aproximada de salida
                event: "Traslado de Invitados",
                location: "Bus disponible hacia Huachipa",
                icono: "bus" // Puedes usar un icono de transporte
            },
            { time: "03:00 pm", event: "Ceremonia Civil", location: "La Residencia de Huachipa", icono: "civil" },
            { time: "03:30 pm", event: "Recepción", location: "Buffet y Fiesta", icono: "brindis" },
            // { time: "04:30 pm", event: "Almuerzo de Celebración", location: "La Residencia de Huachipa", icono: "comida" }
        ],
        deadline: "2026-07-01",
        groom: {
            name: "Carlos",
            lastName: "",
        },
        bride: {
            name: "Xiomy-lu",
            lastName: "",
        },
        date: {
            iso: "2026-08-08T11:30:00",
            display: "Sábado, 08 de Agosto del 2026",
            year: "2026"
        },
        locations: {
            religious: {
                title: "Ceremonia Religiosa",
                time: "11:30 am",
                name: "Parroquia San Antonio de Padua",
                address: "Av. San Felipe 571, Jesús María - Lima",
                googleMaps: "https://maps.app.goo.gl/7bMiwqL13HHK9kU58"
            },
            civil: {
                title: "Ceremonia Civil y Recepción",
                time: "03:00 pm",
                name: "La Residencia de Huachipa",
                address: "Av. Los Cisnes Mz 1-2 Lte. 21, Huachipa - Lima",
                googleMaps: "https://maps.app.goo.gl/K3GN2ds11bFgSVDX7"
            }
        }
    },

    features: {
        countdown: {
            enabled: true,
            labels: { d: "Días", h: "Hs", m: "Min", s: "Seg" }
        },
        music: {
            url: "./assets/music/cancion.mp3",
            title: "Iris - Goo Goo Dolls"
        },
        rsvp: {
            deadline: "2026-07-01",
            contactName: "Annie",
            // phone: "51901336096",
            phone: "51906299923",
            fields: {
                name: "Nombre y Apellido",
                attending: "¿Asistirás?",
                guests: "Acompañantes",
                diet: "Restricciones alimentarias",
                message: "Mensaje especial"
            }
        },
        dressCode: {
            title: "Código de Vestimenta",
            type: "FORMAL",
            men: "Traje",
            women: "Vestido de gala",
            note: "Evento Solo Adultos"
        },
        gift: {
            title: "Mesa de Regalos",
            description: "Tu presencia es nuestro mejor regalo, pero si deseas hacernos un presente, puedes hacerlo aquí:",
            accounts: [
                { name: "BBVA Soles", number: "0011-0119-0200485316" },
                { name: "CCI BBVA", number: "011-119-000200485316-50" }
            ]
        },
        gallery: [
            { url: "./assets/images/DSC_3036.jpg", caption: "" },
            { url: "./assets/images/v3_m.jpg", caption: "" },
            { url: "./assets/images/h3_m.jpeg", caption: "" },
            { url: "./assets/images/IMG_5165.jpg", caption: "" },
            { url: "./assets/images/v4_m.jpeg", caption: "" }
        ]
    }
};
