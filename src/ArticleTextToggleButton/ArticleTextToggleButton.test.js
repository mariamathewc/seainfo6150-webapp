import React from "react";
import ArticleTextToggleButton from "./ArticleTextToggleButton";
import { fireEvent } from "@testing-library/react";



describe("ArticleTextToggleButton tests", () => {



    it("renders correctly after button is clicked", () => {
        
        const { container, getByText } = render(
            <ArticleTextToggleButton buttonText="Show less" onClick={jest.fn()}  />
        );
        fireEvent.click(getByText("Show less"));
        expect(container).toMatchSnapshot();
    });
 
});