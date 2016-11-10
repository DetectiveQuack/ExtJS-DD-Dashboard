/**
 * @class SK-Dashboard.dashboardContainer.DashboardContainerController
 * @extends SK-Dashboard.base.dashboardContainer.DashboardContainerController
 * 
 * Classic controller that extends the base and provides specific functionality for the classic
 * container
 */
Ext.define('SK-Dashboard.dashboardContainer.DashboardContainerController', {
    extend: 'SK-Dashboard.base.dashboardContainer.DashboardContainerController',
    alias: 'controller.classic-dashboardcontainer',

    /**
     * Listen to the global resize event and re position the carousel
     */
    afterRender: function() {
        var view = this.getView();

        //May not be needed if positioning is left to top left
        // Ext.on('resize', function() {
        //     var carousel = view.down('SSCarousel');

        //     if (carousel.rendered) {
        //         Ext.defer(() => {
        //             console.log('here');
        //             carousel.alignTo(view.getEl(), 'tl-tl?');
        //         }, 10);
        //     }
        // });
    }
});