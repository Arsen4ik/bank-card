export type Card = {
    id: number
    name: string;
    number: string;
    month: number;
    year: number;
    cvc: number;
}

export type CardListProps = {
    cardList: Card[]
}

export type CardItemProps = {
    cardItem: Card
}