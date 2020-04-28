import { addParameters } from '@storybook/angular';
import { setCompodocJson } from '@storybook/addon-docs/angular';
import docJson from '../documentation.json';

setCompodocJson(docJson);
addParameters({ docs: { iframeHeight: 400 } });