type Anime  = {
  id: number
  title: {
    romaji: string
    english: string
    native: string
  }
  description: string
  startDate: {
    year: number
    month: number
    day: number
  }
  averageScore: number
  genres: string[]
  coverImage: {
    large: string
    extraLarge: string
  }
}
