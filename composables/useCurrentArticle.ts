// Stato globale per l’articolo corrente (SSR-safe)
export interface LocalizedRef { slug: string; locale: string }
export interface CurrentArticle {
  slug: string
  locale: string
  localizations?: LocalizedRef[]
}

export const useCurrentArticle = () => {
  const article = useState<CurrentArticle | null>('current-article', () => null)
  return { article }
}
