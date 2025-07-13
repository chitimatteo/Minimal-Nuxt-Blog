import { marked } from 'marked'

export function useMarkdown(markdown: string) {
  return {
    parsed: marked.parse(markdown)
  }
}
