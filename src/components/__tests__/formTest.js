import { render } from "@testing-library/react"
import ShortenerForm from "../ShortenerForm"

describe("Checks is form working correctly",()=>{
    it('checks is validation work correct',()=>{
        render(<ShortenerForm/>);
        
    })
})