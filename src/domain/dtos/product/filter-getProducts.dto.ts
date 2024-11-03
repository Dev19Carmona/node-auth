export interface FilterGetProducts {
    name?: string,
    _id?: string
}
export class FilterGetProductsDto {
    private constructor(
        public companyId: string,
        // public name?: string,
        // public _id?: string
    ) {

    }

    static create(object: { [key: string]: any }): [string?, FilterGetProductsDto?] {
        const { name, _id, user } = object
        const filter: FilterGetProducts = {}
        if (name) filter.name = name
        if (name) filter._id = _id
        return [undefined, new FilterGetProductsDto(user.companyId, 
            // filter.name, 
            // filter._id
        )
        ]
    }
}