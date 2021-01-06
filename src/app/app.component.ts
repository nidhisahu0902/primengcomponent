import { Component } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import {Message,MessageService} from 'primeng/api';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [MessageService]
    
})
export class AppComponent {


/*88888888888 show messages ***************************************/
  msgs2: Message[];
  title = 'exampl2ongprime';

  data: any;
  constructor(private primengConfig: PrimeNGConfig,private messageService: MessageService) {

    /*******************chart*********** */
    this.data = {
      labels: ['A','B','C'],
      datasets: [
          {
              data: [300, 50, 100],
              backgroundColor: [
                  "#FF6384",
                  "#36A2EB",
                  "#FFCE56"
              ],
              hoverBackgroundColor: [
                  "#FF6384",
                  "#36A2EB",
                  "#FFCE56"
              ]
          }]    
      };
}
  

  showSuccess() {
    this.messageService.add({severity:'success', summary: 'Success', detail: 'Message Content'});
}


ngOnInit() {
      
        this.primengConfig.ripple = true;
    }

    addMessages() {
      this.msgs2 = [
          {severity:'success', summary:'Success', detail:'Message Content1'},
          {severity:'info', summary:'Info', detail:'Message Content1'},
          {severity:'warn', summary:'Warning', detail:'Message Content1'},
          {severity:'error', summary:'Error', detail:'Message Content1'}
      ];
  }

  clearMessages() {
      this.msgs2 = [];
  }

}


