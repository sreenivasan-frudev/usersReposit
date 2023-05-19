
import { Component } from '@angular/core';
import { FieldWrapper } from '@ngx-formly/core';

@Component({
 selector: 'custom_template',
 template: `
<div class="flex flex-column gap-2 ">
 <label [attr.for]="id" *ngIf="props.label">
   {{ props.label }}
   <ng-container *ngIf="props.required && props['hideRequiredMarker'] !== true"><span class="text-xs-2 vertical-align-top">*</span></ng-container>
 </label>

 <div class="p-w-full">
   <ng-template #fieldComponent></ng-template>
 </div>
 <div *ngIf="showError" class="text-red-600 text-xs">
   <formly-validation-message [field]="field"></formly-validation-message>
 </div>
</div>`
})
export class customTemplate extends  FieldWrapper {}

