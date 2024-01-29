"use client"

import Image from "next/image";
import { useLayoutEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import FormInput from "../FormInput";
import { formInputInfo } from "./formInputsInfo";
import { insertNewCard } from "@/utils/actions";
import type { newCard } from "@/types/types";

const NewCardForm = () => {
    const [showInputNumberData, setShowInputNumberData] = useState<string>('');

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<newCard>({ mode: 'onChange' })
    // } = useForm<FormData>({ mode: 'onBlur' })

    const onSubmit = (data: newCard) => {
        reset()
        setShowInputNumberData('')
        // console.log(data);
        insertNewCard(data)
    }

    const inputName = {
        ...register('name', {
            required: 'Required',
            validate: (value) => {
                const checkValue = value.trim().replace(/\s+/g, ' ').split(' ')
                return checkValue.length === 2 && checkValue.every(word => word.length) && /^[a-zA-Zа-яА-Я\s]+$/.test(value) || 'Invalid name'
            }
        })
    }

    const inputNumber = {
        ...register('number', {
            required: 'Required',
            validate: (value) => value.length === 19 || 'Invalid card number'
        })
    }

    const inputMonth = {
        ...register('month', {
            required: "Required",
            validate: (value) => +value >= 1 && +value <= 12 || 'Invalid'
        })
    }

    const inputYear = {
        ...register('year', {
            required: "Required",
            validate: (value) => +value >= +String(new Date().getFullYear()).slice(2) && +value <= 99 || 'Invalid'
        })
    }

    const inputCVC = {
        ...register('cvc', {
            required: "Required",
            minLength: {
                value: 3,
                message: 'Invalid'
            },
            validate: (value) => +value >= 1 && +value <= 999 || 'Invalid'
        })
    }

    const handleChangeNumber: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        const formattedValue = e.target.value.replace(/[^0-9]/g, '').replace(/(.{4})/g, '$1 ').trim();
        setShowInputNumberData(formattedValue);
        inputNumber.onChange(e);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-24">
            <div className="relative z-0 flex flex-row justify-between">
                <div className="w-[388px] h-[239px] bg-[#ECECEC] rounded-[10px] py-5 px-7 flex flex-col gap-7 shadow-xl z-10 relative">
                    <FormInput inputType={inputName} errorsType={errors.name} inputInfo={formInputInfo.inputNameInfo} />
                    <FormInput inputType={inputNumber} errorsType={errors.number} inputInfo={{ ...formInputInfo.inputNumberInfo, attributes: { ...formInputInfo.inputNumberInfo.attributes, value: showInputNumberData, onChange: handleChangeNumber } }} />
                    <p className="absolute font-bold z-10 top-0 left-0 ml-[38px] mt-24">{showInputNumberData}</p>
                    <p className="absolute mt-[7.5rem] font-normal">VALID THRU</p>
                    <div className="flex flex-row justify-between mt-4 items-center">
                        <FormInput inputType={inputMonth} errorsType={errors.month} inputInfo={formInputInfo.inputMonthInfo} />
                        <p className="text-4xl font-light text-[#ADADAD]">/</p>
                        <FormInput inputType={inputYear} errorsType={errors.year} inputInfo={formInputInfo.inputYearInfo} />
                        <div className="flex flex-row gap-4 justify-end w-32 relative">
                            {showInputNumberData[0] !== '4' && <Image src={showInputNumberData[0] === '3' ? "/visa-big.svg" : "/visa.svg"} alt="" width={showInputNumberData[0] === '3' ? 100 : 40} height={showInputNumberData[0] === '3' ? 100 : 40} className={showInputNumberData[0] === '3' ? "absolute bottom-[-50px] left-[40px]" : ""} />}
                            {showInputNumberData[0] !== '3' && <Image src={showInputNumberData[0] === '4' ? "/mastercard-big.svg" : "/mastercard.svg"} alt="" width={showInputNumberData[0] === '4' ? 100 : 40} height={showInputNumberData[0] === '4' ? 100 : 40} className={showInputNumberData[0] === '4' ? "absolute bottom-[-50px] left-[40px]" : ""} />}
                        </div>
                    </div>
                </div>
                <div className="w-[388px] h-[239px] bg-[#C7C7C7] rounded-[10px] flex flex-col justify-around absolute top-0 left-0 mt-10 ml-28 -z-10 shadow-inner">
                    <div className=" h-12 w-[388px] bg-[#979797]"></div>
                    <FormInput inputType={inputCVC} errorsType={errors.cvc} inputInfo={formInputInfo.inputCVCInfo} />
                </div>
                <Image src="/logo.svg" priority alt="" width={200} height={200} className="w-[191px] h-[122px] self-center mt-10" />
            </div>
            <button
                type="submit"
                onClick={() => handleSubmit(onSubmit)}
                className="bg-[#95B0D8] font-light text-2xl rounded-xl w-48 h-12 text-white hover:bg-[#176FC1] duration-200"
            >Send</button>
        </form>
    );
}

export default NewCardForm;