import type { Request, Response } from 'express';

export const askQuestion = (req: Request, res: Response): void => {
  res.status(200).json({
    success: true,
    data: {
      question: 'What is this document about?',
      answer: 'This is a fake answer based on your documents.',
      sources: ['doc_001'],
    },
    error: null,
  });
};
