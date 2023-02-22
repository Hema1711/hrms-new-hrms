import { Component } from '@angular/core';

@Component({
  selector: 'ngx-addproject',
  styleUrls: ['./addproject.component.scss'],
  templateUrl: './addproject.component.html',
})
export class AddProjectComponent {


  gotoalert(): void {
    alert('Added successfully');
  }

  Projects = [
    {
      project_name: 'DreamCover',
      description: 'dsfks dsfjksdkf sdfjksdklf asfkjhsdfjk',
      start_date: '15/2/2023',
      end_date: '15/2/2023',
      status: 'Completed',
    },
    {
      project_name: 'HRMS',
      description: 'dsfks dsfjksdkf sdfjksdklf asfkjhsdfjk',
      start_date: '15/2/2023',
      end_date: '15/2/2023',
      status: 'Pending',
    },
    {
      project_name: 'Incident Management',
      description: 'dsfks dsfjksdkf sdfjksdklf asfkjhsdfjk',
      start_date: '15/2/2023',
      end_date: '15/2/2023',
      status: ',',
    },
     {
      project_name: 'Reach24',
      description: 'dsfks dsfjksdkf sdfjksdklf asfkjhsdfjk',
      start_date: '15/2/2023',
      end_date: '15/2/2023',
      status: '-',
    },
  ]
}
