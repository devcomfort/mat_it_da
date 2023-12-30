/**
 * [Hello World JavaScript](https://helloworldjavascript.net/pages/130-number.html)의 2.2 number 쳅터 내용에 대한 코드입니다.
 * 
 * 다음의 함수를 적절히 작성하고, 테스트 코드를 통해 답을 확인해보세요.
 */

/**
 * 절댓값 함수
 * 
 * @description 어떤 수 `x`가 입력되면, 그 수의 절댓값을 반환하는 함수를 작성하세요
 * @description Math.abs를 사용하거나 삼항연산자, 조건문 등을 통해 직접 작성하세요.
 */
export function abs(x: number): number {
  // 여기에 내용을 작성하세요
}

/**
 * 숫자 자료형인지 확인하는 함수
 * 
 * @description 어떤 데이터 `v`가 입력되면, 그 수가 숫자인지 여부를 논리형 변수 `true` 또는 `false`로 반환하는 함수를 작성하세요
 * @description typeof, Number.isInteger, Number.isSafeInteger, Number.isFinite 중 어떤 것을 사용해도 좋지만, 데이터 `v`가 숫자 데이터이며 정수, 실수 범위의 모든 값이 될 수 있음을 검증하는 함수를 작성해야 합니다
 */
export function isNumber(v: unknown): v is number {
  // 여기에 내용을 작성하세요
}

/**
 * 최소값을 찾아 반환하는 함수
 * 
 * @description 숫자 배열 `values`가 입력되면 가장 작은 값을 찾아 반환하는 함수를 작성하세요
 * @description 직접 for문을 사용하여 작성해도 좋고 Math.min 함수를 사용해도 좋습니다
 */
export function findMinValue(...values: number[]): number {
  // 여기에 내용을 작성하세요
}

/**
 * 최대값을 찾아 반환하는 함수
 * 
 * @description 숫자 배열 `values`가 입력되면 가장 큰 값을 찾아 반환하는 함수를 작성하세요
 * @description 직접 for문을 사용하여 작성해도 좋고 Math.max 함수를 사용해도 좋습니다
 */
export function findMaxValue(...values: number[]): number {
  // 여기에 내용을 작성하세요
}

/**
 * 제곱근 구하는 함수
 * 
 * @description 어떤 수 `x`의 제곱근 값을 구해 반환하는 함수를 작성하세요
 */
export function sqrt(x: number): number {
}