import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ItemDto, UpdateDto } from './dto/item.dto';
import { Item } from './interfaces/items.interface';
import { ItemsService } from './items.service';

@Controller('items')
export class ItemsController {
  // Constructor
  constructor(private readonly itemsService: ItemsService) {}

  // GET/Read all the items
  @Get()
  readAll(): Promise<Item[]> {
    return this.itemsService.readAll();
  }

  // GET/Read a single item
  @Get(':id')
  readOne(@Param() params): Promise<Item> {
    return this.itemsService.readOne(params.id);
  }

  // POST/Create a single item
  @Post()
  create(@Body() dto: ItemDto): Promise<Item> {
    return this.itemsService.create(dto);
  }

  // PUT/Update a single item
  @Put(':id')
  update(@Body() dto: UpdateDto, @Param() params): Promise<Item> {
    return this.itemsService.update(params.id, dto);
  }

  // DELETE/Delete a single item
  @Delete(':id')
  delete(@Param() params): Promise<Item> {
    return this.itemsService.delete(params.id);
  }
}
