import {Component, Prop, h} from '@stencil/core';

@Component({
    tag: 'idli-button',
    styleUrl: 'idli-button.scss',
    shadow: true
})
export class IdliButton {
    /**
     * The button size.
     * Possible values are: `"sm"`, `"md"`, `"lg"`. Defaults to `"md"`.
     */
    @Prop() size: 'sm' | 'md' | 'lg' = 'md';

    /**
     * Button variants
     * Possible values are `"default"`, `"primary"`, `"dashed"`, `"danger"`, `"link"`. Defaults to `"default"`.
     */
    @Prop() variant: 'default' | 'primary' | 'dashed' | 'danger' | 'link' = 'default';

    /**
     * If true, fits button width to its parent width. Defaults to `false`.
     */
    @Prop() block: boolean = false;

    /**
     * If true, the user cannot interact with the button. Defaults to `false`.
     */
    @Prop() disabled: boolean = false;

    getSizeClass() {
        let size = "size-";
        if (!this.size)
            size = size + 'md';
        else
            size = size + this.size;
        return size;
    }

    getVariantClass() {
        let variant = "variant-";
        if (!this.variant)
            variant = variant + 'default';
        else
            variant = variant + this.variant;
        return variant;
    }

    getBlockClass() {
        if (this.block)
            return 'block';
    }

    render() {
        return <button
            class={"idli-button-component " + this.getSizeClass() + " " + this.getVariantClass() + " " + this.getBlockClass()}
            disabled={this.disabled}>
            <slot/>
        </button>;
    }
}
