import { Component } from '@angular/core';
import { SeasonFactsComponent } from '../../components/season-facts/season-facts.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { HomeBackgroundComponent } from '../../components/home-background/home-background.component';
import { SeasonalOverviewComponent } from '../../components/seasonal-overview/seasonal-overview.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SeasonFactsComponent , FooterComponent , HomeBackgroundComponent , SeasonalOverviewComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
