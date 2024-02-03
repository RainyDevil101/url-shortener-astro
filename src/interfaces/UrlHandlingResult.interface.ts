export interface BaseForm {
  url: string;
}

export interface UrlHandlingResultBase<T extends BaseForm> {
  isUrlValid: boolean;
  shortingUrl: boolean;
  form: T;
  handleInputChange: (e: Event) => void;
  handleSubmit: (e: Event) => Promise<void>;
}

export interface UrlHandlingResult extends UrlHandlingResultBase<BaseForm> {
  shortUrl: string;
}

export interface UrlHandlingResultClicks extends UrlHandlingResultBase<BaseForm> {
  clicks: string;
}



export interface Response {
  shortUrl: string | boolean;
}