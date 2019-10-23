import { Component } from '@angular/core';
  import { isCNPJ,isCPF, isDate,isCEP,isDDD,isPhone, formatToCNPJ } from 'brazilian-values';
  import * as mask from "./masks";
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})

export class AppComponent  {
  public validation = mask.default;
  ngOnInit(){}

  cpfValidation(valor){
    if (!isCPF(valor)){
      this.validation.cpf.status = true;
    }else{
      this.validation.cpf.status = false;
    }
  }

  cnpjValidation(valor){
    if (!isCNPJ(valor)){
      this.validation.cnpj.status = true;
    }else{
      this.validation.cnpj.status = false;
    }
  }

  dateValidation(valor){
    console.log(valor)
    if (!isDate(valor)){
      this.validation.date.status = true;
    }else{
      this.validation.date.status = false;
    }
  }

  cepValidation(valor){
    if (!isCEP(valor)){
      this.validation.cep.status = true;
    }else{
      this.validation.cep.status = false;
    }
  }


  dddValidation(valor){
    if (!isDDD(valor)){
      this.validation.ddd.status = true;
    }else{
      this.validation.ddd.status = false;
    }
  }

  phoneValidation(valor){
    if (!isPhone(valor)){
      this.validation.phone.status = true;
    }else{
      this.validation.phone.status = false;
    }
  }

  cellphoneValidation(valor){
    if (!isPhone(valor)){
      this.validation.cellphone.status = true;
    }else{
      this.validation.cellphone.status = false;
    }
  }

  cnaeValidation(valor){
    const regex = new RegExp("[0-9][0-9][0-9][0-9][0-9]-[0-9]-[0-9][0-9]")
    
    if (!regex.test(valor)){
      this.validation.cnae.status = true;
    }else{
      this.validation.cnae.status = false;
    }
  }

  ufValidation(valor){
    const states = "AC|AL|AM|AP|BA|CE|DF|ES|GO|MA|MG|MS|MT|PA|PB|PE|PI|PR|RJ|RN|RO|RR|RS|SC|SE|SP|TO"
    const regex = new RegExp(states)
    
    if(!regex.test(valor.toUpperCase())) {
      this.validation.uf.status = true
    }
    else {
      this.validation.uf.status = false;
    }
  }

  bankValidation(valor){
    valor = valor.replace("_", "");

    const regex = new RegExp(/^[0-9][0-9][0-9]$|^[0-9][0-9][0-9][0-9]$|^[A-Z0-9][0-9][0-9]$|^[0-9][0-9][0-9][a-z0-9]$/)
    
    if(!regex.test(valor)) {
      this.validation.bank.status = true
    }
    else {
      this.validation.bank.status = false;
    }
  }

  agencyValidation(valor){
    if(valor)
      valor = valor.replace(/_/g, '')
      
    const regex = new RegExp(/^[0-9][0-9][0-9][0-9]|^[0-9][0-9][0-9][0-9][0-9]|^[0-9][0-9][0-9][0-9][0-9][0-9]/)
    
    if(!regex.test(valor)) {
      this.validation.agency.status = true
    }
    else {
      this.validation.agency.status = false;
    }
  }

  currentAccountValidation(valor){
    if(valor)
      valor = valor.replace(/_/g, '')
      
    const regex = new RegExp(/^[0-9]{6}$|^[0-9]{7}$|^[0-9]{8}$|^[0-9]{9}$|^[0-9]{10}$/)
    
    if(!regex.test(valor)) {
      this.validation.currentAccount.status = true
    }
    else {
      this.validation.currentAccount.status = false;
    }
  }
   
}
