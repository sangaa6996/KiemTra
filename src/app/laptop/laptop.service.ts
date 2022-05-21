import { Laptop } from "../models/laptop.model";

export class LaptopService {
    laptops: Laptop[] = [
        new Laptop("LT001", "DELL 2020", 2500),
        new Laptop("LT002", "ASUS 2020", 2000),
        new Laptop("LT003", "HP 2020", 3000),
    ]

    getLaptops() {
        return this.laptops;
    }

    getLaptop(id: string) {
        let value = this.laptops.filter((x) => x.id == id);
        return value[0];
    }
    addLaptop(laptop: Laptop) {
        this.laptops.push(laptop)
    }
    updateLaptop(index: number, laptop: Laptop) {
        this.laptops[index] = laptop;
    }
}