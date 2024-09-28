import { Component } from '@angular/core';

@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.css']
})
export class DrawerComponent {
  isDrawerOpen: Boolean = false;
  buttonOptions: any = {
      icon: "menu",
      onClick: () => {
          console.log('opcoen');
          this.toggleDrawer();
      }
  }

  toggleDrawer() {
    this.isDrawerOpen = !this.isDrawerOpen; // Toggle the state
  }
}
