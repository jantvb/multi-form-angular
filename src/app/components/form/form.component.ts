import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'multi-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnChanges {

  @Input() label!:    string;
  @Input() type!:     string;
  @Input() btnTxt!:   string;
  @Input() value!:    any;

  @Output() onInputDataSend  = new EventEmitter<any>();
  @Output() onBackLinkCliked = new EventEmitter<any>();

  inputValue: any;

  ngOnChanges(changes: SimpleChanges): void {
    this.inputValue = this.value;
  }
  
  sendData() {
    if (this.inputValue?.length > 0) {
      this.onInputDataSend.emit({
        inputName: this.label,
        value:     this.inputValue
      });
    }
    
  }

  backLinkCliked() {
    this.onBackLinkCliked.emit(this.label);
  }
}
