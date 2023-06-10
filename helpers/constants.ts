interface Data {
    _id: string;
}

export function updateById<T extends Data>(updatedData: Partial<T>, dataArray: T[]): T[] {
    return dataArray.map((data) => {
        if (data._id === updatedData._id) {
            return { ...data, ...updatedData };
        }
        return data;
    });
}