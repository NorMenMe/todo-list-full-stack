import { body, validationResult } from "express-validator";
import createHttpError from "http-errors";

export const todoValidationRules = () => {
  return [body("title").trim().escape(), body("description").trim().escape()];
};

export const todoValidationErrorHandling = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) return next();

  const arrErrors = errors.array();
  const errorsSummary = mergeErrors(arrErrors);
  const err = new createHttpError(422, errorsSummary);
  next(err);
};

const mergeErrors = (arrErrors) => {
  // merge errors in one array
  return arrErrors
    .map((err) => {
      return `${err.msg} `;
    })
    .join(", ");
};