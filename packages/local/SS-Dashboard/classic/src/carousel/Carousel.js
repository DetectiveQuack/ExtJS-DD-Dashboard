/**
 * @class SS-Dashboard.carousel.Carousel
 * @extends Ext.panel.Panel
 * 
 * Classic carousel for the dashboard container, the carousel will hold the widgets for the dashboard
 */
Ext.define('SS-Dashboard.carousel.Carousel', {
    extend: 'Ext.panel.Panel',

    xtype: 'SSCarousel',

    height: '100%',

    width: 250,

    bodyStyle: 'background:black;'
});