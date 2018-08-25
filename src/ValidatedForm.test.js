import React from 'react';
import ValidatedForm from './ValidatedForm';
import TextInputValidated from './TextInputValidated';

test('ValidatedForm renders without errors', () => {
    const wrapper = mount(
        <ValidatedForm>
            <TextInputValidated type="text" name="test" label="test" required placeholder="test" />
        </ValidatedForm>
    );

    expect(wrapper).toMatchSnapshot();
});

test('ValidatedForm renders with validation error', () => {
    const wrapper = mount(
        <ValidatedForm>
            <TextInputValidated type="text" name="test" label="test" required placeholder="test" />
            <button type="submit" id="submitbutton">submit</button>
        </ValidatedForm>
    );

    // todo fix this test...
    wrapper.find('#submitbutton').simulate("click");
    wrapper.update();
    expect(wrapper).toMatchSnapshot();
});


// todo add more tests