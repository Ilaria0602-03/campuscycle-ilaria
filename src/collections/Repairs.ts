import type { CollectionConfig } from 'payload'
import { editorsOnlyField, publicContent } from '../access'
import { price } from './fields'

// The repairs the clinic can do, each with its price.
export const Repairs: CollectionConfig = {
  slug: 'repairs',
  admin: {
    useAsTitle: 'name',
  },
  access: publicContent,
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    price,
    {
      name: 'description',
      type: 'textarea',
    },
    {
  name: 'bookings',
  type: 'join',
  collection: 'bookings',
  on: 'repairs',
  access: {
    read: editorsOnlyField,
  },
},
    // Add new repair fields here.
  ],
}
