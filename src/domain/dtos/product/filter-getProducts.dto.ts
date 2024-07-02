export interface FilterGetProducts {
    name?: string,
    _id?: string
}
export class FilterGetProductsDto {
    private constructor(
        public name?: string,
        public _id?: string
    ) {

    }

    static create(object: { [key: string]: any }): [string?, FilterGetProducts?] {
        const { name, _id } = object
        const filter: FilterGetProducts = {}
        if (name) filter.name = name
        if (name) filter._id = _id
        return [undefined, filter]
    }
}