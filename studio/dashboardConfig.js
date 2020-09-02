export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f5005dad1bad941a466995b',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-25iekve1',
                  apiId: '2fe2fc1b-988b-4029-819e-9afb27751e75'
                },
                {
                  buildHookId: '5f5005da3dac793f910da974',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-x3wgryk3',
                  apiId: '79607bd4-e131-4d02-8950-69e3eafcb021'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/gabriel-ortiz/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-x3wgryk3.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
