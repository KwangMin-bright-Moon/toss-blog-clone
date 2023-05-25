import { ViewData, ViewSection } from '../types';
import LayoutView from './layout.view';

export default abstract class View {
  protected container: HTMLElement;
  protected section: ViewSection;
  protected layout: LayoutView;
  protected template: string;

  constructor(viewData: ViewData) {
    const { containerId, section, template } = viewData;
    const container = document.getElementById(containerId);
    if (!container) {
      throw new Error(`${containerId}에 해당하는 root container가 없습니다.`);
    }
    this.container = container;
    this.section = section;
    this.template = template;
    this.layout = new LayoutView();
  }

  abstract render(): Promise<void>;
}
