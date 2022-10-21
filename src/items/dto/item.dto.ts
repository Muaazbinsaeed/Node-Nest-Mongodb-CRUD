export class ItemDto {
  readonly name: string;
  readonly detail: string;
  readonly quantity: number;
  readonly price: number;
}

export class UpdateDto {
  readonly name?: string;
  readonly detail?: string;
  readonly quantity?: number;
  readonly price?: number;
}
