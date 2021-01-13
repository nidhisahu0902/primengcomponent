import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {CalendarModule} from 'primeng/calendar';
import {AutoCompleteModule} from 'primeng/autocomplete';
import {PanelMenuModule} from 'primeng/panelmenu';
import {MenubarModule} from 'primeng/menubar';
import {RouterModule} from '@angular/router';
import {MegaMenuModule} from 'primeng/megamenu';
import {ButtonModule} from 'primeng/button';
import {ToastModule} from 'primeng/toast';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {ChartModule} from 'primeng/chart';
import {ProgressBarModule} from 'primeng/progressbar';
import {ScrollTopModule} from 'primeng/scrolltop';
import {SidebarModule} from 'primeng/sidebar';
import {GalleriaModule} from 'primeng/galleria';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import {FormsModule} from '@angular/forms';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import {CheckboxModule} from 'primeng/checkbox';
import {RadioButtonModule} from 'primeng/radiobutton';
import {InputTextModule} from 'primeng/inputtext';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {InputNumberModule} from 'primeng/inputnumber';
import {AccordionModule} from 'primeng/accordion';

import {SplitButtonModule} from 'primeng/splitbutton';

import {ListboxModule} from 'primeng/listbox';

import {ColorPickerModule} from 'primeng/colorpicker';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ButtonModule,
    ToastModule,
    MessagesModule,
    MessageModule,
    ChartModule,
    ProgressBarModule,
    ProgressSpinnerModule,
    ScrollTopModule,
    SidebarModule,
    GalleriaModule,
    BreadcrumbModule,
    MegaMenuModule,
    MenubarModule,
    PanelMenuModule,
    AutoCompleteModule,
    FormsModule,
    HttpClientModule,
    CalendarModule,
    ColorPickerModule,
    CheckboxModule,
    RadioButtonModule,
    InputTextModule,
    InputTextareaModule,
    InputNumberModule,
    ListboxModule,
    SplitButtonModule,
    AccordionModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
