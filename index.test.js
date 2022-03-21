const { TestWatcher } = require('jest')
const add = require('./index')

test('1と2を渡したとき、３を返す',()=>{
    expect(add(1,2)).toBe(3);
});