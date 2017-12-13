import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UsersService {

  constructor(private http: Http) {
  }

  getUsers() {
    return this.http.get('https://randomuser.me/api/?inc=gender,name,location&results=8&nat=gb')
      .map(response => response.json())
      .map(response => response.results)
      .map(users => {
        return users.map(u => {
          return {
            name: u.name.first + ' ' + u.name.last,
            geo: u.location.city + ' ' + u.location.state + ' ' + u.location.street,
          };
        });
      });
  }
}
