import { EApiErrors } from '../../../../ressources/errors';
import { EApiActions } from '../../../../ressources/comon';
import { IGetMultiServiceNumberOptions } from '../../../../ressources/options';
import { Query } from '../../../query/query.module';
import { Countries } from '../../utils/countries';
import { IMultiNumber } from '../../../../ressources/responses';

export class getMultiServiceNumber {
  public query?: Query;
  public countries?: Countries;

  async getMultiServiceNumber(
    options: IGetMultiServiceNumberOptions
  ): Promise<IMultiNumber[]> {
    return new Promise<IMultiNumber[]>((resolve, reject) => {
      this.query
        ?.makeCall(EApiActions.getNumberV2, options)
        .then((response) => {
          if (typeof response == 'object') return resolve(response);
          if (EApiErrors[response])
            return reject(new Error(EApiErrors[response]));
          reject(response);
        })
        .catch((err) => reject(err));
    });
  }
}
