export default {
  name: 'workExperience',
  title: 'Work Experience',
  type: 'document',
  fields: [
    {name: 'name', title: 'name', type: 'string'},
    {
      name: 'company',
      title: 'Company',
      type: 'string',
    },
    {
      name: 'desc',
      title: 'Desc',
      type: 'array',
      of: [{type: 'block'}],
    },
  ],
}

// export default {
//     name: 'workExperience',
//     title: 'Work Experience',
//     type: 'object',
//     fields: [
//       {
//         name: 'role',
//         title: 'Role',
//         type: 'string'
//       },
//       {
//         name: 'description',
//         title: 'Description',
//         type: 'array',
//         of: [{ type: 'block' }]
//       }
//     ]
//   };
