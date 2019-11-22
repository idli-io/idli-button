import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'idli-button',
  styleUrl: 'idli-button.scss',
  shadow: true
})
export class IdliButton {
  /**
   * Button size sm|md|lg
   */
  @Prop() size: string = 'md';


  render() {
    return <div class={"idli-button-component size-" + this.size}><slot/></div>;
  }
}
