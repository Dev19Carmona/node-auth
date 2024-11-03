export class CreateProductDto {
    constructor(
        public name: string,
        public price: number,
        public image: string,
        public companyId: string
    ) {

    }

    static create(object: { [key: string]: any }): [string?, CreateProductDto?] {
        const { name, price, image, user } = object
        if (!name) return ['Name is required']
        if (!price) return ['Price is required']

        

        return [undefined, new CreateProductDto(name, parseFloat(price), image, user.companyId)]
    }
}