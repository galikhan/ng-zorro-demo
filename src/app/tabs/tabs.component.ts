import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { NzTabsModule } from 'ng-zorro-antd/tabs';

@Component({
  selector: 'app-tabs',
  standalone: true,
  imports: [
    NzTabsModule,
    RouterModule

  ],
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.scss'
})
export class TabsComponent implements OnInit {

  topicId!: number;

  constructor(private pp: ActivatedRoute) {

  }

  ngOnInit(): void {

    this.pp.params.subscribe(param => {
      this.topicId = param['topicId'];
    });
  }


}
