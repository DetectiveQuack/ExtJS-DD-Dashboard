/**
 * @class SS-Dashboard.dashboardContainer.DashboardContainer
 * @extends Ext.panel.Panel
 * 
 * Classic view for the dashboard container
 */
Ext.define('SS-Dashboard.dashboardContainer.DashboardContainer', {
    extend: 'Ext.panel.Panel',

    requires: [
        'SK-Dashboard.dashboardContainer.DashboardContainerController'
    ],

    controller: 'classic-dashboardcontainer',

    xtype: 'SSDashboardContainer',

    layout: {
        type: 'card'
            //uncomment this if performance is an issue, it may imporve performance
            //deferredRender: true
    },

    items: [{
        xtype: 'SSCarousel',
        floating: true,
        autoShow: true,
        defaultAlign: 'tl-tl?'
    }]
});