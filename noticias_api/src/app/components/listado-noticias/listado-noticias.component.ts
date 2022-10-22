import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-listado-noticias',
  templateUrl: './listado-noticias.component.html',
  styleUrls: ['./listado-noticias.component.scss']
})
export class ListadoNoticiasComponent implements OnInit {

  @Input() listNoticias : any;
  constructor() { }

  ngOnInit(): void {
  }

}
