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

export type FilterButtonProps = {
    children: React.ReactNode
    filter: string
    active: string
}

export type ButtonProp = {
    children: React.ReactNode,
    onClick?: () => void,
    type?: string
}

export type DarkModeProviderProps = {
    children: React.ReactNode;
  };