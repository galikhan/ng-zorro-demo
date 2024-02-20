import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule, RouterOutlet } from '@angular/router';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { TabsComponent } from './tabs/tabs.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet, 
    TabsComponent,  
    RouterModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{

  // constructor(private pp: ActivatedRoute) {}

  title = 'ng-zorro-demo';
  // topicId!: number;

  ngOnInit(): void {
    
    // this.pp.params.subscribe(param => {
    //   console.log('param', param);
    //   this.topicId = param['topicId'];
    // });

  }

}
