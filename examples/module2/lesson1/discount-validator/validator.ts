export function formValidator(
  firstName: string,
  lastName: string,
  age: number
) {
  const errors: string[] = [];

  if (typeof age !== 'number') {
    throw new Error('Age should be a number');
  }

  if (!firstName) {
    errors.push('First name is required');
  }

  if (firstName.length <= 1) {
    errors.push('First name is too short');
  }

  if (!lastName) {
    errors.push('Last name is required');
  }

  if (lastName.length <= 1) {
    errors.push('Last name is too short');
  }

  if (age < 0) {
    errors.push('Age must be a positive number');
  }

  return errors;
}
