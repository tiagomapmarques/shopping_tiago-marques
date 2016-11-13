import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

// import 'rxjs/add/observable/throw';
// import 'rxjs/add/operator/do';  // for debugging

import { Product } from '../../models/index';

/**
 * This class provides the NameList service with methods to read names and add names.
 */
@Injectable()
export class ProductListService {

  /**
   * Creates a new NameListService with the injected Http.
   * @param {Http} http - The injected Http.
   * @constructor
   */
  constructor(private http: Http) {}

  /**
   * Returns an Observable for the HTTP GET request for the JSON resource.
   * @return {string[]} The Observable for the HTTP request.
   */
  public get(): Observable<Product[]> {
    return this.http.get('/assets/data.json')
                    .map((res: Response) => {
                      const json: any[] = res.json();
                      return json.map((item: any): Product => {
                        return {
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
                        }
                      });
                    });
                    // .do(data => console.log('server data:', data))  // debug
                    // .catch(this.handleError);
  }

  /**
    * Handle HTTP error
    */
  // private handleError(error: any) {
  //   // In a real world app, we might use a remote logging infrastructure
  //   // We'd also dig deeper into the error to get a better message
  //   let errMsg = (error.message) ? error.message :
  //     error.status ? `${error.status} - ${error.statusText}` : 'Server error';
  //   console.error(errMsg); // log to console instead
  //   return Observable.throw(errMsg);
  // }
}
