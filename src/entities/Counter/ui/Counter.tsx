import { memo } from 'react';
import { Button } from '@/shared/ui/Button';
import { useCounterActions } from '../model/slice/counterSlice';
import { useCounterValue } from '../model/selectors/getCounterValue/getCounterValue';

export const Counter = memo(() => {
    const counterValue = useCounterValue();
    const { increment, decrement } = useCounterActions();
    const incrementHandler = () => {
        increment();
    };

    const decrementHandler = () => {
        decrement();
    };

    return (
        <div>
            <h3 data-testid="value-title">{counterValue}</h3>
            <Button
                onClick={incrementHandler}
                data-testid="increment-btn"
            >
                +
            </Button>
            <Button
                onClick={decrementHandler}
                data-testid="decrement-btn"
            >
                -
            </Button>
        </div>
    );
});
