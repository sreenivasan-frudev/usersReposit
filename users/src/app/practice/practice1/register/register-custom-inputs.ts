import { Component } from "@angular/core";
import { FieldType, FieldTypeConfig } from "@ngx-formly/core";

@Component({
  selector:'dob',
  template:`
<p-calendar [(ngModel)]="date">
    <ng-template pTemplate="date" let-date>
        <span [ngStyle]="{textDecoration: (date.day < 21 && date.day > 10) ? 'line-through' : 'inherit'}">{{date.day}}</span>
    </ng-template>
</p-calendar>
  `
})
export class dateInput extends FieldType<FieldTypeConfig> {
  date!: Date[];
}





@Component({
  selector:'gender',
  template:`
<div class="flex flex-wrap gap-2">
    <div class="flex align-items-center">
        <p-radioButton  value="Male" [(ngModel)]="gender" inputId="gender1"></p-radioButton>
        <label for="gender1" class="ml-2">Male</label>
    </div>

    <div class="flex align-items-center">
        <p-radioButton  value="Female" [(ngModel)]="gender" inputId="gender2"></p-radioButton>
        <label for="gender2" class="ml-2">Female</label>
    </div>
    <div class="flex align-items-center">
        <p-radioButton  value="Others" [(ngModel)]="gender" inputId="gender3"></p-radioButton>
        <label for="gender3" class="ml-2">Others</label>
    </div>
</div>
  `
})
export class genderSelect extends FieldType<FieldTypeConfig> {
gender='';
}
