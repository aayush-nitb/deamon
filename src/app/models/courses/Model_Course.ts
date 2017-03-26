import * as _ from 'underscore';
import { Injectable } from '@angular/core'
import { ResourceCRUD, ResourceParams, ResourceModel } from 'ng2-resource-rest'
import { RequestMethod } from '@angular/http'
import { Observable } from 'rxjs'

export interface IResource {
  $resolved?: boolean;
  $observable?: Observable<any>;
  $abortRequest?: () => void;
}
export interface IQueryInput {
  limit?: string;
  offset?: string;
}
export interface ICourseShort {
  name: string;
  start: string;
}
export interface ICourse extends ICourseShort, IResource {}
export type ICourseList = ICourseShort[] & IResource

@Injectable()
@ResourceParams({
  url: 'http://megan-api.herokuapp.com/api/v1/courses'
})
export class Model_Course extends ResourceCRUD<IQueryInput, ICourseShort, ICourse> {
    onSuccess(res: IResource, callback: any): void {
      res.$observable.subscribe(callback);
    }
    onError(res: IResource, callback: any): void {
      res.$observable.subscribe(null, callback);
    }
    one(name: string): ICourse {
      let res: ICourse = this.get({id: name});
      this.onError(res, () => {
        res.$resolved = true;
      });
      return res;
    }
    all(query?: IQueryInput): ICourseList {
      let res: ICourseList = this.query(query);
      this.onError(res, () => {
        res.$resolved = true;
      });
      return res;
    }
    $save(model: ICourse): void {
      model.$resolved = false;
      let res: ICourse = this.update(_.extend(model, {id: model.name}));
      this.onError(res, () => {
        res.$resolved = true;
      });
      model = res;
    }
}