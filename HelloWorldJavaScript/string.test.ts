import { describe, it, expect } from "vitest";
import { faker } from "@faker-js/faker";
import * as R from "rambda";
import { concat, length, split, templateString } from "./string.js";

describe("템플릿 문자열 테스트", function () {
  it("템플릿 문자열 테스트 #1", function () {
    const name = faker.person.fullName();
    expect(templateString(name)).toBe(`Hello World, ${name}`);
  });
});

describe("문자열 병합 테스트", function () {
  it("문자열 병합 테스트 #1", function () {
    const data = R.pipe(R.map(String))(R.range(1, 11));
    const joined = R.join("")(data);
    expect(concat(...data)).toBe(joined);
  });
});

describe("문자열 길이 테스트", function () {
  const data = R.map(
    R.pipe(
      Math.random,
      R.multiply(10),
      Math.floor,
      R.inc,
      R.range(0),
      R.map(R.always("-")),
      R.join("")
    )
  )(R.range(1, 11));

  data.forEach(function (_case, case_number) {
    it(`문자열 길이 테스트 #${case_number + 1}`, function () {
      expect(length(_case)).toBe(_case.length);
    });
  });
});

describe("문자열 분할 테스트", function () {
  const ENUM_RANDOM_SEP = [",", "|", "-", "_", "+", "||", "/", ".", "~"];
  /** 랜덤한 구분자를 가져오는 함수 */
  const getRandomSep = () =>
    ENUM_RANDOM_SEP.at(Math.floor(Math.random() * ENUM_RANDOM_SEP.length))!;
  const generateRandomSequence = R.pipe(
    R.clamp(1, 10),
    R.range(0),
    R.map(R.pipe(Math.random, R.multiply(10), Math.floor))
  );

  const cases = R.map(
    R.pipe(
      Math.random,
      R.multiply(10),
      Math.floor,
      R.clamp(1, 10),
      generateRandomSequence,
      R.map(String),
      // [구분자, 병합된(join된) 문자열, 원본 문자열 수]
      (seq): [string, string, number] => {
        const sep = getRandomSep();
        return [sep, seq.join(sep), seq.length];
      }
    )
  )(R.range(1, 11));

  cases.forEach(function (_case, case_number) {
    it(`문자열 분할 테스트 #${case_number + 1}`, function () {
      expect(split(_case[1], _case[0]).length).toBe(_case[2]);
    });
  });
});
