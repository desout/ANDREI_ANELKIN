import {Component, Input} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-pop-up-model',
  templateUrl: './pop-up-model.component.html',
  styleUrls: ['./pop-up-model.component.scss']
})
export class PopUpModelComponent {
  @Input() name;
  constructor(public activeModal: NgbActiveModal) { }


}
