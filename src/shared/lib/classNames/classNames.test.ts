import { classNames } from './classNames';

describe('classNames', () => {
    test('with one param', () => {
        expect(classNames('someClass')).toBe('someClass');
    });
    test('with additional class', () => {
        const expected = 'someClass class1 class2';
        expect(classNames('someClass', {}, ['class1', 'class2'])).toBe(expected);
    });
    test('with mods class', () => {
        const expected = 'someClass classGreen';
        expect(
            classNames('someClass', {
                classRed: 1 > 10,
                classGreen: 10 > 1,
            }),
        ).toBe(expected);
    });
    test('with and additional class', () => {
        const expected = 'someClass classRed classGreen class1 class2';
        expect(
            classNames(
                'someClass',
                {
                    classRed: true,
                    classGreen: 10 > 1,
                },
                ['class1', 'class2'],
            ),
        ).toBe(expected);
    });
});
