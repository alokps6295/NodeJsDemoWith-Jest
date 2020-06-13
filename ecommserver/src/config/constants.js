 const VALIDATION_MESSAGES = {
    'permissions.required': 'Permissions are required',
    'required': '{{ field }} is required',
    'required_when': '{{ field }} is required',
    'min': 'Please enter a valid {{ field }}',
    'max': '{{ field }} exceedes the required limit',
    'regex': 'Please enter a valid {{ field }}',
    'email': 'Please enter a valid email',
    'alpha': '{{ field }} can contain only letters',
    'alphaNumeric': '{{ field }} can contain only letters and numbers',
    'integer': '{{ field }} shoud be number',
    'different': 'Alternate email must be different from primary mail',
    'array': 'Array of {{ field }} required',
    'url': 'Please enter a valid url',
    'above': '{{field}} should be greater than 0',
    'access.in': 'Invalid access type defined',
    'in': 'Not a valid {{field}}',
    'paymode.in': 'Invalid payment method specified',
    'required_when': '{{ field }} is required',
    'boolean': 'Invalid {{field}} value',
    'required_when': '{{ field }} is required',
    'string': '{{field}} should be a string',
    'number': '{{field}} should be a number',
    'minHeightInch.range': 'Minimum height inch is not in specified range',
    'minHeightFt.range': 'Minimum height ft is not in specified range',
    'maxHeightFt.range': 'Maximum height ft is not in specified range',
    'maxHeightInch.range': 'Maximum height inch is not in specified range',
    'range': '{{field}} is not in the specified range',
    'object': '{{field}} are not valid.'
};
module.exports={
    VALIDATION_MESSAGES
}