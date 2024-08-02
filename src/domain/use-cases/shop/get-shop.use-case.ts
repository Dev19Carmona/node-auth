import { ShopEntity } from "../../entities";
import { ShopRepository } from "../../repositories";

interface GetShopsUseCase {
    execute(): Promise<ShopEntity[]>
}

export class GetShops implements GetShopsUseCase {
    constructor(
        private readonly shopRepository: ShopRepository,
    ) {}
    execute(): Promise<ShopEntity[]> {
        return this.shopRepository.getShop();
    }
}