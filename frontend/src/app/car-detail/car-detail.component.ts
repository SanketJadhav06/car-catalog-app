import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.scss']
})
export class CarDetailsComponent {
  @Input() car: any;
  @Input() isOpen: boolean = false;
  @Output() closeModal = new EventEmitter<void>();

  selectedColor: string = '';

  ngOnInit() {
    this.selectedColor = this.car?.colors?.[0] || 'gray';
  }

  changeColor(color: string) {
    this.selectedColor = color;
  }

  close() {
    this.closeModal.emit();
  }
}
