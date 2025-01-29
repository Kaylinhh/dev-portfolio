import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
  name: 'highlight',
  standalone: true
})
export class HighlightPipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer) {}

  transform(value: string, highlights: { word: string, tag: string }[]): SafeHtml {
    if (!value || !highlights || highlights.length === 0) return value;

    highlights.forEach(({word, tag}) => {
      const regex = new RegExp(`(${word})`, 'gi');
      value = value.replace(regex, `<${tag}>$1</${tag}>`);
    });

    return this.sanitizer.bypassSecurityTrustHtml(value);
  }

}
