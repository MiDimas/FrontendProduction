import { counterReducer, counterActions } from './counterSlice';
import { CounterSchema } from '../types/CounterSchema';

describe('counterSlice', () => {
    test('Тестирование инкремента', () => {
        const state: CounterSchema = {
            value: 10,
        };
        expect(counterReducer(state, counterActions.increment())).toEqual({ value: 11 });
    });
    test('Тестирование декремента', () => {
        const state: CounterSchema = {
            value: 10,
        };
        expect(counterReducer(state, counterActions.decrement())).toEqual({ value: 9 });
    });
});
