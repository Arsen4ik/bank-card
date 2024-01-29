import { FormInputProps } from "@/types/types";

const FormInput = (props: FormInputProps) => {
    const { inputType, errorsType, inputInfo } = props
    return (
        <>
            <input {...inputType} spellCheck={false} {...inputInfo.attributes}
                className={`${inputInfo.inputClassname} h-10 font-bold border-2 border-[#ADADAD] px-2 outline-none duration-200 ${errorsType ? 'border-[#E85D5D]' : ''}
                        placeholder:font-bold placeholder:text-[#A0A0A0]
                        hover:border-[#176FC1] hover:cursor-pointer focus:cursor-text focus:animate-border-pulse ${errorsType ? 'hover:border-[#E85D5D]' : ''}  ${errorsType ? 'focus:animate-none' : ''}`}
            />
            {errorsType && <p className={`${inputInfo.errorClassname} text-[#E85D5D] absolute font-bold`}>{errorsType.message}</p>}
        </>
    );
}

export default FormInput;