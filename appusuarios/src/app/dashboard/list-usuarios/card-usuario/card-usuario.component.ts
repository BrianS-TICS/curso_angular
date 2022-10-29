import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-usuario',
  templateUrl: './card-usuario.component.html',
  styleUrls: ['./card-usuario.component.scss']
})
export class CardUsuarioComponent implements OnInit {
  @Input() user : any;
  imgUrl : string = 'https://www.fillmurray.com/300/200';
  firstName : string = '';
  email : string = '';

  ngOnInit(): void {
    this.firstName = this.user.name;
    this.email = this.user.email;
  }

}
