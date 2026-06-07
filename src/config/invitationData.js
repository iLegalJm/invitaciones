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
            primary: '#A87B96', 
            secondary: '#C49CB4', 
            cream: '#E2CBD8', 
            accent: '#1F2937',
            fonts: {
                titles: "'Playfair Display', serif",
                body: "'Montserrat', sans-serif"
            }
        },
        language: 'es',
        seo: {
            title: "Xiomy-lu & Carlos - ¡Nuestra Boda!",
            description: "Acompáñanos a celebrar nuestra unión el 8 de agosto de 2026.",
            ogImage: "/assets/og-image.jpg"
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
            { time: "11:30 am", event: "Ceremonia Religiosa", location: "Parroquia San Antonio de Padua" },
            { time: "03:00 pm", event: "Ceremonia Civil", location: "La Residencia de Huachipa" },
            { time: "04:00 pm", event: "Recepción", location: "Buffet y Fiesta" }
        ],
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
                googleMaps: "https://maps.app.goo.gl/..."
            },
            civil: {
                title: "Ceremonia Civil y Recepción",
                time: "03:00 pm",
                name: "La Residencia de Huachipa",
                address: "Av. Los Cisnes Mz 1-2 Lte. 21, Huachipa - Lima",
                googleMaps: "https://maps.app.goo.gl/..."
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
            title: "Iris - Goo Goo Dolls"
        },
        rsvp: {
            deadline: "2026-07-01",
            contactName: "Gina Sosa",
            phone: "51964616511",
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
            men: "Traje completo",
            women: "Vestido largo",
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
            { url: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc", caption: "" }
        ]
    }
};
