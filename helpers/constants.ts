interface Data {
    _id: string;
}

export function updateById<T extends Data>(
    updatedData: Partial<T>,
    dataArray: T[]
): T[] {
    const updatedArray = dataArray.map((data) => {
        if (data._id === updatedData._id) {
            return { ...data, ...updatedData };
        }
        return data;
    });

    // If the id doesn't exist, append the array with updatedData
    const isIdExist = dataArray.some((data) => data._id === updatedData._id);
    if (!isIdExist) {
        updatedArray.push({ _id: updatedData._id, ...updatedData } as T);
    }

    return updatedArray;
}
