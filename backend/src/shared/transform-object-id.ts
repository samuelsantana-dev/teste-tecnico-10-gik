import { Types } from "mongoose";

export function transformObjectId(
  value: unknown
): Types.ObjectId | null | undefined {
  if (value === undefined || value === null) return undefined;
  if (value instanceof Types.ObjectId) return value;
  if (typeof value !== "string") return undefined;
  const trimmedValue = value.trim();
  if (!Types.ObjectId.isValid(trimmedValue)) return undefined;

  try {
    return new Types.ObjectId(trimmedValue);
  } catch {
    return undefined;
  }
}
