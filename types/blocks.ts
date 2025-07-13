// types/blocks.ts

export type Block =
  | {
      __component: 'shared.rich-text'
      id: number
      body: string
    }
  | {
      __component: 'shared.quote'
      id: number
      title: string
      body: string
    }
  | {
      __component: 'shared.media'
      id: number
      // aggiungi altri campi se presenti
    }
  | {
      __component: 'shared.slider'
      id: number
      // aggiungi altri campi se presenti
    }
