export function throwIf(condition: boolean, message: string) {
  if (condition) {
    throw new Error(message);
  }
}

export function throwUnless(condition: boolean, message: string) {
  if (!condition) {
    throw new Error(message);
  }
}

export default {
  throwIf,
  throwUnless,
};
