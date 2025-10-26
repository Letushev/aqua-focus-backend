import mongoose from 'mongoose'
import { env } from '@/env.js'

export async function initDB() {
  await mongoose.connect(env.DATABASE_URL)
}
