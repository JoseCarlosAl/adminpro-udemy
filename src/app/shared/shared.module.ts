import { NgModule } from '@angular/core';

import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BreadcumbsComponent } from './breadcumbs/breadcumbs.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';


@NgModule({
    declarations: [
        NopagefoundComponent,
        HeaderComponent,
        SidebarComponent,
        BreadcumbsComponent
    ],
    // Para usar los componentes fuera del modulo
    exports: [
        NopagefoundComponent,
        HeaderComponent,
        SidebarComponent,
        BreadcumbsComponent
    ]
})
export class SharedModule {}
