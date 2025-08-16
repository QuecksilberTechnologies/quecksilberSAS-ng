import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { PageHeader } from '@shared/components';
import { PortfolioCategory, PortfolioItem } from '@shared/interfaces';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'qs-works',
  imports: [PageHeader, CardModule, ButtonModule, NgOptimizedImage],
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
        category: 'hrms',
        img: 'attendance.jpg',
        title: 'Attendance Management System',
      },
      {
        id: 2,
        category: 'hrms',
        img: 'leave.jpg',
        title: 'Leave Management System',
      },
      {
        id: 3,
        category: 'hrms',
        img: 'screen-tracking.jpg',
        title: 'Employee Screen Tracking',
      },
      {
        id: 4,
        category: 'project',
        img: 'tender.jpg',
        title: 'Tender Management System',
      },
      {
        id: 5,
        category: 'project',
        img: 'project.jpg',
        title: 'Project Management',
      },
      {
        id: 6,
        category: 'hrms',
        img: 'asset.jpg',
        title: 'Asset Management System',
      },
      {
        id: 7,
        category: 'hrms',
        img: 'payroll.jpg',
        title: 'Payroll System',
      },
      {
        id: 8,
        category: 'edu',
        img: 'school.jpg',
        title: 'School Management System',
      },
      {
        id: 9,
        category: 'edu',
        img: 'college.jpg',
        title: 'College Management System',
      },
      {
        id: 10,
        category: 'tracking',
        img: 'mobile-tracking.jpg',
        title: 'Mobile Tracking System',
      },
      {
        id: 11,
        category: 'tracking',
        img: 'location.jpg',
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
