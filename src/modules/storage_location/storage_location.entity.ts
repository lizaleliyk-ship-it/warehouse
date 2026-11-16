import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
class StorageLocation {
    @PrimaryGeneratedColumn({name:"id"})
    id: number;
    @Column({name: "zone", nullable: false, unique: false})
    zone: string;
    @Column({name: "shelf", nullable: false, unique: false})
    shelf: string;
    @Column({name: "bin", nullable: false, unique: false})
    bin: string;
}
export {StorageLocation};