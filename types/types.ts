export type Card = {
    id: string,
    name: string;
    number: string;
    month: string;
    year: string;
    cvc: string;
}

export type newCard = {
    name: string;
    number: string;
    month: string;
    year: string;
    cvc: string;
}

export type CardListProps = {
    cardList: Card[]
}

export type CardItemProps = {
    cardItem: Card
}