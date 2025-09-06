import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { PageHeader } from '@shared/components';
import { PortfolioCategory, PortfolioItem } from '@shared/interfaces';
import { BadgeModule } from 'primeng/badge';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'qs-works',
  imports: [PageHeader, CardModule, NgOptimizedImage, BadgeModule],
  templateUrl: './works.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class Works implements OnInit {
  activeFilter = 'all';
  portfolioItems: PortfolioItem[] = [];

  readonly categories: PortfolioCategory[] = [
    { label: 'All', value: 'all' },
    { label: 'HRMS', value: 'hrms' },
    { label: 'Project', value: 'project' },
    { label: 'Education', value: 'edu' },
    { label: 'Tracking', value: 'tracking' },
  ];

  ngOnInit() {
    this.portfolioItems = this.getPortfolioData();
  }

  getPortfolioData() {
    return [
      {
        id: 1,
        categoryValue: 'HRMS',
        category: 'hrms',
        img: 'jonas-leupe-0IVop5v4MMU-unsplash.jpg',
        title: 'Attendance Management System',
      },
      {
        id: 2,
        categoryValue: 'HRMS',
        category: 'hrms',
        img: 'cmophoto-net-EmVKKf3wUZQ-unsplash.jpg',
        title: 'Leave Management System',
      },
      {
        id: 3,
        categoryValue: 'HRMS',
        category: 'hrms',
        img: 'nathan-sack-UQ716eQauSw-unsplash.jpg',
        title: 'Employee Screen Tracking',
      },
      {
        id: 4,
        categoryValue: 'Project',
        category: 'project',
        img: 'kanishk-agarwal-sfdf1LqccSU-unsplash.jpg',
        title: 'Tender Management System',
      },
      {
        id: 5,
        categoryValue: 'Project',
        category: 'project',
        img: 'eden-constantino-OXmym9cuaEY-unsplash.jpg',
        title: 'Project Management',
      },
      {
        id: 6,
        categoryValue: 'HRMS',
        category: 'hrms',
        img: 'domenico-loia-hGV2TfOh0ns-unsplash.jpg',
        title: 'Asset Management System',
      },
      {
        id: 7,
        categoryValue: 'HRMS',
        category: 'hrms',
        img: 'mufid-majnun-MHcg_VUA46c-unsplash.jpg',
        title: 'Payroll System',
      },
      {
        id: 8,
        categoryValue: 'Education',
        category: 'edu',
        img: 'elijah-ekdahl-5VsCqz-lE88-unsplash.jpg',
        title: 'School Management System',
      },
      {
        id: 9,
        categoryValue: 'Education',
        category: 'edu',
        img: 'yiran-shi-ND7Xwlf4Bs4-unsplash.jpg',
        title: 'College Management System',
      },
      {
        id: 10,
        categoryValue: 'Tracking',
        category: 'tracking',
        img: 'ali-abdul-rahman-TS5Pi8jqJZY-unsplash.jpg',
        title: 'Mobile Tracking System',
      },
      {
        id: 11,
        categoryValue: 'Tracking',
        category: 'tracking',
        img: 'z-TrhLCn1abMU-unsplash.jpg',
        title: 'Real-time Location Tracking',
      },
    ];
  }

  handleItemClick(item: PortfolioItem) {
    console.log('Clicked Item:', item);
  }

  get filteredItems(): PortfolioItem[] {
    return this.activeFilter === 'all'
      ? this.portfolioItems
      : this.portfolioItems.filter(item => item.category === this.activeFilter);
  }

  handleFilterChange(filter: string) {
    this.activeFilter = filter;
  }
}
