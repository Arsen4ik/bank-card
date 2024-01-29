import { ChangeEventHandler } from "react";
import type { ChangeHandler, FieldError, RefCallBack } from "react-hook-form";

export type Card = {
    id: string;
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

export type FormInputProps = {
    inputType: {
        onChange: ChangeHandler;
        onBlur: ChangeHandler;
        ref: RefCallBack;
        name: "name" | "number" | "month" | "year" | "cvc";
        min?: string | number | undefined;
        max?: string | number | undefined;
    }
    errorsType: FieldError | undefined,
    inputInfo: {
        inputClassname: string;
        errorClassname: string;
        attributes: {
            placeholder: string;
            maxLength?: number;
            type?: string;
            value?: string;
            onChange?: ChangeEventHandler<HTMLInputElement>
        }
    }
}