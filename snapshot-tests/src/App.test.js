import App from './App';
import renderer from "react-test-renderer"

/*
test('renders a snapshot ', () =>{
  const tree = renderer.create(<App/>).toJSON()
  expect(tree).toMatchSnapshot()
})

*/

test('renders the text Link to Github ', () =>{
  const nameElement = screen.getByText("Link to Github")
  expect(nameElement).toBeInTheDocument()
})
