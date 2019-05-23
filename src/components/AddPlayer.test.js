import React from 'react';
import { mount, shallow } from 'enzyme';
import AddPlayer from './AddPlayer';

it('renders without crashing', () => {
  shallow(<AddPlayer />);
});

it('should call onPlayerAdd with corect input', () => {
    const onPlayerAdd = jest.fn();
    const addPlayerComponent = mount(<AddPlayer onPlayerAdd={onPlayerAdd} />);
    const nameInput = addPlayerComponent.find('input').first().getDOMNode();
    nameInput.value = 'Ania';
    const form = addPlayerComponent.find('form');
    form.simulate('submit');
    expect(onPlayerAdd).toBeCalledWith('Ania');
  });