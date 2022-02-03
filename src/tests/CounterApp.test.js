import React from 'react';
import { shallow } from "enzyme"
import CounterApp from "../CounterApp";


describe('Probando <CounerApp />', () => {
    
    let wrapper
    
    beforeEach( () => {
         wrapper = shallow(<CounterApp value = { 3 } />)

    }

    )

    test('Debe mostrar <CounerApp /> correctamente', () => {

        expect(wrapper).toMatchSnapshot();
    })
    
    test('Debe mostrar el valor por defecto de 100', () => {
        const value = 100
        const wrapper = shallow(<CounterApp value = {value} />)

        const counterText = wrapper.find('h2').text().trim();

        expect(counterText).toBe(value.toString());
    })

    test('Debe de incrementar con el boton +1', () => {
        wrapper.find('button').at(2).simulate('click')
        const counterText = wrapper.find('h2').text().trim();

        expect(counterText).toBe('4')
    })

    test('Debe de decrementar con el boton -1', () => {
        wrapper.find('button').at(0).simulate('click')
        const counterText = wrapper.find('h2').text().trim();

        expect(counterText).toBe('2')
    })
    
    test('debe de colocar el valor por defecto con el btn reset', () => {
        const value = 3
        const wrapper = shallow(<CounterApp value = {value} />)
        wrapper.find('button').at(0).simulate('click')
        wrapper.find('.br').simulate('click')
        const counterText = wrapper.find('h2').text().trim();
        expect(counterText).toBe(value.toString())
    })
    
    

})
