
export class CreateCategoryDto {
    private constructor(
        public readonly name: string,
    ) {

    }

    static create(object: { [key: string]: any }): [string?, CreateCategoryDto?] {
        const {
            name,
        } = object


        if (!name) return ['Name is required'];


        return [undefined, new CreateCategoryDto(
            name,
        )];
    }
}