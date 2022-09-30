import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UsePipes,
} from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { TodoModel } from './todo-model';
import { TodoStatusEnum } from './todo-status-enum';
import { TodoDto } from './dto/todo.dto';
import { UpdateTodoDto } from "./dto/update-todo.dto";

@Controller('todo')
export class TodoController {
  private todos = [];

  @Get()
  getTodos() {
    return this.todos;
  }

  @Post()
  addTodo(@Body() todoDto: TodoDto) {
    const todo = new TodoModel();
    todo.name = todoDto.name;
    todo.description = todoDto.description;
    this.todos.push(todo);
    return todo;
  }

  @Get(':id')
  getTodo(@Param('id') id) {
    return this.todos.find((todo) => todo.id == id);
  }

  @Delete(':id')
  deleteTodo(@Param('id') id) {
    this.todos = this.todos.filter((todo) => todo.id != id);

    return 'Data deleted successfully';
  }

  @Put(':id')
  updateTodo(@Param('id') id, @Body() updateTodoDto: UpdateTodoDto) {
    const todo = this.todos.find((todo) => todo.id == id);

    if (updateTodoDto.name) {
      todo.name = updateTodoDto.name;
    }
    if (updateTodoDto.description) {
      todo.description = updateTodoDto.description;
    }
    if (updateTodoDto.status) {
      todo.status = updateTodoDto.status;
    }
    return todo;
  }
}
