import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ChartsComponent } from './components/charts/charts.component';
// import { ChartjsModule } from '@ctrl/ngx-chartjs';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { LinechartsComponent } from './components/linecharts/linecharts.component';
import { PiechartsComponent } from './components/piecharts/piecharts.component';
import { BubblechartComponent } from './components/bubblechart/bubblechart.component';
import { GuagechartsComponent } from './components/guagecharts/guagecharts.component';
import { HeatmapComponent } from './components/heatmap/heatmap.component';
import { NumbercardComponent } from './components/numbercard/numbercard.component';
import { TreechartComponent } from './components/treechart/treechart.component';
import { PolarchartComponent } from './components/polarchart/polarchart.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,
    HeaderComponent,
    ChartsComponent,
    LinechartsComponent,
    PiechartsComponent,
    BubblechartComponent,
    GuagechartsComponent,
    HeatmapComponent,
    NumbercardComponent,
    TreechartComponent,
    PolarchartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    // import charts
    NgxChartsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
