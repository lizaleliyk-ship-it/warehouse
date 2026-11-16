import { Module } from '@nestjs/common';

import {DBModule} from './db.js'
import { InventoryModule } from './modules/inventory/inventory.module.js';
import { StorageLocationModule } from './modules/storage_location/storage_location.module.js';
import { StockMovementModule } from './modules/stock_movement/stock_movement.module.js';
import { PartModule } from './modules/part/part.module.js';

@Module({
  imports: [InventoryModule, StorageLocationModule, StockMovementModule, PartModule, DBModule]
})
export class AppModule {}
