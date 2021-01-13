import { Component } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import {Message,MessageService} from 'primeng/api';
import { PhotoserviceService } from './photoservice.service';
import {MegaMenuItem,MenuItem} from 'primeng/api';
import { CounrtyserviceService } from './counrtyservice.service';


interface City {
    name: string,
    code: string
}

interface Country {
    name: string,
    code: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [MessageService]
    
})
export class AppComponent {

    /***************accordian */
    activeState: boolean[] = [true, false, false];

    /************list box */
    
    cities1: City[];

    countries1: Country[];

    selectedCity1: City;

    selectedCountries1: Country[];

    /*************number */
    value1: number = 42723;

    value2: number = 58151;

    value3: number = 2351.35;

    value4: number = 50;

    value5: number = 151351;

    value6: number = 115744;

    value7: number = 635524;

    value8: number = 732762;

    value9: number = 1500;

    value10: number = 2500;

    value11: number = 4250;

    value12: number = 5002;

    value13: number = 20;

    value14: number = 50;

    value15: number = 10;

    value16: number = 20;

    value17: number = 20;

    value18: number = 10.50;

    value19: number = 25;

    value20: number = 50;
    /****************input text */
    disabled: boolean = true;

    value21: string;

    value22: string;

    value23: string;

    value24: string;

    value25: string = 'Disabled';

    /*******************colorpicker */
    color1: string;
    
    color2: string = '#1976D2';

    /****************calender */
    date1: Date;

    date2: Date;

    date3: Date;

    date4: Date;

    date5: Date;

    date6: Date;

    date7: Date;

    date8: Date;

    date9: Date;

    date10: Date;

    date11: Date;

    date12: Date;

    date13: Date;

    date14: Date;
    
    dates: Date[];

    rangeDates: Date[];

    minDate: Date;

    maxDate: Date;

    es: any;

    invalidDates: Array<Date>

  
  items: MenuItem[];
  itemsmega: MegaMenuItem[];
  itemsformenu: MenuItem[];
    
  home: MenuItem;  
  images: any[];
  responsiveOptions:any[] = [
    {
        breakpoint: '1024px',
        numVisible: 5
    },
    {
        breakpoint: '768px',
        numVisible: 3
    },
    {
        breakpoint: '560px',
        numVisible: 1
    }
];
  visibleSidebar1;

  visibleSidebar2;

  visibleSidebar3;

  visibleSidebar4;

  visibleSidebar5;

  /******************country apis */
  selectedCountry: any;
        
  countries: any[];
      
  filteredCountries: any[];

  selectedCountries: any[];

  selectedCountryAdvanced: any[];

  filteredBrands: any[];
/*88888888888 show messages ***************************************/
  msgs2: Message[];
  title = 'exampl2ongprime';

  data: any;
  value: number = 0;
  constructor(private primengConfig: PrimeNGConfig,private messageService: MessageService,public photoservice:PhotoserviceService,private countryservice :CounrtyserviceService) {
    this.cities1 = [
        {name: 'New York', code: 'NY'},
        {name: 'Rome', code: 'RM'},
        {name: 'London', code: 'LDN'},
        {name: 'Istanbul', code: 'IST'},
        {name: 'Paris', code: 'PRS'}
    ];

    this.countries = [
        {name: 'Australia', code: 'AU'},
        {name: 'Brazil', code: 'BR'},
        {name: 'China', code: 'CN'},
        {name: 'Egypt', code: 'EG'},
        {name: 'France', code: 'FR'},
        {name: 'Germany', code: 'DE'},
        {name: 'India', code: 'IN'},
        {name: 'Japan', code: 'JP'},
        {name: 'Spain', code: 'ES'},
        {name: 'United States', code: 'US'}
    ];
    /*************************country apis */
    this.countryservice.getCountries().then(countries => {
        this.countries = countries;
    });
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
  
 onTabClose(event) {
        this.messageService.add({severity:'info', summary:'Tab Closed', detail: 'Index: ' + event.index})
    }
    
    onTabOpen(event) {
        this.messageService.add({severity:'info', summary:'Tab Expanded', detail: 'Index: ' + event.index});
    }

    toggle(index: number) {
        this.activeState[index] = !this.activeState[index];
    }
  showSuccess() {
    this.messageService.add({severity:'success', summary: 'Success', detail: 'Message Content'});
}


ngOnInit() {

    /********************split button */
    this.items = [
        {label: 'Update', icon: 'pi pi-refresh', command: () => {
            this.update();
        }},
        {label: 'Delete', icon: 'pi pi-times', command: () => {
            this.delete();
        }},
        {label: 'Angular.io', icon: 'pi pi-info', url: 'http://angular.io'},
        {separator:true},
        {label: 'Setup', icon: 'pi pi-cog', routerLink: ['/setup']}
    ];

   /****************claender */
   this.es = {
    firstDayOfWeek: 1,
    dayNames: [ "domingo","lunes","martes","miércoles","jueves","viernes","sábado" ],
    dayNamesShort: [ "dom","lun","mar","mié","jue","vie","sáb" ],
    dayNamesMin: [ "D","L","M","X","J","V","S" ],
    monthNames: [ "enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre" ],
    monthNamesShort: [ "ene","feb","mar","abr","may","jun","jul","ago","sep","oct","nov","dic" ],
    today: 'Hoy',
    clear: 'Borrar'
}

let today = new Date();
let month = today.getMonth();
let year = today.getFullYear();
let prevMonth = (month === 0) ? 11 : month -1;
let prevYear = (prevMonth === 11) ? year - 1 : year;
let nextMonth = (month === 11) ? 0 : month + 1;
let nextYear = (nextMonth === 0) ? year + 1 : year;
this.minDate = new Date();
this.minDate.setMonth(prevMonth);
this.minDate.setFullYear(prevYear);
this.maxDate = new Date();
this.maxDate.setMonth(nextMonth);
this.maxDate.setFullYear(nextYear);

let invalidDate = new Date();
invalidDate.setDate(today.getDate() - 1);
this.invalidDates = [today,invalidDate];

    

  this.itemsformenu = [
    {
        label:'File',
        icon:'pi pi-fw pi-file',
        items:[
            {
                label:'New',
                icon:'pi pi-fw pi-plus',
                items:[
                {
                    label:'Bookmark',
                    icon:'pi pi-fw pi-bookmark'
                },
                {
                    label:'Video',
                    icon:'pi pi-fw pi-video'
                },

                ]
            },
            {
                label:'Delete',
                icon:'pi pi-fw pi-trash'
            },
            {
                separator:true
            },
            {
                label:'Export',
                icon:'pi pi-fw pi-external-link'
            }
        ]
    },
    {
        label:'Edit',
        icon:'pi pi-fw pi-pencil',
        items:[
            {
                label:'Left',
                icon:'pi pi-fw pi-align-left'
            },
            {
                label:'Right',
                icon:'pi pi-fw pi-align-right'
            },
            {
                label:'Center',
                icon:'pi pi-fw pi-align-center'
            },
            {
                label:'Justify',
                icon:'pi pi-fw pi-align-justify'
            },

        ]
    },
    {
        label:'Users',
        icon:'pi pi-fw pi-user',
        items:[
            {
                label:'New',
                icon:'pi pi-fw pi-user-plus',

            },
            {
                label:'Delete',
                icon:'pi pi-fw pi-user-minus',

            },
            {
                label:'Search',
                icon:'pi pi-fw pi-users',
                items:[
                {
                    label:'Filter',
                    icon:'pi pi-fw pi-filter',
                    items:[
                        {
                            label:'Print',
                            icon:'pi pi-fw pi-print'
                        }
                    ]
                },
                {
                    icon:'pi pi-fw pi-bars',
                    label:'List'
                }
                ]
            }
        ]
    },
    {
        label:'Events',
        icon:'pi pi-fw pi-calendar',
        items:[
            {
                label:'Edit',
                icon:'pi pi-fw pi-pencil',
                items:[
                {
                    label:'Save',
                    icon:'pi pi-fw pi-calendar-plus'
                },
                {
                    label:'Delete',
                    icon:'pi pi-fw pi-calendar-minus'
                },

                ]
            },
            {
                label:'Archieve',
                icon:'pi pi-fw pi-calendar-times',
                items:[
                {
                    label:'Remove',
                    icon:'pi pi-fw pi-calendar-minus'
                }
                ]
            }
        ]
    },
    {
        label:'Quit',
        icon:'pi pi-fw pi-power-off'
    }
];
  this.itemsmega = [
    {
        label: 'Videos', icon: 'pi pi-fw pi-video',
        items: [
            [
                {
                    label: 'Video 1',
                    items: [{label: 'Video 1.1'}, {label: 'Video 1.2'}]
                },
                {
                    label: 'Video 2',
                    items: [{label: 'Video 2.1'}, {label: 'Video 2.2'}]
                }
            ],
            [
                {
                    label: 'Video 3',
                    items: [{label: 'Video 3.1'}, {label: 'Video 3.2'}]
                },
                {
                    label: 'Video 4',
                    items: [{label: 'Video 4.1'}, {label: 'Video 4.2'}]
                }
            ]
        ]
    },
    {
        label: 'Users', icon: 'pi pi-fw pi-users',
        items: [
            [
                {
                    label: 'User 1',
                    items: [{label: 'User 1.1'}, {label: 'User 1.2'}]
                },
                {
                    label: 'User 2',
                    items: [{label: 'User 2.1'}, {label: 'User 2.2'}]
                },
            ],
            [
                {
                    label: 'User 3',
                    items: [{label: 'User 3.1'}, {label: 'User 3.2'}]
                },
                {
                    label: 'User 4',
                    items: [{label: 'User 4.1'}, {label: 'User 4.2'}]
                }
            ],
            [
                {
                    label: 'User 5',
                    items: [{label: 'User 5.1'}, {label: 'User 5.2'}]
                },
                {
                    label: 'User 6',
                    items: [{label: 'User 6.1'}, {label: 'User 6.2'}]
                }
            ]
        ]
    },
    {
        label: 'Events', icon: 'pi pi-fw pi-calendar',
        items: [
            [
                {
                    label: 'Event 1',
                    items: [{label: 'Event 1.1'}, {label: 'Event 1.2'}]
                },
                {
                    label: 'Event 2',
                    items: [{label: 'Event 2.1'}, {label: 'Event 2.2'}]
                }
            ],
            [
                {
                    label: 'Event 3',
                    items: [{label: 'Event 3.1'}, {label: 'Event 3.2'}]
                },
                {
                    label: 'Event 4',
                    items: [{label: 'Event 4.1'}, {label: 'Event 4.2'}]
                }
            ]
        ]
    },
    {
        label: 'Settings', icon: 'pi pi-fw pi-cog',
        items: [
            [
                {
                    label: 'Setting 1',
                    items: [{label: 'Setting 1.1'}, {label: 'Setting 1.2'}]
                },
                {
                    label: 'Setting 2',
                    items: [{label: 'Setting 2.1'}, {label: 'Setting 2.2'}]
                },
                {
                    label: 'Setting 3',
                    items: [{label: 'Setting 3.1'}, {label: 'Setting 3.2'}]
                }
            ],
            [
                {
                    label: 'Technology 4',
                    items: [{label: 'Setting 4.1'}, {label: 'Setting 4.2'}]
                }
            ]
        ]
    }
]

  this.items = [
    {label: 'Computer'},
    {label: 'Notebook'},
    {label: 'Accessories'},
    {label: 'Backpacks'},
    {label: 'Item'}
];
this.home = {icon: 'pi pi-home'};

  // this.photoservice.getImages().then(images => this.images = images);
      
        this.primengConfig.ripple = true;
        let interval = setInterval(() => {
          this.value = this.value + Math.floor(Math.random() * 10) + 1;
          if (this.value >= 100) {
              this.value = 100;
              this.messageService.add({severity: 'info', summary: 'Success', detail: 'Process Completed'});
              clearInterval(interval);
          }
      }, 2000);
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
   /**********************country code apis for country code services */ 
  filterCountry(event) {
    //in a real application, make a request to a remote url with the query and return filtered results, for demo we filter at client side
    let filtered : any[] = [];
    let query = event.query;
    for(let i = 0; i < this.countries.length; i++) {
        let country = this.countries[i];
        if (country.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
            filtered.push(country);
        }
    }
    
    this.filteredCountries = filtered;
}

/**********************split button */
save(severity: string) {
    this.messageService.add({severity: severity, summary:'Success', detail:'Data Saved'});
}

update() {
    this.messageService.add({severity:'success', summary:'Success', detail:'Data Updated'});
}

delete() {
    this.messageService.add({severity:'success', summary:'Success', detail:'Data Deleted'});
}

}


