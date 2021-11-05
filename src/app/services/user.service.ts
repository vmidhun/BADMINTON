import { Injectable } from '@angular/core';

export class USERS {
  'ID': string;
  'Name': string;
  'Password': string;
  'Mobile': string;  
}

let users: USERS[] = [
  {ID: "1", Name: 'Midhun', Password: "9972151617", Mobile: "9972151617"},
  {ID: "2", Name: 'Anil', Password: "9972151617", Mobile: "9972151617"},
  {ID: "3", Name: 'Chandru', Password: "9972151617", Mobile: "9972151617"},
  {ID: "4", Name: 'Chetan', Password: "9972151617", Mobile: "9972151617"},
  {ID: "5", Name: 'Aniket', Password: "9972151617", Mobile: "9972151617" }
];
@Injectable({
  providedIn: 'root'
})
export class UserService {
 
  constructor() { }
  
  setCurrentUser = (user: any) => {
    this.currentUser = user    
  }
  currentUser: any = this.setCurrentUser(users[0]);
}
