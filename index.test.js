const fizzBuzz = require('./index');

test("1を渡すと文字列'1'を返す",()=>{
    // 準備(Arrange)
    // 実行(Act)
    // 検証(Assertion)
    expect(fizzBuzz(1)).toBe('1');
});