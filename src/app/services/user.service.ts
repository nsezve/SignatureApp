// user service created for  authentication and setting the deafaul values for login form 

import { Injectable } from '@angular/core';
import { Users } from '../model/users.model';


@Injectable({
  providedIn: 'root'
})

export class UserService {
  selectedUser: Users = {
    registationNumber: '',
    proposalNumber:'',
    voiceVerification:false,
    otp:'',
    idPassport:"1"
  
  };

  constructor() { }

}
