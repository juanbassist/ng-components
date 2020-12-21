export class Product {
    constructor(
      public id: number,
      public imagenes?: Imagen[]
    ) {}
  }
export class Imagen {
    constructor(
      public url?: string
    ) {}
  }