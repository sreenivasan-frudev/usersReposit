import { Component } from "@angular/core";
import { FieldWrapper } from '@ngx-formly/core';
@Component({
  selector:'register_template',
template:`
<div class="flex justify-content-between align-items-center">
 <label [attr.for]="id" *ngIf="props.label">
   {{ props.label }}
 </label>
<div class="flex flex-column column-gap-1">
<div class="p-w-full">
   <ng-template #fieldComponent></ng-template>
 </div>
 <div *ngIf="showError" class="text-red-600 text-xs">
   <formly-validation-message [field]="field"></formly-validation-message>
 </div>
</div>

</div>

`
})
export class RegisterCustomTemplate extends FieldWrapper {

}
