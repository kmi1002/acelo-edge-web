export interface TextareaPorps {
  /** 이름 */
  name: string;

  /** 값 */
  vaue?: string | number;

  /** 입력 이벤트 */
  onClick?: (e: React.ChangeEvent<HTMLInputElement>) => void;

  /** 변경 이벤트 */
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
