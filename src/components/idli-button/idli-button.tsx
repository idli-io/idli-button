import {Component, Prop, h} from '@stencil/core';

@Component({
    tag: 'idli-button',
    styleUrl: 'idli-button.scss',
    shadow: true
})
export class IdliButton {
    /**
     * Button size sm|md|lg
     */
    @Prop() size: string;

    /**
     * Button variant default|primary|dashed|danger|link
     */
    @Prop() variant: string;

    getSizeClass() {
        let size = "size-";
        if (this.size === 'md' || this.size === 'lg' || this.size === 'sm')
            size = size + this.size;
        else
            size = size + 'md';
        return size;
    }

    getVariantClass() {
        let variant = "variant-";
        if (this.variant === 'primary' || this.variant === 'default' || this.variant === 'danger')
            variant = variant + this.variant;
        else
            variant = variant + 'default';
        return variant;
    }

    render() {


        return <div class={"idli-button-component " + this.getSizeClass() + " " + this.getVariantClass()}>
            <slot/>
        </div>;
    }
}
