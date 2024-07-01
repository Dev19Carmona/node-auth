export class FilterGetProductsDto{
    private constructor(
        public name:string, 
        public _id:string
    ){

    }

    static create(object:{[key:string]:any}):[string?,FilterGetProductsDto?]{
        const {name, _id} = object
        return [undefined, new FilterGetProductsDto(name, _id)]
    }
}