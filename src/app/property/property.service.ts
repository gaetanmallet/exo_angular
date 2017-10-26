import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';

import { IProperty } from './property';

@Injectable()
export class PropertyService {
  private baseUrl = 'api/properties';

  constructor(private http: Http) { }

  getProperties(): Observable<IProperty[]> {
      return this.http.get(this.baseUrl)
          .map(this.extractData)
          .do(data => console.log('getProperties: ' + JSON.stringify(data)))
          .catch(this.handleError);
  }

  getProperty(id: number): Observable<IProperty> {
      if (id === 0) {
          return Observable.of(this.initializeProperty());
      };
      const url = `${this.baseUrl}/${id}`;
      return this.http.get(url)
          .map(this.extractData)
          .do(data => console.log('getProperty: ' + JSON.stringify(data)))
          .catch(this.handleError);
  }

  deleteProperty(id: number): Observable<Response> {
      let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });

      const url = `${this.baseUrl}/${id}`;
      return this.http.delete(url, options)
          .do(data => console.log('deleteProperty: ' + JSON.stringify(data)))
          .catch(this.handleError);
  }

  saveProperty(property: IProperty): Observable<IProperty> {
      let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });

      if (property.id === 0) {
          return this.createProperty(property, options);
      }
      return this.updateProperty(property, options);
  }

  private createProperty(property: IProperty, options: RequestOptions): Observable<IProperty> {
      property.id = undefined;
      return this.http.post(this.baseUrl, property, options)
          .map(this.extractData)
          .do(data => console.log('createProperty: ' + JSON.stringify(data)))
          .catch(this.handleError);
  }

  private updateProperty(property: IProperty, options: RequestOptions): Observable<IProperty> {
      const url = `${this.baseUrl}/${property.id}`;
      return this.http.put(url, property, options)
          .map(() => property)
          .do(data => console.log('updateProperty: ' + JSON.stringify(data)))
          .catch(this.handleError);
  }

  private extractData(response: Response) {
      let body = response.json();
      return body || {};
  }

  private handleError(error: Response): Observable<any> {
      console.error(error);
      return Observable.throw(error.json().error || 'Server error');
  }

  initializeProperty(): IProperty {
      return {
          id: 1,
          name: null,
          surface: null,
          accessibility: null,
          energyClass:null,
          description: null,
          imageUrl: null
      };
  }

}
