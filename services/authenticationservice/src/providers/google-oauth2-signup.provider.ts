import { Provider } from '@loopback/context';
import { HttpErrors } from '@loopback/rest';
import { GoogleSignUpFn } from './types';

export class GoogleOauth2SignupProvider implements Provider<GoogleSignUpFn> {
    constructor() { }

    value(): GoogleSignUpFn {
        return async profile => {
            console.log(profile.id)

            throw new HttpErrors.NotImplemented(
                `GoogleOauth2SignupProvider not implemented hiiiiii`,
            );
        };
    }
}