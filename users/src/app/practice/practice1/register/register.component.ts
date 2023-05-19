import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { FormClass, RegisterClass } from 'src/app/form-class';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
RegisterForm:FormGroup=new FormGroup({});
RegisterModel:FormClass=new FormClass;



RegisterField:FormlyFieldConfig[]=[{
  fieldGroupClassName:'flex flex-column gap-2',
  fieldGroup:[{
    className:'col-5',
    key:'firstName',
    type:'input',
    wrappers:['register_template'],
    props:{
           label:'First Name',
           placeholder:'Enter First Name',
           minLength:3,
           required: true,
          },
          validation:{
            messages:{
              minlength:' atleast three letters required',
              required:'this field is required'
            }
          }
  },
{
  className:'col-5',
  key:'lastName',
  type:'input',
  wrappers:['register_template'],
  props:{
    label:'Last Name',
    placeholder:'Enter Last Name',
    minLength:3,
    required:true
  },
  validation:{
    messages:{
      minlength:' atleast three letters required',
      required:'this field is required'
    }
  }

},
{
  className:'col-5',
  key:'Dob',
  type:'dob',
  wrappers:['register_template'],
  props:{
    label:"Date Of Birth",
    placeholder:'Enter Date Of Birth',
    required:true
  },  validation:{
    messages:{
      required:'this field is required'
    }
  }
},
{
  className:'col-5',
  key:'emailId',
  type:'input',
  wrappers:['register_template'],
  props:{
    label:"Email Id",
    placeholder:'Enter Your Email Id',
    required:true
  },
  validation:{
    messages:{
      required:'this field is required'
    }
  },
  validators:{
    validation:['email']
  }
},
{
  className:'col-5',
  key:'mobileNumber',
  type:'input',
  wrappers:['register_template'],
  props:{
    label:'Mobile Number',
    placeholder:'Enter Mobile Number',
    required:true
  },
  validation:{
    messages:{
      required:'this field is required'
    }
  }

},
{
  className:'col-5',
  key:'Gender',
  type:'gender',
  wrappers:['register_template'],
  props:{
    label:'Gender',
    placeholder:'Enter Last Name',
    required:true
  },
  validation:{
    messages:{
      required:'this field is required'
    }
  }

},
{
  className:'col-5',
  key:'state',
  type:'input',
  wrappers:['register_template'],
  props:{
    label:'State',
    placeholder:'Enter Your State',
    required:true
  },
  validation:{
    messages:{
      required:'this field is required'
    }
  }

},
{
  className:'col-5',
  key:'city',
  type:'input',
  wrappers:['register_template'],
  props:{
    label:' City',
    placeholder:'Enter City Name',
    required:true
  },
  validation:{
    messages:{
      required:'this field is required'
    }
  }

},
{
  className:'col-5',
  key:'pincode',
  type:'input',
  wrappers:['register_template'],
  props:{
    label:'Pin Code',
    placeholder:'Enter Your Pin code',
    required:true
  },
  validation:{
    messages:{
      required:'this field is required'
    }
  }

},
{
  className:'col-5',
  key:'address',
  type:'input',
  wrappers:['register_template'],
  props:{
    label:'Address',
    type:'text-area',
    placeholder:'Enter Your Address',
    required:true
  },
  validation:{
    messages:{
      required:'this field is required'
    }
  }
},
]
}]
}
