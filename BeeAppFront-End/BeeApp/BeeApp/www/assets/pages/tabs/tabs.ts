import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { HivesPage } from '../hives/hives';
import { HarvestPage } from '../harvest/harvest';
import { StatsPage } from '../stats/stats';
import { TreatmentPage } from '../treatment/treatment';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = HomePage;
  tab2Root: any = HivesPage;
  tab3Root: any = TreatmentPage;
  tab4Root: any = HarvestPage;
  tab5Root: any = StatsPage;

  constructor() {

  }
}
