import { Component } from '@angular/core';

@Component({
  selector: 'ep-monorepo-measurement-entry',
  template: `<div class="container remote-entry">
    <h2>measurement's Remote Entry Component</h2>
    <!-- <ep-monorepo-search-container></ep-monorepo-search-container> -->
  </div>`,
  styles: [
    `
      .remote-entry {
        /* background-color: #143055;
        color: white;
        padding: 5px; */
      }
    `,
  ],
})
export class RemoteEntryComponent {}
