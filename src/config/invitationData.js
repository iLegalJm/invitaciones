/**
 * Configuración Maestra de la Invitación: Sheyla & Iván
 * Centraliza diseño, contenido y metadatos para la boda.
 */

export const invitationData = {
    settings: {
        theme: {
            dark: '#1D2849',
            primary: '#175294',
            secondary: '#308FBB',
            accent: '#74B0D3',
            cream: '#D5E9F1',
            fonts: {
                titles: "'Playfair Display', serif",
                body: "'Montserrat', sans-serif"
            }
        },
        language: 'es',
        seo: {
            title: "Sheyla & Iván - ¡Nuestra Boda!",
            description: "Acompáñanos a celebrar nuestra unión el 22 de agosto del 2026.",
            ogImage: "./assets/og-image.jpg"
        }
    },

    event: {
        quote: {
            text: "El mejor viaje de nuestras vidas comienza aquí.",
            verse: "Nuestra Historia"
        },
        family: {
            bride: {
                label: "Padres de la Novia",
                parents: ["Padres por definir"]
            },
            groom: {
                label: "Padres del Novio",
                parents: ["Padres por definir"]
            },
            godparents: {
                label: "Padrinos de Boda",
                people: ["Padrinos por definir"]
            }
        },
        itinerary: [
            { time: "04:30 pm", event: "Ceremonia", location: "Aún por definir", icono: "iglesia" },
            { time: "07:00 pm", event: "Recepción", location: "La Residencia de Huachipa", icono: "civil" },
            { time: "08:00 pm", event: "Baile", location: "", icono: "civil" },
            { time: "08:20 pm", event: "Brindis", location: "", icono: "brindis" },
            { time: "08:30 pm", event: "Foto", location: "", icono: "civil" },
            { time: "09:00 pm", event: "Cena", location: "", icono: "civil" },
            { time: "10:00 pm", event: "Fiesta", location: "", icono: "brindis" }
        ],
        deadline: "2026-07-22",
        groom: {
            name: "Iván",
            lastName: "",
        },
        bride: {
            name: "Sheyla",
            lastName: "",
        },
        date: {
            iso: "2026-08-22T16:30:00",
            display: "Sábado, 22 de Agosto del 2026",
            year: "2026"
        },
        locations: {
            religious: {
                title: "Ceremonia Religiosa",
                time: "04:30 pm",
                name: "Parroquia San Pedro",
                address: "Santuario Arquidiocesano del Corazón de Jesús, Centro de Lima",
                googleMaps: "https://maps.app.goo.gl/VT7UHitcxEXcZCta7?g_st=ic"
            },
            civil: {
                title: "Recepción",
                time: "07:00 pm",
                name: "La Residencia de Huachipa",
                address: "Av. Los Cisnes Mz I-2 Lte. 21, Huachipa - Lima",
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
            title: "Música de fondo"
        },
        rsvp: {
            deadline: "2026-07-22",
            contactName: "Sheyla e Iván",
            phone: "",
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
                { name: "Por definir", number: "-" }
            ]
        },
        gallery: []
    }
};

export default invitationData;
