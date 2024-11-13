import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'document',
    standalone: true,
})
export class DocumentPipe implements PipeTransform {
  transform(value: string): unknown {
    return value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
  }
}
