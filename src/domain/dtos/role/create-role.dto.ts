import { ContactInfo, LocationInfo } from "../../../interfaces";

export class CreateRoleDto {
    private constructor(
        public readonly name: string,
    ) {

    }

    static create(object: { [key: string]: any }): [string?, CreateRoleDto?] {
        const {
            name,
        } = object


        if (!name) return ['Name is required'];


        return [undefined, new CreateRoleDto(
            name,
        )];
    }
}