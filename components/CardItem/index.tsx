import { CardItemProps } from "@/types/types";

const CardItem = (props: CardItemProps) => {
    const { cardItem: card } = props
    return (
        <tr>
            <td className="p-3 bg-white text-center border border-[#828282]">{card.name}</td>
            <td className="p-3 bg-white text-center border border-[#828282]">{card.number}</td>
            <td className="p-3 bg-white text-center border border-[#828282]">{card.month}/{card.year}</td>
            <td className="p-3 bg-white text-center border border-[#828282]">{card.cvc}</td>
        </tr>
    );
}

export default CardItem;