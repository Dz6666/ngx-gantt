import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgxGanttModule } from 'ngx-gantt';
import { AppComponent } from './app.component';
import { AppGanttExampleComponent } from './gantt/gantt.component';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';
import { AppGanttFlatExampleComponent } from './gantt-flat/flat.component';
import { AppGanttRangeExampleComponent } from './gantt-range/gantt-range.component';
import { EXAMPLE_MODULES, DOCGENI_SITE_PROVIDERS } from './content/index';
import { DocgeniTemplateModule } from '@docgeni/template';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
    declarations: [AppComponent, AppGanttExampleComponent, AppGanttFlatExampleComponent, AppGanttRangeExampleComponent],
    imports: [
        BrowserModule,
        CommonModule,
        DocgeniTemplateModule,
        NgxGanttModule,
        AppRoutingModule,
        RouterModule.forRoot([]),
        ...EXAMPLE_MODULES
    ],
    providers: [...DOCGENI_SITE_PROVIDERS],
    bootstrap: [AppComponent]
})
export class AppModule {}
