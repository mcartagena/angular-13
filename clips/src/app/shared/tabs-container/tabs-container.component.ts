import { AfterContentInit, Component, ContentChildren, QueryList } from '@angular/core';
import { TabComponent } from '../tab/tab.component';
import { NgFor, NgClass } from '@angular/common';

@Component({
  selector: 'app-tabs-container',
  standalone: true,
  imports: [NgFor,
    NgClass
  ],
  templateUrl: './tabs-container.component.html',
  styleUrl: './tabs-container.component.css'
})
export class TabsContainerComponent implements AfterContentInit{

  @ContentChildren(TabComponent) tabs: QueryList<TabComponent> = new QueryList()

  ngAfterContentInit(): void {
    const activeTabs = this.tabs?.filter(
      tab => tab.active
    )

    if(!activeTabs || activeTabs.length === 0) {
      this.selectedTab(this.tabs?.first)
    }
  }

  selectedTab(tab: TabComponent){
    this.tabs?.forEach(
      tab => tab.active = false
    )

    tab.active = true

    return false
  }

}
