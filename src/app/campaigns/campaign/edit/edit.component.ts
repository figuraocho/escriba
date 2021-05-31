import {
  Component,
  Inject,
  OnInit
} from '@angular/core';
import {
  FormControl
} from '@angular/forms';
import {
  MatDialogRef,
  MAT_DIALOG_DATA
} from '@angular/material/dialog'
import { Campaign } from '../../campaign.model';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  name: string = "";
  date: Date = new Date();
  description: string = "";
  image: string = "";

  dateControl: FormControl = new FormControl();


  constructor(@Inject(MAT_DIALOG_DATA) public data: {
    name: string,
    imagen: string,
    date: Date,
    descripcion: string
  },private dialogRef: MatDialogRef<EditComponent>) {
    this.name = data.name;
    this.date = data.date;
    this.description = data.descripcion;
    this.image = data.imagen;
  }

  ngOnInit(): void {
    // this.date= new FormControl(this.data.date);
    this.dateControl = new FormControl(this.date);
  }

  onSubmit() {}

  cancel() {}

  save() {
    let campaign:Campaign = new Campaign(this.name, this.date, this.image, this.description);
    this.dialogRef.close(campaign);
  }

}
