/**
 * @class SS-Dashboard.dashboardContainer.DashboardContainer
 * @extends Ext.panel.Panel
 * 
 * Classic view for the dashboard container
 */
Ext.define('SS-Dashboard.dashboardContainer.DashboardContainer', {
    extend: 'Ext.panel.Panel',

    xtype: 'SSDashboardContainer',

    layout: {
        type: 'card'
        //uncomment this if performance is an issue, it may imporve performance
        //deferredRender: true
    },

    items: [{
        xtype: 'button',
        text: 'hello'
    }]
});