import { useRoutes } from 'react-router-dom'
import Shell from './components/Shell'
import Designer from './pages/Designer'
import Gallery from './pages/Gallery'
import Detail from './pages/Detail'
import Edit from './pages/Edit'
import NotFound from './pages/NotFound'

export default function App() {
    const tree = useRoutes([
        { path: '/', element: <Designer /> },
        { path: '/designs', element: <Gallery /> },
        { path: '/designs/:id', element: <Detail /> },
        { path: '/edit/:id', element: <Edit /> },
        { path: '*', element: <NotFound /> }
    ])
    return (
        <Shell>
            {tree}
        </Shell>
    )
}
