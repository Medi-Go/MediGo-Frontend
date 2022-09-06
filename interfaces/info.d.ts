export interface InfoModalType {
  month?: number;
  postImageUrl?: string;
  modalType: string;
  isOpen?: boolean;
  onClose?: (e: React.MouseEvent<HTMLElement>) => void;
}
