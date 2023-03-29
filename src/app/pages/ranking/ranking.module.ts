import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RankingRoutingModule } from './ranking-routing.module';
import { RankingComponent } from './ranking.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    RankingComponent
  ],
  imports: [
    CommonModule,
    RankingRoutingModule,
    MatDividerModule,
    MatSnackBarModule
  ]
})
export class RankingModule { }
