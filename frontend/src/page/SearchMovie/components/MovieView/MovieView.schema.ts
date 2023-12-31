import { MovieSchema } from "../../../../schemas/Movie.schema"

export interface MovieViewSchema {
  movie: MovieSchema | undefined
  isLoading: boolean
  searchValue: string
}
