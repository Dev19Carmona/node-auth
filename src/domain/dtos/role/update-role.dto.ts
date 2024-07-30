export class UpdateRoleDto {
    private constructor(
        public readonly name?: string,
        public readonly isActive?: boolean
    ) {

    }

    static update(object: { [key: string]: any }): [string?, UpdateRoleDto?] {
        const {
            name,
            isActive,
        } = object

        return [undefined, new UpdateRoleDto(
            name,
            isActive
        )];
    }
    static delete(): [string?, UpdateRoleDto?] {

        return [undefined, new UpdateRoleDto(
            undefined,
            false
        )];
    }
    static active(): [string?, UpdateRoleDto?] {

        return [undefined, new UpdateRoleDto(
            undefined,
            true
        )];
    }
}