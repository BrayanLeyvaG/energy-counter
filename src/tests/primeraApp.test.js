import React from 'react';
import '@testing-library/jest-dom'
import {shallow} from 'enzyme'
// import {render} from '@testing-library/react'
// import '@testing-library/jest-dom/extend-expect'

import PrimeraApp from "../PrimeraApp"

 
 
 describe('Pruebas en <Primera App />', () => {
/*      test('debe de mostrar el mensaje "Hola soy Brayan"', () => {
        
        const saludo = 'Hola soy Brayan'
        
        const { getByText } = render( <PrimeraApp saludo={ saludo } />);

        expect( getByText(saludo)).toBeInTheDocument()

     })
      */

     test('debe de mostrar <PrimeraApp /> correctamente', () => {
         const saludo = 'Hola, soy Brayan'
         const wrapper = shallow(<PrimeraApp saludo = {saludo} /> )

         expect( wrapper ).toMatchSnapshot();
     })

     test('debe de mostrar el subtituo enviado por props', () => {
         const saludo = 'Hola, soy Brayan';
         const subTitulo = 'Soy un subtitulo';

         const wrapper = shallow(
            <PrimeraApp 
            saludo={ saludo }
            subtitulo={ subTitulo }
            />
         )

         const textParrafo = wrapper.find('p').text();
         expect(textParrafo).toBe( subTitulo )
     })
     
     
 })
 