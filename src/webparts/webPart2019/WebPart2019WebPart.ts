import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';

import * as strings from 'WebPart2019WebPartStrings';
import WebPart2019 from './components/WebPart2019';
import { IWebPart2019Props } from './components/IWebPart2019Props';

export interface IWebPart2019WebPartProps {
  description: string;
  Title: string;
  Letter: string;
}

export default class WebPart2019WebPart extends BaseClientSideWebPart<IWebPart2019WebPartProps> {

  public render(): void {
    const element: React.ReactElement<IWebPart2019Props > = React.createElement(
      WebPart2019,
      {
        description: this.properties.description,
        Title: this.properties.Title,
        Letter: this.properties.Letter,
        context: this.context,
        siteTitle: this.context.pageContext.web.title
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
