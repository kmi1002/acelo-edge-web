export interface InputPorps {
  /** 타입 */
  type: 'text' | 'password' | 'number';

  /** 이름 */
  name: string;

  /** 힌트 */
  placeholder?: string;

  /** 기본 값 */
  defaultValue?: string | number;

  /** 필수 여부 */
  required?: boolean;

  /** 읽기 전용 */
  readonly?: boolean;

  /** 비활성화 */
  disabled?: boolean;

  /** 값 */
  vaue?: string | number;

  /** 종류 */
  kind: 'default' | 'success' | 'error' | 'warning' | 'info';

  /** 사이즈 */
  size: 'xs' | 'sm' | 'md' | 'lg' | 'xl';

  /** 입력 이벤트 */
  // onClick?: (e: React.ChangeEvent<HTMLInputElement>) => void;

  /** 변경 이벤트 */
  // onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
