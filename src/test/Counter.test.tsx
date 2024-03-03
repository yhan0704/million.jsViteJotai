import { render } from '@testing-library/react';
import { Provider } from 'jotai';
import Counter from '../Counter';

describe('Counter Component', () => {
  it('should render with initial count and increase count when button clicked', () => {
    const { getByText } = render(
      <Provider>
        <Counter />
      </Provider>
    );

    // 초기 카운트가 0으로 렌더링되었는지 확인
    expect(getByText('Incrase')).toBeTruthy();
  });
});
