import { ViewSection } from '../types';
import LayoutView from './layout.view';

export default abstract class View {
  protected container: HTMLElement;
  protected section: ViewSection;
  protected layout: LayoutView;

  constructor(section: ViewSection, containerId: string) {
    const container = document.getElementById(containerId);
    if (!container) {
      throw new Error(`${containerId}에 해당하는 root container가 없습니다.`);
    }
    this.container = container;
    this.section = section;
    this.layout = new LayoutView();
  }

  abstract render(): Promise<void>;
}
