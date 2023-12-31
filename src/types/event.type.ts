export interface EventInterface {
  eventId: string
  title: string
  name: string
  description: string
  image: {
    publicId: string
    url: string
  }
  author: string
  linkContacts: {
    Instagram: string
    LinkedIn: string
    Twitter: string
    Facebook: string
    Gitlab: string
  }
  startAt: string
  deadline: string
  time: string
  location: string
}

export interface EventListConfig {
  page?: number | string
  limit?: number | string
  name?: string
  type?: string
  active?: boolean
}
