export class UpdateCategoryDto {
    private constructor(
        public readonly name?: string,
        public readonly isActive?: boolean
    ) {

    }

    static update(object: { [key: string]: any }): [string?, UpdateCategoryDto?] {
        const {
            name,
            isActive,
        } = object

        return [undefined, new UpdateCategoryDto(
            name,
            isActive
        )];
    }
    static delete(): [string?, UpdateCategoryDto?] {

        return [undefined, new UpdateCategoryDto(
            undefined,
            false
        )];
    }
    static active(): [string?, UpdateCategoryDto?] {

        return [undefined, new UpdateCategoryDto(
            undefined,
            true
        )];
    }
}