export const formInputInfo = {
    inputMonthInfo: {
        inputClassname: 'w-[73px]',
        errorClassname: 'right-0 mt-[60px] mr-72',
        attributes: {
            placeholder: 'MM',
            maxLength: 2
        }
    },
    inputYearInfo: {
        inputClassname: 'w-[73px]',
        errorClassname: 'right-0 mt-[60px] mr-[166px]',
        attributes: {
            placeholder: 'YY',
            maxLength: 2
        }
    },
    inputNameInfo: {
        inputClassname: '',
        errorClassname: 'right-0 mt-10 mr-7',
        attributes: {
            placeholder: 'Holder of card',
        }
    },
    inputNumberInfo: {
        inputClassname: '',
        errorClassname: 'right-0 mt-[108px] mr-7',
        attributes: {
            placeholder: 'Number of card',
            maxLength: 19
        }
    },
    inputCVCInfo: {
        inputClassname: 'w-[73px] self-end mr-7 tracking-widest',
        errorClassname: 'right-0 mt-48 mr-7',
        attributes: {
            placeholder: 'CVC',
            maxLength: 3,
            type: 'password',
        }
    }
}