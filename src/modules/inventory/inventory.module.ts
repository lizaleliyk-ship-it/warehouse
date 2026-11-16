import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';

import {Inventory} from './inventory.entity.js';
// import {} from '';
// import {} from '';

@Module({
    imports: [TypeOrmModule.forFeature([Inventory])],
    providers: [],
    exports: [],
})
class InventoryModule {}

export {InventoryModule};