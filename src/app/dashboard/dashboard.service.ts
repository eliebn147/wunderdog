import {inject, Injectable, signal} from '@angular/core';
import {DashboardApiService} from './dashboard-api.service';
import {firstValueFrom} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  dashboardApiService = inject(DashboardApiService);
  private activeRoute = signal<string>("overview");
  private dogProfile = signal<any>(null);
  private dogOverview = signal<any>(null);

  getActiveRoute() {
    return this.activeRoute();
  }

  getDogProfile() {
    return this.dogProfile();
  }

  getDogOverview() {
    return this.dogOverview();
  }

  setActiveRoute(route: string) {
    this.activeRoute.set(route);
  }

  async loadProfile() {
    const dogProf = await firstValueFrom(this.dashboardApiService.getDogProfile());
    this.dogProfile.set(dogProf);
  }

  async loadOverview() {
    const dogOverview = await firstValueFrom(this.dashboardApiService.getDogOverview());
    this.dogOverview.set(dogOverview);
  }
}
