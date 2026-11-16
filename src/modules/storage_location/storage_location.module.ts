import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';

import {StorageLocation} from './storage_location.entity.js';
// import {} from '';
// import {} from '';

@Module({
    imports: [TypeOrmModule.forFeature([StorageLocation])],
    providers: [],
    exports: [],
})
class StorageLocationModule {}

export {StorageLocationModule};