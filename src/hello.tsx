import { block } from 'million/react';

export const LionBlock = block(
    function Lion() {
        return <img src="https://million.dev/lion.svg" />;
    },
    { as: 'div' },
);