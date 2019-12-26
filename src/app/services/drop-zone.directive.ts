import { Directive, HostListener, HostBinding, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[dropZone]',
})
export class DropZoneDirective {
  @Output() public dropped: EventEmitter<FileList> = new EventEmitter<FileList>();
  @Output() public hovered: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() {}

  @HostListener('drop', ['$event'])
  public onDrop($event: any): void {
    $event.preventDefault();
    this.dropped.emit($event.dataTransfer.files);
    this.hovered.emit(false);
  }

  @HostListener('dragover', ['$event'])
  public onDragOver($event: any): void {
    $event.preventDefault();
    this.hovered.emit(true);
  }

  @HostListener('dragleave', ['$event'])
  public onDragLeave($event: any): void {
    $event.preventDefault();
    this.hovered.emit(false);
  }
}
