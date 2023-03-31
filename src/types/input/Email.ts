export interface Mail {
  userName: string;
  mailSetting: {
    from: string;
    to: string;
    subject: string;
    html: string;
  }
}