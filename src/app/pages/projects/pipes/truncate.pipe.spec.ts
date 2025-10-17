import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TruncatePipe } from './truncate.pipe';

describe('TruncatePipe', () => {
  it('create an instance', () => {
    const pipe = new TruncatePipe();
    expect(pipe).toBeTruthy();
  });

  it('should truncate text longer than limit', () => {
    const pipe = new TruncatePipe();
    const longText = 'a'.repeat(200);
    const result = pipe.transform(longText, 150);
    expect(result.length).toBe(153); // 150 + '...'
  });

  it('should not truncate text shorter than limit', () => {
    const pipe = new TruncatePipe();
    const shortText = 'Short text';
    const result = pipe.transform(shortText, 150);
    expect(result).toBe(shortText);
  });
});
