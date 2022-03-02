import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BubblechartComponent } from './components/bubblechart/bubblechart.component';
import { ChartsComponent } from './components/charts/charts.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { GuagechartsComponent } from './components/guagecharts/guagecharts.component';
import { HeatmapComponent } from './components/heatmap/heatmap.component';
import { HomeComponent } from './components/home/home.component';
import { LinechartsComponent } from './components/linecharts/linecharts.component';
import { NumbercardComponent } from './components/numbercard/numbercard.component';
import { PiechartsComponent } from './components/piecharts/piecharts.component';
import { PolarchartComponent } from './components/polarchart/polarchart.component';
import { TreechartComponent } from './components/treechart/treechart.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {path : '', component:HomeComponent},
  {path : 'dashbaord', canActivate:[AuthGuard], component:DashboardComponent},
  {path : 'chartjs', component:ChartsComponent},
  {path : 'linechart', component:LinechartsComponent},
  {path : 'piechart', component:PiechartsComponent},
  {path : 'bubblecharts', component:BubblechartComponent},
  {path : 'guagecharts', component:GuagechartsComponent},
  {path : 'heatmapchart', component:HeatmapComponent},
  {path : 'numbercardchart', component:NumbercardComponent},
  {path : 'treechart', component:TreechartComponent},
  {path : 'polarchart', component:PolarchartComponent},
  {path : '**', component:HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
