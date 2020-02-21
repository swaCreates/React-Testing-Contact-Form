import React from "react";
import { render, fireEvent, getByTestId } from "@testing-library/react";
import 'mutationobserver-shim';
import ContactForm from './ContactForm';

it('Renders contactForm without crashing', () =>{
    render(<ContactForm/>);
})

describe('See if values on form are functional', () => {
    test('Get first name', () =>{
        const component= render(<ContactForm />);
        const firstName= component.getByTestId('firstName')
        expect(firstName).toBeInTheDocument();
    })
})
