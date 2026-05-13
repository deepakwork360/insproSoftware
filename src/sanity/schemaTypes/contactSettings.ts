export const contactSettings = {
  name: 'contactSettings',
  title: 'Contact Settings',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Document Title',
      type: 'string',
      initialValue: 'Contact Information',
      hidden: true,
    },
    {
      name: 'phoneNumbers',
      title: 'Phone Numbers',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Add one or more contact phone numbers.',
    },
    {
      name: 'email',
      title: 'Contact Email',
      type: 'string',
      initialValue: 'sales@insprosoftware.com',
    },
    {
      name: 'address',
      title: 'Office Address',
      type: 'text',
      rows: 3,
      description: 'Physical office address.',
    },
    {
      name: 'workingHours',
      title: 'Working Hours',
      type: 'string',
      initialValue: 'Monday - Friday: 9:00 AM - 6:00 PM',
      description: 'e.g., Monday - Friday: 9:00 AM - 6:00 PM',
    },
    {
      name: 'googleMapsLink',
      title: 'Google Maps Link',
      type: 'url',
      description: 'Optional link to Google Maps for the address.',
    },
  ],
}
