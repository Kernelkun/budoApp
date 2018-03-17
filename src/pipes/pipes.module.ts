import { NgModule } from '@angular/core';
import { SearchPipe } from './search/search';
import { SortPipe } from './sort/sort';
import { BeltPipe } from './belt/belt';
@NgModule({
	declarations: [SearchPipe,
    SortPipe,
    BeltPipe],
	imports: [],
	exports: [SearchPipe,
    SortPipe,
    BeltPipe]
})
export class PipesModule {}
