import {PART_CATEGORY} from './part_enum.js';
import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
class Part {
    @PrimaryGeneratedColumn({name:"id"})
    id: number;
    @Column({name: "name", nullable: false, unique: false})
    name: string;
    @Column({name: "articleNumber", nullable: false, unique: true})
    articleNumber: string;
    @Column({name: "manufacturer", nullable: false, unique: false})
    manufacturer: string;
    @Column({name: "category", nullable: false, unique: false, type: "enum", enum: PART_CATEGORY})
    category: PART_CATEGORY;
}
export {Part};