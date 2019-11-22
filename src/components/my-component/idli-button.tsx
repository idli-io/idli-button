import { Component, Prop, h } from '@stencil/core';
import { format } from '../../utils/utils';

@Component({
  tag: 'idli-button',
  styleUrl: 'idli-button.css',
  shadow: true
})
export class IdliButton {
  /**
   * The first name
   */
  @Prop() first: string;

  /**
   * The middle name
   */
  @Prop() middle: string;

  /**
   * The last name
   */
  @Prop() last: string;


  render() {
    return <div class="idli-button-component"><slot/></div>;
  }
}
