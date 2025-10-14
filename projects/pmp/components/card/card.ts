import { LowerCasePipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  input,
  output,
} from '@angular/core';
import { BoardService } from 'projects/pmp/shared/data-access/board-service';
import { Card as CardI } from 'projects/pmp/shared/interfaces/card';

@Component({
  selector: 'pmp-card',
  templateUrl: './card.html',
  styleUrls: ['./card.scss'],
  standalone: true,
  imports: [LowerCasePipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Card {
  readonly card = input<CardI>();

  readonly enounce = output<string>();

  boardService = inject(BoardService);
}
