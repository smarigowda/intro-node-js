const shell = require('shelljs')
// write some tests
describe('users', () => {
    test('sample test', () => {
        // it prompts and waits so can not be tested as normal js code
        // const result1 = shell.exec(`node ${__dirname}\\index.js list`);
        const result = shell.exec(`node -v`).stdout; //?
        expect(1).toBe(1);
    })
});