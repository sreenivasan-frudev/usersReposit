import { Component } from "@angular/core";
import { FieldType, FieldTypeConfig } from "@ngx-formly/core";

@Component({
selector:'rating',
template:`<p-rating [(ngModel)]="value" [cancel]="false"></p-rating>`
})


export class ratingClass extends FieldType<FieldTypeConfig> {
value="";
}

@Component({
  selector:'selectButton',
template:`<p-selectButton [options]="stateOptions" [(ngModel)]="value" optionLabel="label" optionValue="value" ></p-selectButton>`
})
export class selectButton extends FieldType<FieldTypeConfig> {
  stateOptions: any[] = [{label: 'Off', value: 'off'}, {label: 'On', value: 'on'}];
  value: string = 'off';
  }

  @Component({
    selector:'slider',
  template:`<div>
  <input type="text" pInputText [(ngModel)]="value" class="w-full"/>
  <p-slider [(ngModel)]="value" class="w-full"></p-slider>
</div>`
  })
  export class Slider extends FieldType<FieldTypeConfig> {
    stateOptions: any[] = [{label: 'Off', value: 'off'}, {label: 'On', value: 'on'}];
    value: string = 'off';
    }

    @Component({
      selector:'toggle',
    template:`
    <p-toggleButton [(ngModel)]="checked" onLabel="I confirm" offLabel="I reject" onIcon="pi pi-check" offIcon="pi pi-times"   ></p-toggleButton>`
    })
    export class Toggle extends FieldType<FieldTypeConfig> {
      checked=false;
      }
