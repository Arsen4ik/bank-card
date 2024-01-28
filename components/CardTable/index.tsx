// 'use client'

// import { Card } from "@/types/types"

import { Card } from "@/types/types"
import CardList from "../CardList"



const CardTable = async () => {
    const getData = async () => {
        await new Promise((res, rej) => setTimeout(() => res(''), 2000))
        const data: Card[] = [
            { id: new Date().getTime() - 1, name: 'gg lol 1', number: '1234 5678 1234 5678', month: 1, year: 31, cvc: 123 },
            { id: new Date().getTime() - 2, name: 'gg lol 2', number: '2234 5678 1234 5678', month: 2, year: 32, cvc: 223 },
            { id: new Date().getTime() - 3, name: 'gg lol 3', number: '3234 5678 1234 5678', month: 3, year: 33, cvc: 323 },
            { id: new Date().getTime() - 4, name: 'gg lol 4', number: '4234 5678 1234 5678', month: 4, year: 34, cvc: 423 },
        ]
        // const cards = await db.card.findMany({})
        // console.log(todos);
        // return cards
        return data
    }

    const cardList = await getData()
    return <CardList cardList={cardList} />
}

export default CardTable;