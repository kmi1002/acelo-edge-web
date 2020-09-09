export interface InputFramePorps {
  /** 제목 */
  title?: string;

  /** 인라인 모드 (한줄) */
  inline?: boolean;

  /** 순서 변경 */
  reverse?: boolean;

  /** 화면 가득 채우기 */
  full?: boolean;

  titleSize: 'xs' | 'sm' | 'md' | 'lg' | 'xl';

  status?: 'default' | 'success' | 'error' | 'warning' | 'info';

  statusText?: string;

  statusSize: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}
