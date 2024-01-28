// 'use client'

import type { Card } from "@/types/types"
import CardList from "../CardList"
import { getAllCards } from "@/utils/actions"



const CardTable = async () => {
    const cardList: Card[] = await getAllCards()
    return <CardList cardList={cardList} />
}

export default CardTable;