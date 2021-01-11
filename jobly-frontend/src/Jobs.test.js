import React from 'react';
import { render } from '@testing-library/react';
import Jobs from './Jobs';

it("renders without crashing", function() {
    render(
        <Jobs />
    );
});

it("matches snapshot without any jobs", function() {
    const { asFragment } = render(
        <Jobs />
    );
    expect(asFragment()).toMatchSnapshot();
});