import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';

import {Part} from './part.entity.js';
// import {} from '';
// import {} from '';

@Module({
    imports: [TypeOrmModule.forFeature([Part])],
    providers: [],
    exports: [],
})
class PartModule {}

export {PartModule};