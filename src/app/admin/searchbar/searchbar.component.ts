import { Component } from '@angular/core';
import { SearchService } from 'src/app/search.service';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss']
})
export class SearchbarComponent {
  products: any[] = [];

  constructor(private searchService: SearchService) {}
  
  search(event: any) {
    const keyword = event.target.value;
  
    this.searchService.searchProduct(keyword).subscribe(res => {
      this.products = res;
    });
  }
  
}
