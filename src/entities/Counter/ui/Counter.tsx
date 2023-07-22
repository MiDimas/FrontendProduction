import { Button } from 'shared/ui/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { getCounterValue } from 'entities/Counter/model/selectors/getCounterValue/getCounterValue';
import { counterActions } from '../model/slice/counterSlice';

export const Counter = () => {
    const dispatch = useDispatch();
    const counterValue = useSelector(getCounterValue);
    const incrementHandler = () => {
        dispatch(counterActions.increment());
    };

    const decrementHandler = () => {
        dispatch(counterActions.decrement());
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
};
