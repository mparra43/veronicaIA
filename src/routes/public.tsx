import { RouteObject } from 'react-router-dom'

import { lazyImport } from '../utils/lazyImport'

const { TransversalRoutes } = lazyImport(() => import('@/feature/transversal'), 'TransversalRoutes')


export const publicRoutes: RouteObject[] = [
  {
    path: '/*',
    element: < TransversalRoutes />,
  },
 
]
