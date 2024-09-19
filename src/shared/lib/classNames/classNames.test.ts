import {classNames} from "shared/lib/classNames/classNames";

describe('classNames', () => {
    test('with only first param', () => {
        expect(classNames('someClass')).toBe('someClass')
    })
    test('with additinal params', () => {
        expect(classNames('someClass', {}, ['someClass2', 'someClass3'])).toBe('someClass someClass2 someClass3')
    })
    test('with all params', () => {
        expect(classNames('someClass', {'good': true, 'bad': false}, ['someClass2', 'someClass3'])).toBe('someClass someClass2 someClass3 good')
    })
})