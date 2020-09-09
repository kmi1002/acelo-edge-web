export interface StatusTextPorps {
  status?: 'default' | 'success' | 'error' | 'warning' | 'info';

  statusText?: string;

  statusSize: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}
