const patternsAndMasks ={
  "cpf":{
    pattern:[ /[0-9]/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/,'-',/\d/, /\d/],
    msg:"O CPF fornecido é inválido",
    status:false
  },
  "cnpj":{
    pattern:[ /[0-9]/, /\d/,  '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/,'/', /\d/, /\d/, /\d/, /\d/,'-',/\d/, /\d/],
    msg:"O CNPJ fornecido é inválido",
    status:false
  },
  "date":{
    pattern:[/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/],
    msg:"A data fornecida é inválida",
    status:false
  },
  "phone":{
    pattern:['(', /\d/, /\d/,')',' ',/\d/,/\d/,/\d/,/\d/,/\d/,'-',/\d/,/\d/,/\d/,/\d/],
    msg:"O telefone fornecido é inválido",
    status:false
  },
  "cellphone":{
    pattern:['(', /\d/, /\d/,')',' ',/\d/,/\d/,/\d/,/\d/,/\d/,'-',/\d/,/\d/,/\d/,/\d/],
    msg:"O celular fornecido é inválido",
    status:false
  },
  "ddd":{
    pattern:['(', /\d/, /\d/,')'],
    msg:"O DDD fornecido é inválido",
    status:false
  },
  "cep":{
    pattern:[ /[0-9]/, /\d/,/\d/,/\d/,/\d/, '-', /\d/, /\d/, /\d/],
    msg:"O CEP fornecido é inválido",
    status:false
  },
  "text": {
    pattern: s => Array.from(s).map(() => /^[a-zA-Z\u00C0-\u00FF-\s-']*$/i),
    msg:"A mensagem fornecida é inválida",
    status:false
  },
  "number":{
    pattern: s => Array.from(s).map(() => /[0-9-\s]/i),
    msg:"O numero fornecido é inválido",
    status:false
  },
  "textOnly":{
    pattern: s => Array.from(s).map(() => /^[a-zA-Z\u00C0-\u00FF-']*$/i),
    msg:"A mensagem fornecida é inválida",
    status:false
  },
  "numberOnly":{
    pattern: s => Array.from(s).map(() => /[0-9]/i),
    msg:"O numero fornecido é inválido",
    status:false
  },
  "cnae":{
    pattern:[/[0-9]/, /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-',/\d/, /\d/],
    msg:"O CNAE fornecido é inválido",
    status:false
  },
  "uf":{
    pattern:[/[A-Za-z]/, /[A-Za-z]/],
    msg:"A UF fornecida é inválida",
    status:false
  },
  "bank":{
    pattern:[/[A-Z0-9]/, /[0-9]/, /[0-9]/, /[a-z0-9]/],
    msg:"O banco fornecido é inválido",
    status:false
  },
  "agency":{
    pattern:[/[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/],
    msg:"A agência informada é inválida",
    status:false
  },
  "currentAccount":{
    pattern:[/[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/],
    msg:"A conta corrente informada é inválida",
    status:false
  }
}

export default patternsAndMasks; 

