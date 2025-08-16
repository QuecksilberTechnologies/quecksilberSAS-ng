import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'qs-home',
  imports: [NgOptimizedImage, ButtonModule], 
  templateUrl: './home.html',
  styleUrl: './home.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class Home {}
