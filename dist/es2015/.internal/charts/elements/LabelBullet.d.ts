/**
 * Bullet module
 */
/**
 * ============================================================================
 * IMPORTS
 * ============================================================================
 * @hidden
 */
import { Bullet, IBulletProperties, IBulletAdapters, IBulletEvents } from "./Bullet";
import { SpriteEventDispatcher, AMEvent } from "../../core/Sprite";
import { Label } from "../../core/elements/Label";
import { DataItem } from "../../core/DataItem";
/**
 * ============================================================================
 * REQUISITES
 * ============================================================================
 * @hidden
 */
/**
 * Defines properties for [[Bullet]]
 */
export interface ILabelBulletProperties extends IBulletProperties {
}
/**
 * Defines events for [[Bullet]]
 */
export interface ILabelBulletEvents extends IBulletEvents {
}
/**
 * Defines adapters
 * Includes both the [[Adapter]] definitions and properties
 * @see {@link Adapter}
 */
export interface ILabelBulletAdapters extends IBulletAdapters, ILabelBulletProperties {
}
/**
 * ============================================================================
 * MAIN CLASS
 * ============================================================================
 * @hidden
 */
/**
 * Creates a bullet with a textual label.
 *
 * Uses [[Label]] instance to draw the label, so the label itself is
 * configurable.
 *
 * @see {@link IBulletEvents} for a list of available events
 * @see {@link IBulletAdapters} for a list of available Adapters
 * @todo Usage example
 * @important
 */
export declare class LabelBullet extends Bullet {
    /**
     * Defines available properties.
     *
     * @ignore Exclude from docs
     * @type {ILabelBulletProperties}
     */
    _properties: ILabelBulletProperties;
    /**
     * Defines available adapters.
     *
     * @ignore Exclude from docs
     * @type {ILabelBulletAdapters}
     */
    _adapter: ILabelBulletAdapters;
    /**
     * Event dispatcher.
     *
     * @type {SpriteEventDispatcher<AMEvent<LabelBullet, ILabelBulletEvents>>} Event dispatcher instance
     */
    events: SpriteEventDispatcher<AMEvent<LabelBullet, ILabelBulletEvents>>;
    /**
     * A label (textual) element for the bullet.
     *
     * @type {Label}
     */
    label: Label;
    /**
     * Constructor
     */
    constructor();
    /**
     * Copies all proprities and related stuff from another instance of
     * [[LabelBullet]].
     *
     * @param {this}  source  Source element
     */
    copyFrom(source: this): void;
    /**
     * Sets currently used [[DataItem]].
     *
     * If the element has also `configField` set, it will also look for any
     * config in DataItem's data context to apply to this element.
     *
     * @param {DataItem} dataItem DataItem
     */
    protected setDataItem(dataItem: DataItem): void;
}