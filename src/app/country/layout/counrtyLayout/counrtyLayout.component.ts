import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopMenuComponent } from '../../components/top-menu/top-menu.component';

@Component({
  selector: 'app-counrty-layout.component',
  imports: [ RouterOutlet,TopMenuComponent ],
  templateUrl: './counrtyLayout.component.html',
})
export class CounrtyLayoutComponent { }
