import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { EditProfileComponent } from './edit-profile.component';
import { MatInputModule } from '@angular/material/input';
import { Ng2ImgMaxModule } from 'ng2-img-max';
import { HttpClientModule } from '@angular/common/http';
import { BucketService } from 'src/app/services/bucket.service';



@NgModule({
  declarations: [EditProfileComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    RouterModule,
    ReactiveFormsModule,
    Ng2ImgMaxModule,
    HttpClientModule,
    RouterModule.forChild([
      {
        path: '',
        component: EditProfileComponent
      }
    ])
  ],
  providers: [
    BucketService
  ]
})
export class EditProfileModule { }
