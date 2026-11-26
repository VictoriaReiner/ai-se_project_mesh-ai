import type { Request, Response } from 'express';

export const getChats = (req: Request, res: Response): void => {
  res.status(200).json({
    success: true,
    data: [
      { chatId: 'chat_001', title: 'My first chat' },
      { chatId: 'chat_002', title: 'Questions about my PDF' },
    ],
    error: null,
  });
};

export const createChat = (req: Request, res: Response): void => {
  res.status(201).json({
    success: true,
    data: { chatId: 'chat_003', title: 'New chat' },
    error: null,
  });
};

export const getChatById = (req: Request, res: Response): void => {
  res.status(200).json({
    success: true,
    data: { chatId: req.params.id, title: 'My first chat', messages: [] },
    error: null,
  });
};

export const deleteChat = (req: Request, res: Response): void => {
  res.status(204).send();
};

export const sendMessage = (req: Request, res: Response): void => {
  res.status(201).json({
    success: true,
    data: {
      chatId: req.params.id,
      message: 'What is this document about?',
      reply: 'This is a fake AI reply.',
    },
    error: null,
  });
};
