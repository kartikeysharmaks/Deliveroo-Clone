export default {
  name: 'dish',
  title: 'Dish',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name of the dish',
      type: 'string',
      validation: Rule =>Rule.required(),
    },
    {
      name: 'description',
      title: 'Short Description',
      type: 'string',
      validation: (Rule)=> Rule.max(200),
    },
    {
      name:'price',
      title: 'Price of the dish',
      type:'number',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
};
