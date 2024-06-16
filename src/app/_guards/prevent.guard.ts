import { CanDeactivateFn } from '@angular/router';
import { MemberEditComponent } from '../member/member-edit/member-edit.component';

export const preventGuard: CanDeactivateFn<MemberEditComponent> = (component) => {
  if(component.editForm?.dirty){
    return confirm('are you sure you want to continue? Any unsaved changes will be lost')
  }
  return true;
};
