import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { ValidateProfileError } from '../../consts/editableProfileCardConsts';
import { validateProfileData } from './validateProfileData';

const data = {
    firstname: 'Peter',
    lastname: 'Parker',
    age: 25,
    username: 'spider',
    city: 'New-York',
    country: Country.Kazakhstan,
    currency: Currency.USD,
};
describe('validateProfileData', () => {
    test('Полностью корректно заполнено', () => {
        const result = validateProfileData(
            {
                ...data,
            },
        );
        expect(result).toEqual([]);
    });
    test('Проверка валидации на незаполненое поле имени и фамилии', () => {
        const result = validateProfileData(
            {
                ...data,
                firstname: '',
            },
        );
        expect(result).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
    });
    test('Проверка валидации на незаполненое поле возраста', () => {
        const result = validateProfileData(
            {
                ...data,
                age: 0,
            },
        );
        expect(result).toEqual([ValidateProfileError.INCORRECT_AGE]);
    });
    test('Проверка валидации на незаполненое поле страны', () => {
        const result = validateProfileData(
            {
                ...data,
                country: undefined,
            },
        );
        expect(result).toEqual([ValidateProfileError.INCORRECT_COUNTRY]);
    });
    test('Проверка валидации на незаполненые обязательные поля', () => {
        const result = validateProfileData(
            {
                ...data,
                firstname: '',
                lastname: '',
                age: 0,
                country: undefined,
            },
        );
        expect(result).toEqual([
            ValidateProfileError.INCORRECT_USER_DATA,
            ValidateProfileError.INCORRECT_AGE,
            ValidateProfileError.INCORRECT_COUNTRY,
        ]);
    });
    test('Нет профиля', () => {
        const result = validateProfileData();
        expect(result).toEqual([ValidateProfileError.NO_DATA]);
    });
});
