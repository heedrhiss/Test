export type CardProp = {
    data: {
        image: {
        thumbnail: string,
        mobile: string,
        tablet: string,
        desktop: string
    },
    name: string,
    category: string,
    price: number
}
}

export type TaskProp= {
    completed: boolean,
    id: number,
    title: string,
    userId: number
  }