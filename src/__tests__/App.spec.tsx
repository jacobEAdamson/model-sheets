import { fireEvent, render } from "@testing-library/react"
import App from "../App"

test("Renders the main page", () => {
    render(<App />)
    expect(true).toBeTruthy()
})

test("Increases count when button clicked", () => {
    const {getByText} = render(<App />)
    const button = getByText('count is 0')
    expect(button).toBeInTheDocument()
    fireEvent.click(button);
    expect(getByText('count is 1')).toBeInTheDocument()
})
