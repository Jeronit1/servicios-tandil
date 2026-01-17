import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'resena',
  title: 'Reseñas',
  type: 'document',
  fields: [
    // 1. Datos básicos
    defineField({
      name: 'oficio',
      title: 'Servicio Calificado',
      type: 'reference',
      to: [{type: 'oficio'}] 
    }),
    defineField({
      name: 'nombre_servicio_texto',
      title: 'Nombre Servicio (Backup)',
      type: 'string'
    }),

    // 2. La Puntuación (Calculada desde "Excelente/Bueno...")
    defineField({
      name: 'puntuacion',
      title: 'Estrellas (1-5)',
      type: 'number',
      description: 'Calculado automáticamente: Excelente=5, Bueno=4, etc.'
    }),

    // 3. Detalles del Formulario
    defineField({
      name: 'recomienda',
      title: '¿Lo recomienda?',
      type: 'string', // Guardará "Sí", "No", "Tal vez"
    }),
    defineField({
      name: 'destacados',
      title: 'Características Destacadas',
      type: 'array',
      of: [{type: 'string'}], // Guardará ["Puntualidad", "Trato amable"]
      options: {
        layout: 'tags'
      }
    }),
    
    // 4. La opinión escrita
    defineField({
      name: 'comentario',
      title: 'Reseña Escrita',
      type: 'text',
    }),
  ]
})