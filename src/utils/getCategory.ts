export const categoryType = {
    HIPOTENSION: "Hipotensión",
    NORMAL: "Normal",
    NORMAL_ELEVATED: "Elevada",
    STAGE_1: "Hipertensión 1",
    STAGE_2: "Hipertensión 2",
    STAGE_3: "Hipertensión 3",
    SYSTOLIC_AISOLATED: "Sistólica Aislada",
    OUT_OF_RANGE: "Valores fuera de rango"
};

type CategoryKeyType = keyof typeof categoryType;

interface Category {
    key: CategoryKeyType;
    value: string;
    condition: (systolic: number, diastolic: number) => boolean;
}

const categories: Category[] = [
    {
        key: "OUT_OF_RANGE",
        value: categoryType.OUT_OF_RANGE,
        condition: (systolic, diastolic) => {
            let result = false;
            if (diastolic > 0 && (systolic < 80 || systolic > 200)) {
                result = true;
            } else if (diastolic > 0 && systolic > 0 && systolic < 130 && diastolic < 50) {
                result = true;
            } else if (diastolic > 0 && systolic > 0 && diastolic >= systolic) {
                result = true;
            } else if (systolic > 0 && diastolic > 200) {
                result = true;
            } else if (systolic >= 140 && diastolic < 70) {
                result = true;
            }
            return result;
        }
    },
    {
        key: "HIPOTENSION",
        value: categoryType.HIPOTENSION,
        condition: (systolic, diastolic) => {
            return systolic < 90 && diastolic < 60;
        }
    },
    {
        key: "NORMAL",
        value: categoryType.NORMAL,
        condition: (systolic, diastolic) => {
            return systolic < 130 && diastolic < 85;
        }
    },
    {
        key: "NORMAL_ELEVATED",
        value: categoryType.NORMAL_ELEVATED,
        condition: (systolic, diastolic) => {
            return systolic >= 130 && systolic <= 139 && diastolic >= 85 && diastolic <= 89;
        }
    },
    {
        key: "STAGE_1",
        value: categoryType.STAGE_1,
        condition: (systolic, diastolic) => {
            return systolic >= 140 && systolic <= 159 && diastolic >= 90 && diastolic <= 99;
        }
    },
    {
        key: "STAGE_2",
        value: categoryType.STAGE_2,
        condition: (systolic, diastolic) => {
            return systolic >= 160 && systolic <= 179 && diastolic >= 100 && diastolic <= 109;
        }
    },
    {
        key: "STAGE_3",
        value: categoryType.STAGE_3,
        condition: (systolic, diastolic) => {
            return systolic >= 180 && diastolic >= 110;
        }
    },
    {
        key: "SYSTOLIC_AISOLATED",
        value: categoryType.SYSTOLIC_AISOLATED,
        condition: (systolic, diastolic) => {
            return systolic >= 140 && diastolic < 90;
        }
    }
];

export const getCategory = (systolic: number | string, diastolic: number | string) => {
    let systolicNum: number;
    let diastolicNum: number;

    try {
        systolicNum = Number(systolic);
        diastolicNum = Number(diastolic);
    } catch (error) {
        console.error("getCategory error parsing numbers:", { error });
        return { key: "OUT_OF_RANGE", value: categoryType.OUT_OF_RANGE };
    }
    const category = categories.find(c => c.condition(systolicNum, diastolicNum));

    return category || { key: "OUT_OF_RANGE", value: categoryType.OUT_OF_RANGE };
};
