import type { Request, Response } from 'express';

export const uploadDocument = (req: Request, res: Response): void => {
  res.status(201).json({
    success: true,
    data: { documentId: 'doc_003', fileName: 'new-upload.pdf' },
    error: null,
  });
};

export const getDocuments = (req: Request, res: Response): void => {
  res.status(200).json({
    success: true,
    data: [
      { documentId: 'doc_001', fileName: 'notes.pdf' },
      { documentId: 'doc_002', fileName: 'research.pdf' },
    ],
    error: null,
  });
};

export const getDocumentById = (req: Request, res: Response): void => {
  res.status(200).json({
    success: true,
    data: { documentId: req.params.id, fileName: 'notes.pdf' },
    error: null,
  });
};

export const deleteDocument = (req: Request, res: Response): void => {
  res.status(204).send();
};
