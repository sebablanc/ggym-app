import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pass-verifier',
  templateUrl: './pass-verifier.component.html',
  styleUrls: ['./pass-verifier.component.scss'],
})
export class PassVerifierComponent  implements OnInit {
  @Input() value: string = '';
  @Input() valueVerifier: string = '';

  verifications = [
    {label: 'passVerifier.atLeast.8characters', minLength: 8, type: ''},
    {label: 'passVerifier.atLeast.4letters', minLength: 4, type: 'letters'},
    {label: 'passVerifier.atLeast.2numbers', minLength: 2, type: 'numbers'},
    {label: 'passVerifier.atLeast.1SpecialCharacter', minLength: 1, type: 'symbols'},
    {label: 'passVerifier.repeatPassword', minLength: 0, type: 'same'},
  ]

  constructor() { }

  ngOnInit() {}

}
