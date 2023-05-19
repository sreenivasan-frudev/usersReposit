import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UsersService } from './users.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { PersonComponent } from './person/person.component';
import { UsersComponent } from './users/users.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Practice1Component } from './practice/practice1/practice1.component';
import { FormlyFieldConfig, FormlyModule } from '@ngx-formly/core';
import { FormlyPrimeNGModule } from '@ngx-formly/primeng';
import { AbstractControl, ReactiveFormsModule, ValidationErrors } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { customTemplate } from './custom-template';
import { Slider, Toggle, ratingClass, selectButton} from './customInputs/custom-input';
import { RatingModule } from 'primeng/rating';
import { SelectButtonModule } from 'primeng/selectbutton';
import { FormsModule } from '@angular/forms';
import { SliderModule } from 'primeng/slider';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { RegisterComponent } from './practice/practice1/register/register.component';
import { RegisterCustomTemplate } from './practice/practice1/register/register-custom-template';
import { CalendarModule } from 'primeng/calendar';
import { RadioButtonModule } from 'primeng/radiobutton';
import { dateInput, genderSelect } from './practice/practice1/register/register-custom-inputs';
export function emailValidator(control:AbstractControl):ValidationErrors{
 return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(control.value)?{'email':null}:{'email':true};
};

export function emailMessage() {
  return `this is not a valid email Address`;
}


@NgModule({
  declarations: [
    AppComponent,
    PersonComponent,
    UsersComponent,
    Practice1Component,
    customTemplate,
    ratingClass,
    selectButton,
    Slider,Toggle, RegisterComponent,
    RegisterCustomTemplate,
    dateInput,
    genderSelect

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ButtonModule,
    BrowserAnimationsModule,
    CardModule,
    RatingModule,
    FormsModule,
    SliderModule,
    RadioButtonModule,
    SelectButtonModule,
    ToggleButtonModule,
    CalendarModule,
    ReactiveFormsModule,
    FormlyModule.forRoot({
      types:[
{name:'rating',component:ratingClass},
{name:'selectButton',component:selectButton},
{name:'slider',component:Slider},
{name:'toggle',component:Toggle},
{name:'dob',component:dateInput},
{name:'gender',component:genderSelect}
      ],
      wrappers: [
        {name: 'custom_template', component: customTemplate},
{name:'register_template',component:RegisterCustomTemplate}

      ],
      validators: [
        { name: 'email', validation: emailValidator },
      ],
      validationMessages:[
        {name:"email",message:emailMessage}
      ]
    }),
    FormlyPrimeNGModule
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
