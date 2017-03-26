import { Injectable } from '@angular/core'
import { ResourceCRUD, ResourceParams } from 'ng2-resource-rest'
import { RequestMethod } from '@angular/http'
import { Observable } from 'rxjs'

export interface IQueryInput {
  limit?: string;
  offset?: string;
}
export interface ICourseShort {
  name: string;
  start: string;
}
export interface IResource {
  $resolved?: boolean;
  $observable?: Observable<ICourse>;
  $abortRequest?: () => void;
}
export interface ICourse extends ICourseShort {}

@Injectable()
@ResourceParams({
  url: 'http://megan-api.herokuapp.com/api/v1/courses'
})
export class Model_Course extends ResourceCRUD<IQueryInput, ICourseShort, ICourse> {
    resolveOnError(res: IResource) {
      res.$observable.subscribe(null, () => {
        res.$resolved = true;
      });
    }
}