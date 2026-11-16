
import { MOVEMENT_TYPE } from "./movement_enum.js";
import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
class StockMovement {
    @PrimaryGeneratedColumn({name:"id"})
    id: number;
    @Column({name: "partId", nullable: false, unique: true})
    partId: number;
    @Column({name: "fromLocationID", nullable: false, unique: false})
    fromLocationId: number | null;
    @Column({name: "toLocationId", nullable: false, unique: false})
    toLocationId: number | null;
    @Column({name: "quantity", nullable: false, unique: false})
    quantity: number;
    @Column({name: "movement_type", nullable: false, unique: false, type: "enum", enum: MOVEMENT_TYPE})
    type: MOVEMENT_TYPE;
    @Column({name: "createAt", nullable: false, unique: false})
    createdAt: Date;
}
export {StockMovement};