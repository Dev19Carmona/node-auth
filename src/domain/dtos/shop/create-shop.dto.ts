import { CustomError } from "../../errors";

export class CreateShopDto {
  constructor(
    public name: string,
    public phone: string,
    public location?: string,
    public logo?: string, // poner un comentario para después organizarlo de tipo imagen
    public images?: string[],
    public inventory?: string[], // Assuming this will be an ObjectId as a string
    public isActive: boolean = false
  ) {}

  static create(object: { [key: string]: any }): [string?, CreateShopDto?] {
    const { name, phone, location, logo, images, inventory, isActive } = object;
    if (!name) return ["Name is required"];
    if (!phone) return ["Phone is required"];

    return [
      undefined,
      new CreateShopDto(
        name,
        phone,
        location,
        logo,
        images,
        inventory,
        isActive
      ),
    ];
  }
}
