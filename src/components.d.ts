/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';


export namespace Components {
  interface IdliButton {
    /**
    * The first name
    */
    'first': string;
    /**
    * The last name
    */
    'last': string;
    /**
    * The middle name
    */
    'middle': string;
  }
}

declare global {


  interface HTMLIdliButtonElement extends Components.IdliButton, HTMLStencilElement {}
  var HTMLIdliButtonElement: {
    prototype: HTMLIdliButtonElement;
    new (): HTMLIdliButtonElement;
  };
  interface HTMLElementTagNameMap {
    'idli-button': HTMLIdliButtonElement;
  }
}

declare namespace LocalJSX {
  interface IdliButton {
    /**
    * The first name
    */
    'first'?: string;
    /**
    * The last name
    */
    'last'?: string;
    /**
    * The middle name
    */
    'middle'?: string;
  }

  interface IntrinsicElements {
    'idli-button': IdliButton;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'idli-button': LocalJSX.IdliButton & JSXBase.HTMLAttributes<HTMLIdliButtonElement>;
    }
  }
}


