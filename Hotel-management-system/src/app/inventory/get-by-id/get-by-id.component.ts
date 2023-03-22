import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InventoryService } from '../inventory.service';

@Component({
  selector: 'app-get-by-id',
  templateUrl: './get-by-id.component.html',
  styleUrls: ['./get-by-id.component.css']
})
export class GetByIdComponent implements OnInit {
    getInvById:any={    
      inventoryCode :0,       
      inventoryType:'',       
      inventoryName:'' ,   
      inventoryQuantity: '' ,          
          };  
          constructor(private service:InventoryService, private route: ActivatedRoute){}  
          getById(id:number){  
            this.service.getById(id).subscribe(
              (data)=>{  
                console.log(data);
                  this.getInvById=data; 
              
             })
          }
            
            ngOnInit() {  
            this.route.paramMap.subscribe((param)=>{      
              console.log(param);      
              var id=Number(param.get('id'));      
              this.getById(id);   
             } 
             )}
  }

