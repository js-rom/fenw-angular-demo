import {environment} from '@env';

export class EndPoints {
    static readonly PROVIDERS = environment.REST_CORE + '/items';
}
