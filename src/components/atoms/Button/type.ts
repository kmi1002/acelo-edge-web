export interface ButtonPorps {
  /** 타입 */
  type: 'button' | 'submit' | 'reset';

  /** 라벨 */
  label?: string;

  /** 종류 */
  kind: 'primary' | 'secondary' | 'tertiary' | 'success' | 'danger' | 'warning' | 'info' | 'link';

  /** 아이콘 */
  icon?: string;

  /** 필수 여부 */
  required?: boolean;

  /** 읽기 전용 */
  readonly?: boolean;

  /** 비활성화 */
  disabled?: boolean;

  /** 투명 */
  transparent?: boolean;

  /** 테두리 */
  border?: 'default' | 'border' | 'underline';

  /** 사이즈 */
  size: 'xs' | 'sm' | 'md' | 'lg' | 'xl';

  /** 넓이 */
  width?: string;

  /** 높이 */
  height?: string;
}
