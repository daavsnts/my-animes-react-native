import axios from 'axios'

export default function AnimesApiService() {
  const baseURL = 'https://graphql.anilist.co'

  async function fetchAnimeList(type: string) {
    try {
      const response = await axios.post<{ data: { Page: { media: Anime[] } } }>(
        baseURL,
        {
          query: `
          query {
            Page(perPage: 10) {
              media(${type}) {
                id
                title {
                  english
                }
                startDate {
                  year
                  month
                  day
                }
                averageScore
                coverImage {
                  large
                }
              }
            }
          }
          `,
        }
      );
      return response.data.data.Page.media;
    } catch (error: any) {
      return error
    }
  }

  async function fetchAnimeDetails(id: string) {
    try {
      const response = await axios.post<{ data: { Media: Anime } }>(
        baseURL,
        {
          query: `
          query($id: Int) {
            Media(id: $id) {
              id
              title {
                english
              }
              description
              averageScore
              genres
              startDate {
                year
                month
                day
              }
              coverImage {
                extraLarge
              }
            }
        }
          `,
          variables: {
            id: parseInt(id)
          }
        }
      );
      return response.data.data.Media;
    } catch (error: any) {
      return error
    }
  }

  return {
    fetchAnimeList,
    fetchAnimeDetails
  }
}