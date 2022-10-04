import * as React from 'react';
import styles from './WebPart2019.module.scss';
import { IWebPart2019Props } from './IWebPart2019Props';
import { escape } from '@microsoft/sp-lodash-subset';

//import { sp } from "sp-pnp-js";
//import "@pnp/sp/webs";
// import "@pnp/sp/lists";
// import "@pnp/sp/items";
// import "@pnp/sp/items/get-all";

const WebPart2019 = (props: IWebPart2019Props) => {

  const { context } = props;
  
  const state = {
    Title: 'Test Title',
    Letter: 'P',
  };

   const listTitle: string = context.pageContext.web.title;
  // const pageItemId: number = props.context.pageContext.listItem.id;

  // public getItems = async () => {

  //   const items = await sp.web.lists.getByTitle('Demo').items.getAll();

  // }

  
    return (
      <div className={styles.webPart2019} >
        <h1>Hello sharpoint 2019</h1>
        <h3>
          {state.Title}  {state.Letter}
        </h3>
        <h4>
          {listTitle}
        </h4>
      </div >
    );
  }
export default WebPart2019;