import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TabsComponent } from './tabs/tabs.component';

export const routes: Routes = [

    {path: 'home', component: AppComponent},
    {path: 'home/tab-panel/:topicId', component: TabsComponent},
    {path: 'home/tab-panel/:topicId/tab/:id', component: TabsComponent},

];