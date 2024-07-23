import { describe, expect, test } from 'vitest';
import { formValidator } from './validator';

describe('Form validation', () => {
  test('should return an error if first name is missing', () => {
    const errors = formValidator('', 'Doe', 30);
    expect(errors).toContain('First name is required');
  });

  test('should return an error if last name is missing', () => {
    const errors = formValidator('John', '', 30);
    expect(errors).toContain('Last name is required');
  });

  test('should return an error if first name is too short', () => {
    const errors = formValidator('J', 'Doe', 30);
    expect(errors).toContain('First name is too short');
  });

  test('should return an error if last name is too short', () => {
    const errors = formValidator('John', 'D', 30);
    expect(errors).toContain('Last name is too short');
  });

  test('should return an error if age is negative', () => {
    const errors = formValidator('John', 'Doe', -1);
    expect(errors).toContain('Age must be a positive number');
  });

  test('should return an error if age is string', () => {
    expect(() => {
      // @ts-ignore
      return formValidator('John', 'Doe', '1');
    }).toThrowError();
  });

  test('should return no error if the data are corretly', () => {
    const errors = formValidator('John', 'Doe', 30);
    expect(errors.length).toBe(0);
  });
});
