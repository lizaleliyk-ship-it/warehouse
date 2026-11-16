import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
class Inventory {
    @PrimaryGeneratedColumn({name: "id"})
    id: number;
    @Column({name: "partId", nullable: false, unique: true})
    partId: number;
    @Column({name: "locationId", nullable: false, unique: false})
    locationId: number;
    @Column({name: "quantity", nullable: false, unique: false})
    quantity: number;
}

export {Inventory};