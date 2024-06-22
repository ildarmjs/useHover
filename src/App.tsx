import useHover from './custom-hook/useHover'
import './App.css'

function App() {
	const { hovered, ref } = useHover()
	return (
		<div ref={ref}>
			{hovered ? 'На меня навели мышку' : 'Наведи мышкой на меня'}
		</div>
	)
}

export default App
