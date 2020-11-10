import { NgModule } from '@angular/core';
import { MatButtonModule} from '@angular/material/button'; 
import { MatIconModule} from '@angular/material/icon';
import { MatToolbarModule} from '@angular/material/toolbar'; 
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [],
  imports: [MatButtonModule,MatIconModule,MatToolbarModule,MatCardModule, MatFormFieldModule, MatInputModule],
  exports: [MatButtonModule,MatIconModule,MatToolbarModule,MatCardModule, MatFormFieldModule, MatInputModule],

})
export class MaterialModule { }
