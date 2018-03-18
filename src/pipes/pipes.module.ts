import { NgModule } from '@angular/core';
import { SearchPipe } from './search/search';
import { SortPipe } from './sort/sort';
import { BeltPipe } from './belt/belt';
import { SafeUrlPipe } from './safe-url/safe-url';
@NgModule({
	declarations: [SearchPipe,
    SortPipe,
    BeltPipe,
    SafeUrlPipe],
	imports: [],
	exports: [SearchPipe,
    SortPipe,
    BeltPipe,
    SafeUrlPipe]
})
export class PipesModule {}
