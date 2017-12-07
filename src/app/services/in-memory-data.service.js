var InMemoryDataService = /** @class */ (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var projects = [{
                id: 1,
                title: "Reporting App",
                description: "Minimum Viable Product of Reporting App",
                color: "three"
            }, {
                id: 2,
                title: "Reporting Dashboard",
                description: "Reporting generated from reporting app",
                color: "four"
            }];
        return { projects: projects };
    };
    return InMemoryDataService;
}());
export { InMemoryDataService };
//# sourceMappingURL=in-memory-data.service.js.map