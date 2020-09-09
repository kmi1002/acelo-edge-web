export interface CheckPorps {
  /** 이름 */
  name: string;

  /** 제목 */
  label: string;

  /** 값 */
  value: number;

  type: 'radio' | 'checkbox';

  /** 입력 이벤트 */
  onClick?: (e: React.ChangeEvent<HTMLInputElement>) => void;

  /** 변경 이벤트 */
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
