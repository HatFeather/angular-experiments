import { Component, OnInit } from '@angular/core';
import { CoreThemeService } from '@stockmotion/shared/dist/theme';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(
    private themeService: CoreThemeService,
  ) { }

  ngOnInit(): void {
    this.themeService.updateTheme('default');
  }
}
