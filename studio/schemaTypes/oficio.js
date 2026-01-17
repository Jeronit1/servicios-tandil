import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'oficio',
  title: 'Servicios Tandil',
  type: 'document',
  fields: [
    // 1. Nombre del Prestador o Servicio
    defineField({
      name: 'titulo',
      title: 'Nombre del Servicio / Prestador',
      type: 'string',
      description: 'Ej: Juan Pérez Plomería o El Taller de José',
      validation: Rule => Rule.required()
    }),

    // 2. Rubro (Categorías exactas del PDF)
    defineField({
      name: 'rubro',
      title: 'Rubro / Oficio',
      type: 'string',
      options: {
        list: [
          // Mantenimiento Hogar
          { title: 'Gasista', value: 'gasista' },
          { title: 'Plomero', value: 'plomero' },
          { title: 'Electricista', value: 'electricista' },
          { title: 'Aire Acondicionado / Calefacción', value: 'climatizacion' },
          // Construcción
          { title: 'Albañil', value: 'albanil' },
          { title: 'Carpintero', value: 'carpintero' },
          { title: 'Pintor', value: 'pintor' },
          { title: 'Techista', value: 'techista' },
          { title: 'Herrero / Soldador', value: 'herrero' },
          // Exteriores
          { title: 'Jardinero / Corte de Pasto', value: 'jardinero' },
          { title: 'Piletero', value: 'piletero' },
          // Otros
          { title: 'Fletes / Mudanzas', value: 'fletes' },
          { title: 'Limpieza', value: 'limpieza' },
          { title: 'Reparación Electrodomésticos', value: 'electro' },
          { title: 'Bienestar Personal', value: 'bienestar personal' },
          { title: 'Mecanica', value: 'mecanica' },
          { title: 'Arreglos y Costura', value: 'arreglos y costura' },
        ],
      },
      validation: Rule => Rule.required()
    }),

    // 3. Descripción
    defineField({
      name: 'descripcion',
      title: 'Descripción del servicio',
      type: 'text',
      rows: 3,
      description: 'Detalle de trabajos que realiza.',
    }),

    // 4. Galería de Imágenes (Requisito: min 3 fotos)
    defineField({
      name: 'imagenes',
      title: 'Galería de Trabajos (Mínimo 3 fotos)',
      type: 'array',
      of: [{ type: 'image' }],
      options: {
        layout: 'grid',
      },
      description: 'Sube fotos reales de trabajos realizados.',
      validation: Rule => Rule.required()
    }),

    // 5. Contacto (WhatsApp obligatorio)
    defineField({
      name: 'whatsapp',
      title: 'Número de WhatsApp',
      type: 'string',
      description: 'Solo números, sin espacios (Ej: 5492494...)',
      validation: Rule => Rule.required()
    }),

    // 6. Redes (Opcional)
    defineField({
      name: 'instagram',
      title: 'Usuario de Instagram (Opcional)',
      type: 'string',
      description: 'Sin el @ (Ej: servicios_tandil)',
    }),
    defineField({
      name: 'facebook',
      title: 'Usuario de Facebook (Opcional)',
      type: 'string',
      description: 'Solo el usuario o ID (ej: JuanPerezServicios)',
    }),

    // NUEVO SISTEMA DE VALORACIÓN
    defineField({
      name: 'puntuacion',
      title: 'Puntuación (1 a 5)',
      type: 'number',
      initialValue: 5,
      validation: Rule => Rule.min(1).max(5).precision(1),
      description: 'Puntaje promedio del prestador.',
    }),
    
    defineField({
      name: 'cantidad_votos',
      title: 'Cantidad de Votos',
      type: 'number',
      initialValue: 0,
      description: 'Para mostrar credibilidad (Ej: 12 opiniones)',
    }),

    // 7. Barrio (Opcional, pero útil para Tandil)
    defineField({
      name: 'barrio',
      title: 'Barrio / Zona de cobertura',
      type: 'string',
      description: 'Ej: Villa Italia, Centro, La Movediza...',
    }),
  ],
})