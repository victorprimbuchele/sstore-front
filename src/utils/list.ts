export function list(data: Object | Array<any>) {
    if (Array.isArray(data) ){
        return data.map((value, index, array) => (
            value
        ))
    }
}