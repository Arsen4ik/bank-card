'use server'

import { revalidatePath } from 'next/cache';
import db from './db'
import { Card } from '@/types/types';


export const getAllCards = async (): Promise<Card[]> => await db.card.findMany({})

export const insertNewCard = async (cardData: any) => {
    // console.log(cardData);
    const newCard = await db.card.create({
        data: {
            name: cardData.name,
            number: cardData.number,
            month: cardData.month,
            year: cardData.year,
            cvc: cardData.cvc,
        }
    })
    revalidatePath('/')
    // return newCard
}