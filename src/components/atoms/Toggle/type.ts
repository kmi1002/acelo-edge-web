export interface TogglePorps {
  /** 이름 */
  name: string;

  /** 값 */
  value?: string | number;

  /** 변경 이벤트 */
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
