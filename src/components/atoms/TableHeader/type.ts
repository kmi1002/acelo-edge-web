export interface TableHeaderPorps {
  /** 헤더 */
  headers: any[];

  /** 입력 이벤트 */
  onClick?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
