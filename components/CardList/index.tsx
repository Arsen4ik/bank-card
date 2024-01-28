import { Card, CardListProps } from "@/types/types";
import CardItem from "../CardItem";

const CardList = (props: CardListProps) => {
    const { cardList } = props
    return (
        <div className="w-full bg-[#95B0D8] rounded-3xl px-6 py-8 mt-12">
            <table className="w-full">
                <thead className=" uppercase">
                    <tr className="w-max bg-[#E5E5E5]">
                        <th className="p-3 w-[25%] border border-[#828282]">name</th>
                        <th className="p-3 w-[25%] border border-[#828282]">card number</th>
                        <th className="p-3 w-[25%] border border-[#828282]">date expire</th>
                        <th className="p-3 w-[25%] border border-[#828282]">code</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        cardList.map((card: Card) => <CardItem key={card.number} cardItem={card} />)
                    }
                </tbody>
            </table>
        </div>
    );
}

export default CardList;