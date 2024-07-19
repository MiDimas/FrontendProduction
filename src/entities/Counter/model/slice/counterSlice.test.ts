import { CounterSchema } from '../types/CounterSchema';
import { counterReducer, counterActions } from './counterSlice';

describe('counterSlice', () => {
    test('Тестирование инкремента', () => {
        const state: CounterSchema = {
            value: 10,
        };
        expect(counterReducer(state, counterActions.increment())).toEqual({
            value: 11,
        });
    });
    test('Тестирование декремента', () => {
        const state: CounterSchema = {
            value: 10,
        };
        expect(counterReducer(state, counterActions.decrement())).toEqual({
            value: 9,
        });
    });
    test('Тестирование без стэйта', () => {
        expect(counterReducer(undefined, counterActions.increment())).toEqual({
            value: 1,
        });
    });
});
