export interface Rules {
    required?: string
}

export interface Option {
    label?: string
    value: string | number
}

export enum DocumentType {
    CC = 'Cédula ciudadania',
    CE = 'Cédula extranjería',
  }