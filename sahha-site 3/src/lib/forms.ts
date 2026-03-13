import { z } from 'zod'

export const requestCareSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().optional().default(''),
  email: z.string().email('Valid email required'),
  phone: z.string().min(7, 'Phone is required'),
  subject: z.string().min(1),
  message: z.string().min(5, 'Please add a short message'),
  sourcePage: z.string().optional().default('home'),
  honeypot: z.string().optional().default(''),
})

export const appointmentSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Valid email required'),
  phone: z.string().min(7, 'Phone is required'),
  preferredDate: z.string().min(1, 'Preferred date is required'),
  preferredTime: z.string().min(1, 'Preferred time is required'),
  serviceInterest: z.string().min(1, 'Service interest is required'),
  notes: z.string().optional().default(''),
  honeypot: z.string().optional().default(''),
})

export const contactSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Valid email required'),
  phone: z.string().optional().default(''),
  subject: z.string().min(1),
  message: z.string().min(5, 'Please add a short message'),
  sourcePage: z.string().optional().default('contact'),
  honeypot: z.string().optional().default(''),
})
