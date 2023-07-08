import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms'
import { FormserService } from '../formser.service';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss']
})
export class CrudComponent implements OnInit {
  genderList = ["Male", "Female", "Others"]
  listOfData:any = []
  isEdit = false

   formData =new FormGroup({
    firstname:new FormControl(),
    lastname:new FormControl(),
    email:new FormControl(),
    age:new FormControl(),
    mobilenumber:new FormControl(),
    dob:new FormControl(),
    place:new FormControl(),    
    gender:new FormControl()
   })

  indexSelectedToEdit: any;

  constructor(private fs:FormserService){

  }
  ngOnInit(): void {
    this.loadFormData();

  }

  loadFormData(){
    return this.fs.getData().subscribe(
      res => console.log("Response is ...", res)
    )

  }
  onSubmit(){
    console.log("form Data .....",this.formData.value)
    this.listOfData.push(this.formData.value)
    //sent to serv
    this.fs.postData(this.formData.value).subscribe(
      res=> {
        console.log('Post Response....', res),
        this.formData.reset()
      })

    //sent to serv end 
    

  }
  onCancle(){
    this.formData.reset()
    this.isEdit = false

  }
  onDelete(index:any){
    this.listOfData.splice(index, 1)

  }
  onEdit(index:any){
    this.isEdit = true
    this.formData.patchValue(this.listOfData[index])
    this.indexSelectedToEdit = index;
    // console.log("edit index ", index)
    // console.log("edit index ", this.indexSelectedToEdit)


  }
  onSave(){
    this.isEdit = false
    //below are apped the row at bottom table 
    // this.listOfData.splice(this.indexSelecteToEdit, 1)
    // this.listOfData.push(this.formData.value)

    //edit and update the data in same row 
    this.listOfData[this.indexSelectedToEdit] = this.formData.value;
    
    this.formData.reset()
  }
  

  
}
