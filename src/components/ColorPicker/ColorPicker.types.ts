export interface ColorPickerProps {
  color: string;
  onClose?: (e: any) => void;
  onAccept?: (e: any) => void;
  baseColors?: string[];
  show: boolean;
}
