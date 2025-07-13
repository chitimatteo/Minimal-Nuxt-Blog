import type { Block } from './blocks'

export interface Article {
  id: number
  title: string
  slug: string
  description?: string
  publishedAt: string
  cover?: {
    url: string
    alternativeText?: string
  }
  category?: {
    name: string
    slug: string
  }
  blocks?: Block[] // ✅ blocchi con struttura chiara
}
