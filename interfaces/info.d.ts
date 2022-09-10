export interface InfoModalType {
  month?: number;
  isOpen?: boolean;
  onClose?: (e: React.MouseEvent<HTMLElement>) => void;
}

export interface PrescriptionType {
  id: number;
  administerInterval: number;
  dailyCount: number;
  totalDayCount;
}
