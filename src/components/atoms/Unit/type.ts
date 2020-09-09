export interface UnitPorps {
  /** 타입 */
  type: 'number' | 'count' | 'people' | 'money' | 'percent' | 'rank';

  /** 값 */
  value: number;

  /** 기호 사용 여부 (+, -) */
  symbol?: boolean;

  /** 증감 색상 (증가 : 빨간색, 감소 : 파란색) */
  color?: boolean;

  /** 강조 */
  strong?: boolean;
}
