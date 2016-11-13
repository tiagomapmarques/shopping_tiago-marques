import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { Product } from '../../models/index';

@Injectable()
export class ProductListService {

  constructor(private http: Http) { }

  public get(): Observable<Product[]> {
    return this.http.get('/assets/data.json')
                    .map((res: Response) => {
                      const json: any[] = res.json();
                      return json.map((item: any): Product => this.mapProduct(item));
                    });
  }

  private mapProduct(item: any): Product {
    return {
      id: item.id,
      name: item.name,
      description: item.description,
      image: item.image,
      price: +(item.price),
      discount: item.discount ?
        {
          price: +(item.discount.price),
          amount: +(item.discount.amount)
        }
        : null
    };
  }
}
