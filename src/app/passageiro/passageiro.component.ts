import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-passageiro',
  templateUrl: './passageiro.component.html',
  styleUrls: ['./passageiro.component.css']
})
export class PassageiroComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  chamapass() {
    this.router.navigate(['/passageiro'])
}
}
