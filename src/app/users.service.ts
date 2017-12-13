import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class UsersService {

  constructor(private http: HttpClient) {
  }

  getUsers() {
    return this.http.get('https://randomuser.me/api/?inc=gender,name,location&results=8&nat=gb')
      .map(response => response['results'])
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
