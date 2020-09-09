export interface TableRowPorps {
  /** 데이털 데이터 */
  rows: any[];

  /** 입력 이벤트 */
  onClick?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
