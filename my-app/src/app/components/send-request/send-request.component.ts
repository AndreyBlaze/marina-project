import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-send-request',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './send-request.component.html',
  styleUrl: './send-request.component.scss'
})
export class SendRequestComponent {

}
