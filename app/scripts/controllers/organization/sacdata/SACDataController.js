(function (module) {
	gst.controllers = _.extend(module, {
		SACDataController: function (scope, resourceFactory, location) {
            /*scope.employees = [];
            scope.routeTo = function (id) {
                location.path('/viewemployee/' + id);
            };

            if (!scope.searchCriteria.employees) {
                scope.searchCriteria.employees = null;
                scope.saveSC();
            }
            scope.filterText = scope.searchCriteria.employees;

            scope.onFilter = function () {
                scope.searchCriteria.employees = scope.filterText;
                scope.saveSC();
            };

            resourceFactory.employeeResource.getAllEmployees(function (data) {
                scope.employees = data;
            });*/
        }
    });
	gst.ng.application.controller('SACDataController', ['$scope', 'ResourceFactory', '$location', gst.controllers.SACDataController]).run(function ($log) {
        $log.info("SACDataController initialized");
    });
}(gst.controllers || {}));