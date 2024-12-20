
import {render,screen} from "@testing-library/react";
import { GridLights } from "./GridLights";
// import {toBeInTheDocument} from "@testing-library/jest-dom"
// import {} from 'jest'

describe("GridLights", () => {
    it("should Intialize the component", () => {
        render(<GridLights size={3} />);
        const containerEl = screen.getByText(".grid-container");
        expect(containerEl).toBeInTheDocument();
    })
})