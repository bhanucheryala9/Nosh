export enum NotificationStatus {
    SUCCESS = "success",
    ERROR = "error",
    WARNING = "warning",
    DEFAULT ="default"
  
}
export interface NotificationProps {
    status?: NotificationStatus;
    alertMessage?: string;
    showAlert?: boolean;
  }