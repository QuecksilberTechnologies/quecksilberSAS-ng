import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'qs-tech-stacks',
  imports: [NgOptimizedImage],
  templateUrl: './tech-stacks.html',
  styleUrl: './tech-stacks.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TechStacks {}
