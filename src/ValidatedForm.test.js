import React from 'react';
import ValidatedForm from './ValidatedForm';
import TextInputValidated from './TextInputValidated';
import renderer from 'react-test-renderer';

test('ValidatedForm renders without errors', () => {
    const tree = renderer
        .create(
            <ValidatedForm>
                <TextInputValidated type="text" name="test" label="test" required placeholder="test" />
            </ValidatedForm>
        ).toJSON();
    expect(tree).toMatchSnapshot();
});

// todo add more tests