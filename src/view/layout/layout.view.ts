import { FooterView } from './footer.view';
import { HeaderView } from './header.view';

const header = new HeaderView();
const footer = new FooterView();

export default class LayoutView {
  private layoutTemplate = `
   ${header.template}
    {content}
    ${footer.template}
  `;

  wrap(template: string) {
    return this.layoutTemplate.replace('{content}', template);
  }
}
