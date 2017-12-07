import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const projects =  [{
    id: 1,
    title: "Reporting App",
    description:"Minimum Viable Product of Reporting App",
    color:"three"
  },{
    id: 2,
    title: "Reporting Dashboard",
    description:"Reporting generated from reporting app",
    color:"four"
  }];
    return {projects};
  }
}
