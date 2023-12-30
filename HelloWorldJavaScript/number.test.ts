import { describe, expect, it } from 'vitest';
import * as R from 'rambda';
import { abs, findMaxValue, findMinValue, isNumber, sqrt } from './number.js';

describe("절댓값 테스트", () => {
  const cases = R.map(
    R.pipe(
      // === 랜덤한 수 생성 ===
      Math.random,
      R.multiply(100),
      Math.floor,
      R.inc,
      R.ifElse(
        R.pipe(
          (_) => Math.random(),
          Math.round,
          (v) => v >= 0.5,
        ),
        R.multiply(-1),
        R.multiply(1),
      )
    ),
    R.range(1, 101)
  )

  cases.forEach(function (_case, case_number) {
    it(`절댓값 테스트 #${String(case_number + 1).padEnd(3)} - ${R.pipe(
      String,
      (str) => str.padStart(3)
    )(_case)
      }`, function () {
        expect(abs(_case)).toBe(Math.abs(_case));
      })
  })
})

// NOTE: 숫자 검증, `number`의 검증에 가장 적절한 함수를 하나만 뽑자면 `Number.isFinite`인 듯. 자료형 검증은 물론이고 `number`의 범주에 들어가는 실수, 정수를 모두 올바르게 검증함
describe("숫자 검증 함수 테스트", () => {
  const validCases = [
    3.141592, // Number.isFinite으로만 검증 가능
    100, // Number.isInteger 또는 Number.isSafeInteger로 검증 가능
    12 // Number.isInteger 또는 Number.isSafeInteger로 검증 가능
  ]

  // `invalidCases`의 모든 내용은 Number.isInteger, Number.isSafeInteger, 또는 Number.isFinite로 검증 가능
  // 숫자가 아니거나, 각 함수에 맞는 구조를 따르지 않는 경우 바로 `false`를 반환하기 때문
  const invalidCases = [
    null,
    Infinity,
    NaN,
    "1312",
    "Hello World!",
    [1, 3, 2, 4, 1]
  ]

  validCases.forEach(function (_case, case_number) {
    it(`유효한 숫자 검사 테스트 #${case_number + 1}`, function () {
      expect(isNumber(_case)).toBe(true)
    })
  })

  invalidCases.forEach(function (_case, case_number) {
    it(`유효하지 않은 숫자 검사 테스트 #${case_number + 1}`, function () {
      expect(isNumber(_case)).toBe(false)
    })
  })
})


describe("최소값 탐색 함수 테스트", function () {
  const data = R.map(
    R.pipe(
      Math.random,
      R.multiply(100),
      Math.floor,
      R.inc
    ),
    R.range(1, 10)
  );
  const minValue = Math.min(...data);

  it("최소값 탐색 함수 테스트 #1", function () {
    expect(findMinValue(...data)).toBe(minValue);
  });
})

describe("최대값 탐색 함수 테스트", function () {
  const data = R.map(
    R.pipe(
      Math.random,
      R.multiply(100),
      Math.floor,
      R.inc
    ),
    R.range(1, 11)
  );
  const maxValue = Math.max(...data);

  it("최대값 탐색 함수 테스트 #1", function () {
    expect(findMaxValue(...data)).toBe(maxValue);
  })
})

describe("제곱근 함수 테스트", function () {
  R
    .range(1, 11)
    .forEach(
      function (_case, case_number) {
        it(
          `제곱근 함수 테스트 #${R.pipe(R.inc,)(case_number)
          }`,
          function () {
            expect(sqrt(_case)).toBe(Math.sqrt(_case));
          }
        )
      }
    )
})