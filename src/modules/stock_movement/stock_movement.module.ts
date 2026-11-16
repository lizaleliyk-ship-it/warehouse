import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';

import {StockMovement} from './stock_movement.entity.js';
// import {} from '';
// import {} from '';

@Module({
    imports: [TypeOrmModule.forFeature([StockMovement])],
    providers: [],
    exports: [],
})
class StockMovementModule {}

export {StockMovementModule};